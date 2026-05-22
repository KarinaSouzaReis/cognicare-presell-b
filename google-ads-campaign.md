# Google Ads — Campanha CogniCare Brain Fog (Test Run 1)

> **Presell:** https://brainfog.healthstack.com.br/
> **Link de afiliado destino:** Digistore24 (`#aff=karinaSouzaReis`)
> **Orçamento total:** R$ 300 · **Diário:** R$ 30 · **Duração:** ~10 dias
> **Status:** pronto pra criar no painel

---

## 1. Configuração da campanha

| Campo | Valor |
|---|---|
| **Nome** | `CogniCare - Brand Bidding Test` |
| **Objetivo** | Vendas (ou "Sem orientação de meta") |
| **Tipo** | Pesquisa (Search) |
| **Redes** | ✅ Pesquisa Google · ❌ Parceiros · ❌ Display |
| **Localização** | `United States` (somente) |
| **Idioma** | `English` |
| **Orçamento diário** | `R$ 30,00` |
| **Tipo de entrega** | Padrão (não acelerado) |
| **Estratégia de lance** | **CPC manual** (NÃO usar Maximize Conversions ou Target CPA agora) |
| **CPC máximo (lance inicial)** | `R$ 4,00` (~$0,75) |
| **Dispositivos** | Todos (depois ajusta se mobile estiver muito caro) |
| **Programação** | 24h por 7 dias (deixa rodar tudo no início) |

---

## 2. Grupo de anúncios

**Nome:** `Brand Variants - Zero Competition`

**Palavras-chave** (cole exatamente assim, com colchetes para correspondência exata):

```
[cognicare pro buy]
[cognicare pro reviews]
[cognicare pro review]
[cognicare pro official website]
[buy cognicare pro]
[cognicare pro supplement]
```

> Por que correspondência exata: o anúncio só aparece quando a pessoa digita exatamente essa expressão. Mais barato, mais qualificado.

**Palavras-chave negativas** (importante adicionar pra economizar):

```
free
gratis
download
amazon
walmart
ebay
generic
side effects
complaints
scam reviews
```

> Negativas evitam aparecer pra quem busca brecha gratuita ou intenção negativa demais.

---

## 3. Anúncio Responsivo (Responsive Search Ad)

### Headlines (15 — cole uma por linha no painel)

```
CogniCare Pro Review 2026
Is CogniCare Pro Legit?
Honest CogniCare Pro Review
CogniCare Pro Ingredients
Brain Fog Supplement Guide
Buyer's Guide: CogniCare Pro
CogniCare Pro Official Info
90-Day Money-Back Guarantee
Made in USA · GMP Certified
6 Plant-Based Ingredients
Natural Brain Fog Support
Caffeine-Free Brain Formula
Adults 40+ Cognitive Support
See Today's Pricing
Updated April 2026
```

### Descriptions (4 — cole uma por linha)

```
Independent buyer's guide. Six plant-based ingredients. 90-day money-back guarantee.
For adults with brain fog & slow recall. Caffeine-free. Made in USA. GMP-certified.
See current pricing, ingredients & full label on the official page. Updated April 2026.
Honest review of ingredients, dosage, FAQ & what to know about brain fog supplements.
```

### URLs e exibição

| Campo | Valor |
|---|---|
| URL final | `https://brainfog.healthstack.com.br/` |
| Caminho de exibição 1 | `CogniCare-Pro` |
| Caminho de exibição 2 | `Review` |
| Display URL aparece como | `brainfog.healthstack.com.br/CogniCare-Pro/Review` |

---

## 4. Extensões de anúncio

### Sitelinks (4)

| Texto do link | Descrição linha 1 | Descrição linha 2 | URL |
|---|---|---|---|
| Ingredients | 6 plant-based ingredients | Bacopa, L-Tyrosine & more | `https://brainfog.healthstack.com.br/#ingredients` |
| FAQ | Common questions answered | In plain English | `https://brainfog.healthstack.com.br/#faq` |
| About This Review | Independent buyer's guide | Brain Wellness Editorial | `https://brainfog.healthstack.com.br/about.html` |
| Disclaimer | Affiliate disclosure | FDA disclaimer | `https://brainfog.healthstack.com.br/disclaimer.html` |

### Callouts (8 — cole uma por linha)

```
90-Day Money-Back Guarantee
Made in USA
GMP-Certified Facility
Caffeine-Free Formula
One Capsule Per Day
Plant-Based Ingredients
Independent Review
11 Ingredients Disclosed
```

### Structured Snippets

- **Cabeçalho:** `Features`
- **Valores:**
  ```
  Plant-Based
  Caffeine-Free
  GMP-Certified
  Money-Back Guarantee
  Made in USA
  No Prescription Required
  ```

---

## 5. Configurar conversão (PASSO IMPORTANTE)

A presell manda o usuário pra outro site (Digistore). Não dá pra rastrear a venda direto no Google Ads. **Solução:** rastrear o **clique no botão CTA** como proxy de conversão.

O `script.js` já dispara o evento `cta_click` no GA4 sempre que alguém clica num botão. Falta só:

### Passo A — Marcar evento como conversão no GA4
1. Abre [analytics.google.com](https://analytics.google.com)
2. Admin (engrenagem) → **Eventos** (ou "Events")
3. Procura `cta_click` na lista (vai aparecer depois das primeiras visitas)
4. Marca como **Evento-chave** (Key Event) — antes era chamado "Conversão"

### Passo B — Conectar GA4 com Google Ads
1. No GA4, Admin → **Vinculações de produto** → **Google Ads**
2. Vincula a conta Google Ads
3. Habilita "importação de eventos-chave"

### Passo C — Importar conversão pro Google Ads
1. No Google Ads, **Ferramentas** → **Conversões**
2. **+ Nova ação de conversão** → **Importar** → **Google Analytics 4** → **Web**
3. Escolhe `cta_click` e importa
4. Configurações:
   - Categoria: **Outras** (ou "Compra" se preferir)
   - Valor: **Não usar valor**
   - Contagem: **Uma** (uma conversão por clique)
   - Janela: 30 dias

> **Atenção:** o evento só aparece no GA4 depois de algumas visitas reais. Se ainda não aparecer, espera 24h após começar o tráfego.

---

## 6. Avisos importantes antes de subir

### Aprovação pode demorar 1-3 dias
Suplementos é categoria **sensível** no Google Ads. Pode pedir verificação adicional. Não estranha se ficar "Em análise" por 24-72h.

### O que pode reprovar
- ❌ Claim de cura ou tratamento ("treats Alzheimer", "cures brain fog")
- ❌ Antes/depois extremo
- ❌ Promessa de resultado garantido
- ❌ Linguagem médica direta ("clinically proven to fix")
- ✅ Tom neutro: "support", "may help", "natural option" — é o que tá nas headlines/descriptions acima

### Se reprovar
- Anota o motivo exato que o Google diz
- Ajusta só a parte reprovada (geralmente 1-2 headlines/descriptions)
- Reenvia

### Brand bidding
Algumas redes de afiliados proíbem brand bidding. A análise inicial confirmou que o CogniCare Pro **permite** brand bidding pelo Digistore24. Se o Google reprovar por "trademark", abre um ticket pedindo autorização (a Digistore tem documento padrão).

---

## 7. Métricas pra acompanhar (após 3 dias rodando)

| Métrica | Bom | Atenção | Ruim |
|---|---|---|---|
| **CTR** (cliques no anúncio) | > 5% | 2-5% | < 2% |
| **CPC médio** | < R$ 3 | R$ 3-5 | > R$ 5 |
| **Quality Score** (KW) | 7-10 | 5-6 | < 5 |
| **CTR no botão da presell** (Clarity) | > 30% | 15-30% | < 15% |
| **Conversões (cta_click)** | 1+ por dia | 0-1 | 0 em 5 dias = ajustar copy |

### Se em 5 dias não tiver nenhum clique no botão:
- Problema está na **presell** (não nos anúncios)
- Voltar e refinar copy da página, headline, hook

### Se tiver clique no botão mas zero venda:
- Problema está na **sales page do produtor** (fora do nosso controle)
- Considerar trocar de oferta ou testar outro produto

---

## 8. Ordem de execução no painel Google Ads

1. Criar nova campanha → Pesquisa → Sem orientação de meta
2. Configurar localização US, idioma EN, orçamento R$ 30
3. Lance: CPC manual, R$ 4 inicial
4. Criar grupo de anúncios → colar as 6 keywords
5. Adicionar negativas
6. Criar anúncio responsivo → colar 15 headlines + 4 descriptions
7. URL final + caminhos de exibição
8. Adicionar 4 sitelinks
9. Adicionar 8 callouts
10. Adicionar structured snippets
11. Salvar e enviar pra revisão
12. **Configurar conversão (passos A, B, C da seção 5)**
13. Aguardar aprovação (1-3 dias)
14. Quando aprovar, deixar rodar 3 dias antes de mexer em nada

---

*Última atualização: 2026-04-26*
