(function(){
 function run(){
  document.documentElement.classList.add('v27-ready');
  const root=document.querySelector('.v24-root');if(!root)return;
  const trust=root.querySelector('.v24-trust');const black=root.querySelector('.v25-black-drop');
  if(trust&&window.NWV27_LAYOUT)window.NWV27_LAYOUT.addCategories(trust);
  if(black&&window.NWV27_LAYOUT)window.NWV27_LAYOUT.addEditorial(black);
  const cats=root.querySelector('.v27-cats'),ed=root.querySelector('.v27-editorial'),core=root.querySelector('.v24-shop'),campaign=root.querySelector('.v24-campaign'),value=root.querySelector('.v24-value'),bundle=root.querySelector('.v24-bundle'),proof=root.querySelector('.v24-proof'),fit=root.querySelector('.v24-fitlook'),news=root.querySelector('.v24-newsletter');
  if(campaign){campaign.style.setProperty('display','none','important');campaign.setAttribute('aria-hidden','true')}
  if(bundle)bundle.id='bundle';if(news)news.id='early';
  /* Commerce first: Hero -> trust -> shop shortcuts -> new products -> core products. Editorial comes after product discovery. */
  [trust,cats,black,core,ed,value,bundle,proof,fit,news].filter(Boolean).forEach(n=>root.appendChild(n));
  if(core){const e=core.querySelector('.eye'),h=core.querySelector('h2'),p=core.querySelector('.v24-section-head p');if(e)e.textContent='PERMANENT CORE';if(h)h.innerHTML='CORE<br>ESSENTIALS.';if(p)p.textContent='Vier permanente NOVAWEAR Heavyweight Pieces. Ruhiger als der Drop, gebaut für jeden Tag.'}
  if(value){const e=value.querySelector('.eye');if(e)e.textContent='MATERIAL / SILHOUETTE'}
  if(window.NWV27_FOOTER)window.NWV27_FOOTER();
  document.title='NOVAWEAR® V27 | Structured Luxury Commerce';
 }
 const boot=()=>setTimeout(run,420);if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();