##  Compreendendo as Informações da Conta no CardDemo

**Arquivo:**  \CVACT01Y.cpy

Este código define a forma como as informações da conta são organizadas e armazenadas no sistema CardDemo. Pense nele como um modelo digital para um registro de conta.

**Contexto:**

Em qualquer sistema que gerencia contas financeiras, ter uma maneira estruturada de armazenar os detalhes da conta é crucial. Este trecho de código define o "Registro da Conta" – um modelo para armazenar todas as informações essenciais sobre a conta de cada cliente dentro do aplicativo CardDemo.

**Ação:**

Este código não "faz" nada ativamente em termos de cálculos ou ações. Em vez disso, ele atua como um modelo. Imagine uma tabela com colunas rotuladas:

| Field Name                 | Description                                     | Example                  |
| --------------------------- | ----------------------------------------------- | ------------------------ |
| ACCT-ID                    | Unique identifier for each account             | 12345678901             |
| ACCT-ACTIVE-STATUS         | Indicates if the account is active (e.g., 'Y'/'N') | 'Y'                     |
| ACCT-CURR-BAL              | Current account balance                         | 1500.50                 |
| ACCT-CREDIT-LIMIT          | Maximum credit allowed on the account          | 5000.00                 |
| ACCT-CASH-CREDIT-LIMIT     | Maximum cash withdrawal limit                 | 1000.00                 |
| ACCT-OPEN-DATE             | Date when the account was opened               | 2023-01-15              |
| ACCT-EXPIRAION-DATE        | Account expiration date                       | 2026-01-15              |
| ACCT-REISSUE-DATE          | Date the account was last renewed             | 2025-01-15              |
| ACCT-CURR-CYC-CREDIT       | Total credits in the current cycle          | 2000.00                 |
| ACCT-CURR-CYC-DEBIT        | Total debits in the current cycle            | 500.50                  |
| ACCT-ADDR-ZIP              | ZIP code associated with the account           | "90210"                 |
| ACCT-GROUP-ID              | Group affiliation of the account (if any)     | "PREMIUM"                |
| FILLER                     | Space reserved for future use                  | (Empty)                 |

**Regras de Negócio:**

* **Identificação Única:** Cada conta é identificada por um 'ACCT-ID' exclusivo, garantindo que as transações sejam aplicadas à conta correta.
* **Status da Conta:** O campo 'ACCT-ACTIVE-STATUS' é crucial para gerenciar o acesso e as operações da conta, garantindo que apenas contas ativas sejam usadas.
* **Gerenciamento de Crédito:** Campos como 'ACCT-CREDIT-LIMIT' e 'ACCT-CASH-CREDIT-LIMIT' são essenciais para gerenciar o risco e controlar a utilização do crédito.
* **Histórico da Conta:** Datas como 'ACCT-OPEN-DATE' e 'ACCT-REISSUE-DATE' ajudam a rastrear o ciclo de vida da conta e são essenciais para relatórios.
* **Rastreamento de Transações:** 'ACCT-CURR-CYC-CREDIT' e 'ACCT-CURR-CYC-DEBIT' fornecem um instantâneo da atividade da conta em um ciclo específico.

--Made by "Smart Engineering" (by Compass.UOL)--