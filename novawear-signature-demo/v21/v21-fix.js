(function(){
  function cleanWishHandlers(){document.querySelectorAll('#grid [data-wish],.v21-wish-btn').forEach(b=>{b.onclick=null})}
  function cleanHeroLabel(){const copy=document.querySelector('.hero-copy');if(!copy)return;const eye=copy.querySelector('.eye');if(eye)eye.textContent='CAMPAIGN 001'}
  function init(){cleanHeroLabel();cleanWishHandlers();const grid=document.getElementById('grid');if(grid)new MutationObserver(()=>setTimeout(cleanWishHandlers,0)).observe(grid,{childList:true,subtree:true});setTimeout(()=>{cleanHeroLabel();cleanWishHandlers()},700)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
