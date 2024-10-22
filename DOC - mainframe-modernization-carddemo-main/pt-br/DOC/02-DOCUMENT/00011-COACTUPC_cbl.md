Gerado em: 1º de outubro de 2024

# Especificação de Atualização de Conta CardDemo

## Título

- Título do Documento: Especificação do Programa de Atualização de Conta CardDemo

## Arquivo

- Arquivo: COACTUPC.cbl

## Descrição Resumida

O Programa de Atualização de Conta CardDemo é um programa COBOL que permite que usuários autorizados (como representantes de atendimento ao cliente) visualizem e atualizem informações de contas de clientes dentro do aplicativo CardDemo. Este programa garante integridade de dados, autorização, trilha de auditoria, controle de concorrência e segurança de dados.

## Histórico de Versões

- Versão 1.0: Versão inicial (julho de 2022)

## Descrição do Processo

O programa segue estas etapas:

1. **Inicialização:** Configura as variáveis necessárias e prepara o sistema.
2. **Processamento de Entrada:** Recebe a entrada do usuário para detalhes da conta e do cliente por meio de uma interface de tela.
3. **Validação de Dados:** Verifica as informações inseridas em relação a critérios predefinidos para garantir precisão e consistência.
4. **Recuperação de Dados:** Recupera dados existentes da conta e do cliente de arquivos VSAM com base no número da conta fornecido.
5. **Comparação de Dados:** Compara novos dados com dados existentes para identificar alterações.
6. **Confirmação de Atualização:** Solicita ao usuário que confirme as atualizações para evitar modificações acidentais.
7. **Atualização de Dados:** Atualiza os registros da conta e do cliente em arquivos VSAM com as novas informações confirmadas.
8. **Verificação de Concorrência:** Verifica se há atualizações simultâneas por outros usuários para evitar inconsistências de dados.

## Requisitos para Iniciar o Processo

1. **Usuário autorizado:** Somente usuários autorizados, como representantes de atendimento ao cliente, podem acessar e modificar dados da conta.
2. **Número da conta:** O número da conta é necessário para recuperar e atualizar as informações corretas da conta.
3. **Informações do cliente:** Informações do cliente, como nome, endereço e detalhes de contato, podem ser necessárias para atualizações.

## Validações e Regras

* **Integridade de dados:** Regras rígidas de validação de dados são aplicadas para garantir a precisão e consistência das informações da conta. Por exemplo, os números de conta devem ser numéricos, os limites de crédito devem ser números positivos e os números de telefone devem estar no formato correto.
* **Autorização:** Somente usuários autorizados têm permissão para acessar e modificar dados da conta.
* **Trilha de auditoria:** Todas as atualizações são rastreadas para manter um histórico de alterações para cada conta.
* **Controle de concorrência:** O programa lida com atualizações simultâneas para evitar corrupção de dados e garantir que as alterações feitas por um usuário não substituam as feitas por outro.
* **Segurança de dados:** Dados confidenciais, como SSN do cliente e informações financeiras, são tratados com cuidado para proteger a privacidade do cliente.

## Detalhes técnicos

**Programa principal:**

* **COACTUPC:** O principal programa COBOL que lida com atualizações de contas.

**Estruturas de dados:**

* **ACCT-UPDATE-RECORD:** Estrutura de dados para armazenar informações da conta a serem atualizadas.
* **CUST-UPDATE-RECORD:** Estrutura de dados para armazenar informações do cliente a serem atualizadas.

**Variáveis:**

* **WS-CARD-RID-ACCT-ID:** ID da conta usada para recuperar e atualizar dados da conta em arquivos VSAM.
* **WS-CARD-RID-CUST-ID:** ID do cliente usado para recuperar e atualizar dados do cliente em arquivos VSAM.
* **ACUP-NEW-DETAILS:** Estrutura contendo os novos detalhes da conta e do cliente inseridos pelo usuário.
* **ACUP-OLD-DETAILS:** Estrutura contendo os detalhes originais da conta e do cliente recuperados dos arquivos VSAM.

**Métodos:**

* **9000-READ-ACCT:** Recupera dados da conta e do cliente com base no número da conta fornecido.
* **9600-WRITE-PROCESSING:** Atualiza os registros da conta e do cliente em arquivos VSAM.
* **9700-CHECK-CHANGE-IN-REC:** Verifica se há alterações nos registros da conta e do cliente antes de atualizar para garantir a consistência dos dados.

## Segurança

* **Autorização:** O programa deve ser acessível apenas a usuários autorizados com credenciais apropriadas.
* **Segurança de dados:** Dados confidenciais, como SSN do cliente e informações financeiras, devem ser criptografados ou protegidos usando outras medidas de segurança.

## Impacto em outros sistemas

* **Aplicativo CardDemo:** O programa impacta diretamente o aplicativo CardDemo, fornecendo a funcionalidade de atualizar informações da conta.
* **Arquivos VSAM:** O programa interage com arquivos VSAM para ler e atualizar dados de contas e clientes.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| ACCT-UPDATE-ID | Numérico (9,0) | ID da conta |
| ACCT-UPDATE-ACTIVE-STATUS | Alfanumérico (1) | Status da conta (Ativo/Inativo) |
| ACCT-UPDATE-CURR-BAL | Numérico (10,2) | Saldo atual da conta |
| ACCT-UPDATE-CREDIT-LIMIT | Numérico (10,2) | Limite de crédito |
| ACCT-UPDATE-CASH-CREDIT-LIMIT | Numérico (10,2) | Limite de crédito em dinheiro |
| ACCT-UPDATE-OPEN-DATE | Alfanumérico (10) | Data de abertura da conta (AAAA-MM-DD) |
| ACCT-UPDATE-EXPIRAION-DATE | Alfanumérico (10) | Data de expiração da conta (AAAA-MM-DD) |
| ACCT-UPDATE-REISSUE-DATE | Alfanumérico (10) | Data de reemissão da conta (AAAA-MM-DD) |
| ACCT-UPDATE-CURR-CYC-CREDIT | Numérico (10,2) | Crédito do ciclo atual |
| ACCT-UPDATE-CURR-CYC-DEBIT | Numérico (10,2) | Débito do ciclo atual |
| ACCT-UPDATE-GROUP-ID | Alfanumérico (10) | ID do grupo da conta |
| CUST-UPDATE-ID | Numérico (9,0) | ID do cliente |
| CUST-UPDATE-FIRST-NAME | Alfanumérico (25) | Primeiro nome do cliente |
| CUST-UPDATE-MIDDLE-NAME | Alfanumérico (25) | Nome do meio do cliente |
| CUST-UPDATE-LAST-NAME | Alfanumérico (25) | Sobrenome do cliente |
| CUST-UPDATE-ADDR-LINE-1 | Alfanumérico (50) | Linha de endereço 1 do cliente |
| CUST-UPDATE-ADDR-LINE-2 | Alfanumérico (50) | Linha de endereço 2 do cliente |
| CUST-UPDATE-ADDR-LINE-3 | Alfanumérico (50) | Linha de endereço 3 do cliente |
| CUST-UPDATE-ADDR-STATE-CD | Alfanumérico (2) | Código do estado do cliente |
| CUST-UPDATE-ADDR-COUNTRY-CD | Alfanumérico (3) | Código do país do cliente |
| CUST-UPDATE-ADDR-ZIP | Alfanumérico (10) | CEP do cliente |
| CUST-UPDATE-PHONE-NUM-1 | Alfanumérico (15) | Número de telefone 1 do cliente |
| CUST-UPDATE-PHONE-NUM-2 | Alfanumérico (15) | Número de telefone 2 do cliente |
| CUST-UPDATE-SSN | Numérico (9,0) | Número do Seguro Social do cliente |
| CUST-UPDATE-GOVT-ISSUED-ID | Alfanumérico (20) | ID emitido pelo governo do cliente |
| CUST-UPDATE-DOB-YYYY-MM-DD | Alfanumérico (10) | Data de nascimento do cliente (AAAA-MM-DD) |
| CUST-UPDATE-EFT-ACCOUNT-ID | Alfanumérico (10) | ID da conta EFT do cliente |
| CUST-UPDATE-PRI-CARD-IND | Alfanumérico (1) | Indicador do titular do cartão principal |
| CUST-UPDATE-FICO-CREDIT-SCORE | Numérico (3,0) | Pontuação de crédito FICO do cliente |

## Referências principais

* **Arquivos VSAM:**
    * ACCTDAT: Arquivo mestre da conta
    * CUSTDAT: Arquivo mestre do cliente
    * CARDDAT: Arquivo de dados do cartão
    * CARDAIX: Índice alternativo para CARDDAT com base no ID da conta
    * CXACAIX: Índice alternativo para um arquivo de referência cruzada de cartão com base no ID da conta

* **CICS (Customer Information Control System):** Lida com o processamento de transações, interação do usuário e comunicação com o mainframe.
* **BMS (Basic Mapping Support):** Gerencia layouts de tela e interações do usuário.

**Considerações adicionais:**

* **Tratamento de erros:** O programa inclui rotinas de tratamento de erros para gerenciar condições inesperadas e fornecer mensagens de erro informativas.
* **Log:** Considere implementar mecanismos de log para rastrear atualizações e ações do usuário para fins de auditoria e solução de problemas.
* **Desempenho:** Otimize o acesso a dados e as operações de atualização para um desempenho eficiente, especialmente em ambientes de transações de alto volume.
* **Integração:** O programa deve se integrar perfeitamente a outros componentes do aplicativo CardDemo.

--Made by "Smart Engineering" (by Compass.UOL)--