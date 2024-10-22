Gerado em: 1º de outubro de 2024

# Aplicação CardDemo: Funcionalidade de Listagem de Transações

## Título do Documento: CardDemo Módulo de Listagem de Transações - Especificação Técnica

## Arquivo

- `\src\COTRN00C.cbl`

## Descrição Resumida

Este documento descreve as especificações técnicas para o módulo de Listagem de Transações dentro da aplicação CardDemo. Este módulo fornece aos usuários uma maneira de visualizar seu histórico de transações de cartão de crédito, semelhante a um extrato bancário. Ele permite a navegação por páginas de transações e exibe detalhes importantes como ID da transação, data, descrição e valor.

## Histórico de Versões

- Versão 1.0: Versão inicial

## Descrição do Processo

O módulo de Listagem de Transações recupera registros de transações do banco de dados VSAM e os apresenta ao usuário em um formato paginado. Os usuários podem navegar pelo histórico de transações usando as funcionalidades de avançar e retroceder página. O módulo também permite a seleção de transações, embora este recurso não esteja totalmente implementado na versão atual.

## Requisitos para Iniciar o Processo

1. **Autenticação do Usuário:** O usuário deve ser autenticado e autorizado a acessar a aplicação CardDemo.
2. **Sessão Ativa:** O usuário deve ter uma sessão ativa com a aplicação.
3. **Dados de Transação:** O arquivo TRANSACT no banco de dados VSAM deve conter o histórico de transações do usuário.

## Validações e Regras

* **Recuperação de Dados:** O sistema deve recuperar apenas transações associadas à conta do usuário conectado.
* **Paginação:** O número de transações exibidas por página deve ser limitado para evitar sobrecarregar o usuário.
* **Limites de Navegação:** O sistema deve impedir a navegação além da primeira e da última página do histórico de transações.
* **Tratamento de Erros:** Mensagens de erro apropriadas devem ser exibidas para entradas inválidas ou erros do sistema.

## Detalhes Técnicos

**Programa Principal:**

* **`COTRN00C.cbl`:** Este programa COBOL lida com a funcionalidade de listagem de transações.

**Principais Funções/Parágrafos:**

* **`MAIN-PARA`:**  O procedimento principal que controla o fluxo do programa.
* **`PROCESS-ENTER-KEY`:**  Lida com a entrada do usuário para seleção de transação.
* **`PROCESS-PF7-KEY`:**  Lida com a funcionalidade "Page Up" (Página para cima).
* **`PROCESS-PF8-KEY`:**  Lida com a funcionalidade "Page Down" (Página para baixo).
* **`PROCESS-PAGE-FORWARD`:**  Recupera e exibe a próxima página de transações.
* **`PROCESS-PAGE-BACKWARD`:** Recupera e exibe a página anterior de transações.
* **`POPULATE-TRAN-DATA`:**  Preenche os campos da tela com detalhes da transação.
* **`INITIALIZE-TRAN-DATA`:**  Limpa os campos da tela para o próximo conjunto de transações.
* **`SEND-TRNLST-SCREEN`:**  Envia a tela de lista de transações para o terminal do usuário.
* **`RECEIVE-TRNLST-SCREEN`:**  Recebe a entrada do usuário da tela de lista de transações.
* **`STARTBR-TRANSACT-FILE`:**  Abre o arquivo TRANSACT para navegação.
* **`READNEXT-TRANSACT-FILE`:**  Lê o próximo registro de transação do arquivo.
* **`READPREV-TRANSACT-FILE`:**  Lê o registro de transação anterior do arquivo.
* **`ENDBR-TRANSACT-FILE`:**  Fecha o arquivo TRANSACT.

**Variáveis:**

* **`WS-TRANID`:**  ID da transação para COTRN00C.
* **`WS-TRANSACT-FILE`:**  Nome do arquivo VSAM contendo os dados da transação.
* **`WS-PAGE-NUM`:**  Número da página atual sendo exibida.
* **`CDEMO-CT00-TRNID-FIRST`:**  ID da transação da primeira transação na página atual.
* **`CDEMO-CT00-TRNID-LAST`:**   ID da transação da última transação na página atual.
* **`CDEMO-CT00-PAGE-NUM`:**     Número da página atual.
* **`TRAN-ID`:**  ID da transação usada para recuperar registros.
* **`TRAN-AMT`:**  Valor da transação.
* **`TRAN-ORIG-TS`:**  Timestamp da transação.
* **`TRAN-DESC`:**  Descrição da transação.

## Segurança

* **Autenticação e Autorização do Usuário:** A aplicação CardDemo deve ter mecanismos de segurança para autenticar usuários e autorizar o acesso aos dados de transações.
* **Privacidade de Dados:** Os dados de transações devem ser tratados com segurança para proteger a privacidade do usuário.

## Impacto em Outros Sistemas

* **Módulo de Gerenciamento de Conta:** O módulo de Listagem de Transações pode ser integrado ao módulo de Gerenciamento de Conta, permitindo que os usuários visualizem as transações dentro do contexto de seus detalhes de conta.
* **Módulo de Relatórios:** Os dados de transações exibidos neste módulo podem ser usados ​​como entrada para gerar relatórios em um módulo de Relatórios separado.

## Modelos

Não aplicável para este módulo específico, pois ele lida principalmente com recuperação e apresentação de dados.

## Principais Referências

* **`COTRN0A`:**  Conjunto de mapas BMS usado para a tela de listagem de transações.
* **`TRANSACT`:**  Arquivo VSAM contendo dados de transações. 
* **`COSGN00C`:** Programa que lida com o processo de inscrição.
* **`COMEN01C`:**  Programa que lida com o menu principal.
* **`COTRN01C`:**  Programa que lida com a visualização de detalhes da transação.

**Considerações Adicionais:**

* **Interface do Usuário:**  A interface do usuário deve ser intuitiva e amigável. Considere usar rótulos claros, formatação consistente e fornecer dicas visuais para navegação.
* **Desempenho:** Otimize a recuperação de dados e a renderização da tela para um desempenho ideal, especialmente ao lidar com grandes históricos de transações.
* **Registro de Erros:**  Implemente o registro de erros para rastrear e resolver problemas com eficácia.
* **Internacionalização:**  Se a aplicação precisar oferecer suporte a vários idiomas e moedas, certifique-se de que o módulo seja projetado para lidar com esses requisitos.

--Made by "Smart Engineering" (by Compass.UOL)--