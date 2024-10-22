Gerado em: 1º de outubro de 2024

# **Tela de Gerenciamento de Usuários**

## Título

- Título do Documento: Especificação da Tela de Gerenciamento de Usuários

## Arquivo

- `\COUSR00.CPY`

## Descrição resumida

Este documento descreve as especificações para uma tela de gerenciamento de usuários dentro de um aplicativo maior. Esta tela será a interface principal para os administradores visualizarem, selecionarem e potencialmente gerenciarem as informações do usuário. Esta especificação se concentra em como os dados do usuário são organizados e apresentados na tela, em vez das ações específicas que um administrador pode realizar (por exemplo, adicionar, atualizar, excluir).

## Histórico da Versão

- Versão 1.0: Versão inicial

## Descrição do Processo

A Tela de Gerenciamento de Usuários fornece uma visualização tabular das informações do usuário. Os administradores podem usar esta tela para:

1. **Visualizar Detalhes do Usuário:** A tela exibe uma lista de usuários com sua ID de Usuário, Nome, Sobrenome e Tipo de Usuário.
2. **Selecionar Usuários:** Cada linha de usuário inclui um sinalizador de seleção (provavelmente uma caixa de seleção) permitindo que os administradores selecionem um ou vários usuários para ações futuras.
3. **Informações do Sistema:** A tela também exibe informações do nível do sistema, incluindo o nome da transação, nome do programa, data atual, hora atual e número da página. Essas informações contextuais ajudam no rastreamento e auditoria das atividades de gerenciamento de usuários.

## Requisitos para Iniciar o Processo

1. **Dados do Usuário:** A tela requer acesso aos dados do usuário, provavelmente armazenados em um arquivo ou banco de dados.
2. **Privilégios de Administrador:** Somente administradores autorizados devem ter acesso a esta tela.

## Validações e Regras

* **Preenchimento de Dados:** A tela deve recuperar e exibir com precisão os dados do usuário do mecanismo de armazenamento subjacente.
* **Formatação de Dados:** Datas e horas devem ser apresentadas em um formato amigável.
* **Integridade de Dados:** As IDs de usuário devem ser exclusivas, evitando entradas duplicadas.

## Detalhes Técnicos

**Estrutura de Dados Principal:**

* **`COUSR00`:** Esta estrutura define o layout para dados de entrada (`COUSR0AI`) e saída (`COUSR0AO`) relacionados à tela.

**Campos:**

* **`USRID`:** Identificador exclusivo para cada usuário.
* **`FNAME`:** Primeiro nome do usuário.
* **`LNAME`:** Sobrenome do usuário.
* **`UTYPE`:** Código que indica a função do usuário (por exemplo, administrador, usuário padrão).
* **`SEL####`:** Sinalizadores de seleção (caixas de seleção) para cada linha de usuário.
* **`TRNNAM`:** Nome da transação.
* **`PGMNAM`:** Nome do programa.
* **`CURDAT`:** Data atual.
* **`CURTIM`:** Hora atual.
* **`PAGENU`:** Número da página.

## Segurança

* **Controle de Acesso:** O acesso a esta tela deve ser restrito a administradores autorizados.

## Impacto em Outros Sistemas

* **Processos de Gerenciamento de Usuários:** Esta tela é um componente central para as funcionalidades de gerenciamento de usuários, fornecendo a interface para os administradores interagirem com os dados do usuário.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| TRNNAM | String | Nome da transação |
| PGMNAM | String | Nome do programa |
| CURDAT | Data | Data atual |
| CURTIM | Hora | Hora atual |
| PAGENU | Inteiro | Número da página |
| USRID | String | ID de usuário exclusivo |
| FNAME | String | Primeiro nome do usuário |
| LNAME | String | Sobrenome do usuário |
| UTYPE | String | Código do tipo de usuário |
| SEL#### | Booleano | Sinalizador de seleção para cada linha de usuário |

## Principais Referências

* N/A - Esta tela parece ser independente e não faz referência direta a outros componentes ou sistemas.

--Made by "Smart Engineering" (by Compass.UOL)--