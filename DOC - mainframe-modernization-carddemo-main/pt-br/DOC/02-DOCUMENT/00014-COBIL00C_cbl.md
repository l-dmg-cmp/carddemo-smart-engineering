Gerado em: 1 de outubro de 2024

# Pagamento de Fatura Online CardDemo

## Título

- Título do Documento: CardDemo - Especificação de Pagamento de Fatura Online

## Descrição Resumida

Este documento descreve as especificações para a funcionalidade "Pagamento de Fatura Online" dentro do aplicativo CardDemo. Esta funcionalidade permite que os titulares de cartão de crédito paguem convenientemente o saldo devedor integralmente por meio de uma interface online. Este processo é perfeitamente integrado ao sistema de gerenciamento de cartão de crédito principal, garantindo atualizações precisas de saldo e registro de transações.

## Histórico de Versões

- Versão 1.0: Versão inicial - Funcionalidade de pagamento total do saldo.

## Descrição do Processo

O processo de Pagamento de Fatura Online facilita o pagamento completo do saldo devedor de um cartão de crédito.

1. **Entrada da Conta:** O cliente fornece seu ID de Conta através da interface online.
2. **Recuperação de Saldo:** O sistema recupera o saldo atual para o ID de Conta fornecido do arquivo ACCTDAT.
3. **Confirmação de Pagamento:** O cliente é apresentado ao seu saldo atual e solicitado a confirmar seu pagamento.
4. **Processamento de Transação:** Após a confirmação, o sistema gera um ID de Transação exclusivo. Em seguida, ele registra os detalhes do pagamento (valor, data, hora) no arquivo TRANSACT e atualiza o saldo da conta no arquivo ACCTDAT.
5. **Exibição de Confirmação:** Uma mensagem de confirmação, incluindo o ID de Transação gerado, é exibida ao cliente.

## Requisitos para Iniciar o Processo

1. **Usuário Autenticado:** O usuário deve ter efetuado login com sucesso no sistema CardDemo.
2. **Conta Válida:** O ID de Conta fornecido deve existir no sistema.

## Validações e Regras

- **Pagamento Total do Saldo:** Somente o saldo devedor total pode ser pago. Pagamentos parciais não são permitidos por meio desta funcionalidade.
- **Confirmação de Pagamento:** O sistema exige explicitamente a confirmação do cliente antes de processar o pagamento. Esta é uma etapa crucial para evitar quaisquer pagamentos acidentais ou não intencionais.
- **ID de Transação Exclusivo:** Cada pagamento recebe um identificador exclusivo (ID de Transação), garantindo rastreabilidade e facilitando futuros esforços de reconciliação.
- **Processamento em Tempo Real:** Após a confirmação bem-sucedida do pagamento, o saldo da conta é atualizado em tempo real, refletindo a transação imediatamente.
- **Auditoria e Relatórios:** Todos os detalhes da transação são registrados no arquivo TRANSACT, estabelecendo um rastro de auditoria abrangente para relatórios e análises futuras.

## Detalhes Técnicos

**Programa Principal:**

- **COBIL00C:** Este programa gerencia o processo de pagamento de fatura online, lidando com interações do usuário, validação de dados e atualizações de arquivos.

**Funções/Métodos Principais:**

- **READ-ACCTDAT-FILE:** Recupera os detalhes da conta (incluindo saldo) do arquivo ACCTDAT com base no ID da conta fornecido.
- **READ-CXACAIX-FILE:** Acessa o CARD-XREF-RECORD para recuperar detalhes do cartão usando o ID da conta.
- **READPREV-TRANSACT-FILE, STARTBR-TRANSACT-FILE, ENDBR-TRANSACT-FILE:** Essas funções trabalham juntas para encontrar o último ID de Transação usado e usá-lo para gerar um novo ID exclusivo para a transação atual.
- **WRITE-TRANSACT-FILE:** Grava os detalhes da transação no arquivo TRANSACT, criando um registro do pagamento.
- **UPDATE-ACCTDAT-FILE:** Atualiza o saldo da conta no arquivo ACCTDAT para refletir o pagamento.
- **GET-CURRENT-TIMESTAMP:** Captura a data e hora atuais para serem registradas com os detalhes da transação.

**Variáveis:**

- **ACTIDINI:** Campo de entrada para o ID de Conta fornecido pelo cliente.
- **CURBALI:** Exibe o saldo atual recuperado do arquivo ACCTDAT.
- **CONFIRMI:** Campo de entrada para o cliente confirmar o pagamento (S/N).
- **WS-TRAN-ID-NUM:** Variável interna que armazena o ID de Transação exclusivo recém-gerado.
- **WS-TIMESTAMP:** Armazena o registro de data e hora capturado durante a transação.

**Arquivos:**

- **ACCTDAT:** Contém detalhes da conta, incluindo o saldo atual.
- **TRANSACT:** Armazena todos os detalhes da transação para fins de auditoria e relatório.
- **CXACAIX:** Arquivo de referência cruzada vinculando IDs de conta a números de cartão.

## Impacto em Outros Sistemas

- **Gerenciamento de Conta:** A funcionalidade de Pagamento de Fatura Online impacta diretamente a precisão e o status em tempo real das contas do cliente.
- **Relatórios e Análise:** Os dados de transação gerados por este processo alimentam os sistemas de relatórios e análises, fornecendo insights sobre a atividade de pagamento.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| ACCT-ID | String | Identificador exclusivo para a conta de um cliente. |
| ACCT-CURR-BAL | Decimal | Saldo devedor atual na conta. |
| TRAN-ID | String | Identificador exclusivo para cada transação. |
| TRAN-TYPE-CD | String | Código especificando o tipo de transação (por exemplo, '02' para Pagamento de Fatura). |
| TRAN-CAT-CD | Inteiro | Código que representa a categoria da transação. |
| TRAN-SOURCE | String | Origem da transação (por exemplo, 'POS TERM', 'ONLINE'). |
| TRAN-DESC | String | Descrição da transação. |
| TRAN-AMT | Decimal | Valor da transação. |
| TRAN-CARD-NUM | String | Número do cartão de crédito associado à transação. |
| TRAN-MERCHANT-ID | Inteiro | Identificador exclusivo para o comerciante envolvido na transação. |
| TRAN-MERCHANT-NAME | String | Nome do comerciante associado à transação. |
| TRAN-ORIG-TS | Timestamp | Timestamp indicando quando a transação foi iniciada. |
| TRAN-PROC-TS | Timestamp | Timestamp indicando quando a transação foi processada. |
| XREF-ACCT-ID | String | ID da conta usado para referência cruzada com os detalhes do cartão. |
| XREF-CARD-NUM | String | Número do cartão de crédito vinculado ao ID da conta. |

## Principais Referências

- **Programa COBOL00:** O programa principal que lida com a interface do usuário e navegação dentro do aplicativo CardDemo.
- **Arquivo ACCTDAT:** A principal fonte de dados para saldos e detalhes de contas.
- **Arquivo TRANSACT:** O armazenamento de dados para todos os registros de transações.

**Considerações Adicionais:**

- **Segurança:** Implemente medidas de segurança robustas para proteger os dados confidenciais do cliente durante o processo de pagamento online, incluindo criptografia e mecanismos de autenticação segura.
- **Tratamento de Erros:** Desenvolva rotinas abrangentes de tratamento de erros para gerenciar vários cenários, como números de conta inválidos, problemas de conexão e falhas de transação.
- **Experiência do Usuário:** Projete a interface online com a experiência do usuário em mente, garantindo um processo claro e intuitivo para fazer pagamentos.
- **Teste de Integração:** O teste de integração completo é essencial para garantir a operação perfeita da funcionalidade de Pagamento de Fatura Online com outros componentes do aplicativo CardDemo.

--Made by "Smart Engineering" (by Compass.UOL)--