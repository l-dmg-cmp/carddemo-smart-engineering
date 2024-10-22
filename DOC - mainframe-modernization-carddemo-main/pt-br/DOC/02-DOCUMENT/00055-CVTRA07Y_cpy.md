--CONTENT TO TRANSLATE--
Gerado em: 1 de outubro de 2024

# **Especificação de Layout do Relatório de Transações de Cartão**

## Título

- Título do Documento: Especificação de Layout do Relatório de Transações de Cartão

## Arquivo

- `\CVTRA07Y.cpy`

## Descrição Resumida

Este documento descreve a estrutura e o conteúdo de um relatório diário de transações para um sistema de cartão de crédito. O relatório fornece um resumo claro e organizado de todas as transações dentro de um intervalo de datas especificado.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022): Versão inicial

## Descrição do Processo

Este código define como os dados de transação serão organizados e apresentados em um relatório. É como um modelo que garante consistência e clareza para qualquer pessoa que esteja revisando o relatório.

1. **Cabeçalho do Relatório:** O relatório começa com um cabeçalho que exibe o título do relatório ("Relatório Diário de Transações") e o intervalo de datas das transações incluídas.
2. **Detalhes da Transação:** O corpo principal do relatório lista as transações individuais, cada uma fornecendo detalhes como:
    - ID da Transação
    - ID da Conta
    - Tipo de Transação (código e descrição)
    - Categoria (código e descrição)
    - Origem da Transação
    - Valor
3. **Cabeçalhos e Totais:** Para melhor legibilidade, o relatório inclui cabeçalhos de coluna para cada ponto de dados e calcula totais em três níveis:
    - Total da Página: Soma das transações em cada página
    - Total da Conta: Soma das transações para cada conta
    - Total Geral: Soma de todas as transações no relatório

## Requisitos para Iniciar o Processo

1. **Dados de Transação:** O sistema precisa de acesso a um conjunto de dados contendo todos os detalhes de transação necessários.
2. **Gatilho de Geração de Relatório:** Um processo ou evento deve acionar a geração deste relatório (por exemplo, final do dia, solicitação do usuário).

## Validações e Regras

* **Precisão dos Dados:** O sistema deve garantir a precisão e a integridade dos dados de transação antes de gerar o relatório.
* **Formatação de Dados:** O relatório deve seguir um formato consistente para datas, moeda e outros pontos de dados.

## Detalhes Técnicos

**Variáveis:**

* **`REPORT-NAME-HEADER`:** Define a seção de cabeçalho do relatório, incluindo o título do relatório e o intervalo de datas.
* **`TRANSACTION-DETAIL-REPORT`:** Descreve a estrutura para cada registro de transação dentro do relatório.
* **`TRANSACTION-HEADER-1`:** Define os cabeçalhos das colunas para a seção de detalhes da transação.
* **`TRANSACTION-HEADER-2`:** Um separador visual (uma linha) para distinguir o cabeçalho dos detalhes da transação.
* **`REPORT-PAGE-TOTALS`:** Calcula e apresenta o valor total das transações em uma única página.
* **`REPORT-ACCOUNT-TOTALS`:** Calcula e apresenta o valor total de todas as transações associadas a uma conta específica.
* **`REPORT-GRAND-TOTALS`:** Calcula e apresenta o valor total geral de todas as transações dentro do intervalo de datas especificado.

## Impacto em Outros Sistemas

* **Sistema de Relatórios:** A saída deste código será usada pelo sistema de relatórios para gerar o relatório real.
* **Análise de Dados:** O formato estruturado do relatório facilita a análise de dados para insights de negócios.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `REPT-SHORT-NAME` | String | Nome curto/código para o relatório. |
| `REPT-LONG-NAME` | String | Nome descritivo completo do relatório. |
| `REPT-START-DATE` | Data | Data de início para transações incluídas no relatório. |
| `REPT-END-DATE` | Data | Data de término para transações incluídas no relatório. |
| `TRAN-REPORT-TRANS-ID` | String | Identificador exclusivo para cada transação. |
| `TRAN-REPORT-ACCOUNT-ID` | String | Identificador da conta associada à transação. |
| `TRAN-REPORT-TYPE-CD` | String | Código que representa o tipo de transação. |
| `TRAN-REPORT-TYPE-DESC` | String | Descrição do tipo de transação. |
| `TRAN-REPORT-CAT-CD` | String | Código que representa a categoria da transação. |
| `TRAN-REPORT-CAT-DESC` | String | Descrição da categoria da transação. |
| `TRAN-REPORT-SOURCE` | String | Origem ou canal da transação. |
| `TRAN-REPORT-AMT` | Decimal | Valor da transação. |
| `REPT-PAGE-TOTAL` | Decimal | Valor total das transações em uma página. |
| `REPT-ACCOUNT-TOTAL` | Decimal | Valor total das transações de uma conta. |
| `REPT-GRAND-TOTAL` | Decimal | Valor total geral de todas as transações. |

## Principais Referências

* **Fonte de Dados de Transação:** Este layout de relatório depende de uma fonte de dados que fornece todos os detalhes de transação necessários.
* **Mecanismo de Geração de Relatório:** O layout será usado por um mecanismo ou ferramenta de geração de relatório para produzir o documento de relatório final.

--Made by "Smart Engineering" (by Compass.UOL)--