const FEEDS = [
  { name: 'BBC Sport', url: 'https://feeds.bbci.co.uk/sport/formula1/rss.xml', status: 'reported' },
  { name: 'Autosport', url: 'https://www.autosport.com/rss/f1news.xml', status: 'reported' }
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
      return Promise.all(items.map(async match => { const item = match[0]; const link = tag(item, 'link') || (item.match(/<link[^>]*>([^<]+)<\/link>/i) || [,''])[1].trim(); return { source: source.name, status: source.status, title: tag(item, 'title'), description: tag(item, 'description').slice(0, 220), link, published: tag(item, 'pubDate') || tag(item, 'published'), image: attr(item, 'media:content') || attr(item, 'enclosure') || await imageFromHtml(link) }; }));
    }));
    const stories = settled.flatMap(x => x.status === 'fulfilled' ? x.value : []).filter(x => x.title && x.link);
    stories.sort((a,b) => new Date(b.published || 0) - new Date(a.published || 0));
    const unique = [...new Map(stories.map(s => [s.link, s])).values()].slice(0, 18);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ updatedAt: new Date().toISOString(), stories: unique, policy: 'Reported feeds only. Official statements should be used to upgrade a story to Confirmed.' });
  } catch (error) { return res.status(502).json({ error: 'News feeds unavailable', detail: error.message }); }
}
