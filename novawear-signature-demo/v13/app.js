
const PRODUCTS={
shirt:{id:'shirt',name:'Formshift Oversized Shirt',price:42.99,gsm:240,fit:'Oversized · Drop Shoulders',sizes:['XS','S','M','L','XL','XXL','3XL','4XL'],colors:['Babyblau','Natural Raw','Schwarz','Weiß'],images:[
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-oversized-shirt-babyblau-front-hero_14488a18-8ef4-475f-b052-c7df85eafada.png?v=1785835268',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-oversized-shirt-babyblau-back_f2e10c5a-ea73-49cd-8082-280cf4672f8f.png?v=1785835268',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-shirt-schwarz-front-detail_be7974da-a357-481a-bb9d-a012c8a6a8b6.png?v=1785953915',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-shirt-schwarz-back-editorial_3b3e72ba-4681-4ab3-979a-4eee6c0838eb.png?v=1785953914'
]},
hoodie:{id:'hoodie',name:'Formshift Oversized Hoodie',price:69.99,gsm:380,fit:'Oversized · Heavy Hood',sizes:['XS','S','M','L','XL','XXL','3XL','4XL'],colors:['Natural Raw','Schwarz','Weiß'],images:[
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-hoodie-01-schwarz-front_917fc4d8-1888-4878-aade-4aa9ef4318e7.jpg?v=1785872571',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-hoodie-02-schwarz-ruecken_4b3597fb-cbde-4e3f-883a-7ad06567f093.jpg?v=1785872571',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-hoodie-07-schwarz-editorial_efc75695-f87b-4ba6-a8df-56d8eac0660b.jpg?v=1785872571',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-formshift-heavyweight-oversized-hoodie-09-weiss-detail_99a6870f-b354-4adb-a72d-1c34bf7f3eb7.jpg?v=1785872571'
]},
pants:{id:'pants',name:'Axis Heavyweight Sweatpants',price:54.99,gsm:380,fit:'Relaxed Oversized Fit',sizes:['S','M','L','XL','XXL'],colors:['French Navy','Heather Grey','Schwarz'],images:[
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-heavyweight-sweatpants-01-hero-french-navy_76672ce6-6060-4e32-a143-6e4dd3f8bd97.png?v=1785845033',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-heavyweight-sweatpants-04-schwarz-hero_f66f5853-7631-44ba-b21c-eec187d8a244.png?v=1785845034',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-heavyweight-sweatpants-02-schwarz-detail_9ef5fa4a-bab0-4ae2-ba25-c6a8a8d15bc0.png?v=1785845034',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-heavyweight-sweatpants-07-heather-grey-detail_4f19b475-7392-4e53-a303-54727b786b72.png?v=1785845034'
]},
zipper:{id:'zipper',name:'Axis Heavyweight Zipper Hoodie',price:69.99,gsm:430,fit:'Oversized · Full Zip',sizes:['S','M','L','XL','XXL','3XL','4XL'],colors:['French Navy','Heather Grey','Schwarz'],images:[
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-zipper-hoodie-black-front_50376777-aed8-444b-9580-9545de4353fb.png?v=1785871331',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-zipper-hoodie-black-back_03ebf88f-6885-4564-ae6f-de779b9d189e.png?v=1785871331',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-zipper-hoodie-black-3q_d41024f0-a7c0-451e-8823-a7c4a85781cb.png?v=1785871331',
'https://cdn.shopify.com/s/files/1/0663/6955/2648/files/novawear-axis-zipper-hoodie-grey-detail_dbaa04c3-82e4-4ce0-a792-d44d955cc127.png?v=1785871331'
]}
};

const money=n=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n);
const read=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const cart=()=>read('nw13_cart',[]);
const fit=()=>read('nw13_fit',{});
function track(name,extra){try{window.dataLayer=window.dataLayer||[];window.dataLayer.push(Object.assign({event:name,path:location.pathname},extra||{}))}catch(e){}}
function openLayer(id){const e=document.getElementById(id);if(e){e.classList.add('open');document.body.style.overflow='hidden'}}
function closeLayer(id){const e=document.getElementById(id);if(e){e.classList.remove('open');document.body.style.overflow=''}}
function updateBag(){const n=cart().reduce((s,x)=>s+(x.qty||1),0);document.querySelectorAll('[data-bag]').forEach(e=>e.textContent=n)}
function setupChrome(){
 updateBag();
 const m=document.querySelector('[data-menu]');if(m)m.onclick=()=>openLayer('navSheet');
 const s=document.querySelector('[data-search]');if(s)s.onclick=()=>{renderSearch('');openLayer('searchOverlay')};
 const c=document.querySelector('[data-cart]');if(c)c.onclick=()=>{renderCartDrawer();openLayer('cartDrawer')};
 document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>closeLayer(b.dataset.close));
 document.querySelectorAll('.quick-panel,.cart-drawer,.search-overlay,.nav-sheet').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)closeLayer(o.id)}));
 const si=document.getElementById('searchInput');if(si)si.oninput=()=>renderSearch(si.value);
}
function addCart(id,size,color,bundle){
 const c=cart();c.push({id,size:size||PRODUCTS[id].sizes[0],color:color||PRODUCTS[id].colors[0],qty:1,bundle:!!bundle});write('nw13_cart',c);updateBag();renderCartDrawer();openLayer('cartDrawer');track(bundle?'bundle_add':'add_to_cart',{product:id});
}
function renderCartDrawer(){
 const h=document.getElementById('cartDrawerBody');if(!h)return;const c=cart();
 if(!c.length){h.innerHTML='<p>Dein Bag ist leer.</p><a class="btn primary" style="border-color:#111" href="collection.html">SHOPPEN</a>';return}
 const sub=c.reduce((s,x)=>s+(x.bundle?34.95:PRODUCTS[x.id].price),0),gap=Math.max(0,50-sub);
 h.innerHTML=c.map(x=>`<div class="cart-item"><img src="${PRODUCTS[x.id].images[0]}"><div><b>${PRODUCTS[x.id].name}</b><div>${x.size} · ${x.color}</div></div><strong>${money(x.bundle?34.95:PRODUCTS[x.id].price)}</strong></div>`).join('')+
 `<div class="ship-progress"><i style="width:${Math.min(100,sub/50*100)}%"></i></div><p>${gap?'Noch '+money(gap)+' bis kostenloser Versand':'Kostenloser Versand freigeschaltet ✓'}</p><div style="display:flex;justify-content:space-between;font-size:18px"><b>Gesamt</b><b>${money(sub)}</b></div><a class="btn primary" style="width:100%;border-color:#111;margin-top:12px" href="cart.html">ZUM WARENKORB</a>`;
}
function quickView(id){
 const p=PRODUCTS[id],h=document.getElementById('qvBody');if(!p||!h)return;const f=fit(),rec=f.rec||p.sizes[Math.min(2,p.sizes.length-1)];
 h.innerHTML=`<div class="qv-gallery">${p.images.map(u=>`<img src="${u}" loading="lazy">`).join('')}</div><div class="eyebrow" style="color:#666;margin-top:12px">${p.gsm} GSM · ${p.fit}</div><h2 style="font-size:34px;line-height:.92;margin:7px 0">${p.name}</h2><div style="font-size:20px">${money(p.price)}</div><p style="color:#555">Empfohlen für dich: <b>${rec}</b></p><div class="qv-options"><select id="qvSize">${p.sizes.map(x=>`<option ${x===rec?'selected':''}>${x}</option>`).join('')}</select><select id="qvColor">${p.colors.map(x=>`<option>${x}</option>`).join('')}</select></div><button class="btn primary" style="width:100%;border-color:#111" id="qvAdd">IN DEN WARENKORB</button>`;
 document.getElementById('qvAdd').onclick=()=>addCart(id,document.getElementById('qvSize').value,document.getElementById('qvColor').value);
 openLayer('quickPanel');track('quick_view_open',{product:id});
}
function renderSearch(q){
 const h=document.getElementById('searchResults');if(!h)return;q=(q||'').toLowerCase();
 h.innerHTML=Object.values(PRODUCTS).filter(p=>!q||(`${p.name} ${p.gsm} ${p.fit} ${p.colors.join(' ')}`).toLowerCase().includes(q)).map(p=>`<a class="search-card" href="product-${p.id}.html"><img src="${p.images[0]}"><div><b>${p.name}</b><div>${p.gsm} GSM · ${money(p.price)}</div></div></a>`).join('');
}
function initHero(){
 const e=document.querySelector('.hero-media');if(!e)return;let x=0;
 e.addEventListener('touchstart',ev=>x=ev.touches[0].clientX,{passive:true});
 e.addEventListener('touchend',ev=>{if(Math.abs(ev.changedTouches[0].clientX-x)>45)e.classList.toggle('back')},{passive:true});
}
function initGsm(){
 const map={'240':'shirt','380':'hoodie','430':'zipper'},img=document.getElementById('gsmImg'),title=document.getElementById('gsmTitle'),copy=document.getElementById('gsmCopy');
 document.querySelectorAll('[data-gsm]').forEach(b=>b.onclick=()=>{const p=PRODUCTS[map[b.dataset.gsm]];document.querySelectorAll('[data-gsm]').forEach(x=>x.classList.toggle('on',x===b));if(img)img.src=p.images[0];if(title)title.textContent=`${p.gsm} GSM · ${p.name}`;if(copy)copy.textContent=p.fit});
 const first=document.querySelector('[data-gsm="240"]');if(first)first.click();
}
function initFit(){
 const ids=['fitH','fitW','fitN','fitS'];if(!document.getElementById('fitH'))return;
 function calc(){
  const h=+document.getElementById('fitH').value,w=+document.getElementById('fitW').value,n=document.getElementById('fitN').value,s=document.getElementById('fitS').value,sz=['XS','S','M','L','XL','XXL','3XL','4XL'];let i=Math.max(0,sz.indexOf(n));
  if(h>186||w>90)i++;if(h<172||w<65)i--;if(s==='extra')i++;if(s==='clean')i--;i=Math.max(0,Math.min(sz.length-1,i));const rec=sz[i],alt=sz[Math.max(0,i-1)],score=92;
  document.getElementById('fitResult').innerHTML=`<strong>${rec} · ${score}% Match</strong><div>Alternative kompakter: ${alt}</div>`;const sil=document.querySelector('.silhouette');if(sil)sil.className='silhouette '+s;const cmp=document.getElementById('fitCompare');if(cmp)cmp.innerHTML=`<div><span>Kompakter</span><b>${alt}</b></div><div><span>Empfohlen</span><b>${rec}</b></div>`;return {rec,alt,score,height:h,weight:w,style:s};
 }
 ids.forEach(id=>{const e=document.getElementById(id);if(e)e.oninput=calc});document.getElementById('fitSave').onclick=()=>{const r=calc();write('nw13_fit',r);track('fit_scan_complete',r)};calc();
}
function initBundle(){
 const b=document.getElementById('bundleAdd');if(!b)return;b.onclick=()=>{const c=cart();c.push({id:'shirt',size:document.getElementById('bundleS1').value,color:document.getElementById('bundleC1').value,qty:1,bundle:true},{id:'shirt',size:document.getElementById('bundleS2').value,color:document.getElementById('bundleC2').value,qty:1,bundle:true});write('nw13_cart',c);updateBag();renderCartDrawer();openLayer('cartDrawer');track('bundle_add',{value:69.9})};
}
function initLook(){
 const rows=[...document.querySelectorAll('[data-look]')],t=document.getElementById('lookTotal'),btn=document.getElementById('addLook');if(!rows.length)return;
 const refresh=()=>{let sum=0;rows.forEach(r=>{const on=r.querySelector('input').checked;r.style.opacity=on?1:.45;if(on)sum+=PRODUCTS[r.dataset.look].price});if(t)t.textContent=money(sum)};
 rows.forEach(r=>r.onchange=refresh);if(btn)btn.onclick=()=>{rows.forEach(r=>{if(r.querySelector('input').checked){const id=r.dataset.look;const sel=r.querySelector('select');const c=cart();c.push({id,size:sel.value,color:PRODUCTS[id].colors[0],qty:1});write('nw13_cart',c)}});updateBag();renderCartDrawer();openLayer('cartDrawer');track('look_add')};refresh();
}
function initMaterial(){document.querySelectorAll('[data-hotspot]').forEach(b=>b.onclick=()=>{const h=document.getElementById('materialDetail');if(h)h.textContent={fabric:'Dichter Heavyweight-Stoff sorgt für einen ruhigeren, strukturierten Fall.',construction:'Konstruktion und Bündchen stabilisieren die Silhouette.',print:'Detailmedien zeigen Print und Verarbeitung aus der Nähe.'}[b.dataset.hotspot]||''})}
function initHome(){setupChrome();initHero();initGsm();initFit();initBundle();initLook();initMaterial();track('page_view',{page:'home'})}
function initCollection(){
 setupChrome();const h=document.getElementById('collectionGrid');let filter='all';
 const draw=()=>{if(!h)return;h.innerHTML=Object.values(PRODUCTS).filter(p=>filter==='all'||String(p.gsm)===filter||p.id===filter).map(p=>`<article class="product-card"><div class="media"><a href="product-${p.id}.html"><img class="front" src="${p.images[0]}" loading="lazy"></a><img class="back" src="${p.images[1]}" loading="lazy"></div><div class="card-body"><div class="eyebrow">${p.gsm} GSM · ${p.fit}</div><h3><a href="product-${p.id}.html">${p.name}</a></h3><b>${money(p.price)}</b><div class="card-actions"><button onclick="quickView('${p.id}')">QUICK VIEW</button><a href="product-${p.id}.html">ÖFFNEN</a></div></div></article>`).join('')};
 document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('on',x===b));draw()});draw();track('page_view',{page:'collection'});
}
function initPDP(id){
 setupChrome();const p=PRODUCTS[id],main=document.getElementById('pdpMain'),thumbs=document.getElementById('pdpThumbs');if(!p||!main||!thumbs)return;let idx=0,size=(fit().rec&&p.sizes.includes(fit().rec))?fit().rec:p.sizes[0],color=p.colors[0];
 const show=i=>{idx=i;main.src=p.images[i];thumbs.querySelectorAll('button').forEach((b,j)=>b.style.borderColor=j===i?'#fff':'#333')};
 thumbs.innerHTML=p.images.map(u=>`<button><img src="${u}"></button>`).join('');thumbs.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>show(i));
 const s=document.getElementById('pdpSizes'),c=document.getElementById('pdpColors');s.innerHTML=p.sizes.map(v=>`<button class="${v===size?'on':''}">${v}</button>`).join('');c.innerHTML=p.colors.map(v=>`<button class="${v===color?'on':''}">${v}</button>`).join('');
 s.querySelectorAll('button').forEach(b=>b.onclick=()=>{size=b.textContent;s.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))});c.querySelectorAll('button').forEach(b=>b.onclick=()=>{color=b.textContent;c.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b))});
 document.getElementById('pdpAdd').onclick=()=>addCart(id,size,color);document.getElementById('pdpFit').onclick=()=>location.href='index.html#fitSection';
 let x=0;main.parentElement.addEventListener('touchstart',e=>x=e.touches[0].clientX,{passive:true});main.parentElement.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>40)show((idx+(d<0?1:-1)+p.images.length)%p.images.length)},{passive:true});show(0);track('page_view',{page:'pdp',product:id});
}
function initCartPage(){
 setupChrome();const list=document.getElementById('cartPageList'),sum=document.getElementById('cartSummary');if(!list||!sum)return;
 function draw(){const c=cart();if(!c.length){list.innerHTML='<p>Dein Bag ist leer.</p>';sum.innerHTML='<a class="btn primary" style="border-color:#111" href="collection.html">SHOPPEN</a>';return}const sub=c.reduce((s,x)=>s+(x.bundle?34.95:PRODUCTS[x.id].price),0),ship=sub>=50?0:4.9;list.innerHTML=c.map((x,i)=>`<div class="cart-item"><img src="${PRODUCTS[x.id].images[0]}"><div><b>${PRODUCTS[x.id].name}</b><div>${x.size} · ${x.color}</div><button onclick="removeCart(${i})">Entfernen</button></div><strong>${money(x.bundle?34.95:PRODUCTS[x.id].price)}</strong></div>`).join('');sum.innerHTML=`<h3>Zusammenfassung</h3><div class="ship-progress"><i style="width:${Math.min(100,sub/50*100)}%"></i></div><div class="sum"><span>Zwischensumme</span><b>${money(sub)}</b></div><div class="sum"><span>Versand</span><span>${ship?money(ship):'Kostenlos'}</span></div><div class="sum"><strong>Gesamt</strong><strong>${money(sub+ship)}</strong></div><button class="btn primary" style="width:100%;border-color:#111">SICHER ZUR KASSE</button>`}
 window.removeCart=i=>{const c=cart();c.splice(i,1);write('nw13_cart',c);updateBag();draw()};draw();track('page_view',{page:'cart'});
}
document.addEventListener('DOMContentLoaded',updateBag);
