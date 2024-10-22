Gerado em: 1º de outubro de 2024

# Aplicação CardDemo - Especificação da Área de Comunicação Entre Programas

## Título do Documento: CardDemo Application - Communication Area (COCOM01Y) Specification

## Descrição Resumida

Este documento descreve a estrutura e função do `CARDDEMO-COMMAREA`, uma estrutura de dados padronizada usada para comunicação entre diferentes programas dentro da aplicação CardDemo. Esta área de comunicação garante a troca de dados sem problemas e mantém a integridade dos dados em todo o sistema de gerenciamento de cartão de crédito.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial (19 de julho de 2022)

## Descrição do Processo

O `CARDDEMO-COMMAREA` atua como um contêiner para informações que precisam ser passadas entre diferentes programas dentro da aplicação CardDemo. Quando um programa precisa enviar dados para outro, ele preenche esta área de comunicação com as informações relevantes. O programa receptor então extrai e utiliza esses dados. Este processo garante consistência e clareza na troca de dados.

## Requisitos para Iniciar o Processo

1. **Programa de Chamada:** O programa que inicia a transferência de dados precisa preencher o `CARDDEMO-COMMAREA` com as informações relevantes.
2. **Programa Chamado:** O programa que recebe os dados precisa ser capaz de interpretar e processar as informações armazenadas no `CARDDEMO-COMMAREA`.

## Validações e Regras

- **Validação de Tipo de Dados:** Cada campo no `CARDDEMO-COMMAREA` possui um tipo de dados definido (por exemplo, PIC X para alfanumérico, PIC 9 para numérico). Os programas que preenchem a área de comunicação devem garantir que os tipos de dados sejam respeitados.
- **Validação de Tamanho do Campo:** Cada campo possui um tamanho especificado. Os programas devem garantir que os dados inseridos nesses campos não excedam o tamanho definido.

## Detalhes Técnicos

**Estrutura de Dados:**

- **`CARDDEMO-COMMAREA`:** A estrutura de dados principal contendo todas as outras informações.

  - **`CDEMO-GENERAL-INFO`:** Contém informações gerais sobre a transação ou operação.

    - **`CDEMO-FROM-TRANID`:** ID da transação do programa remetente.
    - **`CDEMO-FROM-PROGRAM`:** Nome do programa remetente.
    - **`CDEMO-TO-TRANID`:** ID da transação do programa receptor.
    - **`CDEMO-TO-PROGRAM`:** Nome do programa receptor.
    - **`CDEMO-USER-ID`:** ID do usuário que está iniciando a transação.
    - **`CDEMO-USER-TYPE`:** Tipo de usuário (Administrador ou Regular).
    - **`CDEMO-PGM-CONTEXT`:** Indica se o programa está sendo inserido pela primeira vez ou re-inserido.

  - **`CDEMO-CUSTOMER-INFO`:** Contém informações específicas do cliente.

    - **`CDEMO-CUST-ID`:** Identificador único do cliente.
    - **`CDEMO-CUST-FNAME`:** Primeiro nome do cliente.
    - **`CDEMO-CUST-MNAME`:** Nome do meio do cliente.
    - **`CDEMO-CUST-LNAME`:** Sobrenome do cliente.

  - **`CDEMO-ACCOUNT-INFO`:** Contém informações relacionadas à conta.

    - **`CDEMO-ACCT-ID`:** Identificador único da conta.
    - **`CDEMO-ACCT-STATUS`:** Status atual da conta.

  - **`CDEMO-CARD-INFO`:** Contém informações do cartão de crédito.

    - **`CDEMO-CARD-NUM`:** Número do cartão de crédito associado à conta.

  - **`CDEMO-MORE-INFO`:** Informações adicionais para controle de fluxo do programa.

    - **`CDEMO-LAST-MAP`:** Último nome de mapa usado.
    - **`CDEMO-LAST-MAPSET`:** Último conjunto de mapas usado.

## Segurança

Embora não esteja explicitamente definido neste trecho de código, as seguintes considerações de segurança são importantes:

- **Validação de Dados:** A validação rigorosa de dados é crucial para evitar vulnerabilidades como injeção de SQL ou ataques de estouro de buffer.
- **Controle de Acesso:** O acesso a informações confidenciais dentro do `CARDDEMO-COMMAREA` (como números de cartão de crédito) deve ser restrito com base nas funções e permissões do usuário.
- **Criptografia de Dados:** Considere criptografar dados confidenciais dentro da área de comunicação para adicionar uma camada extra de segurança.

## Impacto em Outros Sistemas

- **Todos os Programas dentro do CardDemo:** Esta área de comunicação é fundamental para a aplicação CardDemo. Quaisquer alterações em sua estrutura ou definições de dados exigiriam atualizações em todos os programas que interagem com ela.

## Modelos

| Nome do Campo         | Tipo        | Descrição                                    |
| --------------------- | ----------- | ---------------------------------------------- |
| CDEMO-FROM-TRANID     | Alfanumérico | ID da transação do programa remetente.         |
| CDEMO-FROM-PROGRAM    | Alfanumérico | Nome do programa remetente.                   |
| CDEMO-TO-TRANID       | Alfanumérico | ID da transação do programa receptor.        |
| CDEMO-TO-PROGRAM      | Alfanumérico | Nome do programa receptor.                  |
| CDEMO-USER-ID         | Alfanumérico | ID do usuário que está iniciando a transação.            |
| CDEMO-USER-TYPE       | Alfanumérico | Tipo de usuário (Administrador ou Regular).              |
| CDEMO-PGM-CONTEXT     | Numérico      | Contexto de entrada/re-entrada do programa.                |
| CDEMO-CUST-ID         | Numérico      | Identificador único do cliente.                     |
| CDEMO-CUST-FNAME      | Alfanumérico | Primeiro nome do cliente.                        |
| CDEMO-CUST-MNAME      | Alfanumérico | Nome do meio do cliente.                        |
| CDEMO-CUST-LNAME      | Alfanumérico | Sobrenome do cliente.                         |
| CDEMO-ACCT-ID         | Numérico      | Identificador único da conta.                     |
| CDEMO-ACCT-STATUS     | Alfanumérico | Status atual da conta.                 |
| CDEMO-CARD-NUM        | Numérico      | Número do cartão de crédito associado à conta. |
| CDEMO-LAST-MAP       | Alfanumérico | Último nome de mapa usado.                           |
| CDEMO-LAST-MAPSET    | Alfanumérico | Último conjunto de mapas usado.                             |

## Principais Referências

- **Padrões de Programação COBOL:** A adesão aos padrões de programação COBOL é essencial para definições de tipo e tamanho de dados.
- **Arquitetura da Aplicação CardDemo:** Entender a arquitetura geral da aplicação é crucial para a utilização correta da área de comunicação.

## Arquivo

- `COCOM01Y.cpy`

Esta área de comunicação padronizada é um componente crítico da aplicação CardDemo, facilitando a troca suave de dados entre seus diferentes módulos. Manter sua integridade e segurança é fundamental para a funcionalidade e confiabilidade geral da aplicação.

--Made by "Smart Engineering" (by Compass.UOL)--