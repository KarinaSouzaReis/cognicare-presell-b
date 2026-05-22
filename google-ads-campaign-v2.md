# Google Ads — Campanha CogniCare V2 (Brand Bidding Expandido)

> **Presell:** https://cognicare.checkedpicks.com/
> **Link de afiliado destino:** Digistore24 (`#aff=karinaSouzaReis`)
> **Orçamento total:** R$ 300 (use o que sobrar da v1 ou novo aporte) · **Diário:** R$ 30
> **Status:** rascunho pronto pra subir ou pra atualizar a campanha v1 existente
> **Data:** 2026-05-13

---

## O que mudou em relação à v1

| Item | v1 (já rodando) | v2 (esta versão) |
|---|---|---|
| URL final | `brainfog.healthstack.com.br` | **`cognicare.checkedpicks.com`** |
| Página | Bridge editorial básica | Bridge **2-coluna desktop + sidebar sticky + "Is It Legit?" + "How We Evaluated" + comparação com 3 concorrentes** |
| Idioma da campanha | A confirmar (Boeira alertou que erro comum é deixar "todos") | **Travar em English somente** (correção do erro mais comum) |
| Keywords | 6 brand variants | **10 brand variants** (inclui "legit", "scam", "side effects") |
| Headlines | 15 sem ângulo "legit" | 15 com **novo ângulo "Is It Legit?"** absorvendo concorrente |
| Sitelinks | Genéricos | Apontam pras **novas seções** (Legit, Methodology, Comparison) |
| UTMs | Não configurados | **Configurados** (rastreio por keyword no GA4) |
| Negativas | 10 básicas | **18 expandidas** (cobre cupom, alternativas, marcas concorrentes) |
| CPC máximo | R$ 4 | **R$ 5,50** (sobe pra entrar mais no leilão) |

---

## 1. Configuração da campanha

| Campo | Valor |
|---|---|
| **Nome** | `CogniCare - Brand Bidding V2 (May 2026)` |
| **Objetivo** | Vendas (ou "Sem orientação de meta") |
| **Tipo** | Pesquisa (Search) |
| **Redes** | ✅ Pesquisa Google · ❌ Parceiros · ❌ Display |
| **Localização** | `United States` (somente) |
| **Idioma** | ⚠️ **English somente** (não deixar "todos os idiomas") |
| **Orçamento diário** | `R$ 30,00` |
| **Tipo de entrega** | Padrão (não acelerado) |
| **Estratégia de lance** | **CPC manual** |
| **CPC máximo (lance inicial)** | `R$ 5,50` (~$1,03) |
| **Dispositivos** | Todos |
| **Programação** | 24/7 nos primeiros 7 dias |

---

## 2. Grupo de anúncios

**Nome:** `Brand Variants - Zero Competition Expanded`

### Palavras-chave (10 — todas em correspondência exata)

```
[cognicare pro]
[cognicare pro buy]
[cognicare pro reviews]
[cognicare pro review]
[buy cognicare pro]
[cognicare pro supplement]
[cognicare pro official]
[cognicare pro side effects]
[is cognicare pro legit]
[cognicare pro scam]
```

**Por que essas 10:**
- 6 primeiras: brand variants padrão (zero concorrência paga confirmada na análise inicial)
- `[cognicare pro side effects]`: pessoas pesquisando efeitos colaterais costumam converter mais (já estão considerando comprar e querem due diligence)
- `[is cognicare pro legit]`: bate diretamente com a nova seção "Is CogniCare Pro Legit?" da presell
- `[cognicare pro scam]`: contra-intuitivo, mas converte — quem busca "scam" tá considerando comprar e quer confirmar. Boeira usa essa estratégia

### Palavras-chave negativas (18)

Cole na campanha ou no grupo:

```
free
gratis
download
amazon
walmart
ebay
target
generic
alternative
knockoff
fake
counterfeit
coupon
promo code
mind lab pro
neuriva
onnit
alpha brain
```

**Explicação:**
- Linha 1-7: busca de produto grátis ou em outro marketplace → não converte no Digistore
- 8-11: pessoas buscando alternativas/genéricos
- 12-13: cupom (a página oficial não oferece cupons, decepciona o usuário)
- 14-18: nomes de concorrentes (Mind Lab Pro, Neuriva, Onnit Alpha Brain) — não queremos pagar por quem busca a concorrência

---

## 3. Anúncio Responsivo (RSA)

### Headlines (15 — cole uma por linha)

```
CogniCare Pro Review 2026
Is CogniCare Pro Legit?
CogniCare Pro Side Effects?
Honest CogniCare Pro Review
CogniCare Pro Ingredients
Brain Fog Supplement Guide
Independent Buyer's Guide
CogniCare Pro Official Info
90-Day Money-Back Guarantee
Made in USA · GMP Certified
6 Plant-Based Ingredients
Caffeine-Free Brain Formula
Adults 40+ Cognitive Support
See Today's Price
Updated May 2026
```

**Mudanças em relação à v1:**
- ➕ "CogniCare Pro Side Effects?" (intercepta busca de due diligence)
- ➕ Mantém "Is CogniCare Pro Legit?" (alinha com nova seção da presell)
- ➕ "See Today's Price" (alinhado com novo CTA)
- ➖ Removeu "Buyer's Guide: CogniCare Pro" (redundância)

### Descriptions (4 — cole uma por linha)

```
Independent buyer's guide. Six plant-based ingredients. 90-day money-back guarantee.
For adults with brain fog & slow recall. Caffeine-free. Made in USA. GMP-certified.
See current pricing, ingredients & full label on the official store. Updated May 2026.
Honest review of ingredients, dosage, FAQ & what to know before you buy.
```

### URL final + caminhos

| Campo | Valor |
|---|---|
| **URL final** | `https://cognicare.checkedpicks.com/` |
| **URL final (mobile, opcional)** | mesmo da desktop |
| **Caminho de exibição 1** | `CogniCare-Pro` |
| **Caminho de exibição 2** | `Review-2026` |
| **Display URL aparece como** | `cognicare.checkedpicks.com/CogniCare-Pro/Review-2026` |

### Tracking template (UTM) — IMPORTANTE

No campo **"Modelos de acompanhamento"** da campanha (Configurações → URLs e modelos):

```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign=cognicare_brand_v2&utm_term={keyword}&utm_content={creative}
```

**O que isso faz:**
- `{lpurl}` = URL final do anúncio
- `{keyword}` = a palavra-chave exata que ativou (vai aparecer no GA4)
- `{creative}` = ID do criativo (vai aparecer no GA4)

**Por que importa:** depois você abre GA4 → Aquisição → Tráfego → e vê **qual keyword específica** trouxe cada `cta_click`. Cirúrgico.

---

## 4. Extensões de anúncio

### Sitelinks (4)

| Texto | Descrição 1 | Descrição 2 | URL |
|---|---|---|---|
| Is It Legit? | Operational check | Manufacturer, retailer, guarantee | `https://cognicare.checkedpicks.com/#legit` |
| 6 Ingredients | Plant-based breakdown | Bacopa, L-Tyrosine, Rhodiola & more | `https://cognicare.checkedpicks.com/#ingredients` |
| How We Evaluated | Our methodology | Independent buyer's guide | `https://cognicare.checkedpicks.com/#methodology` |
| Compare Options | vs Mind Lab Pro & Neuriva | Side-by-side breakdown | `https://cognicare.checkedpicks.com/#comparison` |

**Mudança importante:** todos os sitelinks agora levam pras **seções específicas** da nova página (`#legit`, `#methodology`, `#comparison`). Aumenta CTR porque o usuário sabe exatamente o que vai encontrar.

### Callouts (8)

```
90-Day Money-Back Guarantee
Made in USA
GMP-Certified Facility
Caffeine-Free Formula
One Capsule Per Day
11 Ingredients Disclosed
Independent Review
Reader-Supported
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

## 5. Como atualizar a campanha v1 existente (recomendado)

Em vez de criar campanha nova do zero, **atualize a v1**. Mantém o histórico e o aprendizado do algoritmo.

### Passos no Google Ads:

1. **Configurações da campanha:**
   - Idioma → `English` (não "todos")
   - CPC máx → subir pra `R$ 5,50`
   - Modelo de acompanhamento → colar o UTM acima

2. **Palavras-chave:**
   - Adicionar as 4 novas: `[cognicare pro]`, `[cognicare pro official]`, `[cognicare pro side effects]`, `[is cognicare pro legit]`, `[cognicare pro scam]`
   - Manter as 6 originais

3. **Negativas:**
   - Adicionar as 8 novas (mind lab pro, neuriva, onnit, alpha brain, knockoff, fake, counterfeit, alternative)

4. **Anúncio responsivo:**
   - Editar o anúncio
   - URL final → `https://cognicare.checkedpicks.com/`
   - Caminhos → `CogniCare-Pro` / `Review-2026`
   - Headlines → trocar pelas 15 novas (apaga as antigas, cola as novas)
   - Descriptions → trocar pelas 4 novas
   - Salvar

5. **Sitelinks:**
   - Editar cada um — trocar URL e descrições conforme tabela
   - Apontar pras seções novas (`#legit`, `#methodology`, `#comparison`)

6. **Callouts:**
   - Substituir os antigos pelos 8 novos

⚠️ **Atenção:** depois das mudanças, a campanha pode entrar em **revisão por 24-72h** (suplemento é categoria sensível). Não estranha. Não mexa de novo até aprovar.

---

## 6. Cenário alternativo: criar campanha v2 do zero (não recomendado)

Só faça isso se:
- A v1 estiver com problema grave (reprovação repetida)
- Você quiser fazer A/B teste de estrutura

Desvantagem: perde 17 dias de aprendizado do algoritmo (a v1 já tá rodando desde 25/04).

---

## 7. Métricas pra acompanhar pós-mudança

Os mesmos critérios do v1, mas agora com expectativa maior:

| Métrica | Verde (escala) | Amarelo (mexer) | Vermelho (matar) |
|---|---|---|---|
| **Impressões/dia** | >50 | 10-50 | <10 por 5 dias |
| **CTR** | >5% | 2-5% | <2% |
| **CPC médio** | <R$ 3 | R$ 3-5 | >R$ 5 |
| **Quality Score** | 7-10 | 5-6 | <5 |
| **CTR botão na presell (Clarity)** | >25% | 15-25% | <15% |
| **cta_click/dia** | >5 | 1-5 | 0 por 5 dias |

### Análise semanal com Claude (princípio gap-12)

Cada **segunda-feira**, faça este workflow:

1. Google Ads → **Insights e relatórios → Termos de pesquisa** → exportar CSV
2. Abre Claude (Project CogniCare) e cola:
   ```
   Métricas reais da presell https://cognicare.checkedpicks.com/ após [N] cliques esta semana:
   - Impressões: X
   - CTR do anúncio: Y%
   - CPC médio: R$ Z
   - cta_click total: W
   - CTR do botão: V%
   
   [Cole o CSV de termos de pesquisa]
   
   Heatmap (Clarity) mostra: [3 observações dos seus 3-5 replays]
   
   Liste 3 hipóteses de bottleneck em ordem de probabilidade.
   Para cada hipótese, sugira 1 ajuste específico e mensurável.
   ```
3. Aplica a primeira hipótese
4. Aguarda 5-7 dias e repete

Esse é o moat sobre o público do Boeira (que cria e não itera com dado).

---

## 8. Resumo das diferenças v1 → v2 (TL;DR)

- ✅ URL nova
- ✅ 4 keywords novas (cobre dúvidas comuns + ângulo "legit")
- ✅ 8 negativas novas (bloqueia concorrentes diretos e cupom)
- ✅ Idioma travado em English
- ✅ CPC subiu pra R$ 5,50 (entra mais no leilão)
- ✅ Sitelinks apontam pra seções específicas da presell
- ✅ UTMs configurados (rastreio fino no GA4)
- ✅ Headlines atualizadas com novo ângulo
- ✅ Rotina semanal de iteração com Claude documentada

---

*Última atualização: 2026-05-13.*
