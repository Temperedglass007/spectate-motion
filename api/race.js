const API = 'https://api.jolpi.ca/f1';

async function get(path) {
  const r = await fetch(`${API}${path}`, { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(8000) });
  if (!r.ok) throw new Error(`Jolpica ${r.status}`);
  return r.json();
}

export default async function handler(req, res) {
  try {
    const year = new Date().getUTCFullYear();
    const schedules = await get(`/alpha/schedules/${year}/`);
    const rounds = schedules?.data?.rounds || schedules?.rounds || schedules?.data || [];
    const normalized = Array.isArray(rounds) ? rounds : [];
    const now = Date.now();
    const completed = normalized.filter(r => {
      const date = r?.race?.date || r?.date || r?.events?.[0]?.date;
      return date && new Date(date).getTime() <= now;
    });
    const latest = completed[completed.length - 1] || normalized[0];
    const roundId = latest?.round || latest?.round_id || latest?.id;
    if (!roundId) throw new Error('No current round available');

    const [results, standings] = await Promise.allSettled([
      get(`/alpha/results/${roundId}/`),
      get(`/alpha/core/drivers/?season=${year}`)
    ]);

    const rawResults = results.status === 'fulfilled' ? results.value : null;
    const resultItems = rawResults?.data?.results || rawResults?.results || rawResults?.data || [];
    const list = Array.isArray(resultItems) ? resultItems : [];

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      updatedAt: new Date().toISOString(),
      season: year,
      round: roundId,
      event: latest,
      results: list.slice(0, 20),
      source: 'Jolpica F1 API'
    });
  } catch (error) {
    return res.status(502).json({ error: 'Race data unavailable', detail: error.message });
  }
}
