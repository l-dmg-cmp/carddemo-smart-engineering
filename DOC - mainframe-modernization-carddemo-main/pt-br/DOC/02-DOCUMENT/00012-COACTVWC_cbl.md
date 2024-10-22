Gerado em: 1º de outubro de 2024

# **Sistema de Gerenciamento de Cartão de Crédito**

## Título

- Título do Documento: Sistema de Gerenciamento de Cartão de Crédito - Especificação da Funcionalidade de Visualização de Conta

## Arquivo

- `\COACTVWC.cbl`

## Descrição Resumida

Este documento descreve a funcionalidade "Visualização de Conta" dentro de um sistema de gerenciamento de cartão de crédito. Essa funcionalidade permite que usuários autorizados, como representantes de atendimento ao cliente, visualizem informações detalhadas sobre uma conta de cartão de crédito específica usando o número da conta.

## Histórico de Versões

- Versão 1.0: Versão inicial - Funcionalidade básica de visualização de conta.

## Descrição do Processo

1. **Entrada do Número da Conta:** O usuário fornece um número de conta de cartão de crédito.
2. **Recuperação de Dados:** O sistema recupera informações da conta de várias fontes de dados:
    - **Arquivo de Referência Cruzada da Conta (CARDXREF):** Usado para encontrar a ID do cliente correspondente com base no número da conta fornecido.
    - **Arquivo de Dados do Cliente (CUSTDAT):** Recupera informações do cliente (nome, endereço, etc.) usando a ID do cliente da etapa anterior.
    - **Arquivo de Dados da Conta (ACCTDAT):** Recupera informações detalhadas da conta (saldo, limite de crédito, etc.) usando o número da conta fornecido.
3. **Exibir Detalhes da Conta:** As informações recuperadas são apresentadas ao usuário de forma clara e organizada.
4. **Navegação:** O usuário pode navegar para outras funcionalidades relacionadas dentro do sistema, como visualizar o histórico de transações ou atualizar as informações da conta.

## Requisitos para Iniciar o Processo

1. **Número de Conta Válido:** O usuário deve fornecer um número de conta de cartão de crédito válido.
2. **Autenticação do Usuário:** O usuário deve ser autenticado e autorizado a acessar informações confidenciais da conta.
3. **Disponibilidade de Dados:** Os arquivos de dados necessários (CARDXREF, CUSTDAT, ACCTDAT) devem estar acessíveis ao sistema.

## Validações e Regras

* **Validação do Número da Conta:** O sistema valida o número da conta inserido para garantir que seja válido e exista no sistema.
* **Integridade de Dados:** Os dados recuperados de vários arquivos são verificados para garantir precisão e consistência.
* **Segurança e Controle de Acesso:** O acesso a essa funcionalidade e informações financeiras confidenciais são restritos apenas ao pessoal autorizado.

## Detalhes Técnicos

**Programa Principal:**

* **COACTVWC:** O principal programa COBOL responsável por lidar com a funcionalidade "Visualização de Conta".

**Funções/Métodos Principais:**

* **9000-READ-ACCT:** Esta função organiza o processo de leitura dos detalhes da conta.
* **9200-GETCARDXREF-BYACCT:** Recupera a ID do cliente associada ao número da conta do arquivo CARDXREF.
* **9300-GETACCTDATA-BYACCT:** Recupera informações detalhadas da conta do arquivo ACCTDAT.
* **9400-GETCUSTDATA-BYCUST:** Recupera informações do cliente do arquivo CUSTDAT.

**Variáveis:**

* **WS-CARD-RID-ACCT-ID:** Armazena o número da conta de entrada.
* **CDEMO-CUST-ID:** Armazena a ID do cliente recuperada do CARDXREF.
* **ACCOUNT-RECORD:** Estrutura de dados que contém informações da conta do ACCTDAT.
* **CUSTOMER-RECORD:** Estrutura de dados que contém informações do cliente do CUSTDAT.

## Segurança

* **Controle de Acesso:** O sistema deve implementar medidas rígidas de controle de acesso para garantir que apenas pessoal autorizado possa acessar a funcionalidade "Visualização de Conta" e visualizar informações confidenciais da conta. Isso pode envolver controle de acesso baseado em função (RBAC) para restringir o acesso com base em funções e privilégios do usuário.

## Impacto em Outros Sistemas

* **Visualização do Histórico de Transações:** A funcionalidade "Visualização de Conta" pode fornecer um link ou opção para visualizar o histórico de transações associado à conta exibida.
* **Funcionalidade de Atualização de Conta:** Da mesma forma, pode permitir a navegação para uma funcionalidade "Atualização de Conta" para modificar os detalhes da conta.
* **Sistemas de Relatórios:** As informações da conta recuperadas por esta funcionalidade podem ser usadas como entrada para vários relatórios, como extratos de clientes ou resumos de contas.

## Modelos

| Campo de Nome        | Tipo     | Descrição                                          |
|---------------------|----------|------------------------------------------------------|
| Número da Conta     | String   | Identificador exclusivo para uma conta de cartão de crédito.       |
| ID do Cliente         | Integer  | Identificador exclusivo para um cliente.                   |
| Status da Conta      | String   | Status da conta (por exemplo, Ativa, Encerrada).        |
| Saldo Atual         | Decimal  | Saldo atual da conta.                    |
| Limite de Crédito    | Decimal  | Limite máximo de crédito permitido na conta.      |
| Crédito Disponível  | Decimal  | Valor do crédito atualmente disponível para uso.      |
| Nome do Cliente      | String   | Nome completo do cliente.                          |
| Endereço do Cliente | String   | Endereço de cobrança do cliente.                          |
| Data de Abertura da Conta | Date     | Data em que a conta foi aberta.                  |
| Data de Expiração   | Date     | Data de expiração do cartão de crédito.                 |

## Principais Referências

* **CARDXREF (Arquivo de Referência Cruzada da Conta):** Contém a relação entre números de conta e IDs de cliente.
* **CUSTDAT (Arquivo de Dados do Cliente):** Armazena informações do cliente.
* **ACCTDAT (Arquivo de Dados da Conta):** Armazena informações detalhadas para cada conta de cartão de crédito.

--Made by "Smart Engineering" (by Compass.UOL)--