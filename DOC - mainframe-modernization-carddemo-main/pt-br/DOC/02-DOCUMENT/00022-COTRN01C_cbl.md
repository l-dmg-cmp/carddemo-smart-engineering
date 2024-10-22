Gerado em: 1º de outubro de 2024

# CardDemo Recuperação de Detalhes de Transação

## Título do Documento: CardDemo Recuperação de Detalhes de Transação - Especificação do Programa

## Arquivo

- `\src\COTRN01C.cbl`

## Descrição Resumida

Este documento descreve as especificações para o programa "COTRN01C" dentro do aplicativo CardDemo. Este programa foi projetado para que representantes de call center acessem e visualizem rapidamente os detalhes de transações específicas de cartão de crédito, auxiliando no atendimento ao cliente e na verificação de transações.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022): Versão inicial

## Descrição do Processo

O programa "COTRN01C" facilita a recuperação e exibição de detalhes de transações individuais dentro do aplicativo CardDemo. O processo segue estas etapas:

1. **Entrada do ID da Transação:** O representante do call center insere um ID de Transação exclusivo no sistema.
2. **Recuperação de Dados:** O programa pesquisa no banco de dados 'TRANSACT' um registro que corresponda ao ID da Transação fornecido.
3. **Exibição de Detalhes da Transação:** Se uma correspondência for encontrada, o programa apresenta todos os detalhes relevantes da transação na tela do representante. Isso inclui informações como valor da transação, data, número do cartão, detalhes do comerciante e muito mais.
4. **Tratamento de Erros:** Nos casos em que o ID da Transação inserido está em branco ou não corresponde a nenhum registro no banco de dados, uma mensagem de erro é exibida, solicitando que o representante insira um ID válido.

## Requisitos para Iniciar o Processo

1. **Acesso ao Aplicativo CardDemo:** O representante do call center precisa estar conectado ao aplicativo CardDemo.
2. **ID da Transação:** Um ID de Transação válido é necessário para recuperar os detalhes específicos da transação.

## Validações e Regras

- **ID de Transação Exclusivo:** Cada transação dentro do sistema CardDemo recebe um ID exclusivo para garantir a recuperação precisa e evitar ambiguidades.
- **Controle de Acesso a Dados:** O programa foi projetado para recuperar e exibir apenas informações do banco de dados 'TRANSACT' para o ID de Transação específico fornecido, garantindo a segurança dos dados.
- **Interface Amigável:** Os detalhes da transação são apresentados em um formato fácil de entender na tela do representante, facilitando um atendimento ao cliente eficiente.

## Detalhes Técnicos

**Programa Principal:**

- **COTRN01C:** Este programa lida com todo o processo de recebimento do ID da Transação, recuperação de dados e exibição das informações.

**Funções/Métodos:**

- **PROCESS-ENTER-KEY:** Esta função processa o ID da Transação inserido, validando-o e iniciando o processo de recuperação de dados.
- **READ-TRANSACT-FILE:** Esta função lê o banco de dados 'TRANSACT' para encontrar e recuperar o registro da transação que corresponde ao ID fornecido.
- **SEND-TRNVIEW-SCREEN:** Esta função exibe os detalhes da transação recuperada ou mensagens de erro para o representante.
- **RETURN-TO-PREV-SCREEN:** Esta função permite que o representante retorne à tela anterior.
- **CLEAR-CURRENT-SCREEN:** Esta função limpa a tela atual, preparando-a para novas entradas ou informações.
- **INITIALIZE-ALL-FIELDS:** Esta função inicializa todos os campos de dados, garantindo a integridade dos dados.
- **POPULATE-HEADER-INFO:** Esta função preenche as informações do cabeçalho da tela com os detalhes relevantes.

**Variáveis:**

- **WS-TRANID:** Armazena o código da transação 'CT01'.
- **WS-TRANSACT-FILE:** Armazena o nome do arquivo do banco de dados 'TRANSACT'.
- **TRAN-ID:** Armazena o ID da Transação inserido.
- **WS-MESSAGE:** Armazena mensagens a serem exibidas ao usuário, incluindo mensagens de erro.
- **WS-RESP-CD:** Armazena o código de resposta das operações do banco de dados.
- **WS-REAS-CD:** Armazena o código de motivo das operações do banco de dados.
- **ERRMSGO:** Exibe mensagens de erro para o usuário.
- **TRNIDINI:** Recebe o ID da Transação inserido no campo de entrada.
- **TRNIDI, CARDNUMI, TTYPCDI, TCATCDI, TRNSRCI, TRNAMTI, TDESCI, TORIGDTI, TPROCDTI, MIDI, MNAMEI, MCITYI, MZIPI:** Essas variáveis armazenam os detalhes da transação recuperada, como ID da Transação, número do cartão, tipo de transação, valor, descrição, timestamps e detalhes do comerciante.

## Segurança

- **Recuperação Segura de Dados:** O programa interage com o banco de dados 'TRANSACT' usando procedimentos controlados, garantindo que apenas pessoal autorizado possa acessar os dados.
- **Restrições de Exibição de Dados:** O programa exibe apenas informações relacionadas ao ID de Transação específico inserido, limitando a exposição de dados.

## Impacto em Outros Sistemas

- **Banco de Dados TRANSACT:** O programa interage diretamente com o banco de dados 'TRANSACT' para recuperar os detalhes da transação.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| TRAN-ID | Alfanumérico | Identificador exclusivo para cada transação |
| TRAN-CARD-NUM | Numérico | Número do cartão de crédito associado à transação |
| TRAN-TYPE-CD | Alfanumérico | Tipo de transação (por exemplo, compra, reembolso) |
| TRAN-CAT-CD | Alfanumérico | Categoria da transação (por exemplo, mantimentos, combustível) |
| TRAN-SOURCE | Alfanumérico | Origem da transação (por exemplo, online, em loja) |
| TRAN-AMT | Numérico | Valor da transação |
| TRAN-DESC | Alfanumérico | Descrição da transação |
| TRAN-ORIG-TS | Timestamp | Carimbo de data e hora da origem da transação |
| TRAN-PROC-TS | Timestamp | Carimbo de data e hora do processamento da transação |
| TRAN-MERCHANT-ID | Alfanumérico | Identificador exclusivo para o comerciante |
| TRAN-MERCHANT-NAME | Alfanumérico | Nome do comerciante |
| TRAN-MERCHANT-CITY | Alfanumérico | Cidade do comerciante |
| TRAN-MERCHANT-ZIP | Alfanumérico | CEP do comerciante |

## Principais Referências

- **Banco de Dados TRANSACT:** Este banco de dados armazena todos os detalhes da transação.
- **COTRN01A (Mapa de Tela):** Define o layout e os campos para exibir os detalhes da transação.
- **COTRN01 (Mapset):** Agrupa o mapa de tela para a visualização de detalhes da transação.

**Considerações Adicionais:**

- **Registro de Erros:** Implementar o registro de erros pode ajudar a rastrear quaisquer problemas encontrados durante o processo, auxiliando na depuração e melhoria do sistema.
- **Otimização de Desempenho:** Otimizar as consultas ao banco de dados pode aumentar a velocidade de recuperação da transação.

--Made by "Smart Engineering" (by Compass.UOL)--