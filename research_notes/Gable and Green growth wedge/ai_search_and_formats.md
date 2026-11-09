# AI Search, Click-Through, and Click-Worthy Formats for Lifestyle/Home Content (2025–2026)

Research date: 2026-11-09. US focus. Scope: how Google AI Overviews (AIO), AI Mode, ChatGPT search and Perplexity have changed click-through and content strategy for home/garden/decor publishers; which formats still earn visits; how publishers get cited; and what the visual-search shift means for image-heavy "ideas" content.

A note on evidence quality: the strongest evidence in this area comes from (a) randomized field experiments (Agarwal & Sen SSRN 2026; UPenn/Northeastern 2026), (b) Pew's passive-tracking panel, and (c) large GSC-aggregate studies by Ahrefs and Seer. Vendor "citation factor" studies (SE Ranking, Semrush, BrightEdge) are correlational and come from companies selling tools; treat their specific numbers as indicative. Google disputes most publisher-traffic studies but has published no verifiable click data of its own.

---

## Key Question 1: What do 2025–2026 studies say about CTR loss where AI Overviews appear, by query intent? Any home/garden-specific data?

### Takeaway
Every independent 2025–2026 measurement finds that an AI Overview roughly halves organic clicks on the query it appears on (range: ~40% to ~61% depending on method), with the loss concentrated at position 1 and almost entirely on informational queries; navigational/transactional queries show no statistically measurable effect. There is no home/garden-specific CTR study, but the largest US home publisher (People Inc., owner of The Spruce and Better Homes & Gardens) reports core sessions down 26% YoY and AIO coverage on ~55% of its keywords, and Digiday's lifestyle-publisher reporting cites 30–50% Google referral declines since AIO launched, with "how wide is a three-seater sofa?"-type basic service queries named as the hardest-hit content.

### Cited Findings

**Randomized experiments (strongest causal evidence)**
- Agarwal (Indian School of Business) & Sen (Carnegie Mellon), SSRN, posted April 3, 2026, revised June 17, 2026: randomized field experiment on 1,065 desktop Chrome users (Prolific) tracked Jan 7–Feb 10, 2026, 68,089 unique searches. When an AIO appeared, outbound organic clicks fell 39.8% and zero-click searches rose 34.5%; sponsored clicks were flat. Removing the AIO raised outbound organic clicks per search from 0.37 to 0.62 and lowered zero-click probability from 0.73 to 0.54. AIOs triggered on ~41% of queries in the sample. — [PPC Land summary of SSRN paper](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- Same study, by intent: informational queries (71% of sample) showed a large, significant effect (+0.26 clicks/search when AIO removed); navigational (18%) and transactional (12%) effects were not statistically distinguishable from zero (noisier, smaller samples). — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- Same study, by position: >87% of AIOs appeared at the top of the page; removing a top-position AIO produced an 88% relative increase in outbound clicks; AIOs lower on the page showed no measurable effect. Largest absolute click gain was at organic position 1, smaller but significant at positions 2–3+. Bounce rate, back-button use, time on page, and survey-measured satisfaction did not differ between groups. — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- UPenn/Northeastern randomized field experiment (draft August 2026), 1,100 tracked users over 7 days in three arms (AIO hidden / natural / forced AI Mode): users forced into AI Mode were "substantially less likely" to click external websites, ran fewer search sessions per day, and reported lower trust, usefulness, and satisfaction; removing AI features produced no detectable change in perceived search quality. Paper title: "AI in Search Reduces Publisher Referrals Without Improving User Experience." — [Search Engine Journal](https://www.searchenginejournal.com/research-shows-google-ai-mode-sends-less-clicks-is-a-poor-user-experience/590221/); [Search Engine Land](https://searchengineland.com/google-ai-mode-cuts-clicks-satisfaction-study-490494)
- A secondary write-up gives clicks per search of 0.53 (control) vs 0.36 (AI Mode) for compliant participants in that study; I could not verify this against the paper. — [TechWyse](https://www.techwyse.com/news/search-seo/google-ai-mode-reduces-publisher-clicks-study-2026)

**Panel tracking**
- Pew Research Center (July 22, 2025): 900 US adults, 68,879 Google searches in March 2025; 12,593 (about 18%) produced an AI summary. Users clicked a traditional result link on 8% of visits with an AI summary vs 15% without. Clicks on links inside the AI summary: 1% of visits. 26% of visits with an AI summary ended the browsing session vs 16% without. — [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)
- Google disputed Pew's methodology. — [The Register](https://www.theregister.com/2025/07/22/google_ai_overviews_suppress_search/); [PPC Land](https://ppc.land/google-disputes-pew-study-showing-ai-overviews-reduce-clicks-by-half/)

**Large GSC-aggregate studies**
- Ahrefs (Feb 4, 2026; December 2025 data): ~300,000 keywords (150k with AIO, 150k informational without). Desktop position-1 CTR on AIO keywords fell from 0.073 (Dec 2023) to 0.016 (Dec 2025); on non-AIO informational keywords from 0.076 to 0.039. Against a counterfactual forecast of 0.037, actual AIO CTR was ~58% lower ("Google keeps 58 of every 100 clicks"). Effect by position: P1 −58.0%, P2 −50.8%, P3 −46.4%, P4 −38.8%, P5 −32.6%, P6 −30.5%, P7 −29.7%, P8 −28.8%, P9 −29.7%, P10 −19.4%. Informational intent only; no industry split; desktop only; correlational. — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- Ahrefs' earlier April 2025 study found a 34.5% reduction for position 1 (one-year window). — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- Note: even informational queries *without* an AIO lost ~49% of position-1 CTR between Dec 2023 and Dec 2025 (my calculation from Ahrefs' 0.076→0.039), which Ahrefs attributes to zero-click SERP features generally (featured snippets, local pack, etc.). — [Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- Seer Interactive (Sept 2025 update): 3,119 informational queries across 42 organizations; organic CTR on AIO queries down 61% since mid-2024, paid CTR down 68%. — [Search Engine Land](https://searchengineland.com/google-ai-overviews-drive-drop-organic-paid-ctr-464212)
- Seer Interactive 2026 update: 53 brands, 5.47M queries, 2.43B organic impressions, Jan 2025–Feb 2026. Organic CTR on AIO queries bottomed at 0.62% in September 2025 and closed 2025 at 1.65%. Organic CTR when no AIO is shown *rose* from 2.8% (Jan 2025) to 3.8% (Feb 2026). Being cited in the AIO delivers +120% more organic clicks per impression vs not cited, but still underperforms no-AIO queries by 38%. — [Seer Interactive](https://seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)
- Search Engine Journal on the same Seer data: brand-cited AIO CTR fell 61% Q3→Q4 2025 while absolute clicks "barely moved" because impressions grew. — [Search Engine Journal](https://www.searchenginejournal.com/ai-overview-ctr-fell-61-but-clicks-didnt-collapse/572993/)
- Authoritas (UK news queries): CTR dropped 47.5% desktop, 37.7% mobile when AIO appeared. — [Press Gazette](https://pressgazette.co.uk/media-audience-and-business-data/google-ai-overviews-publishers-report-clickthroughs-authoritas-report/)
- Similarweb: zero-click share of news-related Google searches rose from 56% (May 2024) to 69% (May 2025). — [Search Engine Roundtable](https://www.seroundtable.com/similarweb-google-zero-click-search-growth-39706.html)
- Aleyda Solis, analyzing Similarweb SERP-composition and click-share data Jan 2025–Jan 2026: classic organic click share dropped in every vertical examined; the most consistent gainer was ads, not AI. — [Aleyda Solis on X](https://x.com/aleyda/status/2022714349643563503)

**Publisher-level and lifestyle/home-specific data**
- People Inc. (formerly Dotdash Meredith; owns The Spruce, Better Homes & Gardens, Real Simple, Southern Living): core sessions fell 26% YoY to 1.61B in the most recent reported quarter, attributed primarily to AI-oriented search; prior quarters: −13% (Q4 2025), −17% (Q1 2026), −22% (Q2 2026). Google Search is now ~24% of its traffic, down from ~60% at the 2021 merger. Session-based revenue fell from $174.2M to $163.6M; non-session revenue rose to $125.0M. AIOs appeared on ~35% of keywords associated with its content in Q1 2025 and ~55% in Q2 2025. — [PPC Land](https://ppc.land/people-inc-loses-26-of-core-web-sessions-as-google-ai-overviews-spread/); [PPC Land, Q1](https://ppc.land/dotdash-meredith-reports-google-ai-overviews-impact-traffic-in-q1-earnings/); [AdExchanger](https://www.adexchanger.com/publishers/people-inc-has-a-new-name-but-it-still-faces-the-same-old-google-search-traffic-drought/)
- People Inc. laid off 226 employees (6% of workforce) and signed an AI licensing deal with Microsoft's Publisher Content Marketplace. — [AdExchanger](https://www.adexchanger.com/publishers/people-inc-cuts-6-of-its-workforce/)
- Digiday (June 2025): heads of SEO at four large digital lifestyle publishers reported Google referral drops of 30–50% since AIO rolled out in May 2024. Hardest-hit content: evergreen, basic-question service content; the article's example is "How wide is a three-seater sofa?" Holding up: deeper, personalized queries (best products from a specific brand, how to repair a specific item). One recipe publisher that cut non-core coverage (e.g., kitchen design) reported Google traffic up >100% YoY. — [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/)
- Chartbeat data via Reuters Institute (Jan 2026): Google search referrals to publishers down ~33% globally in the year to Nov 2025; US down 38% YoY. Publishers focused on lifestyle or utility content (weather, TV guides, horoscopes) were more likely to see declines, linked to AI summaries. Media leaders expect a further 43% average search decline over three years. ChatGPT = 0.02% of total referral traffic; Perplexity = 0.002%. — [Press Gazette](https://pressgazette.co.uk/media-audience-and-business-data/google-traffic-down-2025-trends-report-2026/)
- Chartbeat (March 2026, via Axios): declines by publisher size: 60% for small sites, 47% medium, 22% large. — [SmartFrame summary](https://smartframe.io/blog/google-ai-traffic-drop-heres-what-publishers-are-doing-about-it/)
- Piano benchmark: search traffic down 36% across hundreds of publisher sites; hardest-hit pages were weather, horoscopes, and service content. — [Digiday (sponsored)](https://digiday.com/sponsored/amid-falling-traffic-publishers-are-investing-in-engagement-registration-and-citations/)
- Digital Content Next survey (19 members, May–June 2025): median 10% YoY drop in Google search referrals; non-news brands −14%, news −7%. — [SmartFrame summary](https://smartframe.io/blog/google-ai-traffic-drop-heres-what-publishers-are-doing-about-it/)
- Conductor data via Digiday: all AI platforms combined = ~1% of publisher traffic. — [Digiday](https://digiday.com/media/in-graphic-detail-ai-platforms-are-driving-more-traffic-but-not-enough-to-offset-zero-click-search)
- Google's position: AIO clicks are "higher quality" (more time on site); judge success by engagement and conversions, not clicks. — [Google Search Central Blog](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

### Inferences
- For a small home/garden site, the realistic planning assumption is that any informational query that triggers an AIO delivers roughly 40–60% fewer clicks than it would have in 2023, and that position 1 is hurt most. Positions 4–10 lose less in relative terms, which oddly reduces the marginal value of fighting for #1 on AIO queries.
- The small-publisher penalty (Chartbeat: −60% for small sites vs −22% for large) suggests the AIO era compounds existing authority gaps; a new site cannot rely on ranking alone for informational how-to.
- Seer's finding that no-AIO CTR *rose* a full point implies that queries Google chooses not to answer are becoming more valuable per impression, which strengthens the case for targeting query shapes that rarely trigger AIOs (see KQ2).
- People Inc.'s pivot (licensing, off-platform audiences, non-session revenue up) is the model for what a large home publisher does when search sessions fall; a small site cannot license, so it must pick formats where a click is still necessary.

### Gaps
- No study isolates CTR impact for home, garden, or decor queries specifically. The closest proxies are People Inc.'s portfolio-level numbers, Digiday's lifestyle-publisher interviews, and Chartbeat's "lifestyle/utility" category note.
- Google has published no verifiable click data for AIO or AI Mode.
- The Seer Interactive primary page for the 2025 study returned 404; 2025 figures above come from Search Engine Land's coverage.

---

## Key Question 2: Which query shapes in home/outdoor content trigger AI Overviews (how-to, what size, best X) vs rarely trigger them ("ideas", visual, inspiration)?

### Takeaway
AIOs trigger overwhelmingly on long, question-phrased, informational queries (Pew: 60% of question-word queries, 53% of 10+-word queries, 8% of 1–2-word queries) and increasingly on "best X" research queries (BrightEdge: 83% by Nov 2025), while purchase-ready transactional queries stay low (13–25%) and local-provider queries have dropped to ~0%. No study measures trigger rates for "ideas"/inspiration queries directly, but Google's own October 2025 AI Mode update explicitly targets them with shoppable visual grids ("maximalist bedroom ideas"), so visual/inspiration intent is not a safe harbor so much as a different battlefield where images, not text, are the unit of citation.

### Cited Findings

**Trigger rates by query shape**
- Pew (March 2025 data): AI summaries appeared on 8% of one- or two-word searches vs 53% of searches with 10+ words; 60% of queries using question words (who/what/when/why); 36% of full-sentence queries (noun + verb). — [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)
- Search Engine Journal: question-phrased queries trigger AIOs 57.9% of the time vs 15.5% for non-question queries. — [Search Engine Journal via Ziptie](https://ziptie.ai/blog/which-query-types-trigger-google-ai-overviews/)
- SE Ranking: long-tail (4+ words) 60.85%; single words 9.5%; low-CPC (<$0.50) ~61%. — [SE Ranking via Ziptie](https://ziptie.ai/blog/which-query-types-trigger-google-ai-overviews/)
- Semrush (10M+ keywords, Jan–Nov 2025): share of queries showing an AIO was 6.49% (Jan), 24.61% (July), 15.69% (Nov). Informational share of AIO triggers fell from 91.3% (Jan 2025) to ~57% (Oct 2025) as commercial rose 8.15%→18.57%, transactional 1.98%→13.94%, navigational 0.84%→10.33%. — [Semrush](https://semrush.com/blog/semrush-ai-overviews-study); [Search Engine Land](https://searchengineland.com/google-ai-overviews-surge-pullback-data-466314)
- BrightEdge (Black Friday 2024 vs 2025): "best [product]" queries reached 83% AIO presence by Nov 2025; "buy [product]" stayed at 13%. — [BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/black-friday-2024-vs-2025-what-a-year-of-testing-taught-google-about-ai-overviews)
- BrightEdge (9 industries, May 2024–Sept 2025): overall coverage grew 26.6%→44.4%; healthcare 83.6% on informational; eCommerce fell to 18.5% as Google shielded transactional. — [BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/googles-ai-overview-rollout-reveals-clear-intent-hierarchy)
- BrightEdge: informational queries cite ~1.4 brands per AIO; consideration queries ("best coffeemaker") cite 3.9 brands per AIO. — [BrightEdge via MediaPost](https://www.mediapost.com/publications/article/411006/where-brands-see-most-mentions-on-ai-search-engine.html)
- Ready2Rank: research-style commercial ("best laptops under $1,000") 45–50%; purchase-ready transactional ("buy Nike shoes") 20–25%. — [Ready2Rank via Ziptie](https://ziptie.ai/blog/which-query-types-trigger-google-ai-overviews/)
- Local provider queries ("dermatologist near me") dropped from 100% AIO in 2023 to 0% in 2025 as Google moved them to Local Pack/Maps. — [BrightEdge via Ziptie](https://ziptie.ai/blog/which-query-types-trigger-google-ai-overviews/)
- 81% of AIO triggers occur on mobile (WordStream). — [Ziptie](https://ziptie.ai/blog/which-query-types-trigger-google-ai-overviews/)
- Agarwal & Sen experiment: AIOs triggered on ~41% of real user queries (Jan–Feb 2026); 71% of sampled queries were informational. — [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- People Inc.: AIO on ~55% of keywords associated with its (largely lifestyle/home/food) content in Q2 2025. — [PPC Land](https://ppc.land/people-inc-loses-26-of-core-web-sessions-as-google-ai-overviews-spread/)

**Visual/inspiration queries and Google's response**
- Late Sept/early Oct 2025: Google added visual results to AI Mode using a "visual search fan-out" technique (built on Lens, Image Search, Gemini 2.5) that breaks an image or broad prompt into sub-queries. Google's own example was "maximalist bedroom" inspiration; the grids are shoppable via the Shopping Graph with price and reviews. — [Search Engine Roundtable](https://www.seroundtable.com/google-ai-mode-visual-responses-40192.html); [The Decoder](https://the-decoder.com/google-expands-ai-mode-with-visual-search-and-new-features/); [Android Authority](https://www.androidauthority.com/google-search-ai-mode-images-3603074)
- Google has also brought image generation into AI Overviews (reported as Google Images turned 25). — [PPC Land](https://ppc.land/google-brings-image-generation-into-ai-overviews-as-google-images-turns-25/)
- BuzzFeed's response (Digiday): shifting keyword targeting toward queries AIOs are unlikely to answer quickly — "inspiration, comparison, decision-making, and entertainment" — because "these types of queries still benefit from deeper context, personality and perspective." — [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/)
- Aleyda Solis's "click resilience" framework: pages score higher when a visit is required to "interact, verify live details, inspect evidence, or complete an action"; generic definitions and common-term explanations should be deprioritized because search features and AI answer them without a click. — [Aleyda Solis](https://www.aleydasolis.com/en/ai-search/content-prioritization-ai-search/)
- Lily Ray: informational, upper-funnel content is most affected; traffic from easily answered content will keep declining; real (not cosmetic) updates to evergreen content help visibility. — [Affiliate Summit recap](https://www.affiliatesummit.com/blogs/the-state-of-ai-and-seo-in-2026-with-lily-ray)
- Google's Sept 2025+ updates added "Further Exploration" links, subscription labels, and inline link context to AIO/AI Mode, which Google said were designed to send more traffic to publishers. — [The Next Web](https://thenextweb.com/news/google-ai-overviews-publisher-links-search-traffic)

### Inferences
- Mapping to home/outdoor content: "how do I [task]", "what size [item] for [space]", "why is my [plant] [symptom]", "how wide/tall/deep is a [furniture type]" are textbook AIO triggers (question word + long tail + informational + low CPC). Expect 50–85% AIO presence and halved CTR.
- "Best [product] for [use]" is now a high-AIO shape too (BrightEdge 83%), but AIOs on these queries cite ~3.9 brands/sources, so being one of them is more attainable than on single-answer informational queries (1.4 citations).
- Short 1–2-word and "[room] ideas" queries almost certainly trigger AIOs less often as *text* (Pew's 8% for short queries), but Google is actively converting them into visual grids in AI Mode. For an ideas gallery, the competitive unit is becoming the individual image (its alt text, surrounding caption, and page context), not the article.
- The query shapes most defensible for a small site are those where the user needs to *see* something specific (a real layout at a stated footprint), *use* something (a calculator), *download* something (a printable), or *verify* something that changes (a tracked price) — all map to Solis's click-resilience criteria.

### Gaps
- No study quantifies AIO trigger rates for "[X] ideas", "inspiration", or image-intent queries. The 8% figure for 1–2-word queries (Pew) is the closest proxy and predates visual AI Mode.
- No data on how often the new visual AI Mode grids appear for home/decor queries or what share of their clicks go to publishers vs Shopping Graph merchants.

---

## Key Question 3: What gets a site cited in AI Overviews / AI Mode / ChatGPT: documented factors and practical tactics?

### Takeaway
The best-documented correlates of citation are: ranking well on Google (still the main AIO gate, though the top-10 overlap has fallen from 76% to 38% in Ahrefs' data), being mentioned on third-party sites and forums (Reddit/Quora/YouTube are the top-cited domains and brand mentions correlate ~0.66 with AIO visibility), front-loading direct answers, structuring pages in 120–180-word sections under clear headings, and packing in statistics and expert quotes. FAQ schema shows no positive correlation with ChatGPT citations; Google's official guidance is simply to make structured data match visible content, add high-quality images/video for multimodal search, and produce "unique, non-commodity" content.

### Cited Findings

**Google's official guidance**
- Google (May 2025): produce "unique, non-commodity content that visitors from Search and your own readers will find helpful"; ensure "all the content in your markup is also visible on your web page"; because people search with images, "support your textual content with high-quality images and videos on your pages"; restrictive snippet controls (nosnippet, max-snippet) "will limit how your content is featured in our AI experiences." — [Google Search Central Blog](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- Google began testing a Search Console control (June 2026) letting publishers opt content out of AI features while remaining in traditional results. — [MediaPost](https://www.mediapost.com/publications/article/416681/google-gives-publishers-opt-out-for-ai.html)

**Ranking still gates AIO citations, but less than before**
- Ahrefs (July 2025): of 1.9M citations across 1M AIOs, 76.1% of cited pages ranked in Google's top 10; 9.5% ranked 11–100. — [Ahrefs](https://ahrefs.com/blog/search-rankings-ai-citations)
- Ahrefs (2026 update): 863,000 keywords, 4M AIO URLs: only 38% of cited pages rank in the top 10 for the same query. Ahrefs attributes much of the drop to improved parsing, so the two numbers are not directly comparable. — [Search Engine Journal](https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/); [DesignRush](https://news.designrush.com/ai-overview-citations-drop-ahrefs)
- Ahrefs: only ~12% of URLs cited by ChatGPT, Gemini, and Copilot rank in Google's top 10 for the same prompt. — [Ahrefs](https://ahrefs.com/blog/ai-search-overlap/)
- Ahrefs (Dec 2025): 0.664 correlation between branded web mentions and AIO visibility. — [Radyant summary](https://www.radyant.io/guides/how-to-get-cited-ai-overviews-chatgpt)

**Most-cited domains**
- Semrush (June 2025): Quora was the most-cited domain in AIOs, Reddit second, then LinkedIn and YouTube. — [Semrush](https://www.semrush.com/blog/most-cited-domains-ai/); [Newswire](https://www.newswire.ca/news-releases/new-research-ranks-quora-as-the-1-most-cited-website-in-google-ai-overviews-880533262.html)
- Semrush AI Mode study (Oct 2025, 278,279 prompts): Quora 4th at 7.25% of responses, behind LinkedIn, Reddit, and Google. Over a 3-month window, YouTube, Reddit and Facebook grew most as cited sources; Medium, Quora, LinkedIn declined. ChatGPT cut Reddit/Wikipedia citations sharply in Sept 2025 but they remain its top two. — [Semrush](https://www.semrush.com/blog/most-cited-domains-ai/)
- Pew: in AI summaries, .gov sites were 6% of sources (vs 2% in standard results); news 5% in both; Wikipedia+YouTube+Reddit combined 15% (vs 17%). 88% of summaries cited 3+ sources; median summary length 67 words. — [Pew Research Center](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)

**ChatGPT citation factors (SE Ranking, 129,000 domains / 216,524 pages / 20 niches, XGBoost + SHAP)**
- Referring domains were the strongest factor: sites with up to 2,500 referring domains averaged ~1.6–1.8 citations; >350,000 averaged 8.4. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/); [SE Ranking](https://seranking.com/blog/chatgpt-citation-factors/)
- Section structure: pages with 120–180 words between headings averaged 4.6 citations vs 2.7 for sections under 50 words. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)
- Statistics: pages with 19+ statistics averaged 5.4 citations vs 2.8. Expert quotes: 4.1 vs 2.4 without. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)
- FAQ schema: pages *with* FAQ schema averaged 3.6 citations vs 4.2 without — i.e., no positive effect. llms.txt did not matter. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/); [SE Ranking](https://seranking.com/blog/chatgpt-citation-factors/)
- Forum presence: heavy Quora presence corresponded to 7.0 citations vs 1.7 minimal; Reddit 7 vs 1.8. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)

**Other vendor findings (lower confidence)**
- Kevin Indig: 44.2% of ChatGPT citations come from the first 30% of a page (front-loading). — [Radyant summary](https://www.radyant.io/guides/how-to-get-cited-ai-overviews-chatgpt)
- Superlines: brands ~6.5x more likely to be cited via third-party sites than via their own site. — [Radyant summary](https://www.radyant.io/guides/how-to-get-cited-ai-overviews-chatgpt)
- ConvertMate: 76.4% of ChatGPT citations came from content updated within 30 days (vendor claim, unverified). — [Kevin Leary summary](https://www.kevinleary.net/blog/get-cited-in-chatgpt-and-ai-overviews/)
- ChatGPT web search relies primarily on Bing's index plus OpenAI's crawler, so Bing indexing matters for ChatGPT visibility. — [Contently](https://contently.com/2026/04/29/how-to-get-cited-in-chatgpt/)

**Cited pages vs clicked pages (Similarweb 2026 Generative AI Landscape Report)**
- Share of ChatGPT answers with citations rose >5x to 6.8% overall (travel 22.6%, retail 13.5%). 65% of cited URLs sit two or three folders deep, while 58.8% of ChatGPT referral traffic lands on homepages. Users were 2–4x more likely to visit an AI-recommended brand than a non-recommended competitor. Gen-AI platforms averaged 9.5B monthly web visits June 2025–May 2026 (+70% YoY); 95% of ChatGPT users also use Google. — [Aleyda Solis summarizing Similarweb](https://x.com/aleyda/status/2080262814732615856)
- Value of being cited in AIO: +120% organic clicks per impression vs uncited (Seer 2026). — [Seer Interactive](https://seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)

### Inferences
- For a small, new home site, the citation levers that do not require a large backlink profile are: (1) direct, extractable answer in the first ~30% of the page; (2) H2/H3 sections of ~120–180 words each; (3) dense, specific numbers (dimensions, prices, weights, test results) — 19+ data points per page is the SE Ranking threshold; (4) named author with verifiable off-site presence; (5) being discussed on Reddit/YouTube/Quora, which are the top-cited domains in every engine.
- FAQ schema and llms.txt are not worth prioritizing for citation purposes; schema's value is in making images and products eligible for rich results (Google Images badges require the image field), not in AI citation per se.
- Because AIO citation still requires ranking (even at 38% top-10 overlap, most cited pages rank somewhere), a small site's path is: rank on narrow long-tail queries → get cited there → build mentions elsewhere. The "6.5x via third parties" figure argues for spending real effort on Reddit threads and YouTube.

### Gaps
- No home/garden-specific citation study. All factor studies are cross-niche.
- No causal evidence for any citation factor; all are correlational and vendor-run.
- Did not locate Kevin Indig's primary source for the 44.2% front-loading figure.

---

## Key Question 4: Google Discover and Google Images as traffic sources for ideas content in 2025–2026: requirements and examples

### Takeaway
Discover is now the majority of Google traffic for many news publishers (NewzDash: 67.5% of Google traffic at end-2025), but Google itself calls it "less predictable or dependable" than search, it fell 21% globally / 29% in the US in 2025, and Google is inserting AI "trending" tiles and AI-generated headlines into the feed. Requirements are concrete (≥1200px-wide 16:9 images, max-image-preview:large, non-clickbait titles). Google Images' traffic share for publishers is not published anywhere I could find; what exists is Google's image-SEO guidance and the rise of Lens (20–25B visual searches/month).

### Cited Findings

**Discover requirements (Google)**
- Images: "At least 1200 px wide," more than 300,000 total pixels, 16:9 aspect ratio; enable large previews with `max-image-preview:large`; set preferred image via schema.org or `og:image`; avoid logos and text-heavy images. — [Google Search Central](https://developers.google.com/search/docs/appearance/google-discover)
- Titles must "capture the essence of the content"; no clickbait or "withholding crucial information." — [Google Search Central](https://developers.google.com/search/docs/appearance/google-discover)
- Content eligibility: automatic if indexed and compliant; "Provide content that's timely for current interests, tells a story well, or provides unique insights"; "Older content may appear if it's helpful and relevant to individuals based on their interests." — [Google Search Central](https://developers.google.com/search/docs/appearance/google-discover)
- Discover traffic is "less predictable or dependable" than keyword-driven search; treat it as a supplement. — [Google Search Central](https://developers.google.com/search/docs/appearance/google-discover)

**Discover trends 2025–2026**
- Chartbeat/Reuters Institute: Discover referrals down 21% YoY globally (across 2,500+ publisher sites), down 29% YoY in the US, year to Nov 2025. — [Press Gazette](https://pressgazette.co.uk/media-audience-and-business-data/google-traffic-down-2025-trends-report-2026/)
- NewzDash analysis of 400+ news publishers: Discover was 67.5% of their Google traffic at end-2025, up from 37% in 2023. — [SEO-Kreativ citing MediaPost](https://www.seo-kreativ.de/en/blog/google-discover-seo-everything-you-need-to-know/)
- Google began showing AI previews for trending topics in Discover in Oct 2025; AI-generated headlines moved from "small experiment" (Dec 2025) to feature (Jan 2026). Search Console added AI-feature reporting for Discover in June 2026. — [SEO-Kreativ](https://www.seo-kreativ.de/en/blog/google-discover-seo-everything-you-need-to-know/); [TechWyse](https://www.techwyse.com/news/search-seo/google-discover-ai-personalization-publisher-traffic-future)
- Publisher complaints: AI features in Discover deliver visibility without matching clicks; main user actions route to Google-owned properties. — [PPC Land](https://ppc.land/google-discover-feeds-users-ai-and-youtube-while-publishers-watch-traffic-vanish/)
- Projected losses of up to 60% of Discover traffic to AI summaries are vendor projections, not measured data. — [DesignRush](https://news.designrush.com/google-ai-summaries-discover-traffic-drop)

**Google Images guidance**
- "The most important attribute when it comes to providing more metadata for an image is the alt text"; write it "in context of the content of the page," no keyword stuffing; filenames "short, but descriptive"; "make sure images are placed near relevant text"; Google "extracts information about the subject matter of the image from the content of the page, including captions and image titles"; "High-quality photos appeal to users more than blurry, unclear images"; use `<img>` not CSS backgrounds; supported formats JPEG/PNG/WebP/SVG/AVIF; submit an image sitemap (can include CDN domains); "the image attribute is a required field to be eligible for a badge and rich result in Google Images"; set `primaryImageOfPage` or `og:image` to a representative image, avoiding logos, text, and extreme aspect ratios. — [Google Search Central](https://developers.google.com/search/docs/appearance/google-images)
- Google's AI-search guidance: because people search with images and ask questions about them, "support your textual content with high-quality images and videos on your pages." — [Google Search Central Blog](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)

**Visual search scale (Google Lens, Pinterest)**
- Google Lens: >20B visual searches/month (Google statement); a secondary source reports Google put the figure at 25B in a June 2026 Think with Google analysis. ~20% of Lens searches show commercial intent; 18–24-year-olds are most engaged. Search Console added a "multimodal" filter (Sept 2026) covering Lens, Circle to Search, image uploads, and Chrome image search, but without query data. — [Scalevise](https://scalevise.com/resources/google-lens-25-billion-monthly-visual-searches/); [Agência e-Plus](https://agenciaeplus.com.br/en/google-lens-gera-20-bilhoes-de-buscas-visuais-por-mes-transforme-isso-em-vendas-no-e-commerce/); [Ignite Visibility](https://ignitevisibility.com/google-lens-search/)
- A separate report says Google's total visual searches exceed 50B/month (broader than Lens alone). — [Crypto Briefing](https://cryptobriefing.com/google-visual-searches-50-billion-monthly/)
- Pinterest Lens (May 2025 upgrade with visual language models): can identify >2.5B objects across home and fashion pins; results include a Shop tab with home decor items. Third-party roundups put Lens volume at 600M visual searches/month or 850M in H1 2025 (figures conflict). Home decor is Pinterest's largest category by volume (secondary: 23B+ pins). Pinterest Predicts 2026 home trends include "antique bar cart" (+100%) and "red marble bathroom" (+80%), from Sept 2023–Aug 2025 search data. — [WeRSM](https://wersm.com/pinterests-lens-can-now-identify-over-2-5-billion-home-and-fashion-objects/); [Pinterest Predicts 2026](https://business.pinterest.com/pdf/pinterest-predicts/2026-trend-report/); [Charle Agency](https://www.charleagency.com/articles/pinterest-statistics/)

### Inferences
- For a small home site, Discover is a lottery ticket, not a plan: Google says so, and it is both shrinking and being partially replaced by AI tiles. But the technical requirements are cheap to meet (1200px 16:9 hero, large preview tag, honest titles), so an ideas site should meet them by default.
- The visual-search shift (Lens 20–25B/month, Pinterest Lens upgraded for home objects, AI Mode visual fan-out) means each original image is a discoverable object. The ranking inputs Google documents are almost all page-context signals: alt text, caption, nearby text, filename, and the page's title. For a "small bedroom ideas" gallery, that argues for one descriptive caption per image naming the object, dimensions, and room type, rather than a wall of uncaptioned photos.
- Because Lens and AI Mode visual results connect to the Shopping Graph, images of identifiable, purchasable products will route users to merchants, not publishers. Images that show a *layout* or *measured solution* (something a merchant cannot show) are more defensible.

### Gaps
- No published data on Google Images' share of publisher referral traffic in 2025–2026, nor on Pinterest referral traffic to publishers. Searched twice; nothing found.
- No examples of home/garden sites documented as Discover winners in 2025–2026.
- Pinterest Lens volume figures conflict (600M vs 850M/half-year vs an implausible 2.5B/month that appears to confuse object counts with searches).

---

## Key Question 5: What is "information gain" / original value in practice for a small-space site, and evidence it helps ranking?

### Takeaway
"Information gain" comes from a Google patent ("Contextual estimation of link information gain," filed 2018, granted 2022) that Google has never confirmed as a live ranking or AI system; the concept is nonetheless consistent with Google's helpful-content guidance ("unique, non-commodity content") and with the citation data showing that pages dense with statistics and expert quotes are cited roughly twice as often. The practical versions for a small-space site are measured dimensions, real layouts, tested products, and tracked prices — but the ranking evidence is indirect and correlational.

### Cited Findings
- Patent: "Contextual estimation of link information gain," filed 2018, granted 2022; scores are per user per session, comparing a document against what the user has already been shown; compares meaning rather than wording; describes removing repeated facts from single-answer outputs such as voice assistants. Quoted: "An information gain score for a given document is indicative of additional information." — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- Google has not confirmed an information-gain score is used in ranking or AI features; many patents never reach production; the term is absent from Google's guidance. — [Ahrefs](https://ahrefs.com/blog/information-gain/); [Patrick Stox](https://patrickstox.com/ai-search/optimization/information-gain/)
- Indirect support: Google's helpful-content guidance and Quality Rater Guidelines ask whether content adds value vs other pages; Google said in March 2024 it reduced "low-quality, unoriginal content in search results by 45%." — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- Google's May 2025 AI-search guidance asks for "unique, non-commodity content" and notes this matters for longer, follow-up AI queries. — [Google Search Central Blog](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- Ranking evidence (secondary): Ahrefs reports Cyrus Shepard's analysis of 400+ sites after the December 2025 core update found "proprietary assets" were the third-strongest predictor of traffic gains. I could not locate Shepard's primary post to verify. — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- On-Page.ai study of 150 top-3 pages: pages with 15+ unique data points averaged a score of 62 vs 40 for pages with 0–1 (vendor's own metric). — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- Citation evidence: SE Ranking — 19+ statistics → 5.4 ChatGPT citations vs 2.8; expert quotes → 4.1 vs 2.4. — [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)
- Practical examples given by Ahrefs: original data (own customer data, surveys, analysis of existing data), first-hand experience (personal before-and-after), unanswered questions (mine Reddit threads and question reports for questions the SERP doesn't answer), distinct angles covering edges top pages skip, freshening declining pages with new information. — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- Bernard Huang's definition: "The concepts and entities on the fringe of Google's knowledge graph for the topic." — [Ahrefs](https://ahrefs.com/blog/information-gain/)
- Digiday: lifestyle publishers are reallocating editorial time toward original, opinionated content and dropping basic-question content; a recipe publisher that concentrated on its core category saw Google traffic up >100% YoY. — [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/)
- Lily Ray: regularly updating evergreen content with real changes (not date tweaks) improves AI and search visibility. — [Affiliate Summit recap](https://www.affiliatesummit.com/blogs/the-state-of-ai-and-seo-in-2026-with-lily-ray)
- Solis: content requiring the user to "inspect evidence" or "verify live details" has higher click resilience. — [Aleyda Solis](https://www.aleydasolis.com/en/ai-search/content-prioritization-ai-search/)

### Inferences
- Translating to a small-space/home site, "information gain" in practice means facts an LLM cannot already produce from training data: measured dimensions of specific products (not spec-sheet copies), photographed real layouts at stated footprints (e.g., "a 9x10 bedroom with a full bed and desk, measured"), prices tracked over time, and hands-on test outcomes. Each of these also satisfies the "19+ statistics" and "inspect evidence" criteria.
- The patent's session-level logic (penalizing repeated facts in synthesized answers) is the mechanism by which generic how-to content gets deduplicated out of AIOs; only the page with a new fact survives into the synthesis. This is a plausible but unconfirmed explanation.

### Gaps
- No controlled evidence that original data causes ranking gains; the Shepard and On-Page.ai figures are correlational, and I could not retrieve Shepard's primary analysis.
- No study of information gain specifically in home/decor niches.

---

## Key Question 6: Evidence on how AI-generated images affect Google Images/Discover visibility or user trust in home content

### Takeaway
Google's Gary Illyes stated in August 2025 that AI-generated images carry no ranking penalty and may even add image-search traffic; Google labels provenance (SynthID, C2PA, IPTC) in "About this image" but no engine has confirmed provenance as a ranking signal. A February 2025 claim that Google Images down-ranked AI images was never confirmed. I found no study of user trust in AI-generated images specifically for home/decor content.

### Cited Findings
- Gary Illyes (Aug 2025 Q&A with Kenichi Suzuki): AI-generated images do not lead to penalization and have no direct SEO effect; he suggested they may bring extra traffic via image search; caveat that many unoptimized images can hurt performance (a technical, not ranking, issue). — [Stan Ventures](https://www.stanventures.com/news/google-confirms-ai-generated-images-wont-hurt-your-rankings-3953.md.txt); [O'Brien Media](https://obrienmedia.co.uk/google-clarifies-ai-generated-images-dont-trigger-ranking-penalties/amp); [BizzBuzz](https://www.bizzbuzz.news/technology/ai/google-says-ai-image-use-wont-affect-rankings-may-even-boost-image-search-traffic-1369555)
- Illyes at Search Central Live: Google doesn't try to distinguish human- vs AI-generated content; quality, usefulness, trustworthiness matter. — [Search Engine Roundtable](https://www.seroundtable.com/gary-illyes-google-interview-ai-search-content-seo-39910.html)
- Feb 2025 SEO-community chatter that Google Images was down-ranking AI images rested on charts of late-Jan 2025 image-traffic drops; no Google confirmation. — [Search Engine Roundtable](https://www.seroundtable.com/automated-schema-markup-implementation-38892.html); [Engage Web](https://www.engageweb.co.uk/blog/is-google-down-ranking-ai-images-in-search)
- Provenance: Google surfaces SynthID watermarks and C2PA Content Credentials in "About this image"; Google Images labels AI content via IPTC/C2PA/EXIF metadata; no search engine has confirmed C2PA as a ranking signal as of May 2026. OpenAI joined C2PA and embedded SynthID in all ChatGPT/API images on May 19, 2026. — [Cicero Studio](https://cicero.studio/en/blog/openai-c2pa-synthid-watermark-ai-images-seo-2026/); [Alienroad](https://alienroad.com/c2pa-and-ai-watermarking-and-seo-what-changes-for-organic-visibility/); [AI Metadata Cleaner](https://aimetadatacleaner.com/blog/google-images-labels-ai-generated-content-seo-2026)
- Google's Discover guidance discourages publishing raw, unedited AI content (secondary summary; not verified against Google's page). — [RichAds](https://richads.com/blog/how-to-get-traffic-from-google-discover/)
- Google's image guidance: "High-quality photos appeal to users more than blurry, unclear images" — quality, not origin, is the stated criterion. — [Google Search Central](https://developers.google.com/search/docs/appearance/google-images)

### Inferences
- There is no documented ranking downside to AI images today, but the "information gain" and "inspect evidence" logic cuts the other way: an AI-rendered "small bedroom idea" contains no verifiable fact (no real dimensions, no real product), so it has less citation value and less click-resilience than a measured photo of a real room. The visibility risk is indirect — a labeled AI image may be less likely to earn the Reddit/Pinterest saves and links that drive the mention signals in KQ3.
- As C2PA/SynthID labeling spreads (including to every ChatGPT image since May 2026), "About this image" will increasingly disclose AI origin; for a site whose value proposition is real, measured spaces, that disclosure is a differentiator worth leaning into rather than a risk.

### Gaps
- No empirical study of user trust or engagement with AI-generated vs photographed images in home/decor content. Nothing found on Pinterest's treatment of AI images in Lens or home feeds.
- No measured effect of AI images on Discover eligibility.

---

## Synthesis: formats that still earn visits (cross-cutting)

### Takeaway
The evidence supports a short list of click-resilient formats for a home/garden site. Direct quantitative proof per format is thin; the support is a chain from (a) which queries trigger AIOs, (b) what AIOs can and cannot render, (c) Solis's click-resilience criteria, and (d) what lifestyle publishers report is still working.

### Cited Findings (mapped to formats)
- **Visual "ideas" galleries with original, captioned images**: short/visual queries trigger text AIOs least (Pew 8% for 1–2 words), but Google is converting them to shoppable image grids in AI Mode, so the image and its page-context metadata is the competitive unit. — [Pew](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/); [Search Engine Roundtable](https://www.seroundtable.com/google-ai-mode-visual-responses-40192.html); [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)
- **Sizing tables and specific-footprint guides**: "how wide is a three-seater sofa" is the canonical AIO-killed query (Digiday), so a generic sizing answer is dead; a *measured* table across many specific products, or a layout at a stated footprint, is the information-gain version and hits the "19+ statistics" citation threshold. — [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/); [Search Engine Journal/SE Ranking](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)
- **Comparison / best-of with real testing**: "best X" now triggers AIOs 83% of the time, but those AIOs cite ~3.9 sources each (vs 1.4 for informational), and cited pages get +120% clicks per impression; Digiday's publishers name "best products from a specific brand" as holding up. — [BrightEdge](https://www.brightedge.com/resources/weekly-ai-search-insights/black-friday-2024-vs-2025-what-a-year-of-testing-taught-google-about-ai-overviews); [BrightEdge/MediaPost](https://www.mediapost.com/publications/article/411006/where-brands-see-most-mentions-on-ai-search-engine.html); [Seer](https://seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update); [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/)
- **Tools/calculators and printables**: Solis's framework scores pages highest when a visit is required to "interact … or complete an action." Transactional/navigational queries showed no measurable AIO click loss in the Agarwal & Sen experiment. — [Aleyda Solis](https://www.aleydasolis.com/en/ai-search/content-prioritization-ai-search/); [PPC Land](https://ppc.land/researchers-find-google-ai-overviews-cut-publisher-clicks-39-8/)
- **Video**: YouTube is among the top-cited domains in AIO and AI Mode and grew as a cited source through 2025; Google asks for images and video to support text in AI search. — [Semrush](https://www.semrush.com/blog/most-cited-domains-ai/); [Google](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)
- **Reddit/forum presence as a distribution layer**: Reddit and Quora are top-cited across engines; heavy Reddit presence corresponds to ~4x ChatGPT citations. — [Semrush](https://www.semrush.com/blog/most-cited-domains-ai/); [Search Engine Journal](https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/)
- **What to drop**: generic definitions and basic-question service content (Solis; Digiday); BuzzFeed explicitly reweights toward "inspiration, comparison, decision-making." — [Aleyda Solis](https://www.aleydasolis.com/en/ai-search/content-prioritization-ai-search/); [Digiday](https://digiday.com/media/lifestyle-publishers-rewrite-the-seo-playbook-for-ai-driven-search/)

### Gaps
- No study measures CTR or traffic by content *format* (gallery vs table vs calculator vs video). The format conclusions are inferred from query-trigger data, experimental intent splits, and practitioner frameworks.
