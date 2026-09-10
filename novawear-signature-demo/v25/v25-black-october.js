(function(){
 const DROP=[
  {n:'GUARDIAN',h:'guardian-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-guardian-hero-exact.png?v=1789016538'},
  {n:'ASCEND',h:'ascend-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-ascend-hero-exact.png?v=1789016524'},
  {n:'SOVEREIGN',h:'sovereign-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-sovereign-hero-exact.png?v=1789016599'},
  {n:'DRAGON REIGN',h:'dragon-reign-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-dragon-reign-hero-exact.png?v=1789016492'},
  {n:'SERPENT CROWN',h:'serpent-crown-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-serpent-crown-hero-exact.png?v=1789016555'},
  {n:'NIGHT EMPRESS',h:'night-empress-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-night-empress-hero-exact.png?v=1789016508'},
  {n:'CELESTIAL QUEEN',h:'celestial-queen-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-celestial-queen-hero-exact.png?v=1789016442'},
  {n:'DIVINE EMPRESS',h:'divine-empress-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-divine-empress-hero-exact.png?v=1789016458'},
  {n:'FORBIDDEN REIGN',h:'forbidden-reign-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-forbidden-reign-hero-exact.png?v=1789016475'},
  {n:'VALHALLA STORM',h:'valhalla-storm-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-valhalla-storm-hero-exact.png?v=1789016614'},
  {n:'SHIELDMAIDEN',h:'shieldmaiden-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-shieldmaiden-hero-exact.png?v=1789016570'},
  {n:'RAVEN AXE',h:'raven-axe-heavyweight-oversized-t-shirt',i:'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-raven-axe-hero-exact.png?v=1789016583'}
 ];
 const card=(p)=>`<article class="v25-black-card"><a href="https://www.novawear.de/products/${p.h}"><div class="v25-black-media"><span class="v25-black-badge">NEW · BLACK OCTOBER</span><img src="${p.i}&width=900" loading="lazy" alt="NOVAWEAR ${p.n} Heavyweight Oversized T-Shirt"></div><div class="v25-black-meta"><b>${p.n}</b><span>Heavyweight Oversized T-Shirt · 240 GSM</span><em>42,99 €</em></div></a></article>`;
 function home(){
  const root=document.querySelector('.v24-root'); if(!root||document.querySelector('.v25-black-drop'))return;
  const trust=root.querySelector('.v24-trust');
  const s=document.createElement('section'); s.className='v25-black-drop'; s.id='blackOctoberDrop';
  s.innerHTML=`<div class="v25-black-head"><div><div class="v25-black-kicker">BLACK OCTOBER · 2026</div><h2>NEW<br>ICONS.</h2></div><p>Zwölf neue Heavyweight Backprint Pieces. 240 GSM, Oversized Fit und eine dunklere NOVAWEAR Bildwelt für den Oktober Drop.</p></div><div class="v25-black-grid">${DROP.slice(0,6).map(card).join('')}</div><div class="v25-black-footer"><p>6 von 12 neuen Pieces · alle aktuell im Shopify Store aktiv.</p><a href="black-october.html">VIEW ALL 12 →</a></div>`;
  trust?.after(s);
  const old=root.querySelector('.v24-shop'); if(old){old.querySelector('.eye')?.replaceChildren(document.createTextNode('FORM / MOTION · CORE'));const h=old.querySelector('h2');if(h)h.innerHTML='CORE<br>ESSENTIALS.';const p=old.querySelector('.v24-section-head p');if(p)p.textContent='Die bestehenden NOVAWEAR Kern-Pieces bleiben als permanente Heavyweight Essentials unter dem saisonalen Drop.'}
  const hero=document.querySelector('.v25-hero');if(hero){const ctas=hero.querySelectorAll('.v25-hero-ctas a');if(ctas[0]){ctas[0].href='black-october.html';ctas[0].textContent='SHOP BLACK OCTOBER'}if(ctas[1]){ctas[1].href='#blackOctoberDrop';ctas[1].textContent='DISCOVER THE DROP'}}
  const nav=document.querySelector('.v25-nav');if(nav&&!nav.querySelector('[href="black-october.html"]'))nav.insertAdjacentHTML('afterbegin','<a href="black-october.html">BLACK OCTOBER</a>');
  const mobile=document.querySelector('.v25-sheet-nav');if(mobile&&!mobile.querySelector('[href="black-october.html"]'))mobile.insertAdjacentHTML('afterbegin','<a href="black-october.html">BLACK OCTOBER</a>');
 }
 window.NOVAWEAR_BLACK_OCTOBER=DROP;
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(home,120));else setTimeout(home,120);
})();