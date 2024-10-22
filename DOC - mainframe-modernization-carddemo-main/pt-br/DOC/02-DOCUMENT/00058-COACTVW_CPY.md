Gerado em: 1º de outubro de 2024

# Módulo de Visualização de Conta de Cartão

## Título

- Título do Documento: Especificação do Módulo de Visualização de Conta de Cartão

## Descrição resumida

Este documento descreve as especificações do módulo de Visualização de Conta de Cartão dentro do aplicativo CardDemo. Este módulo é responsável por apresentar uma visão abrangente das informações da conta do cliente, incluindo status da conta, saldos, limites e detalhes do cliente. Ele garante a apresentação padronizada dos dados e a consistência no tratamento dos dados da conta em todo o sistema.

## Histórico de Versões

- Versão 1.0: Versão inicial

## Descrição do Processo

O módulo de Visualização de Conta de Cartão recupera e exibe as informações da conta. O processo envolve as seguintes etapas:

1.  **Solicitar informações da conta:** O módulo recebe uma solicitação para visualizar as informações da conta. Essa solicitação geralmente se origina de uma ação do usuário dentro do sistema.
2.  **Recuperar dados:** O módulo busca os dados necessários dos arquivos VSAM com base no ID da conta fornecido.
3.  **Formatar dados:** Os dados recuperados são formatados em um layout amigável usando a estrutura CACTVWAO. Isso inclui formatar valores numéricos, organizar campos e lidar com quaisquer conversões de dados necessárias.
4.  **Exibir informações:** As informações da conta formatadas são apresentadas ao usuário ou ao componente do sistema solicitante.

## Requisitos para iniciar o processo

1.  **ID da conta:** Um identificador exclusivo para a conta a ser visualizada.

## Validações e Regras

*   **Validação de recuperação de dados:** O módulo valida os dados recuperados para garantir sua integridade e completude.
*   **Autorização:** O acesso às informações da conta pode estar sujeito a verificações de autorização com base nas funções e permissões do usuário.

## Detalhes técnicos

**Copybooks:**

*   **`COACTVW.CPY`:** Define as estruturas de dados usadas para recuperação e exibição de informações da conta.

**Estruturas de dados:**

*   **`CACTVWAI`:** Essa estrutura define o formato dos dados conforme são recuperados do armazenamento. Inclui campos de dados brutos para detalhes da conta, saldos, limites, informações do cliente e mensagens do sistema.
*   **`CACTVWAO`:** Essa estrutura define o formato para apresentar informações da conta ao usuário ou a outros componentes do sistema. Ele espelha a estrutura `CACTVWAI`, mas se concentra na formatação amigável, como exibir valores numéricos com vírgulas e pontos decimais.

**Regras de negócios:**

*   **Informações de conta padronizadas:** A estrutura `CACTVWAI` garante que os dados da conta sejam tratados de forma consistente em todo o sistema.
*   **Apresentação clara dos dados:** A estrutura `CACTVWAO` fornece um formato claro e compreensível para apresentar as informações da conta.
*   **Instantâneo abrangente da conta:** O módulo visa fornecer uma visão completa das informações relacionadas à conta, incluindo saldos, limites, detalhes do cliente e quaisquer mensagens do sistema.

## Impacto em outros sistemas

*   **Interface do usuário:** O módulo fornece dados para exibição em interfaces de usuário, como telas de resumo de conta ou relatórios impressos.
*   **Outros módulos do sistema:** Outros módulos dentro do aplicativo CardDemo podem solicitar informações da conta por meio deste módulo.

## Modelos

| Nome do Campo   | Tipo           | Descrição                                                                                                                                                                                                      |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ACCTSIDI`       | Alfanumérico  | ID da conta exclusiva.                                                                                                                                                                                                    |
| `ACSTTUSI`       | Alfanumérico  | Status da conta (por exemplo, 'A' para Ativo, 'C' para Fechado).                                                                                                                                                               |
| `ACRDLIMI`       | Alfanumérico  | Limite de crédito (formatado como texto).                                                                                                                                                                                    |
| `ACURBALI`       | Alfanumérico  | Saldo atual da conta (formatado como texto).                                                                                                                                                                         |
| `ACSFNAMI`       | Alfanumérico  | Primeiro nome do cliente.                                                                                                                                                                                                |
| `ACSMNAMI`       | Alfanumérico  | Nome do meio do cliente.                                                                                                                                                                                               |
| `ACSLNAMI`       | Alfanumérico  | Último nome do cliente.                                                                                                                                                                                                 |
| `ACSADL1I`       | Alfanumérico  | Linha 1 do endereço do cliente.                                                                                                                                                                                               |
| `ACSSTTEI`       | Alfanumérico  | Código do estado do endereço do cliente.                                                                                                                                                                                           |
| `ACSADL2I`       | Alfanumérico  | Linha 2 do endereço do cliente.                                                                                                                                                                                               |
| `ACSZIPCI`       | Alfanumérico  | CEP do endereço do cliente.                                                                                                                                                                                            |
| `ACSCITYI`       | Alfanumérico  | Cidade do cliente.                                                                                                                                                                                                      |
| `ACSCTRYI`       | Alfanumérico  | Código do país do cliente.                                                                                                                                                                                               |
| `ACSPHN1I`       | Alfanumérico  | Número de telefone 1 do cliente.                                                                                                                                                                                             |
| `ACSGOVTI`       | Alfanumérico  | Número de identificação governamental do cliente (por exemplo, CPF).                                                                                                                                             |
| `ACSPHN2I`       | Alfanumérico  | Número de telefone 2 do cliente.                                                                                                                                                                                             |
| `ACSEFTCI`       | Alfanumérico  | Data efetiva do cliente (data em que as informações do cliente entraram em vigor).                                                                                                                                              |
| `ACSPFLGI`       | Alfanumérico  | Sinalizador de perfil do cliente (indica atributos ou sinalizadores específicos do cliente).                                                                                                                                                 |
| `INFOMSGI`       | Alfanumérico  | Mensagens informativas relacionadas à conta.                                                                                                                                                                          |
| `ERRMSGI`        | Alfanumérico  | Mensagens de erro relacionadas à conta.                                                                                                                                                                               |
| `ADTOPENI`       | Alfanumérico  | Data de abertura da conta.                                                                                                                                                                                                    |
| `AEXPDTI`       | Alfanumérico  | Data de expiração da conta.                                                                                                                                                                                                 |
| `ACSHLIMI`       | Alfanumérico  | Limite de dinheiro da conta.                                                                                                                                                                                                   |
| `AREISDTI`       | Alfanumérico  | Data de reemissão da conta.                                                                                                                                                                                                  |
| `ACRCYCRI`       | Alfanumérico  | Moeda da conta.                                                                                                                                                                                                      |
| `AADDGRPI`       | Alfanumérico  | Grupo de endereços da conta.                                                                                                                                                                                                 |
| `ACRCYDBI`       | Alfanumérico  | Débito em moeda da conta.                                                                                                                                                                                                 |
| `ACSTNUMI`       | Alfanumérico  | Número do extrato da conta.                                                                                                                                                                                              |
| `ACSTSSNI`       | Alfanumérico  | Temporada do extrato da conta.                                                                                                                                                                                             |
| `ACSTDOBI`       | Alfanumérico  | Data de abertura do extrato da conta.                                                                                                                                                                                           |
| `ACSTFCOI`       | Alfanumérico  | Primeiro contato do extrato da conta.                                                                                                                                                                                        |
| `TRNNAMEI`       | Alfanumérico  | Nome da transação.                                                                                                                                                                                                     |
| `TITLE01I`      | Alfanumérico  | Título 01.                                                                                                                                                                                                           |
| `CURDATEI`      | Alfanumérico  | Data atual.                                                                                                                                                                                                         |
| `PGMNAMEI`      | Alfanumérico  | Nome do programa.                                                                                                                                                                                                        |
| `TITLE02I`      | Alfanumérico  | Título 02.                                                                                                                                                                                                           |
| `CURTIMEI`      | Alfanumérico  | Horário atual.                                                                                                                                                                                                         |

## Principais referências

-   **Arquivos VSAM:** As informações da conta são armazenadas em arquivos VSAM. Os arquivos VSAM específicos acessados por este módulo são determinados pelo modelo de dados do aplicativo CardDemo.
-   **Programas COBOL:** Outros programas COBOL dentro do aplicativo CardDemo podem interagir com este módulo para solicitar ou atualizar informações da conta.
-   **Mapas BMS:** O módulo usa mapas BMS para formatação de tela e interação do usuário.
-   **Comandos CICS:** Os comandos CICS são usados para processamento de transações, recuperação de dados e tratamento de tela.

--Made by "Smart Engineering" (by Compass.UOL)--