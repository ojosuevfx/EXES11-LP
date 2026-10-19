---
type: brief
status: active
created: 2026-09-17
updated: 2026-09-17
tags: [get-brolls, brief, intake]
---

# Brief do vídeo

Copie para o projeto com `gb.py init-brief --project ./video-01`, ou deixe o agente preencher pela entrevista de `/get-brolls-brief`. Edite só o bloco JSON abaixo: ele é lido pelo CLI, sem executar código. O `RULES.md` guarda as suas regras permanentes; este arquivo guarda **este** vídeo. Depois de editar, rode `gb.py brief --validate --project ...`.

```json
{
  "version": 1,
  "video": {
    "title": "LP EXES11 6ª emissão — fotos da carteira",
    "objective": "Mostrar na seção Qualidade da carteira as fotos reais (fachada ou perspectiva oficial) dos empreendimentos que lastreiam as operações do EXES11, com origem registrada.",
    "audience": "Assessores de investimento",
    "delivery": {
      "format": "native",
      "duration_s": null,
      "platform": "landing page (imagem estática)"
    }
  },
  "rights": {
    "posture": "per_item_evidence",
    "stock_allowed": false,
    "notes": "Uso em material publicitário da Éxes; a responsabilidade final fica com quem aprovar cada item."
  },
  "defaults": {
    "allowed_sources": [
      "local"
    ],
    "intent": "literal",
    "duration_hint_s": 4,
    "stock": false
  },
  "beats": [
    {
      "id": "acoi-ilhas-gregas",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Acoi – Ilhas Gregas (SP, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Acoi – Ilhas Gregas SP empreendimento"
      ],
      "notes": null,
      "blocked_reason": "Nenhuma imagem pública encontrada para Acoi – Ilhas Gregas; precisa do arquivo da Éxes ou da incorporadora."
    },
    {
      "id": "mont-blanc",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Mont Blanc (BA, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Mont Blanc BA empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "persa-spot-smart-living",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Persa – Spot Smart Living (MG, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Persa – Spot Smart Living MG empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "nmc-primus-park",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento NMC – Primus Park (GO, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "NMC – Primus Park GO empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "maxi-tramonto",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Maxi – Tramonto (MG, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Maxi – Tramonto MG empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "persa-piatra",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Persa Piatra (MG, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Persa Piatra MG empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "volpe-campos-elisios",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Raposo (Volpe) – Campos Elísios (SP, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Raposo (Volpe) – Campos Elísios SP empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "ic-mahalo",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento IC Construtora – Mahalo (ES, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "IC Construtora – Mahalo ES empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "totus-spot-diadema",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Totus – Spot Diadema (SP, Incorporação residencial), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Totus – Spot Diadema SP empreendimento"
      ],
      "notes": null,
      "blocked_reason": null
    },
    {
      "id": "duarte-e-lima-anima",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento Duarte e Lima (imóvel locado à Ânima) (BA, Educacional), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "Duarte e Lima (imóvel locado à Ânima) BA empreendimento"
      ],
      "notes": null,
      "blocked_reason": "Imóvel locado à Ânima (BA) sem imagem pública identificável; precisa do arquivo da Éxes."
    },
    {
      "id": "fgr",
      "narration": null,
      "target": "Fachada ou perspectiva oficial do empreendimento FGR (GO, Residencial pulverizado), publicada pela incorporadora ou pela Éxes",
      "queries": [
        "FGR GO empreendimento"
      ],
      "notes": null,
      "blocked_reason": "FGR tem vários loteamentos em GO e a carteira não diz qual; precisa saber o empreendimento ou receber a imagem."
    }
  ]
}
```

## O que você decide

- `video.title` e `video.objective`: obrigatórios. São a primeira pergunta da entrevista e o critério pelo qual cada beat é julgado.
- `video.delivery.format`: `native`, `reels` (9:16) ou `horizontal` (16:9). Se divergir de `video_format` no RULES.md, o `brief` avisa em `conflicts` — não é erro fatal, mas alguém precisa escolher antes de coletar.
- `rights.posture`: `per_item_evidence` (você confere fonte por fonte) ou `user_declaration`. O segundo exige nome e declaração já preenchidos no RULES.md; sem isso o `brief` recusa.
- `rights.stock_allowed`: se banco genérico (Pexels/Pixabay) pode entrar neste vídeo. O padrão é `false`: material literal primeiro.
- `defaults`: o que vale para todo beat que não disser o contrário — `allowed_sources`, `intent`, `duration_hint_s` e `stock`.
- `beats[]`: um por trecho, na ordem do vídeo.
  - `id`: de 1 a 40 caracteres em letras minúsculas, números e hífen. Ele vira o `--shot` do candidato, e é por ele que o beat e o material se encontram. Único no arquivo.
  - `narration`: a fala literal do trecho, ou `null`. Vai inteira para `preview --narration`.
  - `target`: obrigatório. O que precisa aparecer na tela.
  - `intent`: `literal` (entidade nomeada) ou `illustrative` (ideia genérica).
  - `allowed_sources`: subconjunto de `youtube`, `instagram`, `tiktok`, `pexels`, `pixabay`, `commons`, `nasa`, `local`.
  - `stock`: `true` exige pelo menos um banco em `allowed_sources`; `false` proíbe `pexels`/`pixabay` na lista. As duas incoerências são erro, não aviso.
  - `duration_hint_s`: entre 0,5 e 120 segundos, ou `null`. É sugestão de duração, não corte automático.
  - `queries`: buscas que já funcionaram neste beat; a primeira vira a query do `search` sugerido.
  - `blocked_reason`: texto ou `null`. Preenchido quando o beat depende de um fato que só a pessoa tem (a empresa, a data, o link da página, um arquivo dela). Beat travado sai das duas contas — não é `covered` nem `missing`, aparece em `blocked` — e `status.summary.do` vira pergunta para a pessoa, com `blocking_human: true`. Enquanto ele estiver preenchido, a skill não busca material para esse trecho: escolher uma imagem aproximada ali seria preencher buraco, que é justamente o que ela não faz. Apague a chave (ou volte para `null`) quando a resposta chegar.
- `coverage` do `brief` (e `summary.brief` do `status`) somam `covered + missing + blocked = beats`. `covered` conta só beat com pelo menos um candidato **não rejeitado**: quando todos os candidatos do trecho foram descartados, ele volta para `missing`.
- Chaves desconhecidas são ignoradas: dá para anotar o que quiser sem quebrar a leitura.

## Como o brief vira comando

`gb.py brief --project ...` devolve `summary` primeiro (uma linha, os problemas e o próximo passo), depois cada beat com `resolved` (defaults já aplicados), `commands` (`search`, `resolve` e `preview` prontos, com `--shot`, `--intent` e `--narration`) e `candidates` (o que já foi registrado com aquele `--shot`). Beat que só aceita Instagram, TikTok ou material próprio não tem busca por API: no lugar do `search` vem um `note` dizendo para achar a URL no navegador e usar o `resolve`. `--beat ID` mostra um beat só; `--validate` só confere o arquivo e, quando sobra algo para resolver, não chama o brief de válido. Nenhum outro comando passa a exigir BRIEF.md: ele orienta a coleta, não a bloqueia.

`GB_BRIEF_FILE` aponta para outro arquivo quando o brief não mora na pasta do projeto.
