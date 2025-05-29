# GrafPane - Plugin de Monitoramento para Grafana

O **GrafPane** é um plugin de datasource para o Grafana que permite monitorar rapidamente o status de diversos serviços/sistemas, exibindo indicadores visuais para cada item consultado. É ideal para quem quer montar um painel de **status de sites, APIs e serviços internos**.

---

## 🚦 Status possíveis

Cada item consultado retorna um **status numérico**, que é interpretado visualmente no Grafana conforme a legenda abaixo:

| Status | Descrição      |
|--------|----------------|
| `0`    | ✅ Operacional |
| `1`    | ⚠️ Parcialmente funcional |
| `2`    | ❌ Com problemas |
| `3`    | ❓ Desconhecido |

Esses valores podem ser usados para colorir painéis, aplicar alertas e exibir ícones no Grafana.

---

## 🛠️ Instalação manual (Linux)

Para instalar o plugin manualmente, execute o script abaixo em seu terminal (Linux com Grafana):

```bash
curl -s https://raw.githubusercontent.com/mauroalx/mauroalx-grafpane-datasource-dist/main/install-grafpane.sh | bash
