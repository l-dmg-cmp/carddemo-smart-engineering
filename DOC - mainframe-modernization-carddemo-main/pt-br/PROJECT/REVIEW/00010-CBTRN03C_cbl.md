Gerado em: 1º de outubro de 2024

## Revisão de Análise Técnica

**Arquivo:**  \src\CBTRN03C.cbl

**Título:**  Gerador de Relatório de Detalhes de Transações

**Resumo:** 

Este programa COBOL gera um relatório detalhado de transações a partir de dados de transações. Ele lê registros de transações, recupera dados relacionados de arquivos indexados (referência cruzada de cartão, tipo de transação, categoria de transação) e formata as informações em um relatório. O relatório inclui totais de página, totais de conta e um total geral para o intervalo de datas especificado.

**Tecnologia:**

* **Linguagem de Programação:** COBOL 
* **Framework/Biblioteca:** `Not available`
* **Banco de Dados:**
  * **VSAM (Virtual Storage Access Method):** O programa interage com conjuntos de dados VSAM para armazenar e recuperar dados. Isso é evidente pelos comentários e cláusulas de organização de arquivos.
* **Outras Ferramentas:** `Not available` 

**Referência, Classe e Método:**

| Reference | Descrição |
|---|---|
| `CVTRA05Y` | Provavelmente um copybook contendo o layout para `TRANFILE-STATUS`. |
| `CVACT03Y` | Provavelmente um copybook contendo o layout para `CARDXREF-STATUS`. |
| `CVTRA03Y` | Provavelmente um copybook contendo o layout para `TRANTYPE-STATUS`. |
| `CVTRA04Y` | Provavelmente um copybook contendo o layout para `TRANCATG-STATUS`. |
| `CVTRA07Y` | Provavelmente um copybook contendo o layout para `TRANREPT-STATUS`. |

| Classe | Descrição |
|---|---|
| `Not available` |  |

| Método (Público) | Descrição |
|---|---|
| `Not available` |  |

| Método (Privado) | Descrição |
|---|---|
| `0000-TRANFILE-OPEN` | Abre o arquivo de transações. |
| `0100-REPTFILE-OPEN` | Abre o arquivo de relatório. |
| `0200-CARDXREF-OPEN` | Abre o arquivo de referência cruzada do cartão. |
| `0300-TRANTYPE-OPEN` | Abre o arquivo de tipo de transação. |
| `0400-TRANCATG-OPEN` | Abre o arquivo de categoria de transação. |
| `0500-DATEPARM-OPEN` | Abre o arquivo de parâmetro de data. |
| `0550-DATEPARM-READ` | Lê os parâmetros de data do arquivo de parâmetro de data. |
| `1000-TRANFILE-GET-NEXT` | Lê o próximo registro de transação do arquivo de transações. |
| `1100-WRITE-TRANSACTION-REPORT` |  Grava uma transação no relatório. |
| `1110-WRITE-PAGE-TOTALS` | Grava totais de página no relatório. |
| `1120-WRITE-ACCOUNT-TOTALS` | Grava totais de conta no relatório. |
| `1110-WRITE-GRAND-TOTALS` | Grava totais gerais no relatório. |
| `1120-WRITE-HEADERS` | Grava cabeçalhos de relatório. |
| `1111-WRITE-REPORT-REC` | Grava um registro no arquivo de relatório. |
| `1120-WRITE-DETAIL` |  Grava detalhes da transação no relatório. |
| `1500-A-LOOKUP-XREF` | Pesquisa informações do cartão no arquivo de referência cruzada. |
| `1500-B-LOOKUP-TRANTYPE` | Pesquisa informações do tipo de transação. |
| `1500-C-LOOKUP-TRANCATG` | Pesquisa informações da categoria de transação. |
| `9000-TRANFILE-CLOSE` | Fecha o arquivo de transações. |
| `9100-REPTFILE-CLOSE` | Fecha o arquivo de relatório. |
| `9200-CARDXREF-CLOSE` | Fecha o arquivo de referência cruzada do cartão. |
| `9300-TRANTYPE-CLOSE` | Fecha o arquivo de tipo de transação. |
| `9400-TRANCATG-CLOSE` | Fecha o arquivo de categoria de transação. |
| `9500-DATEPARM-CLOSE` | Fecha o arquivo de parâmetro de data. |
| `9999-ABEND-PROGRAM` | Finaliza o programa de forma anormal. |
| `9910-DISPLAY-IO-STATUS` | Exibe o status do arquivo. |

--Made by "Smart Engineering" (by Compass.UOL)--