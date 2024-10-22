Gerado em: 1º de outubro de 2024

# Estrutura de Relatórios de Transações CardDemo

## Título do Documento: Estrutura de Relatórios de Transações CardDemo - Especificação de Layout de Dados

## Descrição Resumida

Este documento descreve a estrutura dos dados de transações utilizados para gerar relatórios no sistema CardDemo. Este formato padronizado garante relatórios claros e consistentes em todas as funcionalidades.

## Histórico de Versões

- Versão 1.0: Versão Inicial

## Descrição do Processo

O sistema CardDemo utiliza uma estrutura de dados predefinida, `TRNX-RECORD`, para representar transações individuais de cartão de crédito/débito para fins de relatórios. Esta estrutura é dividida em duas seções principais:

1. **`TRNX-KEY`:** Identifica exclusivamente cada transação usando o número do cartão (`TRNX-CARD-NUM`) e um ID de transação exclusivo (`TRNX-ID`). Isso permite a recuperação e o rastreamento eficientes de transações individuais.
2. **`TRNX-REST`:** Contém informações detalhadas sobre a transação, incluindo:
    - Tipo de Transação (`TRNX-TYPE-CD`): Categoriza a transação (por exemplo, compra, reembolso).
    - Categoria de Transação (`TRNX-CAT-CD`): Classifica ainda mais a transação (por exemplo, mantimentos, viagens).
    - Origem da Transação (`TRNX-SOURCE`): Identifica a origem da transação (por exemplo, online, terminal POS).
    - Descrição da Transação (`TRNX-DESC`): Fornece uma breve explicação da transação.
    - Valor da Transação (`TRNX-AMT`): Registra o valor monetário da transação.
    - Informações do Comerciante (`TRNX-MERCHANT-ID`, `TRNX-MERCHANT-NAME`, `TRNX-MERCHANT-CITY`, `TRNX-MERCHANT-ZIP`): Armazena detalhes sobre o comerciante envolvido na transação.
    - Timestamps da Transação (`TRNX-ORIG-TS`, `TRNX-PROC-TS`): Registra os horários de início e processamento da transação, facilitando o rastreamento e a análise cronológicos.

## Requisitos para Iniciar o Processo

1.  **Dados de Transação:** O sistema deve capturar todos os detalhes necessários da transação, conforme definido na estrutura `TRNX-RECORD`.
2.  **Módulo de Geração de Relatórios:** Um módulo ou componente capaz de processar e formatar os dados da transação de acordo com a estrutura definida para geração de relatórios.

## Validações e Regras

*   **Integridade de Dados:** Todos os dados de transações devem estar em conformidade com os tipos de dados e comprimentos especificados definidos na estrutura `TRNX-RECORD` para garantir a integridade dos dados.
*   **Validação de Dados:** O sistema deve implementar regras de validação para garantir a precisão e consistência dos dados de transações (por exemplo, tipos e categorias de transações válidos, formatos válidos de data e hora).

## Detalhes Técnicos

**Variáveis:**

*   **`TRNX-RECORD`**: Uma estrutura de dados que representa uma única transação.
*   **`TRNX-KEY`**: Uma subestrutura dentro de `TRNX-RECORD` que identifica exclusivamente uma transação.
*   **`TRNX-REST`**: Uma subestrutura dentro de `TRNX-RECORD` que contém informações detalhadas sobre a transação.
*   **`TRNX-CARD-NUM`**: Um campo de 16 caracteres que representa o número do cartão de crédito/débito.
*   **`TRNX-ID`**: Um campo de 16 caracteres que serve como um identificador exclusivo para a transação.
*   **`TRNX-TYPE-CD`**: Um código de 2 caracteres que representa o tipo de transação.
*   **`TRNX-CAT-CD`**: Um código de 4 dígitos que representa a categoria da transação.
*   **`TRNX-SOURCE`**: Um campo de 10 caracteres indicando a origem da transação.
*   **`TRNX-DESC`**: Um campo de 100 caracteres fornecendo uma descrição da transação.
*   **`TRNX-AMT`**: Um campo numérico com duas casas decimais representando o valor da transação.
*   **`TRNX-MERCHANT-ID`**: Um campo de 9 dígitos que representa o identificador exclusivo do comerciante.
*   **`TRNX-MERCHANT-NAME`**: Um campo de 50 caracteres contendo o nome do comerciante.
*   **`TRNX-MERCHANT-CITY`**: Um campo de 50 caracteres indicando a cidade da localização do comerciante.
*   **`TRNX-MERCHANT-ZIP`**: Um campo de 10 caracteres que representa o CEP da localização do comerciante.
*   **`TRNX-ORIG-TS`**: Um campo de 26 caracteres armazenando a data e hora do início da transação.
*   **`TRNX-PROC-TS`**: Um campo de 26 caracteres armazenando a data e hora do processamento da transação.

## Impacto em Outros Sistemas

*   **Módulos de Relatórios:** Esta estrutura de dados de transações padronizada impacta diretamente quaisquer módulos de relatórios dentro do CardDemo, garantindo consistência na formatação e apresentação de dados em todos os relatórios.
*   **Análise de Dados:** Os dados estruturados facilitam a análise eficiente de dados, fornecendo um formato consistente para consultar e agregar informações de transações.

## Modelos

| Nome do Campo       | Tipo          | Descrição                                                     |
| ------------------- | ------------ | --------------------------------------------------------------- |
| `TRNX-CARD-NUM`     | Alfanumérico  | Número do cartão de crédito/débito (até 16 dígitos)            |
| `TRNX-ID`           | Alfanumérico  | Identificador de transação exclusivo (até 16 caracteres)        |
| `TRNX-TYPE-CD`      | Código (2)     | Código do tipo de transação (por exemplo, "PR" para Compra, "RF" para Reembolso) |
| `TRNX-CAT-CD`       | Código (4)     | Código da categoria de transação (por exemplo, "FOOD" para Mantimentos, "TRVL" para Viagens) |
| `TRNX-SOURCE`       | Alfanumérico  | Origem da transação (por exemplo, "ONLINE", "POS", "ATM")     |
| `TRNX-DESC`         | Alfanumérico  | Descrição da transação (até 100 caracteres)                 |
| `TRNX-AMT`          | Numérico      | Valor da transação (com 2 casas decimais)                     |
| `TRNX-MERCHANT-ID`  | Numérico      | Identificador do comerciante (até 9 dígitos)                   |
| `TRNX-MERCHANT-NAME`| Alfanumérico  | Nome do comerciante (até 50 caracteres)                         |
| `TRNX-MERCHANT-CITY`| Alfanumérico  | Cidade do comerciante (até 50 caracteres)                         |
| `TRNX-MERCHANT-ZIP` | Alfanumérico  | CEP do comerciante (até 10 caracteres)                        |
| `TRNX-ORIG-TS`      | Timestamp     | Timestamp de início da transação                                |
| `TRNX-PROC-TS`      | Timestamp     | Timestamp de processamento da transação                           |

## Referências Principais

*   **Sistema de Relatórios CardDemo:** O sistema principal que utiliza esta estrutura de dados para gerar relatórios de transações.

**Considerações Adicionais:**

*   **Dicionário de Dados:** Manter um dicionário de dados abrangente que defina cada campo de dados e seus valores permitidos será benéfico para o gerenciamento e a consistência dos dados.
*   **Segurança de Dados:** Implementar medidas de segurança de dados apropriadas para proteger dados confidenciais de transações contra acesso não autorizado e modificações.
*   **Otimização de Desempenho:** Considerar as implicações de desempenho ao lidar com grandes volumes de dados de transações e implementar estratégias de otimização conforme necessário.

--Made by "Smart Engineering" (by Compass.UOL)--