const CURATED = [
  {
    status: 'confirmed', source: 'Formula 1',
    title: 'Lando Norris wins the final Dutch Grand Prix as Antonelli takes P2',
    description: 'Norris won at Zandvoort ahead of Kimi Antonelli and George Russell, with the result confirmed by Formula 1 race classification.',
    link: 'https://www.formula1.com/en/latest/article/norris-wins-dramatic-dutch-grand-prix-from-antonelli-and-russell-as-verstappen-crashes-out.Zn7iYevVGp5eHzFkTEAz7',
    published: '2026-08-23T15:27:00Z'
  },
  {
    status: 'confirmed', source: 'Formula 1',
    title: 'Kimi Antonelli set for a grid penalty at Monza',
    description: 'Mercedes has confirmed a planned power-unit change will trigger a grid penalty for championship leader Kimi Antonelli at the Italian Grand Prix.',
    link: 'https://www.formula1.com/en/latest/article/wolff-confirms-antonelli-is-set-for-grid-penalty-at-italian-grand-prix.4IIgVJdITz0W1xOIrbOPAM',
    published: '2026-08-22T12:27:00Z'
  },
  {
    status: 'confirmed', source: 'Formula 1',
    title: 'Yuki Tsunoda puts himself back on the F1 radar after Zandvoort return',
    description: 'Tsunoda finished P11 for Racing Bulls in his one-off Dutch Grand Prix appearance and believes the weekend showed what he can still offer under the 2026 regulations.',
    link: 'https://www.formula1.com/en/latest/article/tsunoda-puts-himself-back-on-the-f1-radar-after-just-missing-the-points-in-zandvoort.5w7F5YHfJRJNwl5DxaffPb',
    published: '2026-08-24T17:15:00Z'
  },
  {
    status: 'confirmed', source: 'Formula 1',
    title: 'Charles Leclerc says Ferrari had the pace for more at Zandvoort',
    description: 'Leclerc finished fifth and said Ferrari’s race pace was strong, but acknowledged that starting position made the podium difficult to reach.',
    link: 'https://www.formula1.com/en/latest/article/leclerc-rues-bad-luck-in-zandvoort-but-admits-race-was-lost-thanks-to-starting-position.2Cz2Z5vHFt9xIAWEapEJnS',
    published: '2026-08-24T10:53:00Z'
  },
  {
    status: 'analysis', source: 'SPECTATE desk · based on Formula 1 reporting',
    title: 'What Zandvoort tells us about the fight heading into Monza',
    description: 'Norris has momentum, Mercedes remains the benchmark and Ferrari showed stronger race pace than its qualifying position suggested. With Antonelli facing a grid penalty at Monza, the next round could reshape the championship fight without changing the underlying competitive picture.',
    link: 'https://www.formula1.com/en/latest',
    published: '2026-08-25T08:00:00Z'
  },
  {
    status: 'speculation', source: 'Formula 1 · reported speculation',
    title: 'Verstappen remains at the centre of the 2027 driver-market rumour mill',
    description: 'Formula 1 has reported on speculation linking Verstappen with McLaren and the knock-on effect it could have on the 2027 grid. No such move is established here, so SPECTATE keeps it explicitly in the rumour column.',
    link: 'https://www.formula1.com/en/latest/article/piastri-insists-mclaren-are-very-happy-with-me-amid-reported-verstappen-talks.sOSX3WuQmPeZgibLN9Zl2',
    published: '2026-07-03T07:31:00Z'
  }
];

const clean = (value = '') => value.replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();

const imageFromHtml = async (url) => {
  try {
    const r = await fetch(url, {
      headers: { 'user-agent': 'SPECTATE-MOTION/1.0' },
      signal: AbortSignal.timeout(6000)
    });
    if (!r.ok) return '';
    const html = await r.text();
    const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
    return m ? m[1] : '';
  } catch { return ''; }
};

export default async function handler(req, res) {
  try {
    // SPECTATE newsroom policy: Formula 1 is the editorial source of record.
    // No BBC, Reuters, Autosport or general-news RSS feed is used here.
    const stories = await Promise.all(CURATED.map(async story => ({
      ...story,
      image: await imageFromHtml(story.link)
    })));

    stories.sort((a, b) => new Date(b.published || 0) - new Date(a.published || 0));

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({
      updatedAt: new Date().toISOString(),
      stories,
      policy: 'Formula 1 is the primary newsroom source. Confirmed means the underlying fact is established. SPECTATE analysis is written separately. Rumours remain explicitly labelled as speculation.'
    });
  } catch (error) {
    return res.status(502).json({ error: 'Newsroom unavailable', detail: clean(error.message) });
  }
}
