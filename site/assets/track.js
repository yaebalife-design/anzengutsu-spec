(function(){
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if(!a || typeof window.gtag !== 'function') return;
    var d = document.body ? document.body.dataset : {};
    var p = {page_type: d.ptype || '', model: d.model || ''};
    var box = a.closest('[data-shop]');
    if(box){
      p.shop = box.getAttribute('data-shop') || ''; p.link_kind = box.getAttribute('data-kind') || ''; p.block = box.getAttribute('data-block') || '';
      if(box.getAttribute('data-model')) p.model = box.getAttribute('data-model');
      window.gtag('event', 'shop_click', p);
    } else if(a.hasAttribute('data-src')){
      p.host = a.hostname || '';
      window.gtag('event', 'source_click', p);
    }
  }, true);
})();
