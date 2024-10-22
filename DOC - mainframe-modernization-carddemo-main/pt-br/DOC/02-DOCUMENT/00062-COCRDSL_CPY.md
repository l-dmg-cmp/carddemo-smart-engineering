Gerado em: 1º de outubro de 2024

# Especificação da Estrutura de Exibição do Cartão de Crédito

## Título do Documento: Especificação da Estrutura de Exibição do Cartão de Crédito

## Arquivo

- Arquivo: \COCRDSL.CPY

## Descrição resumida

Este documento descreve a estrutura de como as informações do cartão de crédito são organizadas e exibidas no sistema, particularmente para interfaces de usuário. Ele garante uma apresentação consistente e amigável dos dados do cartão de crédito.

## Histórico de Versões

- Versão 1.0: Versão Inicial

## Descrição do Processo

Esta especificação define duas estruturas de dados, `CCRDSLAI` e `CCRDSLAO`, para padronizar o armazenamento e a apresentação das informações do cartão de crédito.

- **`CCRDSLAI`:** Esta estrutura define os campos de dados brutos para um registro de cartão de crédito. Ela atua como um contêiner que armazena informações individuais sobre o cartão de crédito.
- **`CCRDSLAO`:** Esta estrutura se baseia em `CCRDSLAI` e adiciona atributos de exibição a cada campo de dados. Ela é projetada especificamente para apresentar essas informações em uma tela, potencialmente com codificação de cores ou realce.

## Requisitos para Iniciar o Processo

1. **Compilador COBOL:** O código precisa ser compilado e integrado ao sistema mais amplo.
2. **Interface de Usuário:** Uma interface de usuário (provavelmente baseada em terminal) é necessária para exibir as informações de acordo com a estrutura definida.

## Validações e Regras

- **Dados Padronizados:** Ao definir estritamente a estrutura e os tipos de dados, o sistema garante que todas as informações do cartão de crédito sejam armazenadas uniformemente, simplificando o processamento e o gerenciamento.
- **Integridade de Dados:** Tipos de dados e comprimentos específicos (por exemplo, `PIC X(16)` para um número de cartão de 16 caracteres) ajudam a manter a precisão dos dados.
- **Interface Amigável:** A inclusão de atributos de exibição visa apresentar as informações de forma clara e intuitiva aos usuários.

## Detalhes Técnicos

**Estruturas de Dados:**

- **`CCRDSLAI`:** Contêiner para dados brutos do cartão de crédito.
- **`CCRDSLAO`:** Estende `CCRDSLAI` com atributos de exibição para cada campo.

**Campos de Dados (Comuns a ambas as estruturas):**

- **`TRNNAME`:** Nome da transação (por exemplo, "Compra", "Pagamento").
- **`TITLE01`, `TITLE02`:** Cabeçalhos ou rótulos para exibição.
- **`CURDATE`, `CURTIME`:** Data e hora atuais, provavelmente para registro de transações.
- **`PGMNAME`:** Nome do programa, potencialmente para rastrear onde os dados são usados.
- **`ACCTSID`, `CARDSID`:** Identificadores de conta e cartão para vincular aos registros do cliente.
- **`CRDNAME`:** Nome do titular do cartão como aparece no cartão.
- **`CRDSTCD`:** Código do tipo de cartão de crédito (por exemplo, "VISA", "MC" para Mastercard).
- **`EXPMON`, `EXPYEAR`:** Mês e ano de expiração do cartão.
- **`INFOMSG`, `ERRMSG`:** Mensagens para fornecer informações ou erros ao usuário.
- **`FKEYS`:** Teclas de função (por exemplo, "F1 para Ajuda") para interação do usuário.

**Atributos de Exibição (Específicos para `CCRDSLAO`):**

- Campos como `C`, `P`, `H`, `V`, `O` provavelmente representam atributos de exibição como cor, realce, visibilidade, etc., para cada campo de dados.

## Segurança

- **Mascaramento de Dados:** Implemente técnicas de mascaramento de dados para ocultar informações confidenciais do cartão de crédito, como o número completo do cartão durante a exibição, mostrando apenas os últimos quatro dígitos.
- **Controle de Acesso:** Restrinja o acesso às informações do cartão de crédito com base nas funções e permissões do usuário.

## Impacto em Outros Sistemas

- **Interface de Usuário:** A estrutura definida impacta diretamente como a interface do usuário apresenta as informações do cartão de crédito.
- **Armazenamento de Dados:** Os tipos e comprimentos de dados definidos nas estruturas podem influenciar como os dados do cartão de crédito são armazenados no banco de dados ou arquivos.

## Modelos

| Nome do Campo | Tipo | Descrição | Atributos de Exibição |
|---|---|---|---|
| TRNNAME | String | Nome da transação | Cor, Posição |
| TITLE01 | String | Cabeçalho ou rótulo | Cor, Posição |
| CURDATE | Data | Data atual | Cor, Posição |
| PGMNAME | String | Nome do programa |  Cor, Posição |
| ACCTSID | String | Identificador da conta | Cor, Posição |
| CARDSID | String | Número do cartão de crédito (mascarado) | Cor, Posição |
| CRDNAME | String | Nome do titular do cartão | Cor, Posição |
| CRDSTCD | String | Código do tipo de cartão de crédito | Cor, Posição |
| EXPMON | String | Mês de expiração | Cor, Posição |
| EXPYEAR | String | Ano de expiração | Cor, Posição |
| INFOMSG | String | Mensagem de informação | Cor, Posição |
| ERRMSG | String | Mensagem de erro | Cor, Posição, Piscando |
| FKEYS | String | Teclas de função | Cor, Posição |

## Principais Referências

- Especificações da Linguagem de Programação COBOL para tipos e estruturas de dados.
- Documentação do sistema para a interface do usuário e mecanismos de armazenamento de dados.

--Made by "Smart Engineering" (by Compass.UOL)--