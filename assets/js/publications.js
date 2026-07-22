
const list=document.getElementById('publications-list');
const search=document.getElementById('search');
const area=document.getElementById('area-filter');
const year=document.getElementById('year-filter');
const type=document.getElementById('type-filter');
const count=document.getElementById('pub-count');
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
fetch('assets/data/publications.json').then(r=>r.json()).then(data=>{
  [...new Set(data.map(x=>x.area).filter(Boolean))].sort().forEach(x=>area.add(new Option(x,x)));
  [...new Set(data.map(x=>x.year).filter(Boolean))].sort((a,b)=>b-a).forEach(x=>year.add(new Option(x,x)));
  [...new Set(data.map(x=>x.type).filter(Boolean))].sort().forEach(x=>type.add(new Option(x,x)));
  const render=()=>{
    const q=search.value.toLowerCase().trim();
    const filtered=data.filter(p=>(!q||[p.title,p.authors,p.apa,p.publisher].join(' ').toLowerCase().includes(q))&&(!area.value||p.area===area.value)&&(!year.value||String(p.year)===year.value)&&(!type.value||p.type===type.value));
    count.textContent=filtered.length;
    list.innerHTML=filtered.length?filtered.map((p,i)=>`
      <article class="pub-item">
        <div class="pub-year">${esc(p.year)}</div>
        <div>
          <div class="pub-meta">${esc(p.area)} • ${esc(p.type)} • LP ${esc(p.lp)}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.authors)}</p>
          <p>${esc(p.publisher)}</p>
          <button class="apa-toggle" data-i="${i}">Pokaż zapis APA</button>
          <div class="apa-text" id="apa-${i}">${esc(p.apa)}</div>
        </div>
        <div class="pub-actions">
          ${p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener">Źródło →</a>`:''}
          ${p.doi?`<a href="https://doi.org/${esc(p.doi.replace(/^https?:\\/\\/doi.org\\//,''))}" target="_blank" rel="noopener">DOI →</a>`:''}
        </div>
      </article>`).join(''):`<div class="empty-state">Brak publikacji spełniających kryteria.</div>`;
    document.querySelectorAll('.apa-toggle').forEach(b=>b.addEventListener('click',()=>document.getElementById(`apa-${b.dataset.i}`).classList.toggle('open')));
  };
  [search,area,year,type].forEach(el=>el.addEventListener(el===search?'input':'change',render));
  render();
});
