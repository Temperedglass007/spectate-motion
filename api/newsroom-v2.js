export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  return res.redirect(308, '/api/news');
}
