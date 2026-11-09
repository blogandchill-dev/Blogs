#!/usr/bin/env python3
"""Thin DataForSEO client for keyword research. Reads DATAFORSEO_LOGIN/PASSWORD from ~/blogs/.env.

  dfs.py volume  "small patio ideas" "balcony ideas" ...       -> US monthly volume, CPC, competition, 12-mo trend
  dfs.py ideas   "small patio ideas" [--limit 300]             -> keyword ideas (DataForSEO Labs) for seed(s)
  dfs.py ranked  balconygardenweb.com [--limit 300]            -> keywords a domain ranks for (US), with position + volume
  dfs.py serp    "narrow balcony ideas"                        -> top 10 organic domains for a query (US)

Output: JSON lines on stdout. Keep calls batched; every call costs a few cents.
"""
import base64, json, os, sys, urllib.request, pathlib, argparse

ROOT = pathlib.Path(__file__).resolve().parents[1]
for line in (ROOT / ".env").read_text().splitlines():
    if "=" in line and not line.startswith("#"):
        k, v = line.split("=", 1); os.environ.setdefault(k.strip(), v.strip())
AUTH = base64.b64encode(f"{os.environ['DATAFORSEO_LOGIN']}:{os.environ['DATAFORSEO_PASSWORD']}".encode()).decode()
US, EN = 2840, "en"

def call(path, payload):
    req = urllib.request.Request("https://api.dataforseo.com/v3/" + path, json.dumps(payload).encode(),
                                 {"Authorization": "Basic " + AUTH, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.load(r)
    t = d["tasks"][0]
    if t["status_code"] != 20000:
        sys.exit(f"DataForSEO error: {t['status_message']}")
    return t.get("result") or []

def volume(keywords):
    out = []
    for i in range(0, len(keywords), 700):
        res = call("keywords_data/google_ads/search_volume/live",
                   [{"keywords": keywords[i:i+700], "location_code": US, "language_code": EN}])
        for r in res:
            ms = r.get("monthly_searches") or []
            out.append({"keyword": r["keyword"], "volume": r.get("search_volume"), "cpc": r.get("cpc"),
                        "competition": r.get("competition"),
                        "monthly": [{"m": f"{m['year']}-{m['month']:02d}", "v": m["search_volume"]} for m in ms[:12]]})
    return out

def ideas(seeds, limit):
    res = call("dataforseo_labs/google/keyword_ideas/live",
               [{"keywords": seeds, "location_code": US, "language_code": EN, "limit": limit,
                 "order_by": ["keyword_info.search_volume,desc"], "include_serp_info": False}])
    out = []
    for r in res:
        for it in r.get("items") or []:
            ki = it.get("keyword_info") or {}; kp = it.get("keyword_properties") or {}
            out.append({"keyword": it["keyword"], "volume": ki.get("search_volume"), "cpc": ki.get("cpc"),
                        "competition": ki.get("competition_level"), "kd": kp.get("keyword_difficulty"),
                        "intent": (it.get("search_intent_info") or {}).get("main_intent")})
    return out

def ranked(domain, limit):
    res = call("dataforseo_labs/google/ranked_keywords/live",
               [{"target": domain, "location_code": US, "language_code": EN, "limit": limit,
                 "order_by": ["ranked_serp_element.serp_item.etv,desc"]}])
    out = []
    for r in res:
        for it in r.get("items") or []:
            kd = it.get("keyword_data") or {}; ki = kd.get("keyword_info") or {}
            se = (it.get("ranked_serp_element") or {}).get("serp_item") or {}
            out.append({"keyword": kd.get("keyword"), "volume": ki.get("search_volume"), "position": se.get("rank_absolute"),
                        "url": se.get("url"), "etv": se.get("etv")})
    return out

def serp(keyword):
    res = call("serp/google/organic/live/regular", [{"keyword": keyword, "location_code": US, "language_code": EN, "depth": 10}])
    out = []
    for r in res:
        for it in r.get("items") or []:
            if it.get("type") == "organic":
                out.append({"keyword": keyword, "position": it.get("rank_absolute"), "domain": it.get("domain"), "title": it.get("title")})
            elif it.get("type") in ("ai_overview", "people_also_ask", "images", "video", "shopping"):
                out.append({"keyword": keyword, "feature": it.get("type"), "position": it.get("rank_absolute")})
    return out

if __name__ == "__main__":
    ap = argparse.ArgumentParser(); ap.add_argument("cmd"); ap.add_argument("args", nargs="*"); ap.add_argument("--limit", type=int, default=300)
    a = ap.parse_args()
    fn = {"volume": lambda: volume(a.args), "ideas": lambda: ideas(a.args, a.limit),
          "ranked": lambda: ranked(a.args[0], a.limit), "serp": lambda: [x for k in a.args for x in serp(k)]}[a.cmd]
    for row in fn(): print(json.dumps(row, ensure_ascii=False))
