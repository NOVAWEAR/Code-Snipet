(function(){
 function clean(){
  const m=location.pathname.match(/product-(shirt|hoodie|pants|zipper)/),id=m?.[1];
  if(id){const d=window.NOVAWEAR_REVIEW_DATA?.[id];if(!d?.count){document.getElementById('v23Reviews')?.remove();const e=document.querySelector('.v23-getlook .eye');if(e)e.textContent='03 · COMPLETE THE LOOK';}}
  document.querySelectorAll('.v23-proof[data-empty="true"]').forEach(x=>x.hidden=true);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(clean,1150));else setTimeout(clean,1150);
})();
