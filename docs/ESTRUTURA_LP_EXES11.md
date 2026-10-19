# Landing Page EXES11 — 6ª Emissão (página do assessor)

Estrutura montada a partir do docx `EXES11_Landing_Page_Assessor_6a_Emissao` e da identidade do Figma `EXES11 - Exes - Market Makers`.

> O Figma NÃO tem layout de landing page. Ele tem o pack de posts (EXES_ADS_01/1 a 02/7), banners para portais (1180×300, 1180×182, 300×50, 320×50, 468×60, 728×90, 970×90), peças de display/Google e a área de marca (logo + paleta). A LP será construída seguindo essa identidade, com a ordem e o texto exatos do docx.

---

## 1. Design system (extraído do Figma)

### Cores oficiais (frame de paleta)

| Nome no Figma | Hex | Uso na LP |
|---|---|---|
| Aqua Exes | `#4BA7B3` | Acento: "EXES11" em destaque, pills, ícones, botões, linhas da timeline |
| Marinho Estratégico | `#1B2B4B` (*) | Fundo das seções escuras, títulos, borda do CTA, texto principal |
| Reserva Azul | `#374D62` | Fundo secundário escuro, gráficos (2ª série), cards sobre navy |
| Capital Grafite | `#595959` | Texto de apoio, legendas de gráfico, notas de rodapé |
| Equilíbrio Neutro | `#AEAFB2` | Divisores, bordas, texto desabilitado, 3ª série de gráfico |
| Black Sólido | `#000000` | Só na logo "éxes" sobre fundo claro |
| Off-white (dos posts) | `#F4F2ED` | Fundo dos cards e das seções claras (cor lida dos posts, não tem nome na paleta) |

(*) No frame do Figma a etiqueta do Marinho Estratégico está com o hex `#4ba7b3` copiado errado (igual ao Aqua). O docx usa `#1b2b4b` para a borda dos CTAs e bate com a cor vista nos posts. Usar `#1B2B4B`.

Gold: o docx pede "um número em gold" nos quatro pilares. Não existe gold na paleta do Figma. Proposta: `#C9A24B` só nos quatro numerais. **Confirmar com a Éxes.**

### Tipografia

- Família: **Montserrat** (é a fonte dos posts e a definida no docx).
- H1: Montserrat 700, 40–48px desktop / 30px mobile, caixa alta, navy ou branco.
- H2 de seção: Montserrat 700, 28–32px, caixa alta, com o "x" da logo em aqua acima do título (padrão dos posts).
- Corpo: Montserrat 400, 16–17px, line-height 1.55, grafite ou navy.
- Destaques inline: Montserrat 600/700 em aqua (ex.: "EXES11", números).
- Notas legais/rodapés de fonte: Montserrat 400, 12–13px, grafite.
- Tarja de material publicitário: 700, caixa alta, tamanho ≥ 50% da maior letra da página (obrigatório; ver seção 2).

### Componentes recorrentes (vistos nos posts e banners)

- **Etiqueta "MATERIAL DE DIVULGAÇÃO"** no topo esquerdo + **pill "EXES11"** aqua no topo direito.
- **Logomark "x"** aqua antes dos títulos.
- **Cards off-white** com cantos 12–16px, sem sombra pesada, borda fina `#E6E3DC`.
- **Ícones em círculo** (aqua / navy / cinza) ligados por setas e linha tracejada (fluxo EXES11 → CRI → Incorporadora → Obra → %).
- **Botão primário**: fundo aqua `#4BA7B3`, texto navy ou branco 700, cantos cheios (pill), texto tipo "SAIBA MAIS" / ">>>".
- **Botão outline** (padrão do docx): borda 1px navy, texto navy 700 caixa alta, centralizado.
- **Gráficos**: barras e donuts em navy / reserva azul / aqua / neutro, rótulos em grafite, fonte no rodapé.
- **Seções escuras**: fundo navy com foto de empreendimento (prédio, obra) e overlay, texto branco, destaque aqua.
- **Disclaimer vertical** (frame "Discl…"): bloco navy com texto legal branco.

### Grid e responsivo

- Container 1200px, gutters 24px, 12 colunas desktop; 1 coluna mobile, padding lateral 16px.
- Seções com padding vertical 80px desktop / 48px mobile.
- Tabelas viram cards empilhados no mobile; timeline horizontal vira vertical.

---

## 1b. Layout de referência: BellCred (Felipe Vargas, Behance)

A referência é o site institucional da BellCred. A ideia é manter a **estrutura e os componentes** dela, trocando a identidade (verde-limão → Aqua Exes, azul petróleo → Marinho Estratégico, Plus Jakarta → Montserrat) e o conteúdo (crédito consignado → oferta do EXES11).

### O que copiar da referência (na ordem do docx)

| Dobra (ordem do docx) | Padrão da BellCred | Como fica na LP EXES11 |
|---|---|---|
| Moldura geral | Página inteira dentro de uma "folha" branca centralizada, cantos arredondados grandes (~32px), fundo cinza-claro ao redor, ~1320px | Mesma folha. Fundo externo `#EEF0F2`, folha branca, conteúdo em container 1110px centralizado |
| 0. Compliance | Barra fina navy no topo com texto branco pequeno | Vira a **tarja MATERIAL PUBLICITÁRIO** (navy, sticky, letra ≥ 50% do H1). Abaixo, linha off-white com "LEIA O PROSPECTO..." |
| 0. Header | Logo à esquerda, 2 links, "Entre em contato" à direita com ícone | Logo Éxes + logo da 6ª emissão; âncoras "Como participar", "Cronograma", "Carteira"; à direita "Fale com o RI" (ri@exes.com.br) |
| 1. Hero | 2 colunas: eyebrow em pill + título grande com trecho colorido + subtítulo + botão sólido + "Saiba mais ˅"; à direita foto recortada sobre a letra gigante da marca com 2 mini-cards flutuantes | Eyebrow "6ª EMISSÃO · EXES11". H1 do docx com "6ª EMISSÃO" em aqua. H2 como subtítulo. Botão aqua "CLIQUE AQUI PARA [X]" + link "Ver cronograma ˅". À direita: o "x" gigante da Éxes em aqua com foto de empreendimento recortada e 2 mini-cards: "Preço por cota R$ 9,91" e "Rendimento 12m 17,13%" |
| 1. Três ícones do hero | Faixa de 3 destaques sob o hero, divisores verticais, ícone + título bold + apoio | **R$ 9,91 por cota** / mínimo 10 cotas (R$ 99,10) · **R$ 250 milhões** / volume base, lote adicional até 25% · **17,13% em 12 meses** / cota patrimonial (set/25 a ago/26) |
| 2. Faixa de logos | Linha "Instituições parceiras" com logos em cinza | Gestor Éxes · Coordenador Líder Éxes Serviços Financeiros · Administrador BTG Pactual · Assessor Legal CEPEDA · selos ANBIMA, logos cinza com legenda do papel |
| 3. Entenda a 6ª emissão | Bloco 2 colunas: frase grande com tracinho colorido à esquerda, texto + link com seta à direita | Título à esquerda; à direita "É uma oferta primária..." + link "→ Ver ficha técnica". Abaixo, o comparativo secundária × 6ª emissão em 2 cards lado a lado |
| 4. Como seus clientes podem participar | Título centralizado + **tabs com ícone** + grade de cards com ícone em caixinha | Tabs "Clientes cotistas" / "Público em geral". Cada aba: 3 cards (datas, regras, liquidação) + mini-timeline. CTA 2 abaixo |
| 5. Condições comerciais | Grade de cards com ícone (mesmo componente) | 5 cards: taxa de adm/gestão, performance, custos da oferta, formador de mercado, distribuição 3,5%*. Notas em texto pequeno abaixo |
| 6. Tese em quatro pilares | Imagem à esquerda com cards flutuantes; à direita lista **Passo 01–04** com título bold e descrição, linhas finas | À esquerda ilustração/gráfico; à direita "Pilar 01 Distribuições / 02 Rendimento / 03 Garantias / 04 Originação", numeral em gold. Rodapé legal da seção |
| 7. Dados para a conversa | Carrossel de cards com setas ‹ › | Carrossel de 3–4 cards com gráficos SVG (retorno desde jun/22, 12 meses vs CDI/IFIX, ranking DY, Top 10), fonte no pé de cada card. CTA 3 abaixo |
| 8. Qualidade da carteira | Seção "Conheça": eyebrow + título + parágrafos à esquerda, foto à direita | Texto (patrimônio, composição, concentração, obras, mitigantes) à esquerda; mapa do Brasil / donut à direita; accordion "Ver carteira completa" |
| 9. Para onde vai o dinheiro | Cards com linhas finas (não existe tabela na ref.) | Card grande com tabela antes × depois, pill "PROJEÇÃO DA GESTORA" no canto, pipeline e cenário base como 3 mini-cards, avisos abaixo |
| 10. Ficha técnica | Accordion "Ainda tem dúvidas?" com "+" | Título à esquerda; à direita lista expansível com os 11 itens da ficha (ou tabela de 2 colunas aberta, se o compliance preferir tudo visível) |
| 11. Cronograma | Lista "Passo 01/02/03..." com linhas finas | 8 datas em lista vertical, data em aqua e etapa em bold; no desktop timeline horizontal com pontos. Notas e rodapé completo abaixo. CTA 4 |
| 12. Fatores de risco | Faixa CTA navy 2 colunas | Faixa navy: à esquerda "FATORES DE RISCO (RESUMO OBRIGATÓRIO)" + texto; à direita o aviso "LEIA O PROSPECTO..." em destaque |
| 13. Rodapé | Logo + rede social; descrição + colunas; selo "Site 100% seguro"; linha © | Logo Éxes + ri@exes.com.br; colunas "Documentos" (Prospecto, Lâmina, Regulamento, CVM, B3) e "Contato"; texto legal completo; pill "Página exclusiva para assessores"; "© Éxes Gestora de Recursos 2026" |

### Regras visuais tiradas da referência

- Cards: fundo branco, borda 1px `#E6E8EB`, raio 12px, sem sombra; ícone de linha dentro de uma caixinha 36px com borda.
- Títulos de seção: 32–36px, peso 600, navy; uma palavra ou trecho em aqua quando fizer sentido.
- Eyebrow: pill com ícone pequeno + texto caixa alta em aqua, 13px, letter-spacing 0,06em.
- Botão primário: retangular com raio 6px (a ref. usa quase reto), fundo aqua, texto navy 700 16px, padding 18×32.
- Link secundário: texto navy 600 + chevron ou seta "→" em aqua.
- Divisores: linhas 1px `#E6E8EB`; tracinho decorativo 40×4px aqua acima de títulos.
- Seções alternam branco e `#F7F8FA`; uma seção navy no meio (CTA) e o rodapé em `#F7F8FA`.
- Espaçamento: 96px entre seções no desktop, 56px no mobile.
- Mini-cards flutuantes do hero: branco, borda fina, ícone em círculo aqua, label 13px cinza + valor 18px navy 700.

---

## 2. Regras obrigatórias (compliance, valem para todas as dobras)

1. **Tarja "MATERIAL PUBLICITÁRIO"** fixa no topo (sticky), em todas as dobras, com letra ≥ 50% da maior letra usada na página. Como o H1 será ~44px, a tarja precisa ter ≥ 22px.
2. **Aviso de leitura do Prospecto** logo abaixo da tarja, em caixa alta: "LEIA O PROSPECTO, A LÂMINA E O REGULAMENTO DO FUNDO ANTES DE ACEITAR A OFERTA, EM ESPECIAL A SEÇÃO "FATORES DE RISCO". O INVESTIMENTO NAS COTAS REPRESENTA UM INVESTIMENTO DE RISCO."
3. Todo número de rentabilidade vem acompanhado de "Rentabilidade passada não representa garantia de rentabilidade futura."
4. Projeções recebem o selo visível **PROJEÇÃO DA GESTORA**.
5. Página restrita: rodapé diz "Página destinada exclusivamente a assessores de investimento e profissionais da rede de distribuição."
6. Nenhum número, data ou nome vai para a tela sem conferência contra o material publicitário (páginas citadas no docx).

---

## 3. Estrutura da página, dobra por dobra (ordem do docx)

### 0. Barra fixa de compliance
- Tarja MATERIAL PUBLICITÁRIO (fundo navy, texto branco 700).
- Linha do aviso "LEIA O PROSPECTO…" (fundo off-white, texto navy 12–14px, caixa alta).

### 1. Hero (fundo navy + foto de empreendimento com overlay)
- Logo da 6ª emissão do EXES11 (arte do Figma / Éxes) + logo "éxes".
- **H1:** EXES11 ABRE A 6ª EMISSÃO: TUDO O QUE VOCÊ PRECISA PARA ORIENTAR SEUS CLIENTES
- **H2:** Condições, cronograma, regras para cotistas e para o público em geral e dados da carteira, para apoiar a sua conversa com o cliente.
- Três cards com ícone (aqua):
  - R$ 9,91 por cota, investimento mínimo de 10 cotas (R$ 99,10).
  - R$ 250 milhões de volume base, com lote adicional de até 25%.
  - 17,13% em rendimentos em 12 meses, sobre a cota patrimonial (set/25 a ago/26).
- **CTA 1:** "CLIQUE AQUI PARA [X]" — destino a definir.

### 2. Faixa de logos (fundo off-white)
Gestor: Éxes · Coordenador Líder: Éxes Serviços Financeiros · Administrador: BTG Pactual · Assessor Legal: CEPEDA Advogados · Selos ANBIMA (se aprovados). Logos em cinza/navy, cada uma com legenda do papel.

### 3. ENTENDA A 6ª EMISSÃO
- Texto: É uma oferta primária: o próprio fundo emite cotas novas, e os recursos entram no patrimônio do EXES11 para a compra de recebíveis imobiliários, majoritariamente CRI, LCI e LIG.
- **Comparativo** em dois cards lado a lado: *Secundária anterior* × *6ª emissão* (dados das páginas 2 e 55 do material publicitário — **pendente: pegar os números**).

### 4. COMO SEUS CLIENTES PODEM PARTICIPAR
Dois cards (ou duas colunas):

**Clientes cotistas do EXES11**
- Data de Corte: 15/10/26
- Direito de preferência: 19 a 29/10/26, na B3, com fator de 1,78896745052195 cota nova por cota detida
- Regras: cessão vedada e sem período de sobras
- Timeline: 15/10 → 19 a 29/10 → 30/10 e 03/11 (liquidação). Fator da página 4.

**Público em geral**
- Subscrição: 04 a 18/11/26, com mínimo de 10 cotas (R$ 99,10)
- Critério: rateio proporcional aos valores subscritos
- Alocação e liquidação: 19/11/26 e 25/11/26

**CTA 2:** "CLIQUE AQUI PARA [X]".

### 5. CONDIÇÕES COMERCIAIS (tabela chave → valor)
- Taxa de administração e gestão: 1,00% ao ano sobre o patrimônio líquido
- Taxa de performance: não há
- Custos da oferta: 72,5% pelos subscritores, no preço de emissão, e 27,5% pela Gestora, que arca com parte da comissão de distribuição
- Formador de mercado: Suno Desenvolvimento Ltda., com 50% da remuneração suportada pelo Gestor
- Taxa de distribuição e remuneração da rede: 3,5%*
- Nota *: Percentual de referência pago a instituição participante da Oferta. A remuneração efetiva do assessor depende do percentual repassado (rebate) pela plataforma à qual ele está vinculado (XP, BTG ou outros), conforme o contrato entre assessor e a plataforma.
- Nota: Este resumo não constitui recomendação de investimento. A indicação da oferta depende da adequação ao perfil (suitability) de cada investidor.

### 6. A TESE EM QUATRO PILARES (quatro cards, numeral grande em gold)
1. **Distribuições:** R$ 0,13 por cota em cada um dos 20 meses de jan/25 a ago/26
2. **Rendimento:** 17,13% em 12 meses sobre a cota patrimonial, ou 117,13% do CDI do período
3. **Garantias:** LTV médio de 52,18%, nenhuma operação acima de 70% e toda a carteira de crédito com mitigante
4. **Originação:** 72% da carteira de crédito originada e estruturada pela própria Gestora

Rodapé da seção: A Gestora suporta 27,5% dos custos da oferta e 50% da remuneração do formador de mercado. Rendimento isento de IR para pessoa física. Rentabilidade passada não representa garantia de rentabilidade futura. (Fonte: página 7, leitura da Gestora, carteira de 31/08/2026.)

### 7. DADOS PARA A CONVERSA COM O CLIENTE (fundo navy, gráficos)
- Texto: De jun/22 a ago/26, o retorno total do EXES11 foi de +60,8%, contra +34,6% do IFIX e +18,2% do IPCA. Em 12 meses, 17,13% contra 14,63% do CDI e 8,23% do IFIX. Em agosto de 2026, o fundo ficou em 1º no DY patrimonial entre os FIIs de recebíveis analisados e esteve no Top 10 em 15 dos 15 meses.
- Gráficos (páginas 5, 8, 9 e 10 do material):
  - Barras: retorno total desde jun/22 (EXES11 × IFIX × IPCA).
  - Barras: 12 meses (EXES11 × CDI × IFIX).
  - Ranking DY patrimonial (1º lugar) / Top 10 em 15 de 15 meses.
- Rodapé: "EXES11 pela cota de mercado com rendimentos reinvestidos (desde jun/22) e sobre a cota patrimonial (12 meses). A comparação com o CDI confronta rendimento isento com CDI bruto. Fontes: Éxes, BTG Pactual, B3, Banco Central e Comdinheiro. Rentabilidade passada não representa garantia de rentabilidade futura."
- **CTA 3:** "CLIQUE AQUI PARA [X]".

### 8. QUALIDADE DA CARTEIRA (fundo off-white, cards + gráficos)
- Patrimônio: R$ 135,7 milhões
- Composição: 18 operações de crédito em seis estados, uma cota de fundo listado e caixa
- Concentração: maior exposição de 6,29% do patrimônio, e nenhuma acima de 10%
- Obras: acompanhadas todo mês por agente de medição independente, com ILG mínimo contratual de 130%
- Mitigantes: aval da Cyrela (AAA.br), emissão da São Carlos (A+.br) e imóvel locado à Ânima (AA(bra)). Os ratings são das contrapartes, e não do fundo
- Gráficos das páginas 15, 18, 19 e 20 (mapa do Brasil por estado, donut de composição, barras de concentração). Tabela completa da carteira (página 16) como material de apoio: link/accordion "Ver carteira completa".

### 9. PARA ONDE VAI O DINHEIRO DA OFERTA (tabela antes × depois + selo PROJEÇÃO DA GESTORA)
| | Hoje | Após a oferta |
|---|---|---|
| Carteira de crédito | R$ 104,4 milhões | cerca de R$ 345,3 milhões |
| Operações | 18 | 32 operações de crédito |

- Pipeline: R$ 890,7 milhões em 21 operações, sendo R$ 184,7 milhões em 8 operações prontas para investir
- Cenário base: dividend yield de 14,91% ao ano sobre o preço de emissão no primeiro ano e CDI + 2,63% em cinco anos.
- Aviso: O pipeline não constitui compromisso de investimento. As informações são baseadas em simulações e os resultados reais poderão ser significativamente diferentes.
- Rodapé: "Fonte: Éxes, Estudo de Viabilidade e mapa de originação de 17/09/2026. NÃO HÁ GARANTIA DE QUE O FUNDO INVESTIRÁ EM QUALQUER DAS OPERAÇÕES INDICADAS." (Páginas 13, 24 a 26.)

### 10. FICHA TÉCNICA DA OFERTA (tabela em duas colunas)
- Ativo: Éxes Fundo de Investimento Imobiliário Responsabilidade Limitada, EXES11
- Tipo de oferta: 6ª emissão, distribuição primária, rito automático da Resolução CVM 160
- Preço por cota: R$ 9,91
- Volume base: R$ 250.000.006,04 (25.227.044 cotas), com lote adicional de até 25%
- Montante mínimo: R$ 10.000.002,62 (1.009.082 cotas)
- Investimento mínimo: R$ 99,10 (10 cotas)
- Público alvo: investidores em geral
- Gestor: Éxes Gestora de Recursos Ltda.
- Administrador: BTG Pactual Serviços Financeiros S.A. DTVM
- Coordenador Líder: Éxes Serviços Financeiros
- Assessor Legal: CEPEDA Advogados
- Rodapé: fonte, página 4 do material publicitário.

### 11. CRONOGRAMA PARCIAL DA OFERTA (timeline, padrão das outras ofertas, página 5)
- 09/10/26: Registro na CVM e Anúncio de Início
- 15/10/26: Data de Corte
- 19 a 29/10/26: Direito de Preferência na B3
- 30/10 e 03/11/26: Liquidação do Direito de Preferência
- 04 a 18/11/26: Período de Subscrição
- 19/11/26: Procedimento de Alocação
- 25/11/26: Data de Liquidação
- 01/02/27: Conversão dos recibos em cotas
- Nota: Cronograma parcial. As datas são indicativas e sujeitas a alterações, atrasos e antecipações. Cronograma validado e aprovado pela B3.
- Rodapé completo: Cronograma parcial. A Oferta prevê ainda um segundo período de subscrição, de 04/01/2027 a 20/01/2027, com procedimento de alocação em 21/01/2027, divulgação do resultado em 22/01/2027 e segunda data de liquidação em 26/01/2027; o cronograma completo consta do Estudo de Viabilidade e dos demais documentos da Oferta. As datas são indicativas e estão sujeitas a alterações, atrasos e antecipações; qualquer modificação será comunicada à CVM e aos investidores. Cronograma validado e aprovado pela B3.
- **CTA 4:** "CLIQUE AQUI PARA [X]".

### 12. FATORES DE RISCO (resumo obrigatório, fundo navy)
Risco de crédito; fatores macroeconômicos; riscos do setor imobiliário; execução das garantias dos CRI; riscos tributários; diluição; não colocação do montante mínimo; caixa não investido; não concretização do pipeline; preço de emissão; entre outros descritos, em ordem decrescente de relevância, na seção "Fatores de Risco" do Prospecto. O investimento nas cotas representa um investimento de risco.

LEIA O PROSPECTO, A LÂMINA E O REGULAMENTO DO FUNDO ANTES DE ACEITAR A OFERTA, EM ESPECIAL A SEÇÃO "FATORES DE RISCO".

### 13. Rodapé geral e links institucionais
- O Prospecto Definitivo, os anúncios e os comunicados da Oferta estão nas páginas do Administrador, do Gestor (www.exes.com.br), do Coordenador Líder, da CVM e da B3. Dúvidas: ri@exes.com.br.
- **PENDENTE:** links e passo a passo de acesso, conforme o Prospecto Definitivo.
- Material publicitário elaborado pela Éxes Gestora de Recursos Ltda., gestora do EXES11, para a 6ª emissão, registrada automaticamente na CVM nos termos da Resolução CVM 160. Os documentos da Oferta não foram objeto de revisão pela CVM. Este material não substitui o Prospecto e não constitui recomendação de investimento.
- A RENTABILIDADE PASSADA NÃO REPRESENTA GARANTIA DE RENTABILIDADE FUTURA. A EXPECTATIVA DE RENTABILIDADE PROJETADA NÃO REPRESENTA PROMESSA OU GARANTIA, E OS RESULTADOS REAIS PODERÃO SER SIGNIFICATIVAMENTE DIFERENTES. O FUNDO NÃO CONTA COM GARANTIA DA GESTORA, DO ADMINISTRADOR, DO COORDENADOR LÍDER, DE SEGURO OU DO FGC. Recomenda-se a leitura do Regulamento e do Prospecto, com atenção à seção de Fatores de Risco.
- Página destinada exclusivamente a assessores de investimento e profissionais da rede de distribuição.
- Nota interna (não publicar): se a página for veiculada em ambiente do grupo Suno, avaliar com o compliance a inclusão do vínculo entre o formador de mercado e Suno Notícias, fiis.com.br e Funds Explorer (página 11).

---

## 4. Pendências antes de fechar o build

| # | Item | Quem resolve |
|---|---|---|
| 1 | Destino dos 4 CTAs "CLIQUE AQUI PARA [X]" (formulário? WhatsApp? download do material? área do assessor?) | Éxes / cliente |
| 2 | Logo da 6ª emissão do EXES11 (arquivo SVG/PNG) e logos de BTG, CEPEDA, Éxes Serviços Financeiros, ANBIMA | Éxes |
| 3 | Números do comparativo "secundária anterior × 6ª emissão" (páginas 2 e 55) | Material publicitário |
| 4 | Dados dos gráficos (páginas 5, 8, 9, 10, 15, 18, 19, 20) e tabela da carteira (página 16) | Material publicitário (PDF) |
| 5 | Cor gold dos pilares (não existe na paleta) | Éxes |
| 6 | Links do Prospecto / passo a passo de acesso | Prospecto Definitivo |
| 7 | Fotos de empreendimento para hero e seções escuras (as do Figma servem?) | Figma / Éxes |
| 8 | Hospedagem e domínio; a página terá gate de acesso para assessor? | Cliente |

## 5. Plano de build

1. HTML + CSS estático (sem framework), Montserrat via Google Fonts, variáveis CSS com a paleta acima.
2. Gráficos em SVG inline (sem biblioteca) para controle total de cor e fonte legal.
3. Seções na ordem acima, cada uma com `id` para âncoras.
4. Tarja de compliance `position: sticky`.
5. Mobile first; testar em 375px, 768px e 1200px.
6. Entrega: pasta `LP EXES/site/` com `index.html`, `styles.css`, `assets/`.
