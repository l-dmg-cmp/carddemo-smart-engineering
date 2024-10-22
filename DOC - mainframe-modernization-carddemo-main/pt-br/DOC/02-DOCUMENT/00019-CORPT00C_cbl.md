Gerado em: 1º de outubro de 2024

# CardDemo Geração de Relatório de Transações

## Título

- Título do Documento: CardDemo Geração de Relatório de Transações - Especificação do Programa

## Arquivo

- `\src\CORPT00C.cbl`

## Descrição resumida

Este documento descreve as especificações para o módulo "Geração de Relatório de Transações" dentro da aplicação CardDemo. Este módulo permite que usuários comerciais gerem facilmente relatórios abrangentes que resumem as transações de cartão de crédito para períodos específicos, como mensal, anual ou intervalos de datas personalizados.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo

O módulo "Geração de Relatório de Transações" simplifica o processo de obtenção de dados resumidos de transações. Aqui está uma análise de como funciona:

1. **Entrada do Usuário:** O usuário seleciona o tipo de relatório desejado (Mensal, Anual ou Personalizado). Para relatórios personalizados, ele insere uma data de início e término.
2. **Validação de Dados:** O sistema verifica rigorosamente a validade das datas inseridas pelo usuário, garantindo consistência lógica e aderência ao formato correto.
3. **Preparação da Solicitação do Relatório:** Com base nas seleções do usuário, o sistema formula um conjunto de instruções, semelhante a uma receita, adaptado para o processo de geração do relatório.
4. **Envio da Solicitação:** A solicitação, juntamente com as instruções, é enviada com segurança para uma fila dedicada a tarefas de geração de relatórios.
5. **Confirmação:** O usuário recebe uma mensagem de confirmação em sua tela, reconhecendo o envio bem-sucedido de sua solicitação de relatório.

## Requisitos para Iniciar o Processo

1. **Autenticação do Usuário:** O usuário deve estar logado no sistema CardDemo.
2. **Seleção do Tipo de Relatório:** O usuário precisa escolher entre os tipos de relatório disponíveis: Mensal, Anual ou Personalizado.
3. **Entrada de Data (Relatório Personalizado):** Para relatórios personalizados, o usuário deve fornecer datas de início e término válidas.

## Validações e Regras

- **Validação de Data:** O sistema aplica regras rígidas de validação de data para garantir a integridade dos dados. Isso inclui verificações para:
    - **Formato:** As datas devem seguir o formato especificado (AAAA-MM-DD).
    - **Ordem Lógica:** A data de início não pode ser posterior à data de término.
    - **Datas Válidas:** As datas devem representar datas de calendário válidas (por exemplo, não 30 de fevereiro).
- **Confirmação:** O usuário é solicitado a confirmar sua solicitação antes que ela seja enviada para processamento.

## Detalhes técnicos

**Programa Principal:**

- `CORPT00C.cbl`: O programa principal responsável por lidar com a entrada do usuário, validar dados e enviar a solicitação de geração do relatório.

**Funções/Métodos Principais:**

- `PROCESS-ENTER-KEY`: Gerencia a entrada do usuário e inicia as ações apropriadas com base no tipo de relatório selecionado.
- `SUBMIT-JOB-TO-INTRDR`: Prepara e envia o trabalho de geração de relatório para a fila interna do leitor.
- `WIRTE-JOBSUB-TDQ`: Grava os detalhes do trabalho na Fila de Dados Transientes (TDQ) para processamento.

**Variáveis:**

- `WS-REPORT-NAME`: Armazena o nome do tipo de relatório selecionado (por exemplo, "Mensal", "Anual", "Personalizado").
- `WS-START-DATE`: Armazena a data de início do relatório.
- `WS-END-DATE`: Armazena a data de término do relatório.
- `JOB-DATA`: Contém as instruções JCL (Job Control Language) para o trabalho de geração de relatório.

## Segurança

- **Autorização:** O acesso ao módulo "Geração de Relatório de Transações" é restrito a usuários autorizados com as permissões necessárias.

## Impacto em Outros Sistemas

- **Sistema de Processamento em Lote:** O módulo depende do sistema de processamento em lote para executar o trabalho de geração de relatório.
- **Banco de Dados de Relatórios:** O processo de geração de relatório recupera dados do banco de dados de relatórios para compilar o relatório.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| WS-REPORT-NAME | String | Nome do tipo de relatório selecionado |
| WS-START-DATE | Data | Data de início do relatório |
| WS-END-DATE | Data | Data de término do relatório |
| JOB-DATA | String | Instruções JCL para o trabalho de geração de relatório |

## Principais Referências

- `CSUTLDTC`: Programa ou utilitário externo usado para validação de data.
- `TRANREPT`: Programa em lote responsável por gerar o relatório de transações.
- `JOBS`: Fila de Dados Transientes (TDQ) usada para enviar trabalhos em lote.

--Made by "Smart Engineering" (by Compass.UOL)--