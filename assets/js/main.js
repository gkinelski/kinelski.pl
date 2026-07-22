
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const themeButton=document.querySelector('.theme-toggle');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');
themeButton?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
