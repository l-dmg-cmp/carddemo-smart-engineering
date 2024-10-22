Gerado em: 1º de outubro de 2024

# Adição de Transação CardDemo

## Arquivo

- `\src\COTRN02C.cbl`

## Descrição Resumida

Este documento descreve as especificações para a funcionalidade "Adicionar Transação" dentro do aplicativo CardDemo. Essa funcionalidade permite que usuários autorizados insiram manualmente os detalhes de novas transações de cartão de crédito no sistema.

## Histórico de Versões

- Versão: CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022)

## Descrição do Processo

Este programa facilita a adição de novas transações ao aplicativo CardDemo. Ele funciona como um formulário digital para registrar compras com cartão de crédito.

1. **Entrada de Dados:** O usuário insere os detalhes da transação do cartão de crédito.
2. **Validação de Dados:** O sistema verifica a precisão e a integridade dos dados inseridos.
3. **Registro da Transação:** Após a validação bem-sucedida, o sistema atribui um ID exclusivo à transação e armazena os detalhes no banco de dados.
4. **Confirmação:** O usuário recebe a confirmação de que a transação foi adicionada com sucesso.
5. **Tratamento de Erros:** Se houver discrepâncias nos dados inseridos, o sistema sinaliza os erros e solicita a correção do usuário.

## Requisitos para Iniciar o Processo

1.  **Autenticação do Usuário:** O usuário deve estar conectado ao aplicativo CardDemo com autorização apropriada para acessar e usar a funcionalidade "Adicionar Transação".
2.  **Dados de Entrada:** O usuário precisa fornecer os detalhes da transação necessários, incluindo, mas não se limitando a:
    -   ID da Conta
    -   Número do Cartão
    -   Tipo de Transação
    -   Categoria
    -   Fonte da Transação
    -   Descrição
    -   Valor
    -   Data de Origem
    -   Data de Processamento
    -   ID do Comerciante
    -   Nome do Comerciante
    -   Cidade do Comerciante
    -   CEP do Comerciante

## Validações e Regras do Processo

*   **Validação do Tipo de Dados:** O sistema verifica se os dados inseridos em cada campo estão em conformidade com o tipo de dados esperado (por exemplo, valores numéricos para ID da Conta, Número do Cartão, Valor, etc.).
*   **Validação do Formato de Dados:** O sistema impõe formatos específicos para determinados campos de dados, como AAAA-MM-DD para datas e -99999999.99 para o valor da transação.
*   **Validação de Existência de Dados:** O sistema verifica se a ID da Conta e o Número do Cartão inseridos existem nos respectivos bancos de dados.
*   **Campos Obrigatórios:** O sistema garante que todos os campos obrigatórios sejam preenchidos com dados apropriados.
*   **Validação em Tempo Real:** A validação ocorre em tempo real conforme o usuário insere os dados, fornecendo feedback imediato e facilitando a correção de erros.

## Detalhes Técnicos

**Variáveis:**

- `WS-ACCT-ID-N`: Representação numérica da ID da conta.
- `WS-CARD-NUM-N`: Representação numérica do número do cartão.
- `WS-TRAN-ID-N`: Representação numérica da ID da transação gerada.
- `WS-TRAN-AMT`: Valor da transação.
- `WS-TRAN-DATE`: Data da transação.
- `WS-DATE-FORMAT`: Formato da data (AAAA-MM-DD).
- `TRAN-ID`: Identificador exclusivo para cada transação.
- `TRAN-TYPE-CD`: Código que representa o tipo de transação.
- `TRAN-CAT-CD`: Código que representa a categoria da transação.
- `TRAN-SOURCE`: Origem da transação.
- `TRAN-DESC`: Descrição da transação.
- `TRAN-AMT`: Valor da transação.
- `TRAN-CARD-NUM`: Número do cartão de crédito associado à transação.
- `TRAN-MERCHANT-ID`: Identificador exclusivo para o comerciante.
- `TRAN-MERCHANT-NAME`: Nome do comerciante.
- `TRAN-MERCHANT-CITY`: Cidade do comerciante.
- `TRAN-MERCHANT-ZIP`: CEP do comerciante.
- `TRAN-ORIG-TS`: Timestamp indicando quando a transação foi iniciada.
- `TRAN-PROC-TS`: Timestamp indicando quando a transação foi processada.

**Métodos/Funções:**

- `PROCESS-ENTER-KEY`: Esta função é acionada quando o usuário pressiona a tecla Enter. Ela inicia o processo de validação para os campos-chave (ID da Conta e Número do Cartão) e campos de dados. Se os dados de entrada passarem em todas as validações, a transação será adicionada.
- `VALIDATE-INPUT-KEY-FIELDS`: Esta função valida a ID da Conta e o Número do Cartão inseridos pelo usuário. Ela verifica se as entradas são numéricas e se existem no sistema.
- `VALIDATE-INPUT-DATA-FIELDS`: Esta função valida todos os outros campos de dados inseridos pelo usuário. Ela garante que todos os campos obrigatórios sejam preenchidos e que os dados estejam em conformidade com o formato e tipo necessários.
- `ADD-TRANSACTION`: Esta função adiciona um novo registro de transação ao arquivo TRANSACT após a validação bem-sucedida das entradas do usuário.
- `COPY-LAST-TRAN-DATA`: Esta função permite que os usuários copiem dados da última transação inserida, simplificando a entrada de dados para transações consecutivas semelhantes.
- `RETURN-TO-PREV-SCREEN`: Esta função retorna o usuário à tela anterior.
- `SEND-TRNADD-SCREEN`: Esta função exibe a tela de adição de transação para o usuário.
- `RECEIVE-TRNADD-SCREEN`: Esta função recebe a entrada do usuário da tela de adição de transação.
- `POPULATE-HEADER-INFO`: Esta função preenche as informações do cabeçalho na tela, como o título, ID da transação, nome do programa, data e hora atuais.
- `READ-CXACAIX-FILE`: Esta função lê dados do arquivo CXACAIX, que parece ser um arquivo de referência cruzada para contas.
- `READ-CCXREF-FILE`: Esta função lê dados do arquivo CCXREF, que parece ser um arquivo de referência cruzada para cartões de crédito.
- `STARTBR-TRANSACT-FILE`, `READPREV-TRANSACT-FILE`, `ENDBR-TRANSACT-FILE`: Estas funções gerenciam a leitura e gravação de registros de transações de/para o arquivo TRANSACT.
- `WRITE-TRANSACT-FILE`: Esta função grava um novo registro de transação no arquivo TRANSACT.
- `CLEAR-CURRENT-SCREEN`: Esta função limpa todos os campos na tela atual.
- `INITIALIZE-ALL-FIELDS`: Esta função inicializa todos os campos de dados, normalmente definindo-os como valores padrão ou espaços.

## Segurança

-   **Autorização:** Somente usuários autorizados com funções e permissões específicas podem acessar e usar essa funcionalidade.
-   **Validação e Integridade de Dados:** O rigoroso processo de validação garante a precisão dos dados e protege o sistema contra entradas de dados inválidas ou maliciosas.
-   **Auditabilidade:** Todas as ações realizadas dentro dessa funcionalidade são registradas, mantendo um registro de auditoria para fins de segurança e rastreamento.

## Impacto em Outros Sistemas

-   **Processamento de Transações:** Novas transações adicionadas por meio dessa funcionalidade serão incluídas nas rotinas subsequentes de processamento de transações, potencialmente impactando cálculos financeiros, relatórios e outros processos downstream.
-   **Gerenciamento de Contas:** Novas transações podem afetar saldos de contas, limites de crédito e outros parâmetros relacionados à conta.
-   **Relatórios e Análise:** Esta funcionalidade influencia diretamente os dados usados para gerar relatórios e realizar análises relacionadas a transações com cartão de crédito, que podem ser usados por várias partes interessadas para inteligência de negócios e tomada de decisões.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| TRAN-ID        | Numérico     | Identificador exclusivo para uma transação. |
| TRAN-TYPE-CD   | Código         | Representa o tipo de transação (por exemplo, compra, reembolso). |
| TRAN-CAT-CD    | Código         | Categoriza a transação (por exemplo, mantimentos, entretenimento). |
| TRAN-SOURCE    | Texto         | Indica a origem da transação (por exemplo, online, em loja física). |
| TRAN-DESC      | Texto         | Fornece uma breve descrição da transação. |
| TRAN-AMT       | Numérico     | Armazena o valor monetário da transação. |
| TRAN-CARD-NUM   | Numérico     | Contém o número do cartão de crédito associado à transação. |
| TRAN-MERCHANT-ID | Numérico     | Identifica o comerciante envolvido na transação. |
| TRAN-MERCHANT-NAME | Texto         | Armazena o nome do comerciante. |
| TRAN-MERCHANT-CITY | Texto         | Indica a cidade da localização do comerciante. |
| TRAN-MERCHANT-ZIP | Texto         | Representa o CEP da localização do comerciante. |
| TRAN-ORIG-TS   | Timestamp    | Registra a data e hora em que a transação foi iniciada. |
| TRAN-PROC-TS   | Timestamp    | Registra a data e hora em que a transação foi processada. |

## Principais Referências

-   Arquivo `TRANSACT`: Este arquivo armazena os detalhes de todas as transações.
-   Arquivo `CXACAIX`: Um arquivo de referência cruzada que provavelmente contém informações relacionadas à conta.
-   Arquivo `CCXREF`: Um arquivo de referência cruzada que provavelmente contém informações relacionadas ao cartão de crédito.

Esta especificação é baseada na análise do trecho de código COBOL fornecido e visa apresentar as informações em uma linguagem clara e amigável para os stakeholders. No entanto, documentação técnica adicional e colaboração com a equipe de desenvolvimento são essenciais para uma compreensão e implementação abrangentes dessa funcionalidade.

--Made by "Smart Engineering" (by Compass.UOL)--