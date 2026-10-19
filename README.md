# LP EXES11 — 6ª emissão (página do assessor)

Landing page estática da 6ª emissão de cotas do EXES11 (Éxes Gestora de Recursos), destinada exclusivamente a assessores de investimento e profissionais da rede de distribuição.

## Como abrir

A página é um único `site/index.html` com os arquivos em `site/assets/`. Não tem build.

Para ver localmente, sirva a pasta `site` (abrir o arquivo direto no navegador também funciona, mas o vídeo do hero precisa de servidor):

```bash
cd site
python -m http.server 8080
```

Depois abra http://localhost:8080.

## O que tem na página

- Tarja "Material publicitário" e aviso do Prospecto fixos no topo (no celular, só a tarja).
- Hero com vídeo de fundo que avança com a rolagem, desfocado, e cards em vidro líquido.
- Navbar em pílula que compacta ao rolar; menu sanduíche no celular e no tablet.
- 15 gráficos interativos em Chart.js e uma figura acessível do histórico de distribuições.
- Carrossel infinito com as fachadas dos empreendimentos da carteira.
- Cronograma que aparece conforme a rolagem.
- Rolagem suave com Lenis.

Bibliotecas por CDN, com versão fixa: Chart.js 4.4.1 (cdnjs) e Lenis 1.1.20 (unpkg). Fonte Montserrat (Google Fonts).

## Pendências antes de publicar

- Conectar o formulário ao CRM e definir o destino após envio confirmado; ver `docs/INTEGRACAO_FORMULARIO.md`.
- Links e passo a passo do Prospecto Definitivo, Lâmina, Regulamento, CVM e B3.
- Fotos de Acoi – Ilhas Gregas, Duarte e Lima (Ânima) e FGR, que não têm imagem pública.
- Cinco fachadas vieram de páginas públicas (apto.vc e site da Persa) e quatro delas têm marca d'água do portal. Trocar pelos arquivos originais da Éxes ou das incorporadoras. Origem de cada imagem em `docs/fotos-carteira/`.
- Validar com o compliance a tarja no celular sem o aviso do Prospecto no topo.

## Pastas

- `site/` — a landing page.
- `docs/` — estrutura da página, prompts usados (Claude Design e Flow) e registro de origem das fotos.

## Revisão de 19/10/2026

Infográfico da oferta, comparação das emissões, ajustes solicitados de títulos/ícones/alinhamento/mobile, texto adicional no rodapé e formulário de captação em pop-up apenas no front-end. Ver `docs/INTEGRACAO_FORMULARIO.md` para os campos propostos e o ponto de integração.
