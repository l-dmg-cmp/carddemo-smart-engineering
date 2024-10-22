Gerado em: 1º de outubro de 2024

# Aplicação CardDemo: Menu Administrativo

## Título

- Título do Documento: CardDemo Application - Administrative Menu Specification
- Título Traduzido: Aplicação CardDemo - Especificação do Menu Administrativo

## Arquivo

- Arquivo: `\src\COADM01C.cbl`

## Descrição resumida

Este documento descreve as especificações para o Menu Administrativo dentro da aplicação CardDemo. Este menu serve como um hub central para que o pessoal autorizado execute tarefas administrativas. Ele fornece uma interface amigável para gerenciar vários aspectos do sistema de cartão de crédito.

## Histórico de Versões

- Versão CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo

O Menu Administrativo fornece aos usuários autorizados uma abordagem simplificada para gerenciar o aplicativo CardDemo.

1. **Exibir Menu:** Após o login bem-sucedido de um usuário autorizado, o programa apresenta um menu listando várias funções administrativas.
2. **Seleção de Opção:** O administrador pode escolher a opção desejada no menu exibido.
3. **Validação de Entrada:** O programa valida a opção selecionada para garantir que seja uma escolha válida.
4. **Execução da Ação:** Com base na opção escolhida, o programa redireciona o administrador para o módulo administrativo correspondente.

## Requisitos para Iniciar o Processo

1. **Autenticação do Usuário:** O usuário deve ser autenticado como um administrador autorizado para acessar o Menu Administrativo.
2. **Exibição do Menu:** O programa deve exibir com precisão as opções de menu disponíveis para o administrador.

## Validações e Regras

* **Autorização:** O acesso ao Menu Administrativo é restrito a administradores autorizados.
* **Validação de Entrada:** O programa valida a entrada do usuário para garantir que apenas opções válidas sejam processadas.
* **Tratamento de Erros:** O programa deve lidar normalmente com seleções inválidas ou erros inesperados.

## Detalhes técnicos

**Programa Principal:**

* **`COADM01C.cbl`:** Este programa gerencia a exibição, entrada e navegação do Menu Administrativo.

**Copybooks:**

* **`COCOM01Y.cbl`:** Contém variáveis ​​e constantes comuns usadas em todo o aplicativo.
* **`COADM02Y.cbl`:**  Contém variáveis ​​e estruturas de dados específicas do Menu Administrativo.
* **`COADM01.cbl`:** Contém as definições de layout de tela para o Menu Administrativo.
* **`COTTL01Y.cbl`:** Contém variáveis ​​e rotinas para lidar com títulos de tela e mensagens.
* **`CSDAT01Y.cbl`:** Contém estruturas de dados e rotinas para manipulação de datas.
* **`CSMSG01Y.cbl`:** Contém definições de mensagens usadas pelo aplicativo.
* **`CSUSR01Y.cbl`:** Contém estruturas de dados e variáveis ​​relacionadas ao usuário.

**Funções/Métodos Principais:**

* **`MAIN-PARA`:**  O procedimento principal que controla o fluxo do programa.
* **`PROCESS-ENTER-KEY`:** Lida com o processamento da entrada do usuário.
* **`RETURN-TO-SIGNON-SCREEN`:** Redireciona o usuário para a tela de login.
* **`SEND-MENU-SCREEN`:** Exibe a tela do Menu Administrativo.
* **`RECEIVE-MENU-SCREEN`:** Recebe a entrada do usuário na tela do Menu Administrativo.
* **`POPULATE-HEADER-INFO`:** Preenche as informações do cabeçalho na tela.
* **`BUILD-MENU-OPTIONS`:** Cria dinamicamente as opções do menu com base na configuração.

**Variáveis:**

* **`WS-OPTION`:** Armazena a opção de menu selecionada pelo usuário.
* **`CDEMO-ADMIN-OPT-COUNT`:**  Representa o número total de opções do menu administrativo.
* **`CDEMO-ADMIN-OPT-PGMNAME`:** Uma matriz que armazena os nomes dos programas associados a cada opção do menu.
* **`CDEMO-ADMIN-OPT-NAME`:** Uma matriz que armazena os nomes de exibição de cada opção do menu.

## Segurança

* **Controle de Acesso:**  O acesso ao Menu Administrativo é restrito a pessoal autorizado por meio de mecanismos de autenticação de usuário.
* **Validação de Entrada:**  O programa valida a entrada do usuário para evitar vulnerabilidades de segurança, como ataques de injeção.

## Impacto em Outros Sistemas

* **Outros Módulos Administrativos:** O Menu Administrativo serve como um ponto central de navegação para outros módulos administrativos dentro do aplicativo CardDemo.

## Modelos

Não se aplica a este componente, pois se concentra na interface do usuário e na navegação.

## Principais Referências

* **Programa de Login:** O Menu Administrativo interage com o programa de login (`COSGN00C`) para autenticação do usuário.
* **Módulos Administrativos:** O menu referencia e potencialmente interage com outros módulos administrativos com base nas seleções do usuário.

--Made by "Smart Engineering" (by Compass.UOL)--