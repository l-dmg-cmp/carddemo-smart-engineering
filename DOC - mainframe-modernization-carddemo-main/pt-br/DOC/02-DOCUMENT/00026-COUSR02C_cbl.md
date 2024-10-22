Gerado em: 1 de outubro de 2024

# Especificação do Programa de Atualização de Usuário CardDemo

## Título

- Título do Documento: Especificação do Programa de Atualização de Usuário CardDemo

## Arquivo

- Arquivo:  \src\COUSR02C.cbl

## Descrição Resumida

Este documento descreve as especificações para o programa COUSR02C dentro da aplicação CardDemo. Este programa é responsável por gerenciar as atualizações das informações do usuário, garantindo a integridade dos dados e a segurança do sistema durante todo o processo. 

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo

O programa COUSR02C facilita a atualização das informações do usuário dentro da aplicação CardDemo. O processo envolve as seguintes etapas:

1. **Seleção do Usuário:** Um administrador seleciona um usuário para atualização, normalmente a partir de uma lista de usuários existentes.
2. **Recuperação de Dados:** O programa recupera as informações do usuário selecionado do arquivo USRSEC (banco de dados de usuários).
3. **Exibição de Informações:**  As informações recuperadas, incluindo ID do usuário, nome, sobrenome, senha e tipo de usuário, são exibidas na tela do administrador para revisão e possível modificação.
4. **Modificação de Dados:** O administrador pode modificar qualquer um dos campos exibidos, exceto o ID do usuário.
5. **Validação de Dados:** Antes de atualizar o banco de dados, o programa valida os dados modificados para garantir que todos os campos obrigatórios estejam preenchidos e que os formatos de dados estejam corretos. 
6. **Atualização do Banco de Dados:** Se os dados inseridos passarem na validação, o programa atualiza o registro do usuário no arquivo USRSEC. 
7. **Mensagem de Confirmação:**  Uma mensagem de confirmação é exibida ao administrador após a atualização bem-sucedida. Se ocorrerem erros durante a validação ou atualização, as mensagens de erro apropriadas serão exibidas.

## Requisitos para Iniciar o Processo

1. **Privilégios de Administrador:** Somente administradores autorizados têm acesso à funcionalidade de atualização do usuário.
2. **Sessão de Usuário Ativa:** Uma sessão de usuário ativa é necessária para interagir com a aplicação CardDemo.
3. **ID de Usuário Válido:**  Um ID de usuário válido deve ser fornecido para identificar o registro do usuário a ser atualizado.

## Validações e Regras

* **Campos Obrigatórios:**  ID do Usuário, Nome, Sobrenome, Senha e Tipo de Usuário são campos obrigatórios e não podem ser deixados em branco.
* **Validação de Formato de Dados:** O programa verifica o formato dos dados de campos específicos, como ID do Usuário e Senha, para garantir que eles estejam em conformidade com as regras predefinidas do sistema.
* **Confirmação de Senha:**  Embora não seja mencionado explicitamente, o programa deve idealmente solicitar que o administrador insira a nova senha novamente para evitar erros de digitação acidentais.
* **Integridade de Dados:** O programa prioriza a precisão e a completude das informações do usuário para manter a integridade dos dados do sistema.

## Detalhes Técnicos

**Programa Principal:**

* **COUSR02C:** O principal programa COBOL responsável por orquestrar o processo de atualização do usuário.

**Telas Principais:**

* **COUSR2A:** A tela principal usada para exibir e modificar as informações do usuário.

**Arquivos Principais:**

* **USRSEC:** O arquivo VSAM que contém as informações do usuário, incluindo ID do usuário, senha, tipo de usuário e outros detalhes relevantes.

**Variáveis Principais:**

* **USRIDINI:**  ID do usuário inserido pelo administrador.
* **FNAMEI:** Nome do usuário.
* **LNAMEI:** Sobrenome do usuário.
* **PASSWDI:** Senha inserida pelo administrador.
* **USRTYPEI:** Tipo de Usuário (por exemplo, Administrador, Usuário Padrão).
* **WS-MESSAGE:**  Uma variável usada para exibir mensagens ao administrador.
* **ERRMSGO:** Uma variável usada para exibir mensagens de erro ao administrador.

**Métodos Principais:**

* **PROCESS-ENTER-KEY:** Lida com a entrada do administrador após pressionar a tecla Enter.
* **UPDATE-USER-INFO:** Valida a entrada do usuário e atualiza as informações do usuário no arquivo USRSEC.
* **RETURN-TO-PREV-SCREEN:** Retorna o administrador para a tela anterior.
* **SEND-USRUPD-SCREEN:**  Envia a tela de atualização do usuário (COUSR2A) para o terminal do administrador.
* **RECEIVE-USRUPD-SCREEN:**  Recebe dados da tela de atualização do usuário.
* **POPULATE-HEADER-INFO:** Preenche as informações do cabeçalho da tela.
* **READ-USER-SEC-FILE:** Lê as informações do usuário no arquivo USRSEC.
* **UPDATE-USER-SEC-FILE:** Atualiza as informações do usuário no arquivo USRSEC.
* **CLEAR-CURRENT-SCREEN:** Limpa a tela atual.
* **INITIALIZE-ALL-FIELDS:** Inicializa todos os campos de entrada na tela.

## Segurança

* **Controle de Acesso:** Somente administradores autorizados com privilégios de acesso apropriados podem acessar e modificar as informações do usuário.
* **Validação de Dados:** A validação de dados de entrada ajuda a evitar que dados ou comandos maliciosos sejam inseridos no sistema.

## Impacto em Outros Sistemas

* **Autenticação do Usuário:** Mudanças nas informações do usuário, especialmente senhas, podem afetar outras partes da aplicação CardDemo que dependem da autenticação do usuário.
* **Registro de Auditoria:** Embora não seja mencionado explicitamente, quaisquer alterações feitas nas informações do usuário devem ser registradas para fins de auditoria e segurança.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| SEC-USR-ID | String | Identificador único para cada usuário. |
| SEC-USR-FNAME | String | Nome do usuário. |
| SEC-USR-LNAME | String | Sobrenome do usuário. |
| SEC-USR-PWD | String | Senha do usuário para acesso ao sistema. |
| SEC-USR-TYPE | String | Define a função e as permissões do usuário dentro da aplicação. |

## Principais Referências

* **COUSR02A:**  O mapset BMS usado para a tela de atualização do usuário.
* **COUSR2AI:**  A estrutura de dados associada à tela de atualização do usuário.
* **COUSR2AO:** A estrutura de dados usada para enviar dados para a tela de atualização do usuário.
* **COCOM01Y:** Copybook contendo variáveis e estruturas de dados comuns.
* **COUSR02:** Copybook contendo estruturas de dados específicas para o programa COUSR02C.
* **COTTL01Y:** Copybook contendo informações de título e cabeçalho.
* **CSDAT01Y:** Copybook contendo variáveis e rotinas relacionadas à data.
* **CSMSG01Y:** Copybook contendo variáveis e rotinas relacionadas a mensagens.
* **CSUSR01Y:** Copybook contendo variáveis e estruturas de dados relacionadas ao usuário.
* **DFHAID:**  Área de dados relacionada ao sistema CICS.
* **DFHBMSCA:** Área de comunicação CICS para mapas BMS.


## Considerações Adicionais

* **Regras de Complexidade de Senha:** Implemente regras de complexidade de senha para aumentar a segurança do sistema. 
* **Criptografia de Senha:** Armazene as senhas com segurança usando criptografia para proteger os dados confidenciais do usuário.
* **Trilha de Auditoria:** Mantenha uma trilha de auditoria de todas as atualizações de usuário, incluindo quem fez as alterações, o que foi alterado e quando as alterações foram feitas.
* **Tratamento de Erros:** Implemente um tratamento de erros abrangente para gerenciar situações inesperadas com elegância e fornecer mensagens informativas ao administrador.

--Made by "Smart Engineering" (by Compass.UOL)--