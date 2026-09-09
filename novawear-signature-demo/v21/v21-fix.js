(function(){
  function cleanWishHandlers(){document.querySelectorAll('.v21-wish-btn').forEach(b=>{b.onclick=null})}
  function init(){cleanWishHandlers();const grid=document.getElementById('grid');if(grid)new MutationObserver(()=>setTimeout(cleanWishHandlers,0)).observe(grid,{childList:true,subtree:true});setTimeout(cleanWishHandlers,700)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
