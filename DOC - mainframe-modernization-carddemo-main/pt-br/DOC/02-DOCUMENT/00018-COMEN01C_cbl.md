## Navegação do Menu Principal do CardDemo

## Título

- Título do Documento: CardDemo Application - Main Menu Program Specification

## Arquivo

- `\src\COMEN01C.cbl`

## Descrição Resumida

Este documento descreve a funcionalidade do programa COMEN01C, que serve como o menu principal para usuários regulares no aplicativo CardDemo. Este programa é responsável por apresentar aos usuários uma lista de ações disponíveis, capturar sua escolha e direcioná-los ao módulo apropriado para execução.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Lançado em 19 de julho de 2022.

## Descrição do Processo

O programa COMEN01C facilita a navegação do usuário pelo aplicativo CardDemo. O fluxo do processo é o seguinte:

1. **Exibir Menu:** Após o login bem-sucedido, o programa apresenta um menu com opções numeradas adaptadas ao nível de acesso do usuário (usuários regulares veem opções diferentes dos administradores).
2. **Capturar Escolha:** O usuário insere o número correspondente à ação desejada.
3. **Validar Entrada:** O programa verifica se a entrada é um número válido dentro do intervalo de opções disponíveis e se o usuário está autorizado a executar a ação selecionada.
4. **Direcionar para Ação:** Se a entrada for válida, o programa redireciona o usuário para o módulo de programa correspondente. Por exemplo, a escolha de visualizar os detalhes da conta acionará o módulo de visualização da conta.
5. **Lidar com Entrada Inválida:** Se a entrada for inválida, uma mensagem de erro será exibida, solicitando que o usuário insira uma escolha correta.

## Requisitos para Iniciar o Processo

1. **Login do Usuário:** O usuário deve ter efetuado login com sucesso.
2. **Tipo de Usuário:** As opções de menu exibidas dependem se o usuário é um usuário regular ou um administrador.
3. **Opções do Menu:** O programa precisa de um conjunto definido de opções de menu, seus módulos de programa correspondentes e níveis de acesso.

## Validações e Regras

* **Validação de Entrada:** O programa valida se a entrada do usuário é um número, dentro do intervalo permitido e corresponde a uma ação acessível com base em seu tipo de usuário.
* **Autorização do Usuário:** O programa garante que os usuários só possam acessar funções que têm permissão para usar, impedindo o acesso não autorizado a informações confidenciais ou funcionalidades.

## Detalhes técnicos

**Programa Principal:**

* **`COMEN01C.cbl`:** O programa COBOL que controla o menu principal.

**Copybooks:**

* **`COCOM01Y.cbl`:** Contém variáveis de comunicação comuns.
* **`COMEN02Y.cbl`:** Contém variáveis específicas da tela do menu principal.
* **`COMEN01.cbl`:** Define o layout da tela do menu principal.
* **`COTTL01Y.cbl`:** Contém informações de título.
* **`CSDAT01Y.cbl`:** Contém variáveis e rotinas relacionadas à data.
* **`CSMSG01Y.cbl`:** Contém variáveis e rotinas relacionadas a mensagens.
* **`CSUSR01Y.cbl`:** Contém variáveis e rotinas relacionadas ao usuário.

**Comandos CICS:**

* **`SEND`:** Usado para exibir a tela do menu.
* **`RECEIVE`:** Usado para capturar a entrada do usuário.
* **`XCTL`:** Usado para transferir o controle para outros módulos do programa.

**Variáveis:**

* **`WS-OPTION`:** Armazena a opção de menu escolhida pelo usuário.
* **`CDEMO-MENU-OPT-COUNT`:** Mantém o número total de opções de menu.
* **`CDEMO-MENU-OPT-PGMNAME`:** Uma matriz que armazena os nomes dos programas associados a cada opção de menu.
* **`CDEMO-USRTYP-USER`:** Um indicador que indica se o usuário atual é um usuário regular.
* **`CDEMO-MENU-OPT-USRTYPE`:** Uma matriz que indica o tipo de usuário permitido para cada opção de menu.

**Métodos/Parágrafos:**

* **`MAIN-PARA`:** O procedimento principal que controla o fluxo do programa.
* **`PROCESS-ENTER-KEY`:** Processa a seleção do usuário depois que ele pressiona a tecla Enter.
* **`RETURN-TO-SIGNON-SCREEN`:** Retorna o usuário para a tela de login.
* **`SEND-MENU-SCREEN`:** Exibe a tela do menu principal.
* **`RECEIVE-MENU-SCREEN`:** Recebe a entrada do usuário da tela do menu.
* **`POPULATE-HEADER-INFO`:** Preenche as informações do cabeçalho na tela.
* **`BUILD-MENU-OPTIONS`:** Cria dinamicamente as opções de menu com base no tipo de usuário.


## Segurança

* **Controle de Acesso:** O programa aplica o controle de acesso exibindo apenas as opções de menu que o usuário está autorizado a usar.
* **Validação de Entrada:** A validação de entrada evita potenciais vulnerabilidades de entrada inesperada, aumentando a segurança do aplicativo.

## Impacto em Outros Sistemas

* **Gerenciamento de Usuários:** O programa depende da autenticação do usuário e dos dados de autorização do sistema de gerenciamento de usuários.
* **Módulos do Programa:** O menu principal atua como um hub central, conectando-se a outros módulos do programa, como visualização de conta, lista de transações, etc.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `CDEMO-MENU-OPT-NUM` | Matriz de Strings | Armazena o número exibido para cada opção de menu. |
| `CDEMO-MENU-OPT-NAME` | Matriz de Strings | Armazena os nomes descritivos de cada opção de menu. |
| `CDEMO-MENU-OPT-PGMNAME` | Matriz de Strings | Armazena os nomes dos programas associados a cada opção de menu. |
| `CDEMO-MENU-OPT-USRTYPE` | Matriz de Strings | Indica o tipo de usuário (por exemplo, 'U' para usuários regulares, 'A' para administradores) permitido para cada opção de menu. |

## Principais Referências

* **CICS (Customer Information Control System):** O sistema de processamento de transações usado.
* **BMS (Basic Mapping Support):** Usado para definir e gerenciar layouts de tela.
* **COBOL Copybooks:** Módulos de código reutilizáveis contendo estruturas de dados e lógica compartilhadas pelo aplicativo.

--Made by "Smart Engineering" (by Compass.UOL)--