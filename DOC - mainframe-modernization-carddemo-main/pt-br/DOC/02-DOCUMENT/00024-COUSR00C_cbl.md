Gerado em: 1º de outubro de 2024

# Gestão de Usuários do CardDemo: Listar Usuários

## Título

- Título do Documento: CardDemo Application - User List Functionality Specification

## Arquivo

- Arquivo: \src\COUSR00C.cbl

## Descrição resumida

Este documento descreve a funcionalidade do programa COUSR00C dentro da aplicação CardDemo. Este programa é responsável por exibir uma lista de usuários para o pessoal autorizado (administradores). Ele permite a navegação por registros de usuários paginados e a seleção de usuários específicos para atualização ou exclusão.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Implementação inicial da funcionalidade de Lista de Usuários

## Descrição do Processo

A funcionalidade Lista de Usuários fornece uma maneira de os administradores visualizarem e gerenciarem contas de usuário no sistema CardDemo. O processo envolve as seguintes etapas:

1. **Acessar Lista de Usuários:** Um administrador acessa a funcionalidade de lista de usuários, provavelmente por meio de uma opção de menu.
2. **Exibição Inicial:** O sistema recupera e exibe uma página inicial de registros de usuário do arquivo seguro USRSEC. Cada registro provavelmente inclui ID do Usuário, Nome e Tipo de Usuário.
3. **Paginação:** O administrador pode navegar por várias páginas de registros de usuário usando as teclas de função (PF7 para a página anterior, PF8 para a próxima página).
4. **Seleção do Usuário:** O administrador pode selecionar um registro de usuário para ações de atualização (U) ou exclusão (D).
5. **Transferência de Ação:** Com base na ação selecionada (U/D), o programa redireciona o administrador para o programa apropriado (COUSR02C para atualização, COUSR03C para exclusão) junto com o ID do usuário selecionado.

## Requisitos para Iniciar o Processo

1. **Função do Usuário:** Somente pessoal autorizado com privilégios administrativos pode acessar e usar esta funcionalidade.
2. **Sessão Ativa:** O administrador deve ter uma sessão ativa no aplicativo CardDemo.

## Validações e Regras

* **Segurança:** O acesso à lista de usuários, detalhes do usuário e ações são restritos a administradores autenticados.
* **Validação de Entrada:** O programa valida as seleções do usuário para garantir que apenas opções válidas (U/D) sejam processadas.
* **Integridade de Dados:** O programa interage com o arquivo seguro USRSEC, garantindo a integridade e confidencialidade dos dados do usuário.

## Detalhes Técnicos

**Programa Principal:**

* **`COUSR00C`:** Este programa lida com a exibição e gerenciamento da lista de usuários.

**Funções Principais:**

* **`PROCESS-ENTER-KEY`:** Processa a entrada do usuário, particularmente a seleção de um usuário para atualização ou exclusão.
* **`PROCESS-PF7-KEY`:** Lida com a navegação para a página anterior de registros de usuários.
* **`PROCESS-PF8-KEY`:** Lida com a navegação para a próxima página de registros de usuários.
* **`PROCESS-PAGE-FORWARD`:** Busca e preenche a próxima página de registros de usuários.
* **`PROCESS-PAGE-BACKWARD`:** Busca e preenche a página anterior de registros de usuários.
* **`POPULATE-USER-DATA`:** Preenche os campos de exibição com dados dos registros de usuário buscados.
* **`INITIALIZE-USER-DATA`:** Limpa os campos de exibição para se preparar para exibir um novo conjunto de registros.
* **`RETURN-TO-PREV-SCREEN`:** Retorna o usuário para a tela anterior.
* **`SEND-USRLST-SCREEN`:** Envia a tela de lista de usuários para o terminal do administrador.
* **`RECEIVE-USRLST-SCREEN`:** Recebe a entrada do usuário da tela de lista de usuários.
* **`POPULATE-HEADER-INFO`:** Preenche as informações de cabeçalho da tela.
* **`STARTBR-USER-SEC-FILE`:** Inicia uma sessão de navegação com o arquivo USRSEC.
* **`READNEXT-USER-SEC-FILE`:** Lê o próximo registro do arquivo USRSEC.
* **`READPREV-USER-SEC-FILE`:** Lê o registro anterior do arquivo USRSEC.
* **`ENDBR-USER-SEC-FILE`:** Encerra a sessão de navegação com o arquivo USRSEC.

**Variáveis:**

* **`WS-USRSEC-FILE`:** Armazena o nome do arquivo de usuário seguro (USRSEC).
* **`CDEMO-CU00-USR-SELECTED`:** Armazena o ID do usuário selecionado para uma ação.
* **`CDEMO-CU00-USR-SEL-FLG`:** Armazena a ação selecionada (U/D) para o usuário escolhido.
* **`CDEMO-CU00-PAGE-NUM`:** Rastreia o número da página atual sendo exibida.
* **`CDEMO-CU00-USRID-FIRST`:** Armazena o ID do Usuário do primeiro registro na página atual.
* **`CDEMO-CU00-USRID-LAST`:** Armazena o ID do Usuário do último registro na página atual.

## Segurança

* **Autorização:** O acesso a esta funcionalidade é restrito a pessoal autorizado com privilégios administrativos, garantindo que dados confidenciais do usuário sejam protegidos contra acesso e modificação não autorizados.

## Impacto em Outros Sistemas

* **Programas de Gerenciamento de Usuários (COUSR02C, COUSR03C):** Este programa interage diretamente com os programas de atualização (COUSR02C) e exclusão (COUSR03C) do usuário, passando as informações do usuário selecionado para processamento posterior.
* **Arquivo USRSEC:** Este programa lê dados diretamente do arquivo USRSEC, o que provavelmente afeta o desempenho com base no tamanho do arquivo e na carga do sistema.

## Modelos

| Campo de Nome      | Tipo   | Descrição                                                  |
|--------------------|--------|--------------------------------------------------------------|
| SEC-USR-ID        | String | ID do Usuário                                                     |
| SEC-USR-FNAME     | String | Nome do Usuário                                            |
| SEC-USR-LNAME     | String | Sobrenome do Usuário                                             |
| SEC-USR-TYPE      | String | Tipo de Usuário (por exemplo, Administrador, Usuário)                        |
| USRID01I - USRID10I | String | Campos de exibição para IDs de Usuário na página atual              |
| FNAME01I - FNAME10I | String | Campos de exibição para Nomes de Usuário na página atual     |
| LNAME01I - LNAME10I | String | Campos de exibição para Sobrenomes de Usuário na página atual      |
| UTYPE01I - UTYPE10I | String | Campos de exibição para Tipos de Usuário na página atual            |

## Principais Referências

* **Arquivo USRSEC:** O arquivo seguro contendo dados do usuário.
* **Programa COUSR02C:** O programa responsável por atualizar as informações do usuário.
* **Programa COUSR03C:** O programa responsável por excluir as informações do usuário.

--Made by "Smart Engineering" (by Compass.UOL)--