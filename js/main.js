/* BakeLoveAffair · interactions. Content lives in data.js. */
(() => {
  const S = window.SITE, CAKES = window.CAKES, CATS = window.CATEGORIES;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const img = c => `assets/img/${c.id}.jpg`;
  const wa = msg => { const t = encodeURIComponent(msg || S.defaultMessage); return S.whatsapp ? `https://wa.me/${S.whatsapp}?text=${t}` : `https://wa.me/?text=${t}`; };
  const askMsg = c => `Hi BakeLoveAffair! I love the ${c.title} on your website. Could you make something like it for me?`;
  const tint = c => `var(--${c.tint || 'pink'})`;

  /* ---------- icons ---------- */
  const ICONS = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r=".6" fill="currentColor"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
  };
  const paintIcons = (root = document) => $$('[data-icon]', root).forEach(i => { i.outerHTML = ICONS[i.dataset.icon]; });

  /* ---------- sunflowers (a nod to the logo) ---------- */
  const petals = (n, rx, ry, fill, off = 0) => Array.from({ length: n }, (_, i) => `<ellipse cx="50" cy="${50 - 28}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${i * 360 / n + off} 50 50)"/>`).join('');
  $$('.sunflower').forEach(el => { el.innerHTML = `<svg viewBox="0 0 100 100">${petals(14, 7, 21, '#F6B63C')}${petals(14, 6, 18, '#FFD35C', 13)}<circle cx="50" cy="50" r="15" fill="#7A4A22"/><circle cx="50" cy="50" r="10" fill="#5E3717"/></svg>`; });

  /* ---------- hero ---------- */
  const words = ['Baked', 'with', '<span class="love">love<svg viewBox="0 0 200 20" preserveAspectRatio="none" fill="none"><path d="M3 12c30-12 50 10 80 0s50-10 114 2" stroke="#FFE8A3" stroke-width="7" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></span>,', '\nmade', 'for', 'you.'];
  $('#h1').innerHTML = words.map((w, i) => (w[0] === '\n' ? '<br>' : '') + `<span class="w" aria-hidden="true" style="animation-delay:${i * 110}ms">${w.trim()}</span>`).join(' ');

  const show = CAKES.filter(c => c.hero);
  $('#shots').innerHTML = show.map(c => `<img src="${img(c)}" alt="${c.title}">`).join('');
  $('#dots').innerHTML = show.map(c => `<button aria-label="Show ${c.title}"></button>`).join('');
  let cur = -1, timer;
  const go = i => {
    cur = (i + show.length) % show.length;
    $$('#shots img').forEach((im, k) => im.classList.toggle('on', k === cur));
    $$('#dots button').forEach((d, k) => d.classList.toggle('on', k === cur));
    $('#lt').textContent = show[cur].title; $('#ls').textContent = show[cur].tag;
    document.documentElement.style.setProperty('--accent', tint(show[cur]));
    clearTimeout(timer); if (!reduced) timer = setTimeout(() => go(cur + 1), 3600);
  };
  $$('#dots button').forEach((d, k) => d.onclick = () => go(k));
  $('#label').onclick = () => openSheet(CAKES.indexOf(show[cur]));
  go(0);

  const sc = ['#F47C6C', '#FFE8A3', '#CDEFE0', '#E3DAFA', '#FBD3DD', '#F6B63C'];
  $('#sprinkles').innerHTML = Array.from({ length: 22 }, (_, i) => {
    const x = (i * 37 + 11) % 100, y = (i * 53 + 7) % 100, r = (i * 47) % 180, s = 1 + (i % 4) * .6;
    return `<i class="sprinkle" data-s="${s}" data-r="${r}" style="left:${x}%;top:${y}%;background:${sc[i % 6]};transform:rotate(${r}deg)"></i>`;
  }).join('');

  $('#ribbon').innerHTML = Array(8).fill('<span>Theme cakes</span><b>✦</b><span>Cheesecakes</span><b>♥</b><span>Birthday cakes</span><b>✦</b><span>Anniversary cakes</span><b>♥</b><span>Made to order</span><b>✦</b>').join('');

  $$('.wave').forEach(s => {
    let d = 'M0 40'; for (let x = 0; x < 2400; x += 200) d += ` Q${x + 50} 0 ${x + 100} 40 T${x + 200} 40`;
    s.setAttribute('viewBox', '0 0 2400 70'); s.setAttribute('preserveAspectRatio', 'none'); s.setAttribute('aria-hidden', 'true');
    s.innerHTML = `<path d="${d} V70 H0Z" fill="${s.dataset.fill}"/>`;
  });

  /* ---------- gallery + filters ---------- */
  $('#cards').innerHTML = CAKES.map((c, i) => `
    <button class="sc" data-i="${i}" data-cat="${c.cat}" data-reveal="${(i % 3) * 120}" aria-label="${c.title}: see details">
      <div class="ph"><img loading="lazy" src="${img(c)}" alt="${c.title}"><span class="peek">What's inside? 👀</span></div>
      <span class="pill" style="background:${tint(c)}">${c.tag}</span><h3>${c.title}</h3><p>“${c.quote}”</p>
      <span class="more">See the details <b>→</b></span>
    </button>`).join('');
  const used = CATS.filter(k => CAKES.some(c => c.cat === k.id));
  $('#filters').innerHTML = `<button class="chip on" data-f="all">All cakes</button>` + used.map(k => `<button class="chip" data-f="${k.id}">${k.label}</button>`).join('');
  const setFilter = f => {
    $$('#filters .chip').forEach(b => b.classList.toggle('on', b.dataset.f === f));
    const cards = $$('#cards .sc');
    cards.forEach(c => c.classList.add('out'));
    setTimeout(() => cards.forEach(c => {
      const keep = f === 'all' || c.dataset.cat === f;
      c.classList.toggle('gone', !keep); c.classList.add('in');
      if (keep) requestAnimationFrame(() => requestAnimationFrame(() => c.classList.remove('out')));
    }), reduced ? 0 : 260);
  };
  $('#filters').addEventListener('click', e => { const b = e.target.closest('.chip'); if (b) setFilter(b.dataset.f); });
  $('#cards').addEventListener('click', e => { const c = e.target.closest('.sc'); if (c) openSheet(+c.dataset.i); });

  /* ---------- cake detail sheet ---------- */
  const sheet = $('#sheet'); let at = 0;
  const fill = i => {
    at = (i + CAKES.length) % CAKES.length; const c = CAKES[at];
    const im = $('#sh-img'); im.src = img(c); im.alt = c.title; im.classList.remove('swap'); void im.offsetWidth; im.classList.add('swap');
    $('#sh-photo').style.setProperty('--t', tint(c));
    $('#sh-tag').textContent = c.tag; $('#sh-tag').style.background = tint(c);
    $('#sh-title').textContent = c.title;
    $('#sh-quote').textContent = `“${c.quote}”`;
    $('#sh-desc').textContent = c.desc;
    $('#sh-facts').innerHTML = c.facts.map(([k, v], n) => `<div style="animation-delay:${120 + n * 70}ms"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    $('#sh-wa').href = wa(askMsg(c));
    const r = $('#sh-reel'); r.hidden = !c.reel; r.style.display = c.reel ? '' : 'none'; if (c.reel) r.href = `https://www.instagram.com/bakeloveaffair/reel/${c.reel}/`;
  };
  function openSheet(i) { fill(i); if (!sheet.open) sheet.showModal(); }
  const closeSheet = () => { if (reduced) return sheet.close(); sheet.classList.add('closing'); setTimeout(() => { sheet.classList.remove('closing'); sheet.close(); }, 200); };
  $('#sh-close').onclick = closeSheet;
  $('#sh-prev').onclick = () => fill(at - 1);
  $('#sh-next').onclick = () => fill(at + 1);
  sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });
  sheet.addEventListener('cancel', e => { e.preventDefault(); closeSheet(); });
  sheet.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') fill(at - 1); if (e.key === 'ArrowRight') fill(at + 1); });

  /* ---------- instagram rows ---------- */
  const pol = c => `<button class="pol" data-i="${CAKES.indexOf(c)}" tabindex="-1"><img loading="lazy" src="${img(c)}" alt="${c.title}"><span>${c.title}</span></button>`;
  const rep = a => { let o = []; while (o.length < 16) o = o.concat(a); return o.concat(o); };
  $('#r1').innerHTML = rep(CAKES).map(pol).join('');
  $('#r2').innerHTML = rep(CAKES.slice().reverse()).map(pol).join('');
  $('#insta').addEventListener('click', e => { const p = e.target.closest('.pol'); if (p) openSheet(+p.dataset.i); });

  /* ---------- wish builder ---------- */
  const wish = {};
  const msg = () => {
    const l = ['Hi BakeLoveAffair! 👋'];
    const occ = wish.occasion && wish.occasion.toLowerCase().replace('just because', 'little treat, just because');
    const an = w => (/^[aeiou]/i.test(w) ? 'an ' : 'a ') + w;
    l.push(wish.bake ? `I'd love to order ${an(wish.bake.toLowerCase())}${occ ? ` for ${an(occ)}` : ''}.` : (occ ? `I'm planning something for ${an(occ)}.` : "I'd love to order a cake."));
    if (wish.idea) l.push(`I'm thinking of: ${wish.idea}.`);
    if (wish.guests) l.push(`It's for ${wish.guests.toLowerCase()} people.`);
    if (wish.date) l.push(`The date is ${new Date(wish.date + 'T12:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.`);
    l.push('Could you tell me what is possible? 🎂');
    return l.join('\n');
  };
  const paint = () => { const b = $('#bubble'); b.textContent = msg(); b.classList.add('bump'); setTimeout(() => b.classList.remove('bump'), 220); $('#send').href = wa(msg()); };
  $$('.chips').forEach(g => g.addEventListener('click', e => {
    const t = e.target.closest('.chip'); if (!t) return;
    const was = t.classList.contains('on');
    $$('.chip', g).forEach(x => x.classList.remove('on'));
    if (was) delete wish[g.dataset.k]; else { t.classList.add('on'); wish[g.dataset.k] = t.textContent; }
    paint();
  }));
  $('#date').min = new Date().toISOString().slice(0, 10);
  $('#date').addEventListener('input', e => { wish.date = e.target.value; paint(); });
  $('#idea').addEventListener('input', e => { wish.idea = e.target.value.trim(); paint(); });
  paint();

  /* ---------- links, icons, reveal ---------- */
  paintIcons();
  $$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa || undefined); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-ig]').forEach(a => { a.href = S.instagram; a.target = '_blank'; a.rel = 'noopener'; });
  $('#year').textContent = new Date().getFullYear();
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -5% 0px' });
  $$('[data-reveal]').forEach(el => { if (el.dataset.reveal) el.style.transitionDelay = el.dataset.reveal + 'ms'; io.observe(el); });
  // once revealed, drop the stagger delay so hover and filter animations are instant
  document.addEventListener('transitionend', e => { if (e.target.matches?.('[data-reveal].in')) e.target.style.transitionDelay = ''; });

  /* ---------- mobile menu ---------- */
  const nav = $('#nav'), burger = $('#burger');
  const menu = open => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
  burger.onclick = () => menu(!nav.classList.contains('open'));
  $('#menu').addEventListener('click', e => { if (e.target.closest('a')) menu(false); });

  /* ---------- sprinkle burst on click ---------- */
  if (!reduced) document.addEventListener('click', e => {
    if (!e.target.closest('.btn, .chip, .sc, .pol')) return;
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('i'); p.className = 'pop'; p.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;background:${sc[i % 6]}`;
      document.body.appendChild(p);
      const a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 70;
      p.animate([{ transform: 'translate(-50%,-50%) rotate(0)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + 30}px) rotate(${Math.random() * 540}deg)`, opacity: 0 }], { duration: 600 + Math.random() * 300, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => p.remove();
    }
  });

  /* ---------- scroll ---------- */
  const pp = $('#pp'), proc = $('#proc'), steps = $$('.ps'), spr = $$('.sprinkle'), bar = $('#progress');
  let last = 0, tick = false;
  const onScroll = () => {
    tick = false; const y = scrollY, vh = innerHeight;
    bar.style.transform = `scaleX(${y / Math.max(1, document.documentElement.scrollHeight - vh)})`;
    if (!nav.classList.contains('open')) nav.classList.toggle('hide', y > last && y > 300); last = y;
    if (reduced) { steps.forEach(s => s.classList.add('lit')); return; }
    if (y < vh * 1.2) spr.forEach(s => s.style.transform = `translateY(${-y * .18 * s.dataset.s}px) rotate(${+s.dataset.r + y * .12 * s.dataset.s}deg)`);
    const r = proc.getBoundingClientRect(), p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (vh * .6)));
    pp.style.clipPath = `inset(0 ${100 - p * 100}% 0 0)`;
    steps.forEach((s, i) => s.classList.toggle('lit', p > i / 4 + .1));
  };
  addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll); onScroll();
})();
