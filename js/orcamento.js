(function(){
  var PACKS = { essencia:{ nome:'Pacote Essência', v:7600, drone:true }, historia:{ nome:'Pacote História', v:5400, drone:true }, memoria:{ nome:'Pacote Memória', v:4000, drone:false } };
  var EXTRAS = [
    { id:'filmmaker', nome:'Filmmaker Extra', v:1400, d:'Mais um filmmaker para toda a diária contratada.' },
    { id:'hora', nome:'Hora Extra', v:800, d:'Contrate mais horas da nossa equipe disponível para seu evento.', qty:true },
    { id:'civil', nome:'Casamento Civil', v:1400, d:'Cobertura de até 5h do casamento civil, desde o cartório até a celebração pós.' },
    { id:'cerimonia', nome:'Cerimônia Completa', v:1000, d:'Entregamos um vídeo adicional com a gravação na íntegra da cerimônia.' },
    { id:'drone', nome:'Captação de Drone', v:700, d:'Um outro ângulo apresentando todo o cenário e adicionando mais contexto ao grande dia.' },
    { id:'prova', nome:'Ensaio Prova de Vestido', v:700, d:'Registre a sua prova final do vestido em um ensaio especial antes do casamento.' },
    { id:'sde', nome:'Same Day Edit', v:2750, d:'Um vídeo entregue no final da festa com os melhores momentos do dia.' }
  ];
  var state = { pack:'historia', ex:{}, horas:1 };
  function brl(n){ return 'R$ ' + n.toLocaleString('pt-BR', { minimumFractionDigits:2, maximumFractionDigits:2 }); }
  var chev = '<span class="chev" aria-hidden="true">›</span>';

  document.getElementById('exList').innerHTML = EXTRAS.map(function(e){
    return '<div class="ex">' + chev + '<div><b>' + e.nome + ' | <span>' + brl(e.v) + (e.qty ? ' por hora' : '') + '</span></b><p>' + e.d + '</p></div></div>';
  }).join('');

  function renderChecks(){
    var p = PACKS[state.pack];
    document.getElementById('exChecks').innerHTML = EXTRAS.map(function(e){
      var inc = e.id === 'drone' && p.drone;
      if(inc) delete state.ex.drone;
      var on = !!state.ex[e.id];
      return '<label class="chk' + (inc ? ' dis' : '') + '"><input type="checkbox" data-ex="' + e.id + '"' + (on ? ' checked' : '') + (inc ? ' disabled' : '') + '><span>' + e.nome + '</span>' +
        (inc ? '<span class="pr">incluso</span>' : e.qty && on ? '<span class="stepper"><button type="button" data-step="-1" aria-label="Menos uma hora">−</button><b aria-live="polite">' + state.horas + 'h</b><button type="button" data-step="1" aria-label="Mais uma hora">+</button></span>' : '<span class="pr">' + brl(e.v) + '</span>') + '</label>';
    }).join('');
  }
  function lines(){
    var p = PACKS[state.pack], out = [{ t:p.nome, v:p.v }];
    EXTRAS.forEach(function(e){ if(state.ex[e.id]) out.push({ t:e.nome + (e.qty ? ' (' + state.horas + 'h)' : ''), v:e.v * (e.qty ? state.horas : 1) }); });
    return out;
  }
  function message(){
    var ls = lines(), tot = ls.reduce(function(a,l){ return a + l.v; }, 0), pix = tot - PACKS[state.pack].v * 0.05;
    var n = document.getElementById('qNames').value.trim(), d = document.getElementById('qDate').value, pl = document.getElementById('qPlace').value.trim();
    var dt = d ? d.split('-').reverse().join('/') : '';
    return 'Oi, Gabi e João! Vim pelo site e montei um orçamento:\n\n' + ls.map(function(l){ return '• ' + l.t + ': ' + brl(l.v); }).join('\n') +
      '\n\nTotal: ' + brl(tot) + '\nCom PIX (5% no pacote): ' + brl(pix) +
      (n || dt || pl ? '\n\n' + (n ? 'Casal: ' + n + '\n' : '') + (dt ? 'Data: ' + dt + '\n' : '') + (pl ? 'Local: ' + pl : '') : '') +
      '\n\nPodem me passar a disponibilidade?';
  }
  function update(){
    var ls = lines(), tot = ls.reduce(function(a,l){ return a + l.v; }, 0), disc = PACKS[state.pack].v * 0.05;
    document.getElementById('sumList').innerHTML = ls.map(function(l){ return '<li><span>' + l.t + '</span><span>' + brl(l.v) + '</span></li>'; }).join('');
    document.getElementById('sumTotal').textContent = brl(tot);
    document.getElementById('sumPix').textContent = 'ou ' + brl(tot - disc) + ' via PIX (5% de desconto no pacote)';
    document.getElementById('sendWa').href = 'https://wa.me/?text=' + encodeURIComponent(message());
  }
  document.querySelectorAll('input[name="pack"]').forEach(function(r){ r.addEventListener('change', function(){ state.pack = r.value; renderChecks(); update(); }); });
  document.getElementById('exChecks').addEventListener('change', function(e){ var id = e.target.dataset.ex; if(!id) return; state.ex[id] = e.target.checked; if(id === 'hora' && !e.target.checked) state.horas = 1; renderChecks(); update(); var el = document.querySelector('[data-ex="' + id + '"]'); if(el) el.focus(); });
  document.getElementById('exChecks').addEventListener('click', function(e){ var b = e.target.closest('[data-step]'); if(!b) return; e.preventDefault(); state.horas = Math.max(1, Math.min(10, state.horas + +b.dataset.step)); renderChecks(); update(); var nb = document.querySelector('[data-step="' + b.dataset.step + '"]'); if(nb) nb.focus(); });
  ['qNames','qDate','qPlace'].forEach(function(id){ document.getElementById(id).addEventListener('input', update); });
  document.querySelectorAll('[data-pack]').forEach(function(a){ a.addEventListener('click', function(){ state.pack = a.dataset.pack; document.querySelector('input[name="pack"][value="' + state.pack + '"]').checked = true; renderChecks(); update(); }); });
  document.getElementById('copyQ').addEventListener('click', function(){
    var b = this, txt = message();
    function ok(){ b.textContent = 'Orçamento copiado'; setTimeout(function(){ b.textContent = 'Copiar orçamento'; }, 2000); }
    try { navigator.clipboard.writeText(txt).then(ok, function(){ prompt('Copie o orçamento:', txt); }); } catch(e){ prompt('Copie o orçamento:', txt); }
  });
  renderChecks(); update();
})();
