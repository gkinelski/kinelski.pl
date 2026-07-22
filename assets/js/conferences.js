
const target=document.getElementById('conference-list');
fetch('assets/data/conferences.json').then(r=>r.json()).then(data=>{
 const selected=data.filter(x=>x.year>=2022).slice(0,24);
 target.innerHTML=selected.map(x=>`<article class="conference-item"><time>${x.date||x.year}</time><div><h3>${x.name||x.organizer||'Wydarzenie'}</h3><span>${x.place}${x.organizer?' • '+x.organizer:''}</span></div><p>${x.activity||''}</p></article>`).join('');
});
