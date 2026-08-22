(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const saved=localStorage.getItem('sm-theme');
  if(saved) document.documentElement.dataset.theme=saved;
  function themeToggle(){
    if($('.theme-toggle')) return;
    const btn=document.createElement('button'); btn.className='theme-toggle'; btn.type='button'; btn.setAttribute('aria-label','Toggle light and dark editorial mode');
    btn.innerHTML='<span class="theme-dot"></span><span class="theme-label">Dark mode</span>';
    const host=$('.masthead')||$('.top'); if(!host) return;
    host.appendChild(btn);
    const sync=()=>{const dark=document.documentElement.dataset.theme==='dark'; btn.querySelector('.theme-label').textContent=dark?'Light mode':'Dark mode'; btn.classList.toggle('is-dark',dark);};
    btn.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark'; document.documentElement.dataset.theme=dark?'light':'dark'; localStorage.setItem('sm-theme',dark?'light':'dark'); sync();}); sync();
  }
  function mobileNav(){
    const menu=$('.menu'); if(!menu || $('.mobile-nav-toggle')) return;
    const toggle=document.createElement('button'); toggle.className='mobile-nav-toggle'; toggle.type='button'; toggle.innerHTML='<span></span><span></span><span></span><b>Menu</b>';
    document.body.appendChild(toggle);
    const drawer=document.createElement('aside'); drawer.className='mobile-drawer'; drawer.innerHTML='<div class="mobile-drawer-head"><span>SPECTATE MOTION</span><button type="button" aria-label="Close menu">Close ×</button></div><nav></nav>';
    drawer.querySelector('nav').innerHTML=menu.innerHTML; document.body.appendChild(drawer);
    const close=()=>{drawer.classList.remove('open'); toggle.classList.remove('open'); document.body.classList.remove('drawer-open');};
    toggle.addEventListener('click',()=>{const open=!drawer.classList.contains('open'); drawer.classList.toggle('open',open); toggle.classList.toggle('open',open); document.body.classList.toggle('drawer-open',open);});
    drawer.querySelector('button').addEventListener('click',close); $$('.mobile-drawer a').forEach(a=>a.addEventListener('click',close));
  }
  function raceWidget(){
    const lead=$('.race-week-lead'); if(!lead || $('.race-countdown')) return;
    const box=document.createElement('div'); box.className='race-countdown'; box.innerHTML='<div><span class="eyebrow">Race-week signal</span><strong id="countdown-value">--:--:--</strong><span id="countdown-label">Until the next session</span></div><div class="circuit-mini"><div class="circuit-line"></div><span>S1</span><span>S2</span><span>S3</span><small>Track profile · not live telemetry</small></div>';
    lead.appendChild(box);
    const events=[['Qualifying',new Date('2026-08-22T19:30:00+05:30')],['Grand Prix',new Date('2026-08-23T18:30:00+05:30')]];
    const tick=()=>{const now=new Date(); const next=events.find(e=>e[1]>now)||events[events.length-1]; let ms=Math.max(0,next[1]-now); const h=Math.floor(ms/36e5),m=Math.floor(ms%36e5/6e4),s=Math.floor(ms%6e4/1e3); $('#countdown-value').textContent=[h,m,s].map(v=>String(v).padStart(2,'0')).join(':'); $('#countdown-label').textContent='Until '+next[0]+' · IST';}; tick(); setInterval(tick,1000);
  }
  function newsroomFilters(){
    const feed=$('.feed'); if(!feed || $('.credibility-filters')) return;
    const items=$$('.feed-item,.signing-card,.signing-small',document);
    items.forEach(item=>{const pill=$('.pill',item); if(pill){const s=pill.textContent.trim().toLowerCase(); item.dataset.status=s.includes('confirmed')?'confirmed':s.includes('reported')?'reported':s.includes('speculation')?'speculation':'all';}});
    const wrap=document.createElement('div'); wrap.className='credibility-filters'; wrap.setAttribute('aria-label','Filter newsroom by credibility'); wrap.innerHTML='<span>Filter desk</span><button class="active" data-filter="all">All</button><button data-filter="confirmed">Confirmed</button><button data-filter="reported">Reported</button><button data-filter="speculation">Speculation</button>';
    feed.parentElement.insertBefore(wrap,feed);
    wrap.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b)return; $$('.credibility-filters button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); const f=b.dataset.filter; items.forEach(i=>{if(i.dataset.status) i.hidden=f!=='all'&&i.dataset.status!==f;});});
  }
  function readingTools(){
    const path=location.pathname; if(!/guide-2026\.html$|editorial\.html$/.test(path)) return;
    const text=document.body.innerText.replace(/\s+/g,' ').trim(); const mins=Math.max(1,Math.ceil(text.split(' ').length/220));
    const intro=$('.intro'); if(intro&&!$('.reading-time')){const el=document.createElement('span');el.className='reading-time';el.textContent=mins+' min read'; intro.insertAdjacentElement('afterend',el);}
    const bar=document.createElement('div');bar.className='reading-progress';document.body.appendChild(bar); const update=()=>{const h=document.documentElement.scrollHeight-innerHeight; bar.style.transform='scaleX('+Math.max(0,Math.min(1,scrollY/h))+')';}; addEventListener('scroll',update,{passive:true}); update();
  }
  function calendarTools(){
    const calendar=/calendar\.html$/.test(location.pathname); const race=/race-centre\.html$/.test(location.pathname); if(!calendar&&!race)return;
    const host=calendar?$('.hero'):$('.race-hero'); if(!host||$('.calendar-actions'))return;
    const start='20260823T153000Z', end='20260823T180000Z';
    const title=encodeURIComponent('2026 Dutch Grand Prix · SPECTATE MOTION'); const details=encodeURIComponent('Dutch Grand Prix at Zandvoort. Check official Formula 1 timing before relying on this calendar entry.'); const locationText=encodeURIComponent('Circuit Zandvoort, Netherlands');
    const google='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+title+'&dates='+start+'/'+end+'&details='+details+'&location='+locationText;
    const ics='BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//SPECTATE MOTION//EN\nBEGIN:VEVENT\nUID:spectate-dutch-gp-2026\nDTSTAMP:20260822T000000Z\nDTSTART:'+start+'\nDTEND:'+end+'\nSUMMARY:2026 Dutch Grand Prix · SPECTATE MOTION\nLOCATION:Circuit Zandvoort, Netherlands\nDESCRIPTION:Dutch Grand Prix at Zandvoort. Check official Formula 1 timing before relying on this calendar entry.\nEND:VEVENT\nEND:VCALENDAR';
    const wrap=document.createElement('div');wrap.className='calendar-actions';wrap.innerHTML='<span>Add the weekend to your calendar</span><a target="_blank" rel="noreferrer" href="'+google+'">Google Calendar ↗</a><a download="spectate-dutch-gp-2026.ics" href="data:text/calendar;charset=utf-8,'+encodeURIComponent(ics)+'">Download iCal ↓</a>'; host.appendChild(wrap);
  }
  function newsletter(){
    const n=$('.newsletter'); if(!n||$('.newsletter-form'))return;
    const signup=$('.signup',n); if(!signup)return;
    signup.innerHTML='<form class="newsletter-form"><label for="sm-email">Get the briefing</label><div><input id="sm-email" type="email" required placeholder="your@email.com" autocomplete="email"><button type="submit">Join ↗</button></div><small>No spam. Provider connection pending.</small></form>';
    $('.newsletter-form').addEventListener('submit',e=>{e.preventDefault(); const email=$('#sm-email').value.trim(); if(!email)return; signup.innerHTML='<div class="newsletter-success"><b>You’re on the desk.</b><span>'+email+' is ready for the briefing once the subscription provider is connected.</span></div>';});
  }
  document.addEventListener('DOMContentLoaded',()=>{themeToggle();mobileNav();raceWidget();newsroomFilters();readingTools();calendarTools();newsletter();});
})();
