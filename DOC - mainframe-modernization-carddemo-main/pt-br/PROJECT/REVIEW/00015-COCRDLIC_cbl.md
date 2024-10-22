--CONTENT TO TRANSLATE--
Gerado em: 1º de outubro de 2024

## Revisão de Análise Técnica

**Arquivo:**  \COCRDLIC.cbl

**Título:**  Lista de Cartões de Crédito

**Resumo:** 

Este programa COBOL, `COCRDLIC.CBL`, apresenta uma lista de cartões de crédito para o usuário. A lista exibida depende da função do usuário e de qualquer contexto passado para o programa.

* **Usuários administradores:** veem todos os cartões de crédito.
* **Usuários não administradores:** veem apenas os cartões associados ao número da conta (`ACCT`) armazenado em uma `COMMAREA` (uma estrutura de dados para comunicação do programa).

O programa lida com a interação do usuário, incluindo a paginação pelos resultados (teclas PF7/F8), a seleção de um cartão para visualizar detalhes (PF5) e o retorno a um menu (PF3). Ele interage com um arquivo VSAM (`CARDDAT`) para recuperar dados do cartão de crédito, provavelmente indexado por `CARDAIX`, e usa uma `COMMAREA` para compartilhamento de dados com outros programas no aplicativo.

**Tecnologia:**

* **Linguagem de programação:** COBOL
* **Framework/Biblioteca:**  `Não disponível`
* **Banco de dados:**
  * **VSAM (Virtual Storage Access Method):** O programa usa conjuntos de dados VSAM (`CARDDAT`, `CARDAIX`) para armazenar e acessar dados de cartão de crédito.
* **Outras ferramentas:** 
   * **CICS (Customer Information Control System):** O código depende fortemente dos comandos CICS para tratamento de tela (`SEND MAP`, `RECEIVE MAP`), controle de programa (`XCTL`) e acesso a dados (`STARTBR`, `READNEXT`, `ENDBR`).

**Referência, Classe e Método:**

| Reference | Descrição |
|---|---|
|  `CVCRD01Y` | Provavelmente contém variáveis ​​de armazenamento de trabalho relacionadas ao processamento de cartão de crédito. |
|  `COCOM01Y` | Define o layout da `COMMAREA` do aplicativo. |
|  `COTTL01Y` |  Fornece títulos de tela e elementos de exibição comuns. |
|  `COCRDLI` | Define o layout da tela Lista de Cartões de Crédito. |
|  `CSDAT01Y` |  Contém rotinas ou variáveis ​​para lidar com datas. |
|  `CSMSG01Y` |  Contém mensagens comuns usadas pelo aplicativo. |
|  `CSMSG02Y` |  Provavelmente define variáveis ​​para tratamento de abend (término anormal). |
|  `CSUSR01Y` |  Contém estruturas de dados relacionadas ao usuário conectado. |
|  `CVACT02Y` |  Define o layout do `CARD-RECORD` usado para ler dados do cartão. |
|  `DFHBMSCA` |  Um copybook CICS padrão para definir atributos de mapa e E/S de mapa simbólica. |
|  `DFHAID` | Um copybook CICS que define os campos Attention Identifier (AID) usados ​​para lidar com teclas PF e outras teclas especiais. |
|  `CSSTRPFY` |  Código comum para armazenar PFKey. |


| Classe | Descrição |
|---|---|
| `Não disponível` |  |

| Método (Público) | Descrição |
|---|---|
| `Não disponível` |  |

| Método (Privado) | Descrição |
|---|---|
| `0000-MAIN` | Lógica principal do programa. Inicializa variáveis, lida com a entrada do usuário e o fluxo do programa. |
| `COMMON-RETURN` |  Ponto de retorno comum para o programa. Move dados para a `COMMAREA`, emite um comando CICS RETURN. |
| `1000-SEND-MAP` |  Prepara e envia a tela da lista de cartões de crédito para o usuário. |
| `1100-SCREEN-INIT` |  Inicializa os campos da tela com dados. |
| `1200-SCREEN-ARRAY-INIT` |  Preenche a matriz da tela com os detalhes do cartão de crédito. |
| `1250-SETUP-ARRAY-ATTRIBS` |  Define os atributos de exibição para os elementos da matriz da tela. |
| `1300-SETUP-SCREEN-ATTRS` | Define os atributos de exibição para os campos da tela. |
| `1400-SETUP-MESSAGE` |  Configura e exibe mensagens para o usuário. |
| `1500-SEND-SCREEN` |  Emite o comando CICS SEND MAP para exibir a tela. |
| `2000-RECEIVE-MAP` |  Recebe a entrada do usuário da tela. |
| `2100-RECEIVE-SCREEN` |  Emite o comando CICS RECEIVE MAP para obter dados da tela. |
| `2200-EDIT-INPUTS` |  Edita e valida a entrada do usuário. |
| `2210-EDIT-ACCOUNT` | Valida a entrada do número da conta. |
| `2220-EDIT-CARD` | Valida a entrada do número do cartão. |
| `2250-EDIT-ARRAY` |  Edita a matriz da tela para seleções do usuário. |
| `9000-READ-FORWARD` |  Lê registros de cartão de crédito em ordem direta, a partir de uma determinada chave. |
| `9100-READ-BACKWARDS` | Lê registros de cartão de crédito em ordem inversa, a partir de uma determinada chave. |
| `9500-FILTER-RECORDS` |  Filtra registros de cartão de crédito com base em critérios fornecidos pelo usuário (número da conta e do cartão). |
| `SEND-PLAIN-TEXT` |  Envia uma mensagem de erro de texto simples para o usuário (provavelmente para depuração). |
| `SEND-LONG-TEXT` |  Envia uma mensagem de texto mais longa, provavelmente para depuração, para o usuário. |

--Made by "Smart Engineering" (by Compass.UOL)--