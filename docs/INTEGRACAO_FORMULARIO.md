# Formulário — entrega de front-end

A revisão aplica os 16 pedidos levantados em 19/10/2026. A integração com CRM fica com o time responsável, conforme alinhamento do usuário.

## Arquivos

- `site/index.html`: conteúdo, infográfico, comparação, figura de distribuições, formulário e disclaimer.
- `site/assets/revision.css`: estilos da revisão, incluindo responsividade.
- `site/assets/lead-form.js`: validação e comportamento provisório do formulário.

## Campos propostos

Como não havia definição final de campos, foram adotados campos voltados ao público da página (assessores e rede de distribuição):

| name | Conteúdo | Regra |
|---|---|---|
| `name` | Nome completo | Obrigatório, 3–120 caracteres, sem espaços nas extremidades |
| `email` | E-mail profissional | Obrigatório, formato de e-mail, até 254 caracteres |
| `phone` | WhatsApp com DDD | Obrigatório, telefone brasileiro; aceita +55 |
| `role` | Perfil profissional | `assessor` ou `distribuidor` |
| `company` | Escritório ou instituição | Obrigatório, 2–160 caracteres |
| `contact_consent` | Autorização de contato | Obrigatório; checkbox envia `on` quando marcado |

Os cinco botões “Quero saber mais”, incluindo o da hero e o bloco final, abrem o mesmo pop-up nativo `#lead-dialog` com `data-open-lead`. O formulário fica oculto até o clique. O pop-up fecha pelo X, Escape ou clique fora, mantém o foco dentro enquanto aberto e retorna o foco ao botão de origem ao fechar. Os links de RI continuam apontando para `mailto:ri@exes.com.br`.

## Comportamento atual

Não há endpoint, envio de rede, gravação em storage ou simulação de sucesso. Após validação, o formulário avisa que o cadastro ainda não está disponível e oferece contato com RI. Os dados permanecem nos campos da página. Recarregar descarta o preenchimento. Sem JavaScript o fieldset permanece desabilitado para impedir submissão nativa acidental por GET.

## Ponto de integração

No callback `submit` em `site/assets/lead-form.js`, substituir o bloco de indisponibilidade depois de `form.reportValidity()` pelo envio real.

1. Ler `new FormData(form)` e adequar nomes e valores ao contrato do CRM.
2. Normalizar telefone; validar novamente todos os campos no servidor.
3. Configurar endpoint, política de privacidade e texto de contato aprovados para a operação.
4. Implementar estado de carregamento, bloqueio de duplo clique, tratamento de falha e recuperação sem perder os dados.
5. Mostrar sucesso ou redirecionar para a URL final apenas após confirmação do servidor.
6. Nunca colocar tokens privados ou credenciais do CRM no JavaScript público.

## Dados de referência

Conferidos no PPTX fornecido: slides 2, 4, 6, 7 e 8 sustentam a natureza primária da oferta, o preço de R$ 9,91, o mínimo de 10 cotas/R$ 99,10, o volume base de R$ 250 milhões (valor exato na ficha), o lote adicional de até 25% e a distribuição de R$ 0,13 por cota durante 20 meses (jan/25–ago/26). Não foi realizada auditoria integral de todas as séries preexistentes.

O texto adicional do rodapé foi preservado conforme enviado no WhatsApp, inclusive o trecho “pelo Funds Explorer por qualquer empresa do Grupo Suno”. Não houve reescrita jurídica.

## Pendências preexistentes

Os links definitivos do Prospecto, Lâmina, Regulamento, CVM e B3 continuam pendentes no projeto original. O formulário não representa reserva de cotas. As bibliotecas e fontes continuam sendo carregadas por CDN, como na versão original.
