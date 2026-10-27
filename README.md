# Bonis Films · Plataforma (protótipo navegável)

Site institucional, subpágina de pacotes/orçamento, galeria privada do casal e painel administrativo (Bonis Studio), todos na identidade oficial da Bonis Films (logo bonıs.films, off-white, areia, verde escuro e DM Sans).

## Estrutura

```
bonis-films/
├── index.html        Home em estilo portfólio (sobre, filmes, portfólio, propósito, serviços, depoimento, contato)
├── orcamento.html    Pacotes 2026, extras e montador de orçamento com envio pelo WhatsApp
├── galeria.html      Galeria privada do casal ("Minha história")
├── studio.html       Bonis Studio: painel, produção, clientes, editor de galeria, templates
├── css/              Um arquivo de estilo por página
├── js/               Um arquivo de script por página
└── img/              Fotos usadas nas páginas
```

## Como abrir

Abra `index.html` no navegador. Para que o Studio salve os dados entre visitas, sirva a pasta por um servidor local, por exemplo:

```
cd bonis-films
python3 -m http.server 8000
```

e acesse http://localhost:8000.

## Publicar na Vercel

O projeto está configurado como site estático no arquivo `vercel.json`, sem instalação de dependências nem etapa de build.

1. Importe o repositório do GitHub na Vercel.
2. Use a raiz do repositório como **Root Directory**, onde ficam `index.html` e `vercel.json`.
3. O preset é **Other** e o diretório de saída é `.`. Não preencha comandos de instalação ou build.
4. Clique em **Deploy**. Não são necessárias variáveis de ambiente para este protótipo.

As páginas ficam disponíveis em `/`, `/orcamento`, `/galeria` e `/studio`. Os links existentes com `.html` são redirecionados pela Vercel para as URLs sem extensão. CSS, JavaScript e imagens mantêm seus caminhos atuais.

A publicação hospeda o protótipo descrito abaixo: não adiciona autenticação, banco de dados ou armazenamento compartilhado.

## O que ainda é demonstração

- O Studio guarda tudo no navegador (localStorage). Na versão final, os dados vão para o Supabase.
- Reprodução de vídeo e downloads são simulados. Na versão final, vêm do Frame.io / serviço de streaming e do armazenamento (Cloudflare R2).
- Não há login. A área do cliente e o Studio ganham autenticação na integração com o Supabase.
- O botão de WhatsApp do orçamento abre o WhatsApp sem número definido. Troque `https://wa.me/?text=` por `https://wa.me/55DDDNUMERO?text=` em `js/orcamento.js`.
- O logo é recriado em texto com a fonte DM Sans. Com o arquivo vetorial oficial (SVG), basta substituir o bloco `.logo` nas páginas.
- Textos entre colchetes, como [Local do casamento] e [duração], são lugares para o conteúdo real.

## Onde editar

- Pacotes e extras do montador: objetos `PACKS` e `EXTRAS` em `js/orcamento.js` (e os cards em `orcamento.html`).
- Cores da marca: variáveis no início de cada arquivo em `css/` (`--paper`, `--sand`, `--green`, `--ink`).
- Templates de galeria do Studio: objeto `BASE` em `js/studio.js`.
