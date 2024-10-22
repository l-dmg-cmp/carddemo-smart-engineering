Gerado em: 1º de outubro de 2024

# **Processamento Diário de Transações CardDemo**

## Título
- Título do Documento: CardDemo - Especificação do Processador de Transações Diárias

## Arquivo

- Rota do Arquivo: \src\CBTRN02C.cbl

## Descrição Resumida
Este documento descreve as especificações para o Processador de Transações Diárias CardDemo, um programa COBOL em lote crucial para o aplicativo CardDemo. Este programa forma o núcleo do sistema diário de processamento de cartão de crédito. Sua principal função é processar transações diárias de cartão de crédito, aplicando-as às contas dos clientes, ao mesmo tempo em que segue regras de negócios predefinidas. Este documento visa fornecer uma compreensão clara da funcionalidade, requisitos e detalhes técnicos do programa para stakeholders técnicos e não técnicos.

## Histórico da Versão
- CardDemo_v1.0-15-g27d6c6f-68: 19 de julho de 2022 - Versão inicial

## Descrição do Processo
1. **Inicialização (Abrir Arquivos):** O programa começa abrindo todos os arquivos necessários:
   - Arquivo de Transações Diárias (entrada): Contém uma lista de transações diárias de cartão de crédito.
   - Arquivo de Transações (saída): Armazena as transações processadas com sucesso.
   - Arquivo de Referência Cruzada (entrada): Mapeia números de cartão de crédito para IDs de conta.
   - Arquivo de Rejeições Diárias (saída): Registra transações rejeitadas com os motivos.
   - Arquivo de Conta (entrada/saída): Contém informações da conta do cliente.
   - Arquivo de Saldo de Categoria de Transação (entrada/saída): Rastreia saldos para diferentes categorias de transação.
2. **Processar Transações Diárias:**
   - O programa lê cada transação do Arquivo de Transações Diárias.
   - Para cada transação, ele executa o seguinte:
     - **Validação:**
       - Verifica se o número do cartão de crédito é válido consultando o Arquivo de Referência Cruzada.
       - Verifica se existe uma conta correspondente usando o Arquivo de Conta.
       - Garante que a transação não exceda o limite de crédito da conta.
       - Confirma se o cartão de crédito usado não expirou.
     - **Atualizar Saldos:**
       - Se a transação for válida, o programa atualiza:
         - Saldo da Categoria de Transação: Isso rastreia os totais para vários tipos de transação (por exemplo, compras, pagamentos).
         - Saldo da Conta: O saldo da conta do cliente é ajustado, aumentando para pagamentos e diminuindo para compras.
     - **Registrar Transação:**
       - A transação validada, juntamente com um registro de data e hora, é registrada no Arquivo de Transações.
     - **Lidar com Rejeições:**
       - Se uma transação falhar na validação, ela é marcada com um motivo de rejeição e gravada no Arquivo de Rejeições Diárias para investigação posterior e possível acompanhamento.
3. **Encerramento (Fechar Arquivos):** Assim que todas as transações forem processadas, o programa fecha todos os arquivos abertos.

## Requisitos para Iniciar o Processo
- Acesso aos seguintes arquivos com as permissões adequadas:
   - Arquivo de Transações Diárias (entrada)
   - Arquivo de Transações (saída)
   - Arquivo de Referência Cruzada (entrada)
   - Arquivo de Rejeições Diárias (saída)
   - Arquivo de Conta (entrada/saída)
   - Arquivo de Saldo de Categoria de Transação (entrada/saída)

## Validações e Regras
- **Limite de Crédito:** O sistema impede transações que fariam com que uma conta excedesse seu limite de crédito.
- **Expiração do Cartão:** As transações são rejeitadas se o cartão de crédito usado estiver com a data de expiração vencida.
- **Categorização de Transações:** As transações são categorizadas para permitir que a empresa rastreie diferentes tipos de atividades.
- **Tratamento de Rejeição:** As transações inválidas são registradas com os motivos, fornecendo uma trilha de auditoria.

## Detalhes técnicos
### Variáveis:
- `DALYTRAN-RECORD`: Contém a transação atual sendo processada do Arquivo de Transações Diárias.
- `TRAN-RECORD`: Armazena os detalhes da transação que está sendo processada para saída para o Arquivo de Transações.
- `CARD-XREF-RECORD`: Contém as informações de referência cruzada lidas do Arquivo de Referência Cruzada.
- `ACCOUNT-RECORD`: Contém as informações da conta lidas do Arquivo de Conta.
- `TRAN-CAT-BAL-RECORD`: Armazena as informações de saldo da categoria de transação.
- `WS-VALIDATION-FAIL-REASON`: Contém um código indicando o motivo da falha na validação da transação.
- `WS-VALIDATION-FAIL-REASON-DESC`: Contém uma descrição textual do motivo da falha na validação da transação.
- `WS-TRANSACTION-COUNT`: Rastreia o número total de transações processadas.
- `WS-REJECT-COUNT`: Rastreia o número total de transações rejeitadas.

### Métodos:
- `0000-DALYTRAN-OPEN`: Abre o Arquivo de Transações Diárias.
- `0100-TRANFILE-OPEN`: Abre o Arquivo de Transações.
- `0200-XREFFILE-OPEN`: Abre o Arquivo de Referência Cruzada.
- `0300-DALYREJS-OPEN`: Abre o Arquivo de Rejeições Diárias.
- `0400-ACCTFILE-OPEN`: Abre o Arquivo de Conta.
- `0500-TCATBALF-OPEN`: Abre o Arquivo de Saldo de Categoria de Transação.
- `1000-DALYTRAN-GET-NEXT`: Lê a próxima transação do Arquivo de Transações Diárias.
- `1500-VALIDATE-TRAN`: Orquestra o processo de validação da transação.
  - `1500-A-LOOKUP-XREF`: Pesquisa o número do cartão de crédito no Arquivo de Referência Cruzada.
  - `1500-B-LOOKUP-ACCT`: Recupera informações da conta, verifica se há excesso de limite e a expiração do cartão.
- `2000-POST-TRANSACTION`: Processa uma transação válida, incluindo a atualização de saldos e a gravação de registros.
- `2500-WRITE-REJECT-REC`: Grava uma transação rejeitada no Arquivo de Rejeições Diárias.
- `2700-UPDATE-TCATBAL`: Atualiza o Arquivo de Saldo de Categoria de Transação.
  - `2700-A-CREATE-TCATBAL-REC`: Cria um novo registro no Arquivo de Saldo de Categoria de Transação se ele não existir.
  - `2700-B-UPDATE-TCATBAL-REC`: Atualiza um registro existente no Arquivo de Saldo de Categoria de Transação.
- `2800-UPDATE-ACCOUNT-REC`: Atualiza o Arquivo de Conta com os detalhes da transação.
- `2900-WRITE-TRANSACTION-FILE`: Grava a transação processada no Arquivo de Transações.
- `9000-DALYTRAN-CLOSE`: Fecha o Arquivo de Transações Diárias.
- `9100-TRANFILE-CLOSE`: Fecha o Arquivo de Transações.
- `9200-XREFFILE-CLOSE`: Fecha o Arquivo de Referência Cruzada.
- `9300-DALYREJS-CLOSE`: Fecha o Arquivo de Rejeições Diárias.
- `9400-ACCTFILE-CLOSE`: Fecha o Arquivo de Conta.
- `9500-TCATBALF-CLOSE`: Fecha o Arquivo de Saldo de Categoria de Transação.

## Impacto em Outros Sistemas
- Este programa interage diretamente com vários outros componentes do aplicativo CardDemo:
  - Ele recebe entrada do Arquivo de Transações Diárias, que provavelmente é gerado por outro sistema ou processo.
  - Ele atualiza o Arquivo de Transações, o Arquivo de Conta e o Arquivo de Saldo de Categoria de Transação, que são usados por outros componentes para várias funcionalidades, como relatórios, gerenciamento de contas, etc.
  - O Arquivo de Rejeições Diárias gerado por este programa serve como uma trilha de auditoria e é provavelmente monitorado por um processo ou equipe separado.

## Modelos
| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `DALYTRAN-ID` | String | Identificador exclusivo para cada transação diária. |
| `DALYTRAN-TYPE-CD` | String |  Código que indica o tipo de transação (por exemplo, compra, pagamento). |
| `DALYTRAN-CAT-CD` | String | Código que categoriza a transação (por exemplo, mantimentos, combustível, entretenimento). |
| `DALYTRAN-SOURCE` | String | Origem da transação (por exemplo, online, terminal POS). |
| `DALYTRAN-DESC` | String | Descrição da transação. |
| `DALYTRAN-AMT` | Decimal | Valor da transação. |
| `DALYTRAN-MERCHANT-ID` | String | Identificador exclusivo para o comerciante envolvido na transação. |
| `DALYTRAN-MERCHANT-NAME` | String | Nome do comerciante. |
| `DALYTRAN-MERCHANT-CITY` | String | Cidade do comerciante. |
| `DALYTRAN-MERCHANT-ZIP` | String | CEP do comerciante. |
| `DALYTRAN-CARD-NUM` | String | Número do cartão de crédito usado para a transação. |
| `DALYTRAN-ORIG-TS` | String | Registro de data e hora indicando quando a transação foi iniciada. |
| `TRAN-PROC-TS` | String | Registro de data e hora indicando quando a transação foi processada. |
| `XREF-ACCT-ID` | String | ID da conta associada ao número do cartão de crédito. |
| `ACCT-CURR-BAL` | Decimal | Saldo atual da conta. |
| `ACCT-CURR-CYC-CREDIT` | Decimal | Total de créditos no ciclo atual. |
| `ACCT-CURR-CYC-DEBIT` | Decimal | Total de débitos no ciclo atual. |
| `ACCT-CREDIT-LIMIT` | Decimal | Limite de crédito da conta. |
| `ACCT-EXPIRATION-DATE` | String | Data de expiração do cartão de crédito. |
| `TRAN-CAT-BAL` | Decimal | Saldo para uma categoria de transação específica. |
| `FD-TRAN-CAT-KEY` | String | Chave composta para o registro de saldo da categoria de transação (inclui ID da conta, código do tipo de transação e código da categoria). |


## Referências Principais
- Arquivo de Transações Diárias: Fornece a entrada para o programa.
- Arquivo de Transações: Armazena as transações processadas com sucesso.
- Arquivo de Referência Cruzada: Usado para validar números de cartão de crédito e recuperar IDs de conta.
- Arquivo de Rejeições Diárias: Contém transações rejeitadas e os motivos da rejeição.
- Arquivo de Conta: Fornece e atualiza as informações da conta do cliente.
- Arquivo de Saldo de Categoria de Transação: Rastreia saldos para diferentes categorias de transação.

--Made by "Smart Engineering" (by Compass.UOL)--