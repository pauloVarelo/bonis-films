var IMG = {"1": "img/frame-1.jpg", "2": "img/frame-2.jpg", "3": "img/frame-3.jpg", "4": "img/frame-4.jpg", "5": "img/frame-5.jpg", "6": "img/frame-6.jpg", "7": "img/frame-7.jpg", "8": "img/frame-8.jpg"};

var BASE = {
  bonis:      { nome:'Bonis', grupo:'Casamento', desc:'Identidade oficial: off-white, areia e verde', cover:2, bg:'#F3F2ED', text:'#24342A', muted:'#5F6B62', line:'#D9D6C7', surface:'#E6E3D7', band:'#1C462E', bandText:'#D9D6C7', accents:['#1C462E','#9C8978','#B0674F','#3F6E7A'], font:'dmsans', body:'dmsans', filter:'none', caseT:'none', track:'-.045em', radius:'24px', amp:'normal', align:'left', blocks:['abertura','filme','momentos','fotografias','mensagem','creditos','downloads'], abertura:'foto', fotos:'grade' },
  cinema:     { nome:'Cinema', grupo:'Casamento', desc:'Escuro e imersivo, com tríptico de abertura', cover:2, bg:'#1C1A1B', text:'#F1ECE2', muted:'#B5AA97', line:'#3A3532', surface:'#26231F', band:'#2E3B3D', bandText:'#D9C9B2', accents:['#C29A7E','#A9B6A3','#D9C9B2','#C98F7A'], font:'instrument', filter:'none', caseT:'none', track:'-.01em', radius:'6px', amp:'italic', align:'left', blocks:['abertura','filme','momentos','fotografias','mensagem','creditos','downloads'], abertura:'triptico', fotos:'grade' },
  editorial:  { nome:'Editorial', grupo:'Casamento', desc:'Claro, arejado, foto única de capa', cover:1, bg:'#F4EFE6', text:'#241F1C', muted:'#62594E', line:'#DCD2C2', surface:'#EAE3D6', band:'#38312C', bandText:'#D9C9B2', accents:['#724B3E','#2E3B3D','#6A5A46','#8A4F3F'], font:'instrument', filter:'none', caseT:'none', track:'-.01em', radius:'4px', amp:'italic', align:'left', blocks:['abertura','mensagem','filme','fotografias','linha','creditos','downloads'], abertura:'foto', fotos:'mosaico' },
  classico:   { nome:'Clássico', grupo:'Casamento', desc:'Marfim e dourado, tudo centralizado', cover:8, bg:'#F8F4EC', text:'#2B2420', muted:'#6A5F52', line:'#E3D9C8', surface:'#EFE8DA', band:'#4A3F33', bandText:'#E8D9BC', accents:['#9A7B4F','#7C6A55','#8C5E4A','#5E6B58'], font:'newsreader', filter:'none', caseT:'none', track:'0', radius:'2px', amp:'italic', align:'center', blocks:['abertura','votos','filme','fotografias','mensagem','creditos','downloads'], abertura:'foto', fotos:'grade' },
  noir:       { nome:'Noir', grupo:'Casamento', desc:'Preto e branco, títulos em caixa alta', cover:3, bg:'#121212', text:'#EDEDED', muted:'#9C9C9C', line:'#2C2C2C', surface:'#1C1C1C', band:'#000000', bandText:'#BDBDBD', accents:['#D8D2C8','#FFFFFF','#B9A68E','#9AA3A8'], font:'grotesk', filter:'grayscale(1) contrast(1.06)', caseT:'uppercase', track:'.08em', radius:'0', amp:'normal', align:'left', blocks:['abertura','filme','destaque','fotografias','creditos','downloads'], abertura:'foto', fotos:'filme' },
  dourada:    { nome:'Hora dourada', grupo:'Casamento', desc:'Tons quentes de fim de tarde', cover:5, bg:'#2A1F17', text:'#F4E6D4', muted:'#C8B39A', line:'#45362A', surface:'#33271D', band:'#4A2F1F', bandText:'#F0D2AE', accents:['#E0A96D','#D98E6C','#C9B37E','#EBC9A0'], font:'italiana', filter:'sepia(.18) saturate(1.08)', caseT:'none', track:'.02em', radius:'8px', amp:'normal', align:'center', blocks:['abertura','trilha','filme','destaque','fotografias','mensagem','downloads'], abertura:'triptico', fotos:'mosaico' },
  destino:    { nome:'Destino', grupo:'Casamento', desc:'Praia e campo, abertura com vídeo', cover:7, bg:'#EEF0EC', text:'#1F2B30', muted:'#556267', line:'#D3DAD6', surface:'#E2E7E3', band:'#2F4A52', bandText:'#D4E0DF', accents:['#3F6E7A','#8A6E4F','#5D7A5E','#A0634E'], font:'instrument', filter:'saturate(.92)', caseT:'none', track:'-.01em', radius:'10px', amp:'italic', align:'left', blocks:['abertura','filme','trilha','fotografias','linha','mensagem','downloads'], abertura:'video', fotos:'carrossel' },
  minimal:    { nome:'Minimal', grupo:'Casamento', desc:'Branco, sóbrio, só o essencial', cover:3, bg:'#FAFAF8', text:'#1A1A1A', muted:'#666661', line:'#E6E6E1', surface:'#F0F0EC', band:'#1A1A1A', bandText:'#CFCFC8', accents:['#1A1A1A','#7A6450','#4F5D63','#8A5A4A'], font:'grotesk', filter:'none', caseT:'uppercase', track:'.12em', radius:'0', amp:'normal', align:'left', blocks:['abertura','filme','fotografias','downloads'], abertura:'split', fotos:'grade' },
  intimista:  { nome:'Intimista', grupo:'Ensaio', desc:'Pré-wedding e ensaios, compacto', cover:6, bg:'#EDE6DA', text:'#2A2522', muted:'#5E564C', line:'#D3C8B6', surface:'#E2D8C8', band:'#4C5A50', bandText:'#E2D8C8', accents:['#8A5A44','#4C5A50','#6E5F4C','#93604F'], font:'instrument', filter:'none', caseT:'none', track:'-.01em', radius:'6px', amp:'italic', align:'left', blocks:['abertura','filme','fotografias','mensagem','downloads'], abertura:'split', fotos:'carrossel' },
  jardim:     { nome:'Jardim', grupo:'Casamento', desc:'Verde suave, casamentos ao ar livre', cover:1, bg:'#EEF1E8', text:'#22301F', muted:'#56634F', line:'#D3DBC9', surface:'#E2E8DA', band:'#3E5238', bandText:'#DCE5D2', accents:['#5D7A4E','#9A7B4F','#B0674F','#3F5E57'], font:'cormorant', filter:'saturate(1.05)', caseT:'none', track:'0', radius:'12px', amp:'italic', align:'center', blocks:['abertura','filme','linha','fotografias','votos','mensagem','downloads'], abertura:'split', fotos:'mosaico' },
  vintage:    { nome:'Vintage', grupo:'Casamento', desc:'Película antiga, sépia e serifa clássica', cover:4, bg:'#EFE4D2', text:'#3A2A1E', muted:'#6E5A47', line:'#D8C7AD', surface:'#E6D8C0', band:'#5A3E2B', bandText:'#EAD7B8', accents:['#9C5B35','#6F5A3A','#8E3B2E','#4E5B44'], font:'playfair', filter:'sepia(.45) contrast(1.05) saturate(.85)', caseT:'none', track:'0', radius:'2px', amp:'italic', align:'center', blocks:['abertura','filme','destaque','fotografias','creditos','downloads'], abertura:'foto', fotos:'filme' },
  romance:    { nome:'Romance', grupo:'Casamento', desc:'Rosé delicado, títulos em caligrafia', cover:5, bg:'#F6ECEA', text:'#3B2629', muted:'#7A5C5F', line:'#E8D5D3', surface:'#F0E0DE', band:'#6E4248', bandText:'#F2D9D9', accents:['#B85C6B','#9C6B5A','#8A5A6E','#C98F7A'], font:'pinyon', body:'jost', filter:'none', caseT:'none', track:'0', radius:'14px', amp:'normal', align:'center', blocks:['abertura','votos','filme','fotografias','trilha','mensagem','downloads'], abertura:'triptico', fotos:'carrossel' },
  gala:       { nome:'Gala', grupo:'Evento', desc:'Preto e dourado, galas e formaturas', cover:8, bg:'#0F0E0D', text:'#F3EBDD', muted:'#B3A58D', line:'#2E2A24', surface:'#1A1815', band:'#2B2418', bandText:'#E5CF9F', accents:['#C9A45C','#E5CF9F','#B08D57','#D8D2C8'], font:'bodoni', filter:'contrast(1.04)', caseT:'none', track:'0', radius:'0', amp:'italic', align:'center', blocks:['abertura','filme','momentos','fotografias','mensagem','creditos','downloads'], abertura:'triptico', fotos:'grade' },
  urbano:     { nome:'Urbano', grupo:'Ensaio', desc:'Concreto e cor viva, ensaios na cidade', cover:6, bg:'#E6E6E3', text:'#161616', muted:'#5C5C58', line:'#CFCFCA', surface:'#DADAD6', band:'#161616', bandText:'#CFCFCA', accents:['#D4552B','#2E4F5C','#161616','#8A6E4F'], font:'syne', body:'dmsans', filter:'contrast(1.05) saturate(.9)', caseT:'uppercase', track:'.02em', radius:'0', amp:'normal', align:'left', blocks:['abertura','filme','fotografias','bastidores','downloads'], abertura:'split', fotos:'grade' },
  celebracao: { nome:'Celebração', grupo:'Evento', desc:'Festas e formaturas, com recados', cover:4, bg:'#233032', text:'#F1ECE2', muted:'#C3C2B2', line:'#3A4749', surface:'#2C3A3C', band:'#38312C', bandText:'#D9C9B2', accents:['#D9C9B2','#C29A7E','#E3B98F','#B9C7B5'], font:'instrument', filter:'none', caseT:'none', track:'-.01em', radius:'6px', amp:'italic', align:'left', blocks:['abertura','fotografias','filme','bastidores','recados','downloads'], abertura:'triptico', fotos:'grade' }
};
var FONTS = {
  dmsans:{ nome:'DM Sans', css:"'DM Sans', 'Helvetica Neue', Arial, sans-serif" },
  instrument:{ nome:'Instrument', css:"'Instrument Serif', Georgia, serif" },
  newsreader:{ nome:'Newsreader', css:"'Newsreader', Georgia, serif" },
  italiana:{ nome:'Italiana', css:"'Italiana', 'Didot', Georgia, serif" },
  grotesk:{ nome:'Grotesk', css:"'Hanken Grotesk', 'Helvetica Neue', Arial, sans-serif" },
  cormorant:{ nome:'Cormorant', css:"'Cormorant Garamond', Garamond, Georgia, serif" },
  playfair:{ nome:'Playfair', css:"'Playfair Display', Georgia, serif" },
  bodoni:{ nome:'Bodoni', css:"'Bodoni Moda', Didot, Georgia, serif" },
  dmserif:{ nome:'DM Serif', css:"'DM Serif Display', Georgia, serif" },
  fraunces:{ nome:'Fraunces', css:"'Fraunces', Georgia, serif" },
  marcellus:{ nome:'Marcellus', css:"'Marcellus', Georgia, serif" },
  pinyon:{ nome:'Pinyon', css:"'Pinyon Script', 'Snell Roundhand', cursive" },
  syne:{ nome:'Syne', css:"'Syne', 'Helvetica Neue', Arial, sans-serif" }
};
var BODY = {
  hanken:{ nome:'Hanken', css:"'Hanken Grotesk', 'Helvetica Neue', Arial, sans-serif" },
  dmsans:{ nome:'DM Sans', css:"'DM Sans', 'Helvetica Neue', Arial, sans-serif" },
  jost:{ nome:'Jost', css:"'Jost', 'Futura', Arial, sans-serif" },
  newsreader:{ nome:'Newsreader', css:"'Newsreader', Georgia, serif" }
};
var PALETTE = ['#724B3E','#9C8978','#C29A7E','#D9C9B2','#2E3B3D','#A9B6A3','#5D7A4E','#3F6E7A','#9A7B4F','#C9A45C','#B85C6B','#8A4F3F','#D4552B','#1A1A1A','#FFFFFF'];
var BGS = ['#1C1A1B','#0F0E0D','#2A1F17','#233032','#F4EFE6','#F8F4EC','#FAFAF8','#EEF1E8','#F6ECEA','#E6E6E3'];
var TEXTS = ['#F1ECE2','#FFFFFF','#E9DFCF','#241F1C','#1A1A1A','#3B2629'];
function hx(n){ return ('0' + Math.round(Math.max(0, Math.min(255, n))).toString(16)).slice(-2); }
function rgb(h){ h = h.replace('#',''); if(h.length === 3) h = h.split('').map(function(x){ return x + x; }).join(''); return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]; }
function mix(a, b, t){ var A = rgb(a), B = rgb(b); return '#' + hx(A[0]*(1-t)+B[0]*t) + hx(A[1]*(1-t)+B[1]*t) + hx(A[2]*(1-t)+B[2]*t); }
function lum(h){ var c = rgb(h).map(function(v){ v /= 255; return v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); }); return .2126*c[0] + .7152*c[1] + .0722*c[2]; }
function contrast(a, b){ var x = lum(a), y = lum(b); return (Math.max(x,y) + .05) / (Math.min(x,y) + .05); }
function toHsl(h){ var c = rgb(h).map(function(v){ return v/255; }), mx = Math.max.apply(0,c), mn = Math.min.apply(0,c), l = (mx+mn)/2, s = 0, hu = 0, d = mx - mn;
  if(d){ s = l > .5 ? d/(2-mx-mn) : d/(mx+mn); hu = mx === c[0] ? (c[1]-c[2])/d + (c[1] < c[2] ? 6 : 0) : mx === c[1] ? (c[2]-c[0])/d + 2 : (c[0]-c[1])/d + 4; hu *= 60; }
  return [Math.round(hu), Math.round(s*100), Math.round(l*100)]; }
function fromHsl(h, s, l){ s /= 100; l /= 100; var k = function(n){ return (n + h/30) % 12; }, a = s * Math.min(l, 1-l), f = function(n){ return l - a * Math.max(-1, Math.min(k(n)-3, Math.min(9-k(n), 1))); };
  return '#' + hx(f(0)*255) + hx(f(8)*255) + hx(f(4)*255); }
function validHex(v){ return /^#?[0-9a-fA-F]{6}$/.test(v); }
function colorsOf(g){
  var t = T(g.template), co = g.colors || {}, bg = co.bg || t.bg, tx = co.text || t.text, custom = !!(co.bg || co.text);
  return { bg:bg, text:tx, muted: custom ? mix(tx, bg, .38) : t.muted, line: custom ? mix(tx, bg, .84) : t.line, surface: custom ? mix(tx, bg, .93) : t.surface, accent:g.accent };
}
var BLOCKS = {
  abertura:   { nome:'Abertura',             fixo:true, def:function(t){ return { layout:t.abertura, imgs:[2,1,3], foto:t.cover || 1, frase:'O nosso grande dia' }; } },
  filme:      { nome:'Filme principal',      def:function(){ return { titulo:'O nosso filme', capa:7, duracao:'[duração]', aprovado:false }; } },
  momentos:   { nome:'Teaser e cerimônia',   def:function(){ return { titulo:'Outros momentos em movimento' }; } },
  bastidores: { nome:'Bastidores',           def:function(){ return { titulo:'Por trás das câmeras' }; } },
  fotografias:{ nome:'Fotografias',          def:function(t){ return { titulo:'Nossas memórias', layout:t.fotos }; } },
  destaque:   { nome:'Foto em destaque',     inter:true, def:function(){ return { foto:5, frase:'[Uma frase que resuma o dia]' }; } },
  votos:      { nome:'Votos',                def:function(){ return { titulo:'Os votos', v1:'[Trecho dos votos]', v2:'[Trecho dos votos]' }; } },
  trilha:     { nome:'Trilha sonora',        inter:true, def:function(){ return { musica:'[Nome da música]', artista:'[Artista]' }; } },
  mensagem:   { nome:'Mensagem',             def:function(){ return { texto:'Cada casamento é uma história digna de estar no cinema. Obrigado por nos deixarem contar a de vocês.', assinatura:'Gabi e João' }; } },
  linha:      { nome:'Linha do tempo',       def:function(){ return { titulo:'O nosso dia', itens:'Preparativos\nCerimônia\nFesta' }; } },
  creditos:   { nome:'Créditos',             def:function(){ return { titulo:'Créditos', fim:'Fim. Ou melhor, começo.' }; } },
  recados:    { nome:'Livro de recados',     def:function(){ return { titulo:'Deixe um recado' }; } },
  downloads:  { nome:'Downloads',            def:function(){ return { titulo:'Guardar nossas memórias' }; } }
};
var PROD = ['Agendado','Captado','Em edição','Revisão','Concluído'];

function uid(){ return 'b' + Math.random().toString(36).slice(2,8); }
function T(key){ return BASE[key] || (S.custom || []).find(function(t){ return t.id === key; }) || BASE.bonis; }
function allTemplates(){ return Object.keys(BASE).map(function(k){ return Object.assign({ id:k }, BASE[k]); }).concat(S.custom || []); }
function makeBlocks(key){
  var t = T(key);
  if(t.preset) return JSON.parse(JSON.stringify(t.preset)).map(function(b){ b.id = uid(); return b; });
  return t.blocks.map(function(type){ return { id:uid(), type:type, visible:true, s:BLOCKS[type].def(t) }; });
}
function makeGallery(key){ var t = T(key); return { template:key, accent:t.accents[0], font:t.font, body:t.body || 'hanken', colors:{}, guestDownload:true, senha:'', expira:'', blocks:makeBlocks(key) }; }
function mk(o){ return Object.assign({ telefone:'[WhatsApp]', published:null, publishedAt:null, atividade:[], recados:[] }, o); }
function demo(){
  var g1 = makeGallery('bonis'); g1.blocks.forEach(function(b){ if(b.type === 'filme') b.s.aprovado = true; });
  var g5 = makeGallery('classico'); g5.expira = '2027-11-20'; g5.blocks.forEach(function(b){ if(b.type === 'filme') b.s.aprovado = true; });
  var c5pub = JSON.parse(JSON.stringify(g5));
  var g6 = makeGallery('vintage'); g6.expira = '2027-01-20'; g6.blocks.forEach(function(b){ if(b.type === 'filme') b.s.aprovado = true; }); var g6pub = JSON.parse(JSON.stringify(g6));
  return {
    clients:[
      mk({ id:'c1', nome:'Mariana & Rafael', tipo:'Casamento', data:'2026-09-12', prazo:'2026-10-26', local:'[Local do casamento]', capa:2, producao:'Revisão',
        titulares:[{ nome:'Mariana', email:'mariana@email.com', acesso:true },{ nome:'Rafael', email:'rafael@email.com', acesso:true }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' },{ funcao:'Cerimonial', nome:'[Nome]' },{ funcao:'Vestido', nome:'[Nome]' },{ funcao:'Buffet', nome:'[Nome]' }],
        atividade:[{ t:'Corte do filme enviado para revisão', d:'há 3 dias' },{ t:'Mariana assistiu ao filme', d:'há 2 dias' },{ t:'Casal aprovou o filme', d:'ontem' }], gallery:g1 }),
      mk({ id:'c2', nome:'Beatriz & Lucas', tipo:'Casamento', data:'2026-10-03', prazo:'2026-12-01', local:'[Local do casamento]', capa:4, producao:'Em edição',
        titulares:[{ nome:'Beatriz', email:'beatriz@email.com', acesso:true },{ nome:'Lucas', email:'lucas@email.com', acesso:false }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' },{ funcao:'Cerimonial', nome:'[Nome]' }],
        atividade:[{ t:'Material captado e enviado ao Frame.io', d:'há 2 semanas' }], gallery:makeGallery('editorial') }),
      mk({ id:'c3', nome:'Ana & Pedro', tipo:'Pré-wedding', data:'2026-10-11', prazo:'2026-11-08', local:'[Praia]', capa:7, producao:'Captado',
        titulares:[{ nome:'Ana', email:'ana@email.com', acesso:true },{ nome:'Pedro', email:'pedro@email.com', acesso:true }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' }],
        atividade:[{ t:'Ensaio captado', d:'há 1 semana' }], gallery:makeGallery('intimista') }),
      mk({ id:'c4', nome:'Formatura Medicina', tipo:'Formatura', data:'2026-12-05', prazo:'2027-02-05', local:'[Local do evento]', capa:3, producao:'Agendado',
        titulares:[{ nome:'[Comissão de formatura]', email:'comissao@email.com', acesso:true }],
        fornecedores:[{ funcao:'Filme', nome:'Bonis Films · Gabi e João' }],
        atividade:[{ t:'Contrato assinado', d:'há 1 mês' }], gallery:makeGallery('celebracao') }),
      mk({ id:'c5', nome:'Luiza & Tomás', tipo:'Casamento', data:'2026-08-22', prazo:'2026-10-10', local:'[Local do casamento]', capa:8, producao:'Concluído',
        titulares:[{ nome:'Luiza', email:'luiza@email.com', acesso:true },{ nome:'Tomás', email:'tomas@email.com', acesso:true }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' },{ funcao:'Cerimonial', nome:'[Nome]' }],
        atividade:[{ t:'Galeria publicada', d:'há 9 dias' },{ t:'43 convidados acessaram a galeria', d:'há 2 dias' }], gallery:g5, published:c5pub, publishedAt:'10/10/2026',
        recados:[{ nome:'[Convidado]', texto:'[Recado de exemplo aprovado]', status:'aprovado' },{ nome:'[Convidada]', texto:'[Recado de exemplo aguardando aprovação]', status:'pendente' }] }),
      mk({ id:'c6', nome:'Camila & Diego', tipo:'Casamento', data:'2025-11-15', prazo:'2026-01-20', local:'[Local do casamento]', capa:1, producao:'Concluído',
        titulares:[{ nome:'Camila', email:'camila@email.com', acesso:true },{ nome:'Diego', email:'diego@email.com', acesso:true }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' }],
        atividade:[{ t:'Galeria publicada', d:'jan 2026' }], gallery:g6, published:g6pub, publishedAt:'20/01/2026' }),
      mk({ id:'c7', nome:'Júlia & André', tipo:'Casamento', data:'2027-04-17', prazo:'2027-06-12', local:'[Local do casamento]', capa:5, producao:'Agendado',
        titulares:[{ nome:'Júlia', email:'julia@email.com', acesso:true },{ nome:'André', email:'andre@email.com', acesso:true }],
        fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' }],
        atividade:[{ t:'Contrato assinado', d:'há 3 semanas' }], gallery:makeGallery('jardim') })
    ],
    custom:[], current:'c1', view:'painel', selected:null, device:'desktop', tplFilter:'Todos', q:'', year:'Todos'
  };
}

var KEY = 'bonis-studio-v4', S;
try { S = JSON.parse(localStorage.getItem(KEY)) || demo(); } catch(e){ S = demo(); }
var saveT;
var lastSaved = null;
function writeNow(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} var n = new Date(); lastSaved = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0'); var el = document.getElementById('saveState'); if(el){ el.classList.remove('busy'); el.querySelector('span').textContent = 'Tudo salvo · ' + lastSaved; } }
function save(){ var el = document.getElementById('saveState'); if(el){ el.classList.add('busy'); el.querySelector('span').textContent = 'Salvando…'; } clearTimeout(saveT); saveT = setTimeout(writeNow, 350); }
function year(c){ return c.data ? c.data.slice(0,4) : 'Sem data'; }
function inYear(c){ return !S.year || S.year === 'Todos' || year(c) === S.year; }
function yearChips(){
  var ys = []; S.clients.forEach(function(c){ var y = year(c); if(ys.indexOf(y) < 0) ys.push(y); }); ys.sort().reverse();
  if(ys.indexOf(S.year) < 0) S.year = 'Todos';
  return '<div class="chips" role="group" aria-label="Filtrar por ano">' + ['Todos'].concat(ys).map(function(y){ var n = y === 'Todos' ? S.clients.length : S.clients.filter(function(c){ return year(c) === y; }).length; return '<button class="chip" type="button" data-year="' + y + '" aria-pressed="' + (S.year === y) + '">' + (y === 'Todos' ? 'Todos os anos' : y) + ' <span style="opacity:.6">' + n + '</span></button>'; }).join('') + '</div>';
}
var HIST = { past:[], future:[] };
function snap(){ HIST.past.push(JSON.stringify(client().gallery)); if(HIST.past.length > 60) HIST.past.shift(); HIST.future = []; }
function undo(){ if(!HIST.past.length) return; var c = client(); HIST.future.push(JSON.stringify(c.gallery)); c.gallery = JSON.parse(HIST.past.pop()); render(); toast('Desfeito'); }
function redo(){ if(!HIST.future.length) return; var c = client(); HIST.past.push(JSON.stringify(c.gallery)); c.gallery = JSON.parse(HIST.future.pop()); render(); toast('Refeito'); }

function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]; }); }
function client(){ return S.clients.find(function(c){ return c.id === S.current; }) || S.clients[0]; }
function dmy(iso){ if(!iso) return '[data]'; var p = iso.split('-'); return p[2] + '/' + p[1] + '/' + p[0]; }
function dots(iso){ if(!iso) return '[DATA]'; var p = iso.split('-'); return p[2] + ' · ' + p[1] + ' · ' + p[0]; }
function daysTo(iso){ if(!iso) return null; var t = new Date(iso + 'T12:00:00'), n = new Date(); n.setHours(12,0,0,0); return Math.round((t - n) / 864e5); }
function slug(s){ return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,'e').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function toast(m){ var t = document.getElementById('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove('show'); }, 1800); }
function roman(n){ return ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][n-1] || n; }
function pub(c){
  if(!c.published) return { label:'Rascunho', cls:'neutral' };
  if(JSON.stringify(c.published) !== JSON.stringify(c.gallery)) return { label:'Alterações pendentes', cls:'warn' };
  return { label:'Publicada', cls:'ok' };
}
function prodTag(p){ var m = { 'Concluído':'ok', 'Revisão':'warn', 'Em edição':'info', 'Captado':'info' }; return '<span class="tag ' + (m[p] || 'neutral') + '">' + esc(p) + '</span>'; }
var I = {
  x:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  up:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
  down:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  left:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  eye:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18M10.6 5.1A10.9 10.9 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a10 10 0 0 0 4.4-1"/></svg>',
  dup:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
  undo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-4"/></svg>',
  redo:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14l5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h4"/></svg>',
  search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  play:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>',
  check:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>'
};

/* ---------- galeria ---------- */
function renderGallery(c, g, opts){
  opts = opts || {};
  var t = T(g.template), f = FONTS[g.font] || FONTS.instrument, bd = BODY[g.body] || BODY.hanken, k = colorsOf(g);
  var vars = '--g-bg:' + k.bg + ';--g-text:' + k.text + ';--g-muted:' + k.muted + ';--g-line:' + k.line + ';--g-surface:' + k.surface + ';--g-band:' + t.band + ';--g-band-text:' + t.bandText + ';--g-accent:' + g.accent + ';--g-display:' + f.css + ';--g-body:' + bd.css + ';--g-filter:' + t.filter + ';--g-case:' + t.caseT + ';--g-track:' + t.track + ';--g-radius:' + t.radius + ';--g-amp:' + t.amp;
  var G = !!opts.guest;
  var names = esc(c.nome).replace('&amp;', '<i>&amp;</i>');
  var date = dots(c.data) + ' — ' + esc(c.local).toUpperCase();
  var n = 0, html = '<div class="topb"><b style="font-family:\'DM Sans\',sans-serif;letter-spacing:-.05em;font-weight:500">bonıs.<i style="font-weight:200">films</i></b><span>MINHA HISTÓRIA</span></div>';
  g.blocks.forEach(function(b){
    if(!b.visible) return;
    var s = b.s, sel = opts.editing && S.selected === b.id ? ' sel' : '';
    var chap = '';
    if(!BLOCKS[b.type].fixo && !BLOCKS[b.type].inter){ n++; chap = '<span class="k">Capítulo ' + roman(n) + '</span>'; }
    var body = '';
    switch(b.type){
      case 'abertura':
        if(s.layout === 'triptico') body = '<div class="tri">' + s.imgs.map(function(i){ return '<img src="' + IMG[i] + '" alt="">'; }).join('') + '</div><div class="ttl"><span class="k">' + esc(s.frase) + '</span><h1>' + names + '</h1><p>' + date + '</p></div>';
        else if(s.layout === 'split') body = '<div class="split"><img src="' + IMG[s.foto] + '" alt=""><div class="st"><span class="k">' + esc(s.frase) + '</span><h1>' + names + '</h1><p>' + date + '</p></div></div>';
        else body = '<div class="hero1"><img src="' + IMG[s.foto] + '" alt="">' + (s.layout === 'video' ? '<span class="loop">VÍDEO EM LOOP</span>' : '') + '<div class="ov"><p>' + esc(s.frase).toUpperCase() + '</p><h1>' + names + '</h1><p>' + date + '</p></div></div>';
        break;
      case 'filme':
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><span class="mut" style="font-size:13px">Filme do casamento · ' + esc(s.duracao) + '</span><div class="player"><img src="' + IMG[s.capa] + '" alt="">' + (G ? '<button type="button" class="play" data-gact="play" aria-label="Assistir ao filme" style="cursor:pointer">' + I.play + '</button>' : '<span class="play">' + I.play + '</span>') + '</div></div>'; break;
      case 'momentos':
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><div class="two"><div><img src="' + IMG[4] + '" alt=""><b>Teaser</b></div><div><img src="' + IMG[8] + '" alt=""><b>Cerimônia completa</b></div></div></div>'; break;
      case 'bastidores':
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><div class="two"><div><img src="' + IMG[6] + '" alt=""><b>Making of</b></div><div><img src="' + IMG[2] + '" alt=""><b>Preparativos</b></div></div></div>'; break;
      case 'fotografias':
        var imgs = [1,2,3,4,5,6,7,8].map(function(i){ return '<img src="' + IMG[i] + '" alt="">'; }).join('');
        var cls = { mosaico:'mos', carrossel:'car', filme:'film' }[s.layout] || 'grid';
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><span class="mut" style="font-size:13px">8 fotografias</span><div class="' + cls + '">' + imgs + '</div></div>'; break;
      case 'destaque':
        body = '<div class="feat"><img src="' + IMG[s.foto] + '" alt=""><blockquote>' + esc(s.frase) + '</blockquote></div>'; break;
      case 'votos':
        var a = (c.titulares[0] || {}).nome || 'Ela', bb = (c.titulares[1] || {}).nome || 'Ele';
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><div class="vows"><div><small>' + esc(a) + '</small><p>“' + esc(s.v1) + '”</p></div><div><small>' + esc(bb) + '</small><p>“' + esc(s.v2) + '”</p></div></div></div>'; break;
      case 'trilha':
        var w = [10,18,26,14,22,28,12,20,16,24,10,18,26,14,8].map(function(h){ return '<i style="height:' + h + 'px"></i>'; }).join('');
        body = '<div class="trk"><div class="trk-bar"><span class="trk-play">' + I.play + '</span><div><b>' + esc(s.musica) + '</b><small>' + esc(s.artista) + ' · trilha do filme</small></div><div class="wave">' + w + '</div></div></div>'; break;
      case 'mensagem':
        body = '<div class="msg"><div class="in">' + chap + '<blockquote>“' + esc(s.texto) + '”</blockquote><span>' + esc(s.assinatura).toUpperCase() + ' · BONIS FILMS</span></div></div>'; break;
      case 'linha':
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><ol class="tl">' + String(s.itens).split('\n').filter(Boolean).map(function(it, i){ return '<li><small>' + String(i+1).padStart(2,'0') + '</small>' + esc(it) + '</li>'; }).join('') + '</ol></div>'; break;
      case 'creditos':
        body = '<div class="cred"><div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><dl><dt>Estrelando</dt><dd>' + esc(c.nome) + '</dd>' + c.fornecedores.map(function(fo){ return '<dt>' + esc(fo.funcao) + '</dt><dd>' + esc(fo.nome) + '</dd>'; }).join('') + '</dl><div class="fim">' + esc(s.fim) + '</div></div></div>'; break;
      case 'recados':
        var ap = (c.recados || []).filter(function(r){ return r.status === 'aprovado'; }), pend = (c.recados || []).filter(function(r){ return r.status === 'pendente'; }).length;
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2><div class="rec">' +
          (ap.length ? ap.map(function(r){ return '<div style="padding:14px 0;border-bottom:1px solid var(--g-line)"><div class="disp" style="font-size:20px;font-style:italic">“' + esc(r.texto) + '”</div><small class="mut">' + esc(r.nome) + '</small></div>'; }).join('') : '<div class="empty">Os recados dos convidados aparecem aqui depois de aprovados pela Bonis Films.</div>') +
          (opts.editing && pend ? '<div class="note">' + pend + ' recado(s) aguardando sua aprovação no perfil do evento.</div>' : '') +
          (G ? '<input id="recNome" type="text" placeholder="Seu nome" aria-label="Seu nome" style="min-height:40px;border:1px solid var(--g-line);border-radius:8px;background:var(--g-surface);color:var(--g-text);padding:0 10px;font:inherit"><textarea id="recTexto" aria-label="Seu recado" placeholder="Escreva seu recado"></textarea><button class="gbtn" type="button" data-gact="rec" style="cursor:pointer">Enviar recado</button>'
             : '<textarea aria-label="Seu recado" placeholder="Escreva seu recado" disabled></textarea><button class="gbtn" type="button" disabled>Enviar recado</button>') + '</div></div>'; break;
      case 'downloads':
        var blocked = opts.guest && !g.guestDownload;
        var rows = blocked ? '' : [['Filme do casamento','Arquivo original · [formato] · [tamanho]'],['Teaser','Arquivo original · [formato] · [tamanho]'],['Fotografias','Pacote .zip em alta resolução']].map(function(r){ return '<div class="file"><div><b>' + r[0] + '</b><small>' + r[1] + '</small></div>' + (G ? '<button type="button" data-gact="dl" data-file="' + r[0] + '" style="padding:6px 14px;border:1px solid var(--g-line);border-radius:999px;font-size:12px;background:transparent;color:var(--g-text);cursor:pointer">Baixar</button>' : '<span>Baixar</span>') + '</div>'; }).join('');
        body = '<div class="in">' + chap + '<h2>' + esc(s.titulo) + '</h2>' + (rows ? '<div class="files">' + rows + '</div>' : '<p class="note">Os downloads estão disponíveis apenas para os titulares desta galeria.</p>') + '<p class="note">Disponível até ' + (g.expira ? dmy(g.expira) : '[data de arquivamento]') + '.</p></div>'; break;
    }
    html += '<section class="g-sec' + sel + '" data-block="' + b.id + '">' + body + '</section>';
  });
  html += '<div class="gfoot">Uma história Bonis Films · por Gabi e João</div>';
  return '<div class="pv' + (opts.editing ? ' editing' : '') + (t.align === 'center' ? ' center' : '') + '" style="' + vars + '">' + html + '</div>';
}

function mini(t, accent){
  var f = FONTS[t.font] || FONTS.instrument;
  return '<div class="mini" style="background:' + t.bg + ';color:' + t.text + '"><div class="mi"><img src="' + IMG[t.cover || 1] + '" alt="" style="filter:' + t.filter + '"><div class="dots">' + t.accents.slice(0,3).map(function(a){ return '<i style="background:' + a + '"></i>'; }).join('') + '</div></div>' +
    '<div class="mt" style="font-family:' + f.css + ';text-transform:' + t.caseT + ';letter-spacing:' + t.track + '"><b>Mariana <span style="color:' + (accent || t.accents[0]) + ';font-style:' + t.amp + '">&amp;</span> Rafael</b><small>12 · 09 · 2026</small></div></div>';
}
function tplCard(t, pressed, extra){
  return '<button class="tc" type="button" data-pick-tpl="' + t.id + '" aria-pressed="' + !!pressed + '">' + mini(t) +
    '<div class="tb"><b>' + esc(t.nome) + (t.custom ? ' <span class="tag info" style="margin-left:4px">Seu</span>' : '') + '</b><span>' + esc(t.desc) + '</span>' + (extra || '') + '</div></button>';
}

/* ---------- páginas ---------- */
function viewPainel(){
  var cs = S.clients.filter(inYear);
  var ativos = cs.filter(function(c){ return c.producao !== 'Concluído'; });
  var stats = [
    [ativos.length, 'Histórias em andamento', ativos.length / Math.max(cs.length,1)],
    [cs.filter(function(c){ return c.producao === 'Revisão'; }).length, 'Aguardando o casal', null],
    [cs.filter(function(c){ var d = daysTo(c.prazo); return c.producao !== 'Concluído' && d !== null && d <= 14; }).length, 'Entregas nos próximos 14 dias', null],
    [cs.filter(function(c){ return !!c.published; }).length, 'Galerias publicadas', null]
  ];
  var next = ativos.slice().sort(function(a,b){ return (a.prazo || '9') < (b.prazo || '9') ? -1 : 1; });
  var feed = [];
  cs.forEach(function(c){ c.atividade.forEach(function(a, i){ feed.push({ c:c, a:a, k:i }); }); });
  feed = feed.reverse().slice(0, 7);
  var h = new Date().getHours(), saud = h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite';
  return '<div class="page"><div class="head"><div><h1>' + saud + ', Gabi e João</h1><p>' + ativos.length + ' histórias em andamento. Esta é a visão geral do estúdio.</p></div><button class="btn solid" type="button" data-action="novo">Novo evento</button></div>' + yearChips() +
    '<div class="stats">' + stats.map(function(s){ return '<div class="card stat"><b>' + s[0] + '</b><span>' + s[1] + '</span>' + (s[2] !== null ? '<div class="bar"><i style="width:' + Math.round(s[2]*100) + '%"></i></div>' : '') + '</div>'; }).join('') + '</div>' +
    '<div class="dash"><div class="card box"><div class="box-h"><h2>Próximas entregas</h2><button class="btn sm ghost" type="button" data-go="producao">Ver produção</button></div><div>' +
      (next.length ? '' : '<p class="hint" style="padding:10px">Nenhuma entrega pendente neste período.</p>') + next.map(function(c){ var d = daysTo(c.prazo); var lbl = d === null ? '—' : d < 0 ? Math.abs(d) : d;
        return '<button class="deliv" type="button" data-open="' + c.id + '" data-to="perfil"><img src="' + IMG[c.capa] + '" alt=""><div><div class="nm">' + esc(c.nome) + '</div><div class="meta">' + esc(c.tipo) + ' · ' + dmy(c.data) + ' · ' + prodTag(c.producao) + '</div></div><div class="due"><b style="' + (d !== null && d < 0 ? 'color:var(--warn)' : '') + '">' + lbl + '</b><small>' + (d === null ? 'sem prazo' : d < 0 ? 'dias de atraso' : d === 1 ? 'dia restante' : 'dias restantes') + '</small></div></button>';
      }).join('') + '</div></div>' +
    '<div class="card box"><div class="box-h"><h2>Atividade recente</h2></div><ul class="feed">' + feed.map(function(x){ return '<li><span class="dt"></span><div>' + esc(x.a.t) + '<small>' + esc(x.c.nome) + ' · ' + esc(x.a.d) + '</small></div></li>'; }).join('') + '</ul></div></div></div>';
}

function viewProducao(){
  return '<div class="page" style="max-width:none"><div class="head"><div><h1>Produção</h1><p>Arraste os cards entre as etapas ou use as setas.</p></div><button class="btn solid" type="button" data-action="novo">Novo evento</button></div>' + yearChips() + '<div class="kanban">' +
    PROD.map(function(st, si){
      var items = S.clients.filter(function(c){ return c.producao === st && inYear(c); });
      return '<div class="col" data-col="' + st + '"><div class="col-h"><b>' + st + '</b><span>' + items.length + '</span></div>' +
        (items.length ? items.map(function(c){ var d = daysTo(c.prazo);
          return '<div class="kc" draggable="true" data-kc="' + c.id + '"><img src="' + IMG[c.capa] + '" alt=""><div class="kb"><div class="nm">' + esc(c.nome) + '</div><div class="meta">' + esc(c.tipo) + ' · ' + dmy(c.data) + (st !== 'Concluído' && d !== null ? ' · entrega em ' + (d < 0 ? 'atraso' : d + 'd') : '') + '</div>' +
            '<div class="act"><button class="icon" type="button" aria-label="Voltar etapa" data-stage="' + c.id + '" data-dir="-1"' + (si === 0 ? ' disabled' : '') + '>' + I.left + '</button><button class="btn sm ghost" type="button" data-open="' + c.id + '" data-to="editor">Galeria</button><button class="icon" type="button" aria-label="Avançar etapa" data-stage="' + c.id + '" data-dir="1"' + (si === PROD.length - 1 ? ' disabled' : '') + '>' + I.right + '</button></div></div></div>';
        }).join('') : '<div class="empty-col">Nenhum evento nesta etapa</div>') + '</div>';
    }).join('') + '</div></div>';
}

function viewClientes(){
  var q = (S.q || '').toLowerCase();
  var list = S.clients.filter(function(c){ return inYear(c) && (!q || (c.nome + ' ' + c.tipo).toLowerCase().indexOf(q) >= 0); });
  var years = []; list.forEach(function(c){ var y = year(c); if(years.indexOf(y) < 0) years.push(y); }); years.sort().reverse();
  function card(c){ var p = pub(c); return '<button class="cc" type="button" data-open="' + c.id + '" data-to="perfil"><img src="' + IMG[c.capa] + '" alt=""><div class="cb"><div class="nm">' + esc(c.nome) + '</div><div class="meta">' + esc(c.tipo) + ' · ' + dmy(c.data) + '</div><div class="tags">' + prodTag(c.producao) + '<span class="tag ' + p.cls + '">' + p.label + '</span></div></div></button>'; }
  return '<div class="page"><div class="head"><div><h1>Clientes</h1><p>' + S.clients.length + ' eventos cadastrados.</p></div><div class="row" style="flex-wrap:wrap"><label class="search">' + I.search + '<span class="sr">Buscar</span><input id="q" type="search" placeholder="Buscar por nome ou tipo" value="' + esc(S.q) + '"></label><button class="btn solid" type="button" data-action="novo">Novo evento</button></div></div>' +
    yearChips() + (list.length ? years.map(function(y){ var its = list.filter(function(c){ return year(c) === y; }).sort(function(a,b){ return (a.data || '') < (b.data || '') ? -1 : 1; }); return '<h2 class="yh">' + y + '<span>' + its.length + (its.length === 1 ? ' evento' : ' eventos') + '</span></h2><div class="cgrid">' + its.map(card).join('') + '</div>'; }).join('') : '<div class="card box" style="align-items:center;text-align:center"><p style="margin:0">Nenhum evento encontrado para “' + esc(S.q) + '”.</p><button class="btn sm" type="button" data-action="clearQ">Limpar busca</button></div>') + '</div>';
}

function field(label, key, val, type, full){ return '<div class="field' + (full ? ' full' : '') + '"><label for="f-' + key + '">' + label + '</label><input id="f-' + key + '" type="' + type + '" value="' + esc(val) + '" data-c="' + key + '"></div>'; }
function viewPerfil(){
  var c = client(), p = pub(c);
  return '<div class="page"><div class="cover-head"><img src="' + IMG[c.capa] + '" alt=""><div class="ch"><div><h1>' + esc(c.nome) + '</h1><p>' + esc(c.tipo) + ' · ' + dmy(c.data) + ' · ' + esc(c.local) + '</p></div><div class="row"><span class="tag ' + p.cls + '">' + p.label + '</span><button class="btn" type="button" data-open="' + c.id + '" data-to="editor">Editar galeria</button></div></div></div>' +
    '<div class="profile"><div style="display:flex;flex-direction:column;gap:16px">' +
      '<div class="card box"><div class="box-h"><h2>Ficha do evento</h2><button class="btn sm solid" type="button" data-action="saveNow">Salvar alterações</button></div><p class="hint">Preenchida uma vez, aparece na galeria, nos créditos e nas mensagens ao casal.</p><div class="fields">' +
        field('Nome do evento', 'nome', c.nome, 'text', true) +
        '<div class="field"><label for="f-tipo">Tipo</label><select id="f-tipo" data-c="tipo">' + ['Casamento','Pré-wedding','Ensaio','Aniversário','Formatura','Corporativo'].map(function(o){ return '<option' + (o === c.tipo ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select></div>' +
        '<div class="field"><label for="f-prod">Etapa de produção</label><select id="f-prod" data-c="producao">' + PROD.map(function(o){ return '<option' + (o === c.producao ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select></div>' +
        field('Data do evento', 'data', c.data, 'date') + field('Entrega prevista', 'prazo', c.prazo, 'date') +
        field('Local', 'local', c.local, 'text') + field('WhatsApp', 'telefone', c.telefone, 'text') +
      '</div><h2 style="margin:6px 0 0;font-size:13px;font-weight:600">Foto de capa do evento</h2><div class="covers">' + [1,2,3,4,5,6,7,8].map(function(i){ return '<button class="thumb" type="button" aria-label="Capa ' + i + '" aria-pressed="' + (c.capa === i) + '" data-capa="' + i + '"><img src="' + IMG[i] + '" alt=""></button>'; }).join('') + '</div></div>' +
      '<div class="card box"><div class="box-h"><h2>Créditos e fornecedores</h2><button class="btn sm" type="button" data-action="addForn">Adicionar</button></div><div>' +
        c.fornecedores.map(function(fo, i){ return '<div class="li"><input aria-label="Função" value="' + esc(fo.funcao) + '" data-forn="' + i + '" data-k="funcao" style="max-width:40%"><input aria-label="Nome" value="' + esc(fo.nome) + '" data-forn="' + i + '" data-k="nome"><button class="icon" type="button" aria-label="Remover" data-rmforn="' + i + '">' + I.x + '</button></div>'; }).join('') +
      '</div></div></div>' +
    '<div style="display:flex;flex-direction:column;gap:16px">' +
      '<div class="card box"><div class="box-h"><h2>Titulares com acesso</h2><button class="btn sm" type="button" data-action="addTit">Adicionar</button></div><p class="hint">Cada titular tem sua própria conta e acessa a mesma galeria.</p><div>' +
        c.titulares.map(function(ti, i){ return '<div class="li" style="flex-wrap:wrap"><div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:6px"><input aria-label="Nome do titular" value="' + esc(ti.nome) + '" data-titk="' + i + '" data-k="nome"><input aria-label="E-mail do titular" type="email" value="' + esc(ti.email) + '" data-titk="' + i + '" data-k="email"></div><div style="display:flex;flex-direction:column;align-items:center;gap:8px"><button class="switch" type="button" role="switch" aria-label="Acesso de ' + esc(ti.nome) + '" aria-checked="' + ti.acesso + '" data-tit="' + i + '"></button><button class="icon" type="button" aria-label="Remover titular" data-rmtit="' + i + '">' + I.x + '</button></div></div>'; }).join('') +
      '</div></div>' +
      '<div class="card box"><div class="box-h"><h2>Recados dos convidados</h2><span class="hint">' + (c.recados || []).filter(function(r){ return r.status === 'pendente'; }).length + ' pendente(s)</span></div>' +
        ((c.recados || []).length ? '<div>' + c.recados.map(function(r, i){ return '<div class="rec-item"><div style="flex:1;min-width:0"><b>' + esc(r.nome) + '</b> ' + (r.status === 'aprovado' ? '<span class="tag ok">Aprovado</span>' : '<span class="tag warn">Pendente</span>') + '<p>' + esc(r.texto) + '</p></div>' + (r.status === 'pendente' ? '<button class="btn sm" type="button" data-aprec="' + i + '">Aprovar</button>' : '') + '<button class="icon" type="button" aria-label="Excluir recado" data-rmrec="' + i + '">' + I.x + '</button></div>'; }).join('') + '</div>' : '<p class="hint">Nenhum recado ainda. Eles chegam pelo capítulo “Livro de recados” da galeria.</p>') + '</div>' +
      '<div class="card box"><div class="box-h"><h2>Atividade</h2></div><ul class="feed">' + c.atividade.slice().reverse().map(function(a){ return '<li><span class="dt"></span><div>' + esc(a.t) + '<small>' + esc(a.d) + '</small></div></li>'; }).join('') + '</ul></div>' +
      (c.published ? '<button class="btn" type="button" data-action="send">Enviar galeria ao casal</button>' : '') +
      '<button class="btn danger" type="button" data-action="delEvent">Excluir evento</button>' +
    '</div></div></div>';
}

function viewTemplates(){
  var groups = ['Todos','Casamento','Ensaio','Evento','Seus templates'];
  var list = allTemplates().filter(function(t){ var f = S.tplFilter; return f === 'Todos' || (f === 'Seus templates' ? t.custom : t.grupo === f); });
  var c = client();
  return '<div class="page"><div class="head"><div><h1>Templates</h1><p>Escolha um ponto de partida para cada galeria. Clique para aplicar em <b>' + esc(c.nome) + '</b>.</p></div></div>' +
    '<div class="chips" role="group" aria-label="Filtrar templates">' + groups.map(function(gp){ return '<button class="chip" type="button" data-tf="' + gp + '" aria-pressed="' + (S.tplFilter === gp) + '">' + gp + '</button>'; }).join('') + '</div>' +
    (list.length ? '<div class="tgrid">' + list.map(function(t){
      var extra = '<span style="margin-top:4px">' + t.blocks.length + ' capítulos · ' + (FONTS[t.font] || FONTS.instrument).nome + '</span>' + (t.custom ? '<span class="row" style="margin-top:6px"><span class="btn sm" role="button" tabindex="0" data-del-tpl="' + t.id + '">Excluir</span></span>' : '');
      return tplCard(t, c.gallery.template === t.id, extra);
    }).join('') + '</div>' : '<div class="card box" style="text-align:center;align-items:center"><p style="margin:0">Você ainda não salvou templates. No editor, monte uma galeria e use “Salvar como template”.</p><button class="btn sm" type="button" data-go="editor">Abrir o editor</button></div>') + '</div>';
}

function checklist(c){
  var g = c.gallery;
  var has = function(type){ return g.blocks.find(function(b){ return b.type === type && b.visible; }); };
  var fi = has('filme'), cr = has('creditos'), vo = has('votos'), tr = has('trilha');
  return [
    { ok:!!has('abertura'), req:true, t:'Abertura com capa definida' },
    { ok:!fi || fi.s.aprovado, req:true, t:'Filme aprovado pelo casal' },
    { ok:!!g.expira, req:true, t:'Data de expiração dos downloads' },
    { ok:c.titulares.some(function(t){ return t.acesso; }), req:true, t:'Ao menos um titular com acesso' },
    { ok:!cr || !c.fornecedores.some(function(f){ return /\[/.test(f.nome); }), req:false, t:'Créditos sem nomes pendentes' },
    { ok:!(vo && /\[/.test(vo.s.v1 + vo.s.v2)) && !(tr && /\[/.test(tr.s.musica)), req:false, t:'Textos de exemplo substituídos' }
  ];
}

function viewEditor(){
  var c = client(), g = c.gallery, p = pub(c), vi = 0;
  var list = g.blocks.map(function(b, i){
    var bt = BLOCKS[b.type], num = '';
    if(b.visible && !bt.fixo && !bt.inter){ vi++; num = roman(vi); }
    var sub = b.s.titulo || ({ abertura:{ triptico:'Tríptico', foto:'Foto única', video:'Vídeo em loop', split:'Tela dividida' }[b.s.layout], mensagem:b.s.assinatura, destaque:b.s.frase, trilha:b.s.musica }[b.type]) || '';
    return '<li class="block' + (S.selected === b.id ? ' sel' : '') + (b.visible ? '' : ' off') + '" draggable="true" data-id="' + b.id + '">' +
      '<span class="b-num" aria-hidden="true">' + (bt.fixo ? '◦' : bt.inter ? '·' : num) + '</span>' +
      '<button class="b-name" type="button" data-sel="' + b.id + '">' + bt.nome + '<small>' + esc(sub) + '</small></button>' +
      '<button class="icon" type="button" aria-label="Subir" data-move="' + i + '" data-dir="-1"' + (i === 0 ? ' disabled' : '') + '>' + I.up + '</button>' +
      '<button class="icon" type="button" aria-label="Descer" data-move="' + i + '" data-dir="1"' + (i === g.blocks.length - 1 ? ' disabled' : '') + '>' + I.down + '</button>' +
      '<button class="icon" type="button" aria-label="' + (b.visible ? 'Esconder' : 'Mostrar') + '" data-vis="' + b.id + '">' + (b.visible ? I.eye : I.eyeOff) + '</button></li>';
  }).join('');
  var addable = Object.keys(BLOCKS).filter(function(k){ return !BLOCKS[k].fixo; });
  return '<div class="editor"><div class="ed-col">' +
      '<div class="ed-head"><img src="' + IMG[c.capa] + '" alt=""><div style="min-width:0;flex:1"><h2>' + esc(c.nome) + '</h2><small>' + esc(c.tipo) + ' · ' + dmy(c.data) + '</small></div></div>' +
      '<div style="padding:12px 16px 0"><select aria-label="Trocar de evento" data-switch style="width:100%;min-height:36px;border:1px solid var(--line-2);border-radius:10px;background:var(--sunk);padding:0 10px;font-size:13px">' + S.clients.map(function(x){ return '<option value="' + x.id + '"' + (x.id === c.id ? ' selected' : '') + '>' + esc(x.nome) + '</option>'; }).join('') + '</select></div>' +
      '<div class="lbl"><span>Capítulos</span><span>arraste para reordenar</span></div><ul class="blocks" id="blocks">' + list + '</ul>' +
      '<div class="lbl"><span>Adicionar capítulo</span></div><div class="addgrid">' + addable.map(function(k){ return '<button type="button" data-add="' + k + '">+ ' + BLOCKS[k].nome + '</button>'; }).join('') + '</div>' +
      '<div style="padding:0 16px 16px"><button class="btn sm" type="button" data-sel="" style="width:100%">Configurações da galeria</button></div>' +
    '</div><div class="stage"><div class="stage-bar">' +
      '<div class="row"><div class="seg" role="group" aria-label="Dispositivo">' + [['desktop','Computador'],['tablet','Tablet'],['mobile','Celular']].map(function(d){ return '<button type="button" data-device="' + d[0] + '" aria-pressed="' + (S.device === d[0]) + '">' + d[1] + '</button>'; }).join('') + '</div>' +
      '<button class="icon" type="button" aria-label="Desfazer" title="Desfazer (Ctrl+Z)" data-action="undo"' + (HIST.past.length ? '' : ' disabled') + '>' + I.undo + '</button><button class="icon" type="button" aria-label="Refazer" title="Refazer (Ctrl+Shift+Z)" data-action="redo"' + (HIST.future.length ? '' : ' disabled') + '>' + I.redo + '</button></div>' +
      '<span class="status"><span class="dot ' + (p.cls === 'ok' ? 'ok' : p.cls === 'neutral' ? 'neutral' : '') + '"></span>' + p.label + (c.publishedAt ? ' · ' + esc(c.publishedAt) : '') + '</span>' +
      '<div class="row"><button class="btn sm" type="button" data-action="guest">Ver como convidado</button><button class="btn sm solid" type="button" data-action="saveNow">Salvar rascunho</button></div>' +
    '</div><div class="canvas"><div class="device ' + S.device + '" id="preview">' + renderGallery(c, g, { editing:true }) + '</div></div></div>' +
    '<div class="ed-col r"><div class="props" id="props">' + propsPanel(c) + '</div></div></div>';
}

function colorPanel(g, t){
  var k = colorsOf(g), hsl = toHsl(g.accent), co = g.colors || {};
  var acc = PALETTE.indexOf(g.accent) < 0 && t.accents.indexOf(g.accent) < 0;
  var accList = t.accents.concat(PALETTE.filter(function(p){ return t.accents.indexOf(p) < 0; }));
  var cr = contrast(k.text, k.bg), crOk = cr >= 4.5;
  return '<h3>Cor de destaque</h3><div class="colorbox"><div class="swatches">' + accList.map(function(a){ return '<button class="swatch" type="button" aria-label="Cor ' + a + '" aria-pressed="' + (a.toLowerCase() === g.accent.toLowerCase()) + '" data-accent="' + a + '" style="background:' + a + '"></button>'; }).join('') + '</div>' +
    '<div class="slider"><label for="hueR">Tom</label><input id="hueR" class="hue" type="range" min="0" max="359" value="' + hsl[0] + '" data-hsl="h"></div>' +
    '<div class="slider"><label for="satR">Intensidade</label><input id="satR" type="range" min="0" max="100" value="' + hsl[1] + '" data-hsl="s" style="background:linear-gradient(90deg,' + fromHsl(hsl[0],0,hsl[2]) + ',' + fromHsl(hsl[0],100,hsl[2]) + ')"></div>' +
    '<div class="slider"><label for="litR">Luminosidade</label><input id="litR" type="range" min="5" max="95" value="' + hsl[2] + '" data-hsl="l" style="background:linear-gradient(90deg,#000,' + fromHsl(hsl[0],hsl[1],50) + ',#fff)"></div>' +
    '<div class="hexrow"><input type="color" aria-label="Escolher cor de destaque" value="' + g.accent + '" data-colorin="accent"><input type="text" aria-label="Código da cor de destaque" value="' + g.accent.toUpperCase() + '" data-hex="accent" maxlength="7"></div></div>' +
    '<h3>Cor de fundo</h3><div class="colorbox"><div class="swatches">' + [t.bg].concat(BGS.filter(function(b){ return b !== t.bg; })).map(function(b){ return '<button class="swatch" type="button" aria-label="Fundo ' + b + '" aria-pressed="' + (b.toLowerCase() === k.bg.toLowerCase()) + '" data-cset="bg" data-val="' + b + '" style="background:' + b + '"></button>'; }).join('') + '</div>' +
    '<div class="hexrow"><input type="color" aria-label="Escolher cor de fundo" value="' + k.bg + '" data-colorin="bg"><input type="text" aria-label="Código da cor de fundo" value="' + k.bg.toUpperCase() + '" data-hex="bg" maxlength="7"></div></div>' +
    '<h3>Cor do texto</h3><div class="colorbox"><div class="swatches">' + [t.text].concat(TEXTS.filter(function(x){ return x !== t.text; })).map(function(x){ return '<button class="swatch" type="button" aria-label="Texto ' + x + '" aria-pressed="' + (x.toLowerCase() === k.text.toLowerCase()) + '" data-cset="text" data-val="' + x + '" style="background:' + x + '"></button>'; }).join('') + '</div>' +
    '<div class="hexrow"><input type="color" aria-label="Escolher cor do texto" value="' + k.text + '" data-colorin="text"><input type="text" aria-label="Código da cor do texto" value="' + k.text.toUpperCase() + '" data-hex="text" maxlength="7"></div>' +
    '<div class="contrast" id="crBadge"><span class="tag ' + (crOk ? 'ok' : 'warn') + '">Contraste ' + cr.toFixed(1) + ':1</span>' + (crOk ? 'boa leitura' : 'texto difícil de ler') + '</div></div>' +
    ((co.bg || co.text || t.accents.indexOf(g.accent) < 0) ? '<button class="btn sm" type="button" data-action="resetColors">Restaurar cores do template</button>' : '');
}
function propsPanel(c){
  var g = c.gallery, b = g.blocks.find(function(x){ return x.id === S.selected; });
  var checks = checklist(c), canPublish = checks.every(function(i){ return i.ok || !i.req; });
  var publishBox = '<div class="divider"></div><h3>Publicação</h3><ul class="checklist">' + checks.map(function(i){
      return '<li class="' + (i.ok ? 'ok' : i.req ? '' : 'warn') + '"><span class="mark">' + (i.ok ? I.check : i.req ? '' : '!') + '</span><span>' + i.t + (i.req || i.ok ? '' : ' <span class="hint">(recomendado)</span>') + '</span></li>';
    }).join('') + '</ul><button class="btn solid" type="button" data-action="publish"' + (canPublish ? '' : ' disabled') + '>' + (c.published ? 'Publicar alterações' : 'Publicar galeria') + '</button>' +
    (c.published ? '<button class="btn" type="button" data-action="send">Enviar ao casal</button>' : '') +
    '<p class="hint">Você edita um rascunho. O casal só vê as mudanças depois de publicar.</p>';
  if(!b){
    var t = T(g.template);
    return '<h3>Template</h3><div class="cur-tpl"><div class="sw">' + '<img src="' + IMG[t.cover || 1] + '" alt="" style="filter:' + t.filter + '">' + '</div><div style="flex:1;min-width:0"><b>' + esc(t.nome) + '</b><span>' + esc(t.desc) + '</span></div></div>' +
      '<div class="row"><button class="btn sm" type="button" data-action="tplModal" style="flex:1">Trocar template</button><button class="btn sm" type="button" data-action="saveTpl" style="flex:1">Salvar como template</button></div>' +
      (S.tplChanged ? '<div class="banner">Visual do template ' + esc(t.nome) + ' aplicado. Quer também usar a ordem de capítulos dele?<div class="row"><button class="btn sm solid" type="button" data-action="tplBlocks">Usar os capítulos dele</button><button class="btn sm" type="button" data-action="tplKeep">Manter os meus</button></div></div>' : '') +
      colorPanel(g, t) +
      '<h3>Tipografia dos títulos</h3><div class="fonts many">' + Object.keys(FONTS).map(function(k){ return '<button type="button" data-font="' + k + '" aria-pressed="' + (k === g.font) + '" style="font-family:' + FONTS[k].css + '" title="' + FONTS[k].nome + '">' + FONTS[k].nome + '</button>'; }).join('') + '</div>' +
      '<h3>Tipografia dos textos</h3><div class="fonts">' + Object.keys(BODY).map(function(k){ return '<button type="button" data-body="' + k + '" aria-pressed="' + (k === (g.body || 'hanken')) + '" style="font-family:' + BODY[k].css + ';font-size:14px">' + BODY[k].nome + '</button>'; }).join('') + '</div>' +
      '<div class="divider"></div><h3>Acesso</h3>' +
      '<div class="row" style="justify-content:space-between"><span>Convidados podem baixar</span><button class="switch" type="button" role="switch" aria-label="Convidados podem baixar" aria-checked="' + g.guestDownload + '" data-gdl></button></div>' +
      '<div class="field"><label for="g-senha">Senha para convidados (opcional)</label><input id="g-senha" type="text" value="' + esc(g.senha) + '" data-g="senha" placeholder="Sem senha"></div>' +
      '<div class="field"><label for="g-exp">Downloads disponíveis até</label><input id="g-exp" type="date" value="' + esc(g.expira) + '" data-g="expira"></div>' + publishBox;
  }
  var s = b.s;
  function inp(l, k, v){ return '<div class="field"><label for="p-' + k + '">' + l + '</label><input id="p-' + k + '" type="text" value="' + esc(v) + '" data-s="' + k + '"></div>'; }
  function area(l, k, v){ return '<div class="field"><label for="p-' + k + '">' + l + '</label><textarea id="p-' + k + '" data-s="' + k + '">' + esc(v) + '</textarea></div>'; }
  function seg(l, k, o){ return '<h3>' + l + '</h3><div class="seg" role="group" aria-label="' + l + '" style="flex-wrap:wrap">' + o.map(function(x){ return '<button type="button" data-seg="' + k + '" data-val="' + x[0] + '" aria-pressed="' + (s[k] === x[0]) + '">' + x[1] + '</button>'; }).join('') + '</div>'; }
  function pick(l, k){ return '<h3>' + l + '</h3><div class="thumbs">' + [1,2,3,4,5,6,7,8].map(function(i){ return '<button class="thumb" type="button" aria-label="Imagem ' + i + '" aria-pressed="' + (s[k] === i) + '" data-pick="' + k + '" data-val="' + i + '"><img src="' + IMG[i] + '" alt=""></button>'; }).join('') + '</div>'; }
  var form = '';
  switch(b.type){
    case 'abertura': form = seg('Layout', 'layout', [['triptico','Tríptico'],['foto','Foto única'],['split','Dividida'],['video','Vídeo']]) + inp('Frase de abertura', 'frase', s.frase) + (s.layout === 'triptico' ? '<p class="hint">O tríptico usa três fotos da galeria do evento.</p>' : pick('Imagem de capa', 'foto')); break;
    case 'filme': form = inp('Título do capítulo', 'titulo', s.titulo) + inp('Duração', 'duracao', s.duracao) + pick('Capa do filme', 'capa') + '<div class="row" style="justify-content:space-between"><span>Aprovado pelo casal</span><button class="switch" type="button" role="switch" aria-label="Aprovado pelo casal" aria-checked="' + s.aprovado + '" data-sflag="aprovado"></button></div><p class="hint">Na versão final, este status chega sozinho quando o casal aprova a revisão no Frame.io.</p>'; break;
    case 'fotografias': form = inp('Título do capítulo', 'titulo', s.titulo) + seg('Layout', 'layout', [['grade','Grade'],['mosaico','Mosaico'],['carrossel','Carrossel'],['filme','Película']]); break;
    case 'destaque': form = area('Frase sobre a foto', 'frase', s.frase) + pick('Foto', 'foto'); break;
    case 'votos': form = inp('Título do capítulo', 'titulo', s.titulo) + area('Votos de ' + ((c.titulares[0] || {}).nome || 'titular 1'), 'v1', s.v1) + area('Votos de ' + ((c.titulares[1] || {}).nome || 'titular 2'), 'v2', s.v2); break;
    case 'trilha': form = inp('Música', 'musica', s.musica) + inp('Artista', 'artista', s.artista) + '<p class="hint">Mostra a música do filme como uma pausa entre capítulos.</p>'; break;
    case 'mensagem': form = area('Mensagem', 'texto', s.texto) + inp('Assinatura', 'assinatura', s.assinatura); break;
    case 'linha': form = inp('Título do capítulo', 'titulo', s.titulo) + area('Momentos (um por linha)', 'itens', s.itens); break;
    case 'creditos': form = inp('Título do capítulo', 'titulo', s.titulo) + inp('Frase final', 'fim', s.fim) + '<p class="hint">Os nomes vêm da ficha do evento.</p><button class="btn sm" type="button" data-open="' + c.id + '" data-to="perfil">Editar fornecedores</button>'; break;
    default: form = inp('Título do capítulo', 'titulo', s.titulo);
  }
  return '<div class="row" style="justify-content:space-between"><h3>' + BLOCKS[b.type].nome + '</h3><button class="btn sm ghost" type="button" data-sel="">Voltar</button></div>' + form +
    '<div class="row">' + (BLOCKS[b.type].fixo ? '' : '<button class="btn sm" type="button" data-action="dupBlock">' + I.dup + ' Duplicar</button><button class="btn sm" type="button" data-action="rmBlock">Remover</button>') + '</div>' + publishBox;
}

/* ---------- modais ---------- */
function openModal(html, small){ var m = document.getElementById('modal'), b = document.getElementById('mbox'); b.className = 'mbox' + (small ? ' sm' : ''); b.innerHTML = html; m.hidden = false; var f = b.querySelector('input,button:not([data-close])'); if(f) f.focus(); }
function closeModal(){ document.getElementById('modal').hidden = true; }
function tplModal(){
  var g = client().gallery;
  openModal('<div class="mhead"><h2>Escolher template</h2><button class="icon" type="button" aria-label="Fechar" data-close>' + I.x + '</button></div><div class="mbody"><p class="hint">O conteúdo do casal é mantido. Muda o visual; a ordem de capítulos você decide depois.</p><div class="tgrid">' + allTemplates().map(function(t){ return tplCard(t, g.template === t.id); }).join('') + '</div></div>');
}
function saveTplModal(){
  openModal('<div class="mhead"><h2>Salvar como template</h2><button class="icon" type="button" aria-label="Fechar" data-close>' + I.x + '</button></div><div class="mbody"><p class="hint">Salva o visual, a cor, a tipografia e a ordem de capítulos desta galeria para usar em outros eventos. Os textos ficam como estão agora.</p>' +
    '<div class="field"><label for="tplName">Nome do template</label><input id="tplName" type="text" placeholder="Ex.: Casamento na serra"></div>' +
    '<div class="field"><label for="tplGroup">Categoria</label><select id="tplGroup"><option>Casamento</option><option>Ensaio</option><option>Evento</option></select></div>' +
    '<div class="row" style="justify-content:flex-end"><button class="btn" type="button" data-close>Cancelar</button><button class="btn solid" type="button" data-action="confirmSaveTpl">Salvar template</button></div></div>', true);
}
function sendModal(){
  var c = client(), nomes = c.titulares.map(function(t){ return t.nome; }).join(' e ');
  var link = 'bonisfilms.com.br/e/' + slug(c.nome);
  var msg = 'Oi, ' + nomes + '!\n\nA história de vocês está pronta. Preparamos tudo com muito carinho: o filme, as fotografias e os momentos que vocês viveram nesse dia.\n\nAssistam aqui: https://' + link + (c.gallery.senha ? '\nSenha para convidados: ' + c.gallery.senha : '') + '\n\nCom carinho,\nGabi e João · Bonis Films';
  openModal('<div class="mhead"><h2>Enviar ao casal</h2><button class="icon" type="button" aria-label="Fechar" data-close>' + I.x + '</button></div><div class="mbody"><p class="hint">Mensagem pronta, montada com os dados da ficha. Edite à vontade antes de enviar.</p>' +
    '<div class="field"><label for="sendMsg">Mensagem</label><textarea id="sendMsg" style="min-height:220px">' + esc(msg) + '</textarea></div>' +
    '<div class="row" style="justify-content:flex-end;flex-wrap:wrap"><button class="btn" type="button" data-action="copyMsg">Copiar mensagem</button><a class="btn solid" id="waSend" href="https://wa.me/?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener">Abrir no WhatsApp</a></div></div>', true);
}

/* ---------- render ---------- */
function counts(){
  document.getElementById('ctProd').textContent = S.clients.filter(function(c){ return c.producao !== 'Concluído'; }).length;
  document.getElementById('ctCli').textContent = S.clients.length;
  document.getElementById('ctTpl').textContent = allTemplates().length;
}
function render(){
  var v = document.getElementById('view'), map = { producao:viewProducao, clientes:viewClientes, perfil:viewPerfil, templates:viewTemplates, editor:viewEditor };
  v.innerHTML = (map[S.view] || viewPainel)();
  document.querySelectorAll('.side [data-go]').forEach(function(b){ var cur = S.view === 'perfil' ? 'clientes' : S.view; b.setAttribute('aria-current', b.dataset.go === cur ? 'page' : 'false'); });
  counts(); save();
}
function refreshPreview(){ var c = client(), pv = document.getElementById('preview'); if(pv) pv.innerHTML = renderGallery(c, c.gallery, { editing:true }); save(); }
function selBlock(){ return client().gallery.blocks.find(function(x){ return x.id === S.selected; }); }

/* ---------- eventos ---------- */
document.addEventListener('click', function(e){
  var el = e.target.closest('button, [data-block], [data-del-tpl], a[data-action]');
  if(!el) { if(e.target.id === 'modal') closeModal(); return; }
  var c = client(), g = c.gallery, d = el.dataset;

  if(el.hasAttribute('data-close')){ closeModal(); return; }
  if(d.gact){
    if(d.gact === 'play'){ toast('No site real, o filme toca aqui (streaming via Frame.io ou serviço de vídeo)'); }
    else if(d.gact === 'dl'){ c.atividade.push({ t:'Convidado baixou: ' + d.file, d:'agora' }); save(); toast('Download de “' + d.file + '” iniciado (simulação)'); }
    else if(d.gact === 'rec'){
      var tx = document.getElementById('recTexto'), nm0 = document.getElementById('recNome');
      if(!tx.value.trim()){ tx.focus(); toast('Escreva um recado antes de enviar'); return; }
      c.recados = c.recados || []; c.recados.push({ nome:nm0.value.trim() || 'Convidado', texto:tx.value.trim(), status:'pendente' });
      c.atividade.push({ t:'Novo recado aguardando aprovação', d:'agora' }); save();
      document.getElementById('guestBody').innerHTML = renderGallery(c, c.published || g, { guest:true }); toast('Recado enviado. Ele aparece depois de aprovado.');
    }
    return;
  }
  if(el.closest('#guest') && !el.closest('.guest-bar')) return;
  if(d.year){ S.year = d.year; render(); return; }
  if(d.titk !== undefined) return;
  if(d.rmtit !== undefined){ if(c.titulares.length <= 1){ toast('O evento precisa de ao menos um titular'); return; } c.titulares.splice(+d.rmtit, 1); render(); toast('Titular removido'); return; }
  if(d.aprec !== undefined){ c.recados[+d.aprec].status = 'aprovado'; c.atividade.push({ t:'Recado aprovado', d:'agora' }); render(); toast('Recado aprovado e visível na galeria'); return; }
  if(d.rmrec !== undefined){ c.recados.splice(+d.rmrec, 1); render(); toast('Recado excluído'); return; }
  if(d.cset){ snap(); g.colors = g.colors || {}; g.colors[d.cset] = d.val; render(); return; }
  if(d.body){ snap(); g.body = d.body; render(); return; }
  if(d.delTpl){ e.stopPropagation(); S.custom = S.custom.filter(function(t){ return t.id !== d.delTpl; }); S.clients.forEach(function(cl){ if(cl.gallery.template === d.delTpl){ cl.gallery.template = 'bonis'; } }); render(); toast('Template excluído'); return; }
  if(d.go){ S.view = d.go; S.selected = null; S.tplChanged = false; render(); return; }
  if(d.open){ if(S.current !== d.open){ HIST = { past:[], future:[] }; } S.current = d.open; S.view = d.to; S.selected = null; S.tplChanged = false; render(); return; }
  if(d.pickTpl){
    if(S.view === 'templates' && !document.getElementById('modal').hidden === false){}
    snap(); var nt = T(d.pickTpl); g.template = d.pickTpl; g.accent = nt.accents[0]; g.font = nt.font; g.body = nt.body || 'hanken'; g.colors = {}; S.tplChanged = true; S.selected = null;
    closeModal(); if(S.view === 'templates'){ S.view = 'editor'; } render(); toast('Template ' + nt.nome + ' aplicado'); return;
  }
  if(d.tf){ S.tplFilter = d.tf; render(); return; }
  if(d.block !== undefined && el.matches('[data-block]')){ if(S.view !== 'editor') return; S.selected = d.block; render(); return; }
  if(d.sel !== undefined){ S.selected = d.sel || null; render(); return; }
  if(d.device){ S.device = d.device; render(); return; }
  if(d.capa){ c.capa = +d.capa; render(); return; }
  if(d.stage){ var cl = S.clients.find(function(x){ return x.id === d.stage; }); var i0 = PROD.indexOf(cl.producao) + +d.dir; cl.producao = PROD[i0]; cl.atividade.push({ t:'Etapa alterada para ' + PROD[i0], d:'agora' }); render(); return; }
  if(d.tit !== undefined){ c.titulares[+d.tit].acesso = !c.titulares[+d.tit].acesso; render(); return; }
  if(d.rmforn !== undefined){ c.fornecedores.splice(+d.rmforn, 1); render(); return; }

  // mudanças na galeria (com desfazer)
  if(d.vis || d.move !== undefined || d.accent || d.font || d.seg || d.pick || d.sflag || d.add || el.hasAttribute('data-gdl')){
    snap();
    if(d.vis){ var bv = g.blocks.find(function(x){ return x.id === d.vis; }); bv.visible = !bv.visible; }
    else if(d.move !== undefined){ var i = +d.move, j = i + +d.dir, t2 = g.blocks[i]; g.blocks[i] = g.blocks[j]; g.blocks[j] = t2; }
    else if(d.accent){ g.accent = d.accent; }
    else if(d.font){ g.font = d.font; }
    else if(d.seg){ selBlock().s[d.seg] = d.val; }
    else if(d.pick){ selBlock().s[d.pick] = +d.val; }
    else if(d.sflag){ var bf = selBlock(); bf.s[d.sflag] = !bf.s[d.sflag]; if(bf.s.aprovado) c.atividade.push({ t:'Filme marcado como aprovado', d:'agora' }); }
    else if(d.add){ var nb = { id:uid(), type:d.add, visible:true, s:BLOCKS[d.add].def(T(g.template)) }; var di = g.blocks.findIndex(function(x){ return x.type === 'downloads'; }); if(di < 0) g.blocks.push(nb); else g.blocks.splice(di, 0, nb); S.selected = nb.id; }
    else { g.guestDownload = !g.guestDownload; }
    render(); return;
  }

  switch(d.action){
    case 'saveNow': clearTimeout(saveT); writeNow(); toast('Alterações salvas'); break;
    case 'resetColors': snap(); g.colors = {}; g.accent = T(g.template).accents[0]; render(); toast('Cores do template restauradas'); break;
    case 'addTit': c.titulares.push({ nome:'[Novo titular]', email:'[e-mail]', acesso:true }); render(); toast('Titular adicionado'); break;
    case 'delEvent':
      openModal('<div class="mhead"><h2>Excluir evento</h2><button class="icon" type="button" aria-label="Fechar" data-close>' + I.x + '</button></div><div class="mbody"><p style="margin:0">Excluir <b>' + esc(c.nome) + '</b> remove a ficha, a galeria e os acessos dos titulares. Isso não pode ser desfeito.</p><div class="row" style="justify-content:flex-end"><button class="btn" type="button" data-close>Cancelar</button><button class="btn solid" type="button" data-action="confirmDel" style="background:#A8402F;border-color:#A8402F;color:#fff">Excluir evento</button></div></div>', true); break;
    case 'confirmDel':
      if(S.clients.length <= 1){ closeModal(); toast('Mantenha ao menos um evento cadastrado'); break; }
      var nmDel = c.nome; S.clients = S.clients.filter(function(x){ return x.id !== c.id; }); S.current = S.clients[0].id; S.view = 'clientes'; closeModal(); render(); toast('“' + nmDel + '” excluído'); break;
    case 'undo': undo(); break;
    case 'redo': redo(); break;
    case 'clearQ': S.q = ''; render(); break;
    case 'addForn': c.fornecedores.push({ funcao:'[Função]', nome:'[Nome]' }); render(); break;
    case 'rmBlock': snap(); g.blocks = g.blocks.filter(function(x){ return x.id !== S.selected; }); S.selected = null; render(); toast('Capítulo removido · Ctrl+Z desfaz'); break;
    case 'dupBlock': snap(); var src = selBlock(), idx = g.blocks.indexOf(src), cp = JSON.parse(JSON.stringify(src)); cp.id = uid(); g.blocks.splice(idx + 1, 0, cp); S.selected = cp.id; render(); toast('Capítulo duplicado'); break;
    case 'tplModal': tplModal(); break;
    case 'saveTpl': saveTplModal(); break;
    case 'confirmSaveTpl':
      var nm = document.getElementById('tplName').value.trim();
      if(!nm){ var inpN = document.getElementById('tplName'); inpN.focus(); inpN.style.borderColor = 'var(--warn)'; inpN.placeholder = 'Dê um nome ao template'; return; }
      var base = T(g.template), id = 'u' + Date.now(), kk = colorsOf(g);
      var nt2 = Object.assign({}, base, { id:id, nome:nm, grupo:document.getElementById('tplGroup').value, desc:'Criado a partir de ' + c.nome, custom:true, font:g.font, body:g.body, cover:c.capa, bg:kk.bg, text:kk.text, muted:kk.muted, line:kk.line, surface:kk.surface,
        accents:[g.accent].concat(base.accents.filter(function(a){ return a !== g.accent; })).slice(0,4), blocks:g.blocks.map(function(b){ return b.type; }), preset:JSON.parse(JSON.stringify(g.blocks)) });
      S.custom.push(nt2); g.template = id; g.colors = {}; closeModal(); render(); toast('Template “' + nm + '” salvo'); break;
    case 'tplBlocks':
      snap(); var old = g.blocks, tt = T(g.template);
      g.blocks = makeBlocks(g.template).map(function(nb2){
        var prev = old.find(function(o){ return o.type === nb2.type; });
        if(prev && !tt.preset){ nb2.s = Object.assign({}, prev.s); if(nb2.type === 'abertura'){ nb2.s.layout = tt.abertura; nb2.s.foto = tt.cover || nb2.s.foto; } if(nb2.type === 'fotografias') nb2.s.layout = tt.fotos; }
        return nb2;
      });
      S.tplChanged = false; render(); toast('Capítulos reorganizados'); break;
    case 'tplKeep': S.tplChanged = false; render(); break;
    case 'publish':
      c.published = JSON.parse(JSON.stringify(g));
      var now = new Date(); c.publishedAt = 'hoje às ' + String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
      c.atividade.push({ t:'Galeria publicada', d:'agora' }); render(); sendModal(); break;
    case 'send': sendModal(); break;
    case 'copyMsg':
      var ta = document.getElementById('sendMsg');
      function ok(){ el.textContent = 'Mensagem copiada'; }
      try { navigator.clipboard.writeText(ta.value).then(ok, function(){ ta.select(); ok(); }); } catch(err){ ta.select(); ok(); }
      break;
    case 'guest':
      var srcG = c.published || g;
      document.getElementById('guestBody').innerHTML = renderGallery(c, srcG, { guest:true });
      document.getElementById('guestNote').textContent = c.published ? 'Versão publicada, como um convidado vê.' : 'Ainda não publicada. Pré-visualização do rascunho, como um convidado verá.';
      document.getElementById('guest').hidden = false; document.getElementById('closeGuest').focus(); break;
    case 'novo':
      var nid = 'c' + Date.now();
      S.clients.push(mk({ id:nid, nome:'[Nome & Nome]', tipo:'Casamento', data:'', prazo:'', local:'[Local]', capa:1, producao:'Agendado', titulares:[{ nome:'[Titular]', email:'[e-mail]', acesso:true }], fornecedores:[{ funcao:'Direção e filme', nome:'Bonis Films · Gabi e João' }], atividade:[{ t:'Evento criado', d:'agora' }], gallery:makeGallery('bonis') }));
      S.current = nid; S.view = 'perfil'; HIST = { past:[], future:[] }; render(); toast('Evento criado. Preencha a ficha.'); break;
  }
});
document.addEventListener('keydown', function(e){
  if(e.target.matches && e.target.matches('[data-del-tpl]') && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); e.target.click(); return; }
  if(e.key === 'Escape'){ document.getElementById('guest').hidden = true; closeModal(); }
  var typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if(S.view === 'editor' && !typing && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z'){ e.preventDefault(); if(e.shiftKey) redo(); else undo(); }
});
var focusSnap = false;
document.addEventListener('focusin', function(e){ var ds = e.target.dataset; if(ds && (ds.s || ds.g || ds.hsl || ds.hex || ds.colorin)){ snap(); } });
document.addEventListener('pointerdown', function(e){ var ds = e.target.dataset; if(ds && (ds.hsl || ds.colorin) && document.activeElement === e.target){ snap(); } });
document.addEventListener('input', function(e){
  var el = e.target, c = client(), g = c.gallery, d = el.dataset;
  if(el.id === 'q'){ S.q = el.value; var pos = el.selectionStart; render(); var q = document.getElementById('q'); q.focus(); q.setSelectionRange(pos, pos); return; }
  if(d.c){ c[d.c] = el.value; save(); return; }
  if(d.forn !== undefined){ c.fornecedores[+d.forn][d.k] = el.value; save(); return; }
  if(d.titk !== undefined){ c.titulares[+d.titk][d.k] = el.value; save(); return; }
  if(d.hsl){
    var h = +document.getElementById('hueR').value, sa = +document.getElementById('satR').value, li = +document.getElementById('litR').value;
    g.accent = fromHsl(h, sa, li); syncColorUI('accent', g.accent);
    document.getElementById('satR').style.background = 'linear-gradient(90deg,' + fromHsl(h,0,li) + ',' + fromHsl(h,100,li) + ')';
    document.getElementById('litR').style.background = 'linear-gradient(90deg,#000,' + fromHsl(h,sa,50) + ',#fff)';
    refreshPreview(); return;
  }
  if(d.colorin){ setColor(d.colorin, el.value); syncColorUI(d.colorin, el.value, 'colorin'); refreshPreview(); return; }
  if(d.hex){ var v = el.value.trim(); if(v.charAt(0) !== '#') v = '#' + v; if(validHex(v)){ el.style.borderColor = ''; setColor(d.hex, v.toLowerCase()); syncColorUI(d.hex, v.toLowerCase(), 'hex'); refreshPreview(); } else { el.style.borderColor = 'var(--warn)'; } return; }
  if(d.g){ g[d.g] = el.value; refreshPreview(); return; }
  if(d.s){ selBlock().s[d.s] = el.value; refreshPreview(); return; }
});
document.addEventListener('change', function(e){
  var el = e.target;
  if(el.matches('[data-switch]')){ S.current = el.value; S.selected = null; S.tplChanged = false; HIST = { past:[], future:[] }; render(); return; }
  if(el.dataset.c || el.dataset.g || el.dataset.hsl || el.dataset.colorin || el.dataset.hex){ render(); }
});

function setColor(which, v){ var g = client().gallery; if(which === 'accent') g.accent = v; else { g.colors = g.colors || {}; g.colors[which] = v; } }
function syncColorUI(which, v, skip){
  var ci = document.querySelector('[data-colorin="' + which + '"]'), hx2 = document.querySelector('[data-hex="' + which + '"]');
  if(ci && skip !== 'colorin') ci.value = v; if(hx2 && skip !== 'hex') hx2.value = v.toUpperCase();
  document.querySelectorAll(which === 'accent' ? '[data-accent]' : '[data-cset="' + which + '"]').forEach(function(sw){ sw.setAttribute('aria-pressed', String((sw.dataset.accent || sw.dataset.val).toLowerCase() === v.toLowerCase())); });
  if(which === 'accent' && skip !== 'hsl'){ var hs = toHsl(v), hr = document.getElementById('hueR'); if(hr && document.activeElement !== hr && !/(satR|litR)/.test(document.activeElement.id)){ hr.value = hs[0]; document.getElementById('satR').value = hs[1]; document.getElementById('litR').value = hs[2]; } }
  var k = colorsOf(client().gallery), cr = contrast(k.text, k.bg), b = document.getElementById('crBadge');
  if(b) b.innerHTML = '<span class="tag ' + (cr >= 4.5 ? 'ok' : 'warn') + '">Contraste ' + cr.toFixed(1) + ':1</span>' + (cr >= 4.5 ? 'boa leitura' : 'texto difícil de ler');
}
/* arrastar: capítulos e kanban */
var drag = null;
document.addEventListener('dragstart', function(e){
  var li = e.target.closest && e.target.closest('.block'), kc = e.target.closest && e.target.closest('.kc');
  if(li) drag = { type:'block', id:li.dataset.id }; else if(kc) drag = { type:'kc', id:kc.dataset.kc };
  if(drag) e.dataTransfer.effectAllowed = 'move';
});
document.addEventListener('dragover', function(e){
  if(!drag) return;
  if(drag.type === 'block'){ var li = e.target.closest('.block'); if(li){ e.preventDefault(); document.querySelectorAll('.block').forEach(function(x){ x.classList.toggle('drag-over', x === li); }); } }
  else { var col = e.target.closest('.col'); if(col){ e.preventDefault(); document.querySelectorAll('.col').forEach(function(x){ x.classList.toggle('over', x === col); }); } }
});
document.addEventListener('drop', function(e){
  if(!drag) return;
  if(drag.type === 'block'){
    var li = e.target.closest('.block'); if(!li) return; e.preventDefault(); snap();
    var g = client().gallery, from = g.blocks.findIndex(function(b){ return b.id === drag.id; }), to = g.blocks.findIndex(function(b){ return b.id === li.dataset.id; });
    g.blocks.splice(to, 0, g.blocks.splice(from, 1)[0]);
  } else {
    var col = e.target.closest('.col'); if(!col) return; e.preventDefault();
    var cl = S.clients.find(function(x){ return x.id === drag.id; });
    if(cl.producao !== col.dataset.col){ cl.producao = col.dataset.col; cl.atividade.push({ t:'Etapa alterada para ' + cl.producao, d:'agora' }); }
  }
  drag = null; render();
});
document.addEventListener('dragend', function(){ drag = null; document.querySelectorAll('.drag-over,.over').forEach(function(x){ x.classList.remove('drag-over','over'); }); });

window.addEventListener('beforeunload', function(){ clearTimeout(saveT); writeNow(); });
document.addEventListener('visibilitychange', function(){ if(document.hidden){ clearTimeout(saveT); writeNow(); } });
document.getElementById('closeGuest').addEventListener('click', function(){ document.getElementById('guest').hidden = true; });
document.getElementById('resetDemo').addEventListener('click', function(){ S = demo(); HIST = { past:[], future:[] }; render(); toast('Dados de demonstração restaurados'); });
render();
