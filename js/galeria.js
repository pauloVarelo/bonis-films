(function(){
  function toast(m){ var t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('show'); }, 2200); }
  var share = document.getElementById('share'), open = document.getElementById('openShare');
  function setShare(v){ share.hidden = !v; open.setAttribute('aria-expanded', v ? 'true' : 'false'); if(v){ document.getElementById('copyBtn').textContent = 'Copiar'; document.getElementById('closeShare').focus(); } }
  open.addEventListener('click', function(){ setShare(share.hidden); });
  document.getElementById('closeShare').addEventListener('click', function(){ setShare(false); open.focus(); });
  var link = document.getElementById('shareLink');
  document.getElementById('copyBtn').addEventListener('click', function(){ var b = this; function ok(){ b.textContent = 'Copiado'; } try { navigator.clipboard.writeText('https://' + link.value).then(ok, function(){ link.select(); ok(); }); } catch(e){ link.select(); ok(); } });
  document.getElementById('waLink').href = 'https://wa.me/?text=' + encodeURIComponent('A nossa história, por Bonis Films: https://' + link.value);
  var sw = document.getElementById('guestSwitch');
  sw.addEventListener('click', function(){ var on = sw.getAttribute('aria-checked') !== 'true'; sw.setAttribute('aria-checked', String(on)); toast(on ? 'Convidados podem baixar as fotos' : 'Downloads liberados só para os titulares'); });
  document.getElementById('playBtn').addEventListener('click', function(){ toast('No site final, o filme toca aqui em alta qualidade'); });
  document.querySelectorAll('[data-dl]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); toast('Download de “' + b.dataset.dl + '” iniciado (simulação)'); }); });
  var buttons = document.querySelectorAll('.filters button'), figs = document.querySelectorAll('#grid figure'), count = document.getElementById('photoCount');
  buttons.forEach(function(b){ b.addEventListener('click', function(){ var f = b.dataset.filter, n = 0;
    buttons.forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    figs.forEach(function(fig){ var show = f === 'Todas' || fig.dataset.cat === f; fig.hidden = !show; if(show) n++; });
    count.textContent = n + (n === 1 ? ' frame' : ' frames'); }); });
  var lb = document.getElementById('lightbox'), lbImg = document.getElementById('lightboxImg'), last = null;
  function openLb(fig){ var img = fig.querySelector('img'); lbImg.src = img.src; lbImg.alt = img.alt; lb.hidden = false; last = fig; document.getElementById('closeLightbox').focus(); }
  function closeLb(){ lb.hidden = true; if(last) last.focus(); }
  figs.forEach(function(fig){ fig.addEventListener('click', function(){ openLb(fig); }); fig.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openLb(fig); } }); });
  document.getElementById('closeLightbox').addEventListener('click', closeLb);
  lb.addEventListener('click', function(e){ if(e.target === lb) closeLb(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ if(!lb.hidden) closeLb(); else if(!share.hidden){ setShare(false); open.focus(); } } });
})();
