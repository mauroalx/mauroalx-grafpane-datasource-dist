![Versão](https://img.shields.io/badge/version-1.0.0-blue)
![Grafana Support](https://img.shields.io/badge/Grafana-9.x%20%7C%2010.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/plugin-unsigned-critical)

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

---

```bash
curl -s https://gist.githubusercontent.com/mauroalx/cbb5721defb7e3bff3d6b3154fb3179d/raw/da3056b14000bed9e76b4a6f0b762a00ebecc363/install-grafpane.sh | bash
```

❗ Sobre a assinatura do plugin
------------------------------

> ⚠️ Este plugin **não é assinado** pela Grafana Labs.

Plugins não assinados **funcionam normalmente**, mas o Grafana os bloqueia por padrão por questões de segurança. O script de instalação cuida disso automaticamente ao adicionar:
