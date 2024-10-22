--CONTEÚDO A SER TRADUZIDO--
Gerado em: 1º de outubro de 2024

# **CardDemo Sistema de Exibição de Dados Administrativos**

## Título

- Documento de Título: CardDemo Sistema de Exibição de Dados Administrativos - Especificação do Copybook COBOL

## Arquivo

- `\copybooks\COADM01.CPY`

## Descrição Resumida

Este documento descreve a estrutura e a função do copybook `COADM01.CPY` dentro do aplicativo CardDemo. Este copybook é crucial para manter uma exibição consistente e amigável de dados administrativos em diferentes telas e relatórios no sistema.

## Histórico da Versão

- Versão 1.0: Versão Inicial

## Descrição do Processo

O copybook `COADM01.CPY` define duas estruturas de dados: `COADM1AI` e `COADM1AO`. 

1. **`COADM1AI` (Formato Interno):** Esta estrutura armazena dados administrativos em um formato numérico compacto (`COMP`) para processamento eficiente no ambiente de mainframe. Este formato se destina principalmente a operações internas do sistema.

2. **`COADM1AO` (Formato de Exibição):** Esta estrutura redefine `COADM1AI`, mapeando os dados numéricos para os campos correspondentes baseados em caracteres. Essa transformação é essencial para apresentar informações aos usuários em um formato legível em telas ou relatórios.

## Requisitos para Iniciar o Processo

1. **Compilador COBOL:** O copybook requer um compilador COBOL para ser incluído em programas que o utilizam.
2. **Ambiente CICS:** O copybook foi projetado para uso em um ambiente CICS, que lida com interações de tela.

## Validações e Regras

* **Consistência de Dados:** O copybook garante que os detalhes administrativos sejam apresentados uniformemente em todo o aplicativo.
* **Interface do Usuário:** A estrutura facilita uma exibição visualmente organizada das informações para os usuários.
* **Comunicação de Erro:** A inclusão de um campo de mensagem de erro (`ERRMSGL`, `ERRMSGI`) fornece uma maneira padronizada de transmitir problemas do sistema ao usuário.

## Detalhes Técnicos

**Estruturas de Dados:**

* **`COADM1AI`:**  Mantém os dados administrativos em um formato numérico compactado.
* **`COADM1AO`:** Redefine `COADM1AI` para apresentar dados em um formato baseado em caracteres amigável ao usuário.

**Campos de Dados:**

* **`TRNNAMEL`, `TRNNAMEI`, etc.:** Nome da transação (usado para identificação interna e registro).
* **`TITLE01L`, `TITLE01I`, `TITLE02L`, `TITLE02I`, etc.:**  Títulos de tela (exibidos na parte superior das telas).
* **`CURDATEL`, `CURDATEI`, `CURTIMEL`, `CURTIMEI`:** Data e hora atuais (exibidas para referência do usuário).
* **`PGMNAMEL`, `PGMNAMEI`:** Nome do programa (usado para identificação e navegação).
* **`OPTN001L`, `OPTN001I`... `OPTN012L`, `OPTN012I`:** Opções do menu (apresentadas ao usuário).
* **`OPTIONL`, `OPTIONI`:** Opção selecionada (indica a escolha do usuário no menu).
* **`ERRMSGL`, `ERRMSGI`:** Mensagem de erro (exibe mensagens do sistema ou notificações de erro para o usuário).

**Codificação e Apresentação de Caracteres:**

* Campos em `COADM1AO` terminando com 'C', 'P', 'H', 'V', 'O' provavelmente controlam os atributos visuais dos dados na tela (cor, destaque, posicionamento, etc.).

## Segurança

Este copybook se concentra principalmente na estruturação e apresentação de dados e não lida diretamente com informações confidenciais ou funções de segurança. No entanto, os dados administrativos que ele gerencia, como nomes de transações e seleções do usuário, podem ser usados indiretamente para trilhas de auditoria ou monitoramento do sistema.

## Impacto em Outros Sistemas

* **Telas e Relatórios:** Este copybook impacta diretamente a exibição de informações administrativas em várias telas e relatórios dentro do aplicativo CardDemo.
* **Experiência do Usuário:**  A apresentação consistente de informações melhora a experiência do usuário, fornecendo uma interface familiar e compreensível.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| TRNNAMEL | Alfanumérico (PIC X(4)) | Nome da transação em formato interno. |
| TRNNAMEI | Alfanumérico (PIC X(4)) | Nome da transação em formato de exibição. |
| TITLE01L | Alfanumérico (PIC X(4)) | Primeiro título da tela em formato interno. |
| TITLE01I | Alfanumérico (PIC X(40)) | Primeiro título da tela em formato de exibição. |
| CURDATEL | Alfanumérico (PIC X(4)) | Data atual em formato interno. |
| CURDATEI | Alfanumérico (PIC X(8)) | Data atual em formato de exibição (AAAA-MM-DD). |
| CURTIMEL | Alfanumérico (PIC X(4)) | Hora atual em formato interno. |
| CURTIMEI | Alfanumérico (PIC X(8)) | Hora atual em formato de exibição (HH:MM:SS). |
| PGMNAMEL | Alfanumérico (PIC X(4)) | Nome do programa em formato interno. |
| PGMNAMEI | Alfanumérico (PIC X(8)) | Nome do programa em formato de exibição. |
| OPTN001L | Alfanumérico (PIC X(4)) | Primeira opção do menu em formato interno. |
| OPTN001I | Alfanumérico (PIC X(40)) | Primeira opção do menu em formato de exibição. |
| OPTIONL | Alfanumérico (PIC X(4)) | Opção selecionada em formato interno. |
| OPTIONI | Alfanumérico (PIC X(2)) | Opção selecionada em formato de exibição. |
| ERRMSGL | Alfanumérico (PIC X(4)) | Mensagem de erro em formato interno. |
| ERRMSGI | Alfanumérico (PIC X(78)) | Mensagem de erro em formato de exibição. |

## Referências Principais

* **Linguagem de Programação COBOL:** O copybook é escrito em COBOL e segue sua sintaxe e estruturas de dados.
* **CICS (Customer Information Control System):**  O copybook foi projetado para uso em um ambiente CICS, que é comum para aplicativos de mainframe com telas interativas.
* **BMS (Basic Mapping Support):**  O copybook provavelmente interage com mapas BMS para definir o layout e a apresentação de dados nas telas.

--Made by "Smart Engineering" (by Compass.UOL)--