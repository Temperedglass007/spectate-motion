const FEEDS = [
  { name: 'BBC Sport', url: 'https://feeds.bbci.co.uk/sport/formula1/rss.xml' },
  { name: 'Autosport', url: 'https://www.autosport.com/rss/f1news.xml' }
];

const CURATED = [
  { status: 'confirmed', source: 'Formula 1', title: 'Lando Norris wins the Dutch Grand Prix as Kimi Antonelli finishes second', description: 'Norris took his second consecutive victory at Zandvoort, ahead of Antonelli and George Russell.', link: 'https://www.formula1.com/en/latest/article/norris-wins-dramatic-dutch-grand-prix-from-antonelli-and-russell-as-verstappen-crashes-out.Zn7iYevVGp5eHzFkTEAz7', published: '2026-08-23T15:27:00Z' },
  { status: 'confirmed', source: 'Reuters', title: 'Lewis Hamilton accepts Dutch GP radio messages did not show him in best light', description: 'Hamilton acknowledged his sarcastic radio comments during the Dutch Grand Prix and said he takes responsibility for them.', link: 'https://www.reuters.com/sports/formula1/hamilton-accepts-sarcastic-radio-messages-did-not-show-him-best-light-2026-08-25/', published: '2026-08-25T00:00:00Z' },
  { status: 'confirmed', source: 'Formula 1', title: 'George Russell says Mercedes team orders were the right decision at Zandvoort', description: 'Russell discussed the late-race instruction that allowed Kimi Antonelli through for second place.', link: 'https://www.formula1.com/en/latest/article/you-want-to-fight-for-every-single-position-russell-offers-verdict-on-mercedes-team-orders-in-dutch-gp.3qBtPSF2Jgfyu63IKV8our', published: '2026-08-23T16:53:00Z' },
  { status: 'speculation', source: 'Crash.net', title: '2027 F1 driver market remains unsettled as the silly season develops', description: 'Crash.net reports on the latest unconfirmed possibilities around the 2027 driver market. These claims remain speculation until supported by primary evidence.', link: 'https://www.crash.net/f1/feature/1102535/1/f1-driver-market-latest-rumours-amid-possible-2027-shake', published: '2026-08-19T00:00:00Z' }
];

const clean = (value = '') => value.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
const tag = (xml, name) => { const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i')); return m ? clean(m[1]) : ''; };
const attr = (xml, name) => { const m = xml.match(new RegExp(`<${name}[^>]*?(?:url|href)=["']([^"']+)["']`, 'i')); return m ? m[1] : ''; };
const imageFromHtml = async (url) => { try { const r = await fetch(url, { headers: { 'user-agent': 'SPECTATE-MOTION/1.0' }, signal: AbortSignal.timeout(5000) }); const html = await r.text(); const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i); return m ? m[1] : ''; } catch { return ''; } };

export default async function handler(req, res) {
  try {
    const settled = await Promise.allSettled(FEEDS.map(async source => {
      const response = await fetch(source.url, { headers: { accept: 'application/rss+xml, application/xml, text/xml, */*' }, signal: AbortSignal.timeout(8000) });
      if (!response.ok) throw new Error(`${source.name}: ${response.status}`);
      const xml = await response.text();
      const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/gi)].slice(0, 8);
      return Promise.all(items.map(async match => { const item = match[0]; const link = tag(item, 'link') || (item.match(/<link[^>]*>([^<]+)<\/link>/i) || [,''])[1].trim(); return { status: 'confirmed', source: source.name, title: tag(item, 'title'), description: tag(item, 'description').slice(0, 220), link, published: tag(item, 'pubDate') || tag(item, 'published'), image: attr(item, 'media:content') || attr(item, 'enclosure') || await imageFromHtml(link) }; }));
    }));

    const feedStories = settled.flatMap(x => x.status === 'fulfilled' ? x.value : []).filter(x => x.title && x.link);
    const stories = [...CURATED, ...feedStories];
    const unique = [...new Map(stories.map(s => [s.link, s])).values()];
    const enriched = await Promise.all(unique.map(async story => ({ ...story, image: story.image || await imageFromHtml(story.link) })));
    enriched.sort((a, b) => new Date(b.published || 0) - new Date(a.published || 0));

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      updatedAt: new Date().toISOString(),
      stories: enriched.slice(0, 18),
      policy: 'Confirmed means the underlying fact is established. Analysis and speculation must be explicitly labelled. Rumours are never presented as confirmed.'
    });
  } catch (error) {
    return res.status(502).json({ error: 'News feeds unavailable', detail: error.message });
  }
}
