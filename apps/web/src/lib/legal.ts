import type { Site } from './site';

// Trust pages generated from the site row. Plain, specific, no boilerplate theatre.
export function legalPages(site: Site) {
  const contact = `hello@${site.domain}`;
  return {
    about: {
      title: `About ${site.name}`,
      body: [
        `${site.name} covers small-space living, indoors and out: balconies, small patios, small yards, and small apartments. Every idea we publish is sized to a real footprint, with the budget version first and a rental-friendly option in every post.`,
        `We started this site because most "small patio ideas" articles were written from stock photos by people who had never measured a patio. Ours give you dimensions, price ranges, and what to skip.`,
        `Ideas and sizing posts are written by the ${site.name} editorial team and checked against manufacturer specifications. Buying guides and anything that reads as advice carry a named author with a real bio. We do not invent authors.`,
        `Reach us at ${contact}.`,
      ],
    },
    contact: {
      title: 'Contact',
      body: [
        `Questions, corrections, or a space you want us to size: ${contact}.`,
        `For brand partnerships and sponsorships, use the same address with "Partnerships" in the subject line.`,
        `We read everything and reply to anything that needs a reply, usually within a few days.`,
      ],
    },
    'editorial-policy': {
      title: 'Editorial policy',
      body: [
        `Every post on ${site.name} is checked before publishing for accuracy of dimensions, prices, and product claims against the manufacturer's or retailer's own page. Prices are date-stamped and may change after publication.`,
        `We use a mix of licensed stock photography, our own photographs, and AI-generated imagery to illustrate ideas. Generated images are used to show a layout or a concept, never to misrepresent a specific product. Product and recipe images are always real photographs.`,
        `Writing tools, including AI, assist our editorial process. Every published post is reviewed by a person, and anything presented as advice is signed off by its named author.`,
        `We update posts when products change, when readers tell us something is wrong, and when our own impressions data tells us a post has gone stale. Corrections are made in place and noted when material.`,
        `Sponsored content is always labeled. Affiliate relationships never determine what we recommend; see our disclosure.`,
      ],
    },
    disclosure: {
      title: 'Affiliate disclosure',
      body: [
        `${site.name} participates in affiliate programs, including the Amazon Services LLC Associates Program and retailer programs run through networks such as Impact and CJ. When you buy through a link on this site, we may earn a commission at no additional cost to you.`,
        `Affiliate links are marked with rel="sponsored" and routed through /go/ so you can see when a link is one. Our recommendations are based on dimensions, materials, price, and fit for small spaces — not on commission rates.`,
        `This site also displays advertising served by an advertising network. Those ads are labeled.`,
      ],
    },
    privacy: {
      title: 'Privacy policy',
      body: [
        `${site.name} (${site.domain}) collects the minimum information needed to run the site.`,
        `Analytics: we use Google Analytics and Google Search Console to understand which pages are read and how people find them. These tools use cookies and collect anonymized usage data.`,
        `Advertising: our advertising partner may use cookies and similar technologies to show relevant ads. You can opt out of personalized advertising at aboutads.info/choices.`,
        `Email: if you subscribe to a download or newsletter, we store your email address with our email provider and use it only to send what you signed up for. Every email includes an unsubscribe link.`,
        `Affiliate links: when you click an affiliate link, the retailer may set a cookie to attribute the sale. We do not receive your personal information from retailers.`,
        `We do not sell personal information. For requests about your data, email ${contact}.`,
      ],
    },
  } as const;
}
export type LegalSlug = keyof ReturnType<typeof legalPages>;
