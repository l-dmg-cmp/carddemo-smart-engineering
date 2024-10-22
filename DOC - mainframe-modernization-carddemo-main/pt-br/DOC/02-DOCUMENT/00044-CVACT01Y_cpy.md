Gerado em: 1º de outubro de 2024

# **CardDemo Sistema de Gestão de Contas**

## Título

- Título do Documento: CardDemo Sistema de Gestão de Contas - Especificação de Registro de Conta

## Arquivo

- `\CVACT01Y.cpy`

## Descrição Resumida

Este documento descreve a estrutura e os campos de dados dentro do "Registro de Conta" usado no sistema CardDemo. Este registro serve como um modelo para armazenar todas as informações essenciais sobre a conta de cartão de crédito de cada cliente.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo

O Registro de Conta não representa um processo em si, mas define a estrutura de dados para armazenar informações da conta. Essas informações são cruciais para várias funcionalidades do sistema, incluindo:

1. **Criação de Conta:** Quando uma nova conta é aberta, todos os detalhes da conta são preenchidos em um novo Registro de Conta.
2. **Acesso à Conta e Validação:** O sistema usa o Registro de Conta para verificar o status da conta, limites de crédito e outros detalhes durante transações ou consultas de conta.
3. **Processamento de Transações:** Saldo da conta, limites de crédito e outras informações relevantes do Registro de Conta são atualizados com base em transações como compras, pagamentos ou saques em dinheiro.
4. **Gerenciamento de Conta:** O sistema usa o Registro de Conta para funcionalidades como visualizar extratos de conta, atualizar informações da conta ou gerenciar limites de crédito.
5. **Relatórios:** Os dados da conta dos Registros de Conta são agregados e usados para gerar vários relatórios, como extratos de conta, relatórios de utilização de crédito e muito mais.

## Requisitos para Iniciar o Processo

N/A - Esta é uma estrutura de dados, não um processo.

## Validações e Regras

* **ID de Conta Exclusivo (ACCT-ID):** Cada conta deve ter um identificador exclusivo para garantir o processamento preciso da transação e o gerenciamento da conta.
* **Status da Conta (ACCT-ACTIVE-STATUS):** Este campo determina se uma conta está ativa e elegível para transações. Somente contas ativas devem ser permitidas para operações.
* **Gerenciamento de Limite de Crédito:** Campos como 'ACCT-CREDIT-LIMIT' e 'ACCT-CASH-CREDIT-LIMIT' são cruciais para controlar o risco de crédito e devem ser validados durante as transações.
* **Integridade de Dados:** Todas as datas, saldos e outros valores numéricos devem ser validados quanto ao formato e intervalo corretos para manter a integridade dos dados.

## Detalhes Técnicos

**Variáveis:**

* **`ACCT-ID`:** Um número exclusivo de 11 dígitos que identifica cada conta.
* **`ACCT-ACTIVE-STATUS`:** Um campo de 1 caractere indicando se a conta está ativa ('Y' para sim, 'N' para não).
* **`ACCT-CURR-BAL`:** O saldo atual da conta, armazenado como um número com duas casas decimais.
* **`ACCT-CREDIT-LIMIT`:** O crédito máximo permitido na conta, armazenado como um número com duas casas decimais.
* **`ACCT-CASH-CREDIT-LIMIT`:** O valor máximo em dinheiro que pode ser sacado da conta, armazenado como um número com duas casas decimais.
* **`ACCT-OPEN-DATE`:** A data em que a conta foi aberta, armazenada no formato AAAA-MM-DD.
* **`ACCT-EXPIRAION-DATE`:** A data em que a conta expira, armazenada no formato AAAA-MM-DD.
* **`ACCT-REISSUE-DATE`:** A data em que a conta foi renovada pela última vez, armazenada no formato AAAA-MM-DD.
* **`ACCT-CURR-CYC-CREDIT`:** O valor total de créditos aplicados à conta no ciclo atual, armazenado como um número com duas casas decimais.
* **`ACCT-CURR-CYC-DEBIT`:** O valor total de débitos aplicados à conta no ciclo atual, armazenado como um número com duas casas decimais.
* **`ACCT-ADDR-ZIP`:** O CEP associado à conta, armazenado como uma string de 10 caracteres.
* **`ACCT-GROUP-ID`:** Um identificador para o grupo ao qual a conta pertence (por exemplo, "PREMIUM"), armazenado como uma string de 10 caracteres.
* **`FILLER`:** Espaço reservado para uso futuro, atualmente vazio.

## Segurança

Embora não seja explicitamente definido neste trecho de código, o acesso aos Registros de Conta e as modificações nas informações da conta devem ser estritamente controlados e protegidos por meio de mecanismos apropriados de autenticação e autorização no sistema CardDemo.

## Impacto em Outros Sistemas

A estrutura do Registro de Conta é fundamental para o aplicativo CardDemo e afeta vários componentes do sistema:

* **Processamento de Transações:** Depende diretamente das informações da conta para autorização, atualizações de saldo e verificações de limite.
* **Aplicativos de Atendimento ao Cliente:** Usado para visualizar detalhes da conta, histórico e gerenciar configurações da conta.
* **Relatórios e Análise:** Fornece dados essenciais para gerar vários relatórios sobre desempenho da conta, utilização de crédito e comportamento do cliente.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| ACCT-ID | Numérico (11) | Identificador exclusivo para cada conta. |
| ACCT-ACTIVE-STATUS | Caractere (1) | Indica se a conta está ativa ('Y'/'N'). |
| ACCT-CURR-BAL | Decimal | Saldo atual da conta. |
| ACCT-CREDIT-LIMIT | Decimal | Crédito máximo permitido na conta. |
| ACCT-CASH-CREDIT-LIMIT | Decimal | Limite máximo de saque em dinheiro. |
| ACCT-OPEN-DATE | Data | Data em que a conta foi aberta (AAAA-MM-DD). |
| ACCT-EXPIRAION-DATE | Data | Data de expiração da conta (AAAA-MM-DD). |
| ACCT-REISSUE-DATE | Data | Data em que a conta foi renovada pela última vez (AAAA-MM-DD). |
| ACCT-CURR-CYC-CREDIT | Decimal | Total de créditos no ciclo atual. |
| ACCT-CURR-CYC-DEBIT | Decimal | Total de débitos no ciclo atual. |
| ACCT-ADDR-ZIP | String (10) | CEP associado à conta. |
| ACCT-GROUP-ID | String (10) | Afiliação de grupo da conta (se houver). |
| FILLER | String (178) | Espaço reservado para uso futuro. |

## Principais Referências

* Esta estrutura de Registro de Conta provavelmente interage com outras estruturas de dados e módulos dentro do sistema CardDemo, como registros de transações, informações do cliente e módulos de processamento de pagamento.

--Made by "Smart Engineering" (by Compass.UOL)--