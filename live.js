(() => {
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const style = document.createElement('style');
  style.textContent = `.live-desk{margin:28px 0;border-top:2px solid var(--ink);border-bottom:1px solid var(--line);background:var(--paper)}.live-desk-head{display:flex;justify-content:space-between;gap:16px;align-items:end;padding:18px 0}.live-desk-head h2{margin:0;font:500 clamp(28px,3.4vw,48px)/.9 var(--serif);letter-spacing:-.055em}.live-dot{display:inline-flex;align-items:center;gap:7px;font:9px var(--sans);letter-spacing:.1em;text-transform:uppercase}.live-dot:before{content:'';width:7px;height:7px;border-radius:50%;background:#c9ee6b;box-shadow:0 0 0 4px rgba(201,238,107,.12)}.live-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;padding-bottom:18px}.live-story{border-top:1px solid var(--line);padding-top:12px;min-width:0}.live-story img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#d9d5ca;margin-bottom:12px}.live-story h3{font:500 24px/.96 var(--serif);letter-spacing:-.04em;margin:7px 0}.live-story p{font:13px/1.45 var(--sans);color:#5d6058;margin:0 0 9px}.live-story a{font:9px var(--sans);letter-spacing:.08em;text-transform:uppercase}.live-meta{font:9px var(--sans);letter-spacing:.08em;text-transform:uppercase;color:#666960}.live-error{padding:14px 0;font:12px var(--sans);color:#666960}@media(max-width:800px){.live-grid{grid-template-columns:1fr}.live-desk-head{align-items:start;flex-direction:column}}.live-race{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;margin:22px 0}.live-race-card{border:1px solid var(--line);padding:20px;background:var(--paper)}.live-race-card h3{font:500 34px/.92 var(--serif);margin:8px 0}.live-results{display:grid;gap:7px}.live-result{display:grid;grid-template-columns:32px 1fr 60px;gap:8px;border-top:1px solid var(--line);padding:8px 0;font:12px var(--sans)}.live-result strong{font-size:13px}.live-source{font:8px var(--sans);letter-spacing:.08em;text-transform:uppercase;color:#777b72;margin-top:10px}@media(max-width:800px){.live-race{grid-template-columns:1fr}}`;
  document.head.appendChild(style);

  async function newsroom() {
    const anchor = document.querySelector('.meta-row');
    if (!anchor || document.querySelector('.live-news-desk')) return;
    const box = document.createElement('section'); box.className = 'live-desk live-news-desk';
    box.innerHTML = `<div class="live-desk-head"><div><div class="eyebrow">Live newsroom</div><h2>Fresh from the wire.</h2></div><div class="live-dot">Auto refresh · 5 min</div></div><div class="live-grid"><div class="live-error">Loading verified source feeds…</div></div>`;
    anchor.insertAdjacentElement('afterend', box);
    const load = async () => {
      try {
        const r = await fetch('/api/news', { cache:'no-store' }); if (!r.ok) throw new Error('feed');
        const data = await r.json();
        const grid = box.querySelector('.live-grid');
        grid.innerHTML = data.stories.map(s => `<article class="live-story">${s.image ? `<img src="${esc(s.image)}" alt="" loading="lazy">` : ''}<div class="live-meta">${esc(s.status)} · ${esc(s.source)} · ${s.published ? esc(new Date(s.published).toLocaleString([], {day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})) : 'Now'}</div><h3>${esc(s.title)}</h3>${s.description ? `<p>${esc(s.description)}</p>` : ''}<a href="${esc(s.link)}" target="_blank" rel="noreferrer">Read source ↗</a></article>`).join('') || '<div class="live-error">No new stories are available right now.</div>';
      } catch { box.querySelector('.live-grid').innerHTML = '<div class="live-error">The live desk could not reach its source feeds. The editorial archive remains available below.</div>'; }
    };
    load(); setInterval(load, 300000);
  }

  async function race() {
    const anchor = document.querySelector('.freshness');
    if (!anchor || document.querySelector('.live-race')) return;
    const box = document.createElement('section'); box.className = 'live-race';
    box.innerHTML = `<div class="live-race-card"><div class="eyebrow">Live race data</div><h3>Results, automatically.</h3><p>Race Centre pulls the latest available event result from the data adapter instead of requiring a manual update.</p><div class="live-source">Auto refresh · 60 sec · Source: Jolpica F1 API</div></div><div class="live-race-card"><div class="eyebrow">Latest classification</div><div class="live-results"><div class="live-error">Loading race data…</div></div></div>`;
    anchor.insertAdjacentElement('afterend', box);
    const load = async () => {
      try {
        const r = await fetch('/api/race', {cache:'no-store'}); if (!r.ok) throw new Error('race');
        const data = await r.json(); const rows = Array.isArray(data.results) ? data.results.slice(0,10) : [];
        box.querySelector('.live-results').innerHTML = rows.map((x,i) => { const driver = x.driver || x.Driver || {}; const team = x.team || x.Constructor || {}; const name = driver.fullName || [driver.givenName,driver.familyName].filter(Boolean).join(' ') || x.name || 'Driver'; const points = x.points ?? x.points_scored ?? '—'; return `<div class="live-result"><span>${esc(x.position ?? i+1)}</span><strong>${esc(name)}</strong><span>${esc(points)} pts</span></div>`; }).join('') || '<div class="live-error">No classification returned for the latest event yet.</div>';
      } catch { box.querySelector('.live-results').innerHTML = '<div class="live-error">Race data is temporarily unavailable. The editorial snapshot remains below.</div>'; }
    };
    load(); setInterval(load, 60000);
  }

  if (location.pathname.includes('newsroom')) newsroom();
  if (location.pathname.includes('race-centre')) race();
})();
