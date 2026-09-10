(function(){
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const home=()=>/\/v22\/(?:index\.html)?$/.test(location.pathname)||location.pathname.endsWith('/v22/');
  const savedPage=()=>/\/v22\/saved\.html$/.test(location.pathname);
  const aboutPage=()=>/\/v22\/about\.html$/.test(location.pathname);
  const live=()=>window.NOVAWEAR_REVIEW_DATA||null;
  const moneySafe=n=>typeof money==='function'?money(n):new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(n);
  const saved=()=>{try{return JSON.parse(localStorage.getItem('nw15_wish')||'[]')}catch(_){return[]}};
  const writeSaved=v=>{try{localStorage.setItem('nw15_wish',JSON.stringify(v))}catch(_){}};
  const track22=(event,props={})=>{if(typeof track==='function')track(event,{...props,v22:true})};
  const image=(u,w=1000)=>u+(u.includes('?')?'&':'?')+'width='+w;

  function heroAuthority(){
    if(!home()||$('.v21-hero-shell')||typeof PRODUCTS==='undefined')return;
    const hero=$('.hero'),copy=$('.hero-copy>div')||$('.hero-copy'),front=$('#heroFront'),back=$('#heroBack'),media=$('.hero-media');
    if(!hero||!copy||!front||!back||!media)return;
    const eye=$('.eye',copy); if(eye)eye.textContent='CAMPAIGN 001';
    if(!$('.v21-hero-campaign',copy)){const tag=document.createElement('div');tag.className='v21-hero-campaign';tag.textContent='FORM / MOTION · 2026';copy.insertBefore(tag,copy.firstChild)}
    const text=$('p',copy); if(text)text.textContent='Heavyweight silhouettes for people who want presence without noise.';
    const primary=$('#heroShop'); if(primary)primary.textContent='SHOP THE DROP';
    const secondary=$('.hero .cta a'); if(secondary){secondary.textContent='EXPLORE CAMPAIGN';secondary.href='campaign.html'}
    const name=($('#heroProduct')?.textContent||'').toLowerCase();
    const id=name.includes('zipper')?'zipper':name.includes('hoodie')?'hoodie':name.includes('pant')?'pants':'shirt';
    const p=PRODUCTS[id],g=p.gallery[p.colors[0]]||[],detailUrl=g[2]||g[0];
    if(detailUrl){const detail=document.createElement('img');detail.className='v21-hero-detail';detail.alt=p.short+' Detail';detail.src=image(detailUrl,1100);media.appendChild(detail)}
    const stage=document.createElement('div');stage.className='v21-hero-stage';stage.innerHTML='<span class="on">01</span><span>02</span><span>03</span><b>FRONT</b>';media.appendChild(stage);
    const shell=document.createElement('div');shell.className='v21-hero-shell';hero.parentNode.insertBefore(shell,hero);shell.appendChild(hero);hero.dataset.v21Stage='front';
    let raf=0;const paint=()=>{raf=0;const r=shell.getBoundingClientRect(),span=Math.max(1,r.height-innerHeight),progress=Math.max(0,Math.min(1,-r.top/span)),next=progress<.34?'front':progress<.68?'detail':'back';if(hero.dataset.v21Stage===next)return;hero.dataset.v21Stage=next;const cfg={front:[0,'FRONT'],detail:[1,'DETAIL'],back:[2,'BACK']}[next];$$('span',stage).forEach((x,i)=>x.classList.toggle('on',i===cfg[0]));$('b',stage).textContent=cfg[1];track22('hero_stage',{stage:next,product:id})};
    addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(paint)},{passive:true});paint();
  }

  function campaignPreview(){
    if(!home()||$('.v21-campaign-preview')||typeof PRODUCTS==='undefined')return;
    const sh=PRODUCTS.shirt,ho=PRODUCTS.hoodie,sg=sh.gallery.Schwarz||sh.gallery[sh.colors[0]],hg=ho.gallery['Natural Raw']||ho.gallery[ho.colors[0]],sec=document.createElement('section');
    sec.className='v21-campaign-preview';sec.innerHTML=`<div class="v21-campaign-grid"><a class="v21-campaign-media" href="campaign.html" aria-label="FORM / MOTION Campaign öffnen"><img src="${image(sg[0],1200)}" loading="lazy" alt="FORM / MOTION Shirt"><img src="${image(hg[0],1200)}" loading="lazy" alt="FORM / MOTION Hoodie"></a><div class="v21-campaign-copy"><div class="eye">CAMPAIGN 001 · FORM / MOTION</div><h2>FORM<br>FOLLOWS<br>MOTION.</h2><p>Eine Kollektion über Substanz, Silhouette und Bewegung. Heavyweight Pieces, reduziert auf das, was Form erzeugt.</p><div class="v21-campaign-meta"><span>240–430 GSM</span><span>OVERSIZED</span><span>2026</span></div><a class="btn primary" href="campaign.html">ENTER CAMPAIGN</a></div></div>`;
    ($('.v18-spotlight')||$('#bundle')||$('#bestsellers'))?.after(sec);
  }

  function bundleAuthority(){
    const box=$('#bundle .bundle');if(!home()||!box||$('.v21-bundle-showcase',box)||typeof PRODUCTS==='undefined')return;
    const p=PRODUCTS.shirt,grid=$('.bundle-grid',box),show=document.createElement('div');show.className='v21-bundle-showcase';show.innerHTML='<figure class="v21-bundle-piece"><span>01</span><img alt="Bundle Shirt 1"></figure><figure class="v21-bundle-piece"><span>02</span><img alt="Bundle Shirt 2"></figure>';grid?.before(show);
    const economics=document.createElement('div');economics.className='v21-bundle-economics';economics.innerHTML='<div><span>Einzelpreis 2×</span><del>85,98 €</del><span class="v21-bundle-save">Du sparst 16,08 €</span></div><div><span>2-PACK</span><strong>69,90 €</strong></div>';show.after(economics);
    const c1=$('#bC1'),c2=$('#bC2'),imgs=$$('img',show);const set=(img,color)=>{const g=p.gallery[color]||p.gallery[p.colors[0]],u=g[0];img.src=image(u,760)};const render=()=>{set(imgs[0],c1?.value||p.colors[0]);set(imgs[1],c2?.value||p.colors[1]||p.colors[0])};c1?.addEventListener('change',render);c2?.addEventListener('change',render);render();
  }

  function materialFit(){
    if(!home()||$('.v20-material-fit')||typeof PRODUCTS==='undefined')return;
    const ids=['shirt','hoodie','zipper'],gsm=[240,380,430],s=document.createElement('section');s.className='v20-material-fit';s.innerHTML='<div class="eye">MATERIAL / FIT EXPERIENCE</div><h2>CHOOSE<br>THE WEIGHT.</h2><div class="v20-mf-grid"><div class="v20-mf-stage"><img alt="NOVAWEAR Materialvergleich" loading="lazy"></div><div class="v20-mf-card"><div class="v20-mf-readout"><div><strong>240</strong><span>GSM</span></div><span class="v20-mf-desc"></span></div><input type="range" min="0" max="2" step="1" value="0" aria-label="Materialgewicht wählen"><div class="v20-mf-labels"><span>240</span><span>380</span><span>430</span></div><div class="v20-fit-modes" role="group" aria-label="Fit wählen"><button class="on" type="button" data-fit="clean">CLEAN</button><button type="button" data-fit="oversized">OVERSIZED</button><button type="button" data-fit="roomy">ROOMY</button></div><div class="v20-fit-copy"></div></div></div>';
    ($('#whyHeavy')||$('#bundle'))?.after(s);const range=$('input[type=range]',s),img=$('img',s),value=$('strong',s),desc=$('.v20-mf-desc',s),fitCopy=$('.v20-fit-copy',s);let mode='oversized';const fitText={clean:'Klarer und kompakter – weniger zusätzliches Volumen.',oversized:'Der vorgesehene NOVAWEAR Look: Drop, Struktur und bewusste Weite.',roomy:'Mehr Raum und stärkerer Streetwear-Charakter.'};
    const render=()=>{const i=+range.value,p=PRODUCTS[ids[i]],u=p.gallery[p.colors[0]][0];img.src=image(u,1000);value.textContent=gsm[i];desc.textContent=i===0?'Strukturiertes Shirtgewicht – präsent und alltagstauglich.':i===1?'Mehr Volumen und Wärme mit ruhigerem Fall.':'Maximale Substanz im Zipper mit klarer Form.';fitCopy.textContent=fitText[mode]};range.addEventListener('input',render);$$('[data-fit]',s).forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.fit;$$('[data-fit]',s).forEach(x=>x.classList.toggle('on',x===b));render()}));render();
  }

  function shoppableEditorial(){
    if(!home()||$('.v20-editorial')||typeof PRODUCTS==='undefined')return;
    const s=document.createElement('section');s.className='v20-editorial';s.innerHTML='<div class="eye">SHOP THE EDITORIAL</div><h2>BUILD<br>THE LOOK.</h2><div class="v20-editorial-stage"><div class="v20-ed-piece v20-ed-shirt"></div><div class="v20-ed-piece v20-ed-hoodie"></div><div class="v20-ed-piece v20-ed-pants"></div><button class="v20-hotspot" type="button" data-i="shirt" aria-label="Formshift Shirt anzeigen">+</button><button class="v20-hotspot" type="button" data-i="hoodie" aria-label="Formshift Hoodie anzeigen">+</button><button class="v20-hotspot" type="button" data-i="pants" aria-label="Axis Sweatpants anzeigen">+</button><div class="v20-editorial-panel" aria-live="polite"></div></div>';
    ($('#lookBuilder')||$('#fitSection'))?.after(s);const stage=$('.v20-editorial-stage',s);['shirt','hoodie','pants'].forEach(id=>{const p=PRODUCTS[id],u=p.gallery[p.colors[0]][0],el=$('.v20-ed-'+id,stage);el.style.backgroundImage=`url("${image(u,900)}")`});const panel=$('.v20-editorial-panel',s);$$('.v20-hotspot',s).forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.i,p=PRODUCTS[id];panel.innerHTML=`<b>${p.short}</b><span>${p.gsm} GSM · ${p.fit} · ${moneySafe(p.price)}</span><a href="product-${id}.html">PIECE ANSEHEN</a>`;panel.classList.add('open');track22('editorial_hotspot',{product:id})}));
  }

  function community(){
    if(!home()||$('.v21-community')||typeof PRODUCTS==='undefined')return;
    const all=live();let count=0,total=0;if(all)Object.values(all).forEach(x=>{if(Number(x?.count)>0&&Number(x?.rating)>0){count+=Number(x.count);total+=Number(x.rating)*Number(x.count)}});const agg=count?{count,rating:total/count}:null,sec=document.createElement('section');sec.className='v21-community';sec.innerHTML=`<div class="v21-community-head"><div><div class="eye" style="color:#666">COMMUNITY / PROOF</div><h2>WORN.<br>NOT CLAIMED.</h2></div><p>Bewertungen und Kundenmedien werden ausschließlich aus echten verbundenen Quellen dargestellt.</p></div><div class="v21-community-summary">${agg?`<div><b>${agg.rating.toFixed(1)} ★</b><span>Live Rating</span></div><div><b>${agg.count}</b><span>echte Bewertungen</span></div>`:'<div><b>LOOX LIVE</b><span>Rating nach Verbindung</span></div><div><b>VERIFIED</b><span>nur echte Käufe</span></div>'}<div><b>FIT DATA</b><span>Größe & Fit aus Reviews</span></div><div><b>CREATOR MEDIA</b><span>Live nach Freigabe</span></div></div><div class="v21-community-media"></div><div class="v21-community-live">Live-Slot für Loox Reviews, verifizierte Kundenbilder und freigegebene Creator-Clips. Keine erfundenen Sterne oder Kaufzahlen.</div>`;
    const media=$('.v21-community-media',sec);['shirt','hoodie','pants','zipper'].forEach((id,i)=>{const p=PRODUCTS[id],g=p.gallery[p.colors[0]],u=g[Math.min(i,g.length-1)]||g[0],a=document.createElement('a');a.href=`product-${id}.html`;a.className='v21-community-card';a.innerHTML=`<div class="v21-media-state">${agg?'PRODUCT / COMMUNITY CONTEXT':'EDITORIAL / LIVE UGC SLOT'}</div><img src="${image(u,760)}" loading="lazy" alt="${p.short}"><footer><b>${p.short}</b><span>${p.gsm} GSM · ${p.fit}</span></footer>`;media.appendChild(a)});($('#socialProof')||$('#earlyAccess'))?.before(sec);
  }

  function renderSaved(){
    if(!savedPage()||typeof PRODUCTS==='undefined')return;const grid=$('#savedGrid');if(!grid)return;const ids=saved();
    if(!ids.length){grid.innerHTML='<div class="v21-saved-empty"><h2>NO SAVED PIECES YET.</h2><p>Speichere deine Favoriten aus der Collection und vergleiche sie später.</p><a class="btn primary" href="collection.html">COLLECTION ÖFFNEN</a></div>';return}
    grid.innerHTML=ids.map(id=>{const p=PRODUCTS[id],u=p.gallery[p.colors[0]][0];return `<article class="v21-saved-card" data-saved="${id}"><a href="product-${id}.html"><img src="${image(u,700)}" loading="lazy" alt="${p.short}"></a><div class="v21-saved-card-body"><b>${p.short}</b><span>${p.gsm} GSM · ${p.fit} · ${moneySafe(p.price)}</span><div class="v21-saved-actions"><a href="product-${id}.html">ÖFFNEN</a><button type="button" data-remove="${id}" aria-label="Entfernen">×</button></div></div></article>`}).join('');
    $$('[data-remove]',grid).forEach(b=>b.onclick=()=>{writeSaved(saved().filter(x=>x!==b.dataset.remove));renderSaved();document.querySelectorAll('[data-v21-saved-count]').forEach(x=>x.textContent=saved().length)});
  }

  function aboutOrigin(){
    if(!aboutPage()||$('.v21-origin'))return;const main=$('main');if(!main)return;const s=document.createElement('section');s.className='v21-origin';s.innerHTML='<div class="eye">WHY NOVAWEAR EXISTS</div><h2>PRESENCE<br>WITHOUT NOISE.</h2><p>NOVAWEAR baut Heavyweight-Silhouetten für Menschen, die Präsenz nicht über Lautstärke definieren. Materialgewicht, Form und Bewegung stehen vor unnötiger Dekoration.</p><div class="v21-origin-grid"><div><b>SUBSTANCE</b><span>Material, das sich nicht beliebig anfühlt.</span></div><div><b>FORM</b><span>Oversized mit Struktur statt formloser Weite.</span></div><div><b>MOTION</b><span>Pieces, die im Stand und in Bewegung funktionieren.</span></div></div>';main.appendChild(s);
  }

  function fixCopy(){document.body.innerHTML=document.body.innerHTML.replaceAll('gekaute Größe','gekaufte Größe')}
  function init(){setTimeout(()=>{heroAuthority();campaignPreview();bundleAuthority();materialFit();shoppableEditorial();community();renderSaved();aboutOrigin();fixCopy()},820)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
