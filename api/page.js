const pages = {
  newsroom: 'newsroom.html',
  'race-centre': 'race-centre.html'
};

export default async function handler(req, res) {
  const name = String(req.query?.name || '');
  const file = pages[name];
  if (!file) return res.status(404).send('Not found');
  const raw = `https://raw.githubusercontent.com/Temperedglass007/spectate-motion/main/${file}`;
  const r = await fetch(raw, { cache: 'no-store' });
  if (!r.ok) return res.status(502).send('Page source unavailable');
  let html = await r.text();
  if (!html.includes('live.js')) html = html.replace('</body>', '<script defer src="/live.js"></script></body>');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
  return res.status(200).send(html);
}
