-- Seed: the three site rows plus Gable & Green's phase-1 clusters.
-- Voice profiles, design tokens and niche plans are deliberately starter values; packages/prompts owns the real ones.

insert into sites (slug, name, domain, tagline, layout_variant, niche_plan, voice_profile, design_tokens, image_policy, auto_approve_types) values
(
  'gable-green', 'Gable & Green', 'gableandgreen.com',
  'Small spaces, lived in well.',
  'a',
  '{"phases":[
     {"n":1,"months":"1-3","loops":["patio ideas","balcony ideas"]},
     {"n":2,"months":"3-6","loops":["how to choose / what size","best X for patios"]},
     {"n":3,"months":"6+","loops":["raised bed ideas","deck ideas","small apartment ideas","rental-friendly upgrades"]}],
    "season":{"outdoor":["02-01","07-31"],"indoor":["08-01","01-31"]}}',
  '{"person":"second","tone":"practical, encouraging","paragraphs":"short",
    "opener":"one-line verdict on what works for the space in question",
    "standing_opinions":["budget option first","always give dimensions","rental-friendly choice mentioned in every post"],
    "deny":["cozy vibes","elevate","transform your space","game-changer"]}',
  '{"font_heading":"Fraunces","font_body":"Inter","bg":"#F7F5F0","fg":"#1E2A22","accent":"#3F6B4A","accent_2":"#C9A96E","radius":"6px"}',
  '{"ideas":"generated","howto":"generated","bestof":"retailer","editorial":"stock","pins":"generated"}',
  '{}'
),
(
  'nickel-nest', 'Nickel & Nest', 'nickelandnest.com',
  'A calmer way to run the family budget.',
  'b',
  '{"phases":[
     {"n":1,"months":"1-3","loops":["ways to save money on X","budget template / printable"]},
     {"n":2,"months":"3-6","loops":["X challenge","best budgeting apps / tools"]},
     {"n":3,"months":"6+","loops":["cheap meal plans","frugal living tips"]}],
    "season":{"peaks":["01","09"]}}',
  '{"person":"first-plural","tone":"warm, plain, no jargon","numbers":"in every post",
    "standing_opinions":["cash envelopes still work","free tools before paid","small wins over big overhauls"],
    "rules":["no earnings claims","date-stamp every rate"],
    "deny":["financial freedom","hack","passive income"]}',
  '{"font_heading":"Lora","font_body":"Source Sans 3","bg":"#FFFDF8","fg":"#26282B","accent":"#2F4858","accent_2":"#E0A458","radius":"10px"}',
  '{"ideas":"generated","howto":"generated","bestof":"retailer","editorial":"stock","pins":"generated"}',
  '{}'
),
(
  'macro-tuesday', 'Macro Tuesday', 'macrotuesday.com',
  'High-protein meal prep without the effort.',
  'c',
  '{"phases":[
     {"n":1,"months":"1-3","loops":["high protein X recipes","meal prep ideas for X"]},
     {"n":2,"months":"3-6","loops":["how to meal prep X","best X for meal prep"]},
     {"n":3,"months":"6+","loops":["X-calorie meal plan"]}],
    "season":{"peaks":["01","09"]}}',
  '{"person":"first","tone":"direct, slightly gym-adjacent","opener":"macro line and prep time",
    "standing_opinions":["no recipe over 10 ingredients","reheating matters as much as cooking","protein per dollar beats protein per gram"],
    "rules":["macros from a nutrition database, never estimated"],
    "deny":["guilt-free","clean eating","superfood"]}',
  '{"font_heading":"Space Grotesk","font_body":"Inter","bg":"#FFFFFF","fg":"#151515","accent":"#D7263D","accent_2":"#1B998B","radius":"2px"}',
  '{"ideas":"generated","howto":"generated","bestof":"retailer","editorial":"stock","recipe":"own","pins":"generated"}',
  '{}'
);

-- Editor bylines for every site; the real named authors are added by hand.
insert into authors (site_id, slug, name, bio, is_editor)
select id, 'editors', name || ' Editors', 'The ' || name || ' editorial team.', true from sites;

-- Gable & Green phase 1 + 2 clusters
with s as (select id from sites where slug = 'gable-green')
insert into clusters (site_id, name, loop_phrase, funnel_stage, post_type, variations, season_window, phase, priority)
select s.id, c.* from s, (values
  ('patio ideas', '{variation} patio ideas', 'top'::funnel_stage, 'ideas'::post_type,
   '["small","budget","apartment","covered","gravel","paver","modern","farmhouse","with fire pit","with string lights","narrow","corner","rental","shaded","mediterranean","minimalist","boho","townhouse","sloped","no grass"]'::jsonb,
   '{"start":"02-01","end":"07-31"}'::jsonb, 1, 10),
  ('balcony ideas', '{variation} balcony ideas', 'top', 'ideas',
   '["small","apartment","narrow","garden","privacy","cozy","rental-friendly","city","long narrow","tiny","shaded","north-facing","budget","modern","plant-filled","dining","reading nook","juliet","condo","no-drill"]',
   '{"start":"02-01","end":"07-31"}', 1, 10),
  ('what size for patio', 'what size {variation} for a patio', 'middle', 'howto',
   '["rug","umbrella","dining table","fire pit","heater","outdoor sofa","planter","pergola"]',
   '{"start":"02-01","end":"07-31"}', 2, 50),
  ('best for patios', 'best {variation} for patios', 'bottom', 'bestof',
   '["outdoor sofas under $1000","patio heaters","string lights","outdoor rugs","fire pit tables","privacy screens","small patio dining sets","outdoor storage boxes"]',
   '{"start":"02-01","end":"07-31"}', 2, 50)
) as c(name, loop_phrase, funnel_stage, post_type, variations, season_window, phase, priority);
