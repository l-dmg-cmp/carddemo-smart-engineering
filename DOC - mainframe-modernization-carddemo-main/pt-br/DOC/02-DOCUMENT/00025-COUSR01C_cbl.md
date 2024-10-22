Gerado em: 1 de outubro de 2024

# **CardDemo Sistema de Gerenciamento de Usuários**

## Título

- Título do Documento: CardDemo Sistema de Gerenciamento de Usuários - Especificação para Adicionar Novo Usuário

## Arquivo

- \CardDemo Application\Main Programs\COUSR01C.cbl

## Descrição resumida

Este documento descreve as especificações para a funcionalidade "Adicionar Novo Usuário" dentro do Sistema de Gerenciamento de Usuários CardDemo. Esta funcionalidade permite que os administradores criem novas contas de usuário no sistema. O programa garante a integridade dos dados validando as entradas do usuário e aplicando regras de negócios, incluindo campos obrigatórios e IDs de usuário exclusivos.

## Histórico da Versão

- CardDemo_v1.0-15-g27d6c6f-68: Atualização de Gerenciamento de Usuários

## Descrição do Processo

O processo "Adicionar Novo Usuário" permite a adição de novos usuários ao sistema CardDemo com as seguintes etapas:

1.  **Acessar a Tela de Adicionar Usuário:** O administrador navega até a tela "Adicionar Usuário".
2.  **Inserir Dados do Usuário:** O administrador insere as informações do novo usuário, incluindo Nome, Sobrenome, ID do Usuário, Senha e Tipo de Usuário (Regular ou Administrador).
3.  **Enviar Dados do Usuário:** O administrador envia os dados inseridos.
4.  **Validação de Dados:** O sistema valida os dados de entrada, garantindo que todos os campos obrigatórios sejam preenchidos e que o ID de Usuário escolhido seja exclusivo.
5.  **Salvar Dados do Usuário:** Se a validação for bem-sucedida, o sistema salva as informações do novo usuário no arquivo USRSEC (banco de dados de usuários).
6.  **Mensagem de Confirmação:** O sistema exibe uma mensagem de confirmação ao administrador, indicando a criação bem-sucedida do usuário.
7.  **Limpar Campos de Entrada:** O sistema limpa os campos de entrada, preparando a tela para que outro usuário seja adicionado.

## Requisitos para Iniciar o Processo

1.  **Acesso de Administrador:** O usuário que inicia o processo deve ter privilégios de administrador.
2.  **Acesso à Tela Adicionar Usuário:** O administrador deve ser capaz de navegar até a tela "Adicionar Usuário" dentro do aplicativo CardDemo.

## Validações e Regras

*   **Campos Obrigatórios:** Nome, Sobrenome, ID do Usuário, Senha e Tipo de Usuário são campos obrigatórios. O sistema não prosseguirá sem que esses campos sejam preenchidos.
*   **ID de Usuário Exclusivo:** Cada ID de Usuário deve ser exclusivo. Tentativas de criar um usuário com um ID de Usuário existente serão rejeitadas.
*   **Funções do Usuário:** O sistema reconhece duas funções de usuário: "Regular" e "Administrador". O administrador atribui uma dessas funções ao novo usuário durante a criação da conta.

## Detalhes técnicos

**Programa Principal:**

*   **COUSR01C.cbl:** O programa principal responsável por lidar com a funcionalidade "Adicionar Novo Usuário".

**Estruturas de Dados/Copybooks:**

*   **COUSR1AO:** Define os campos de saída exibidos na tela "Adicionar Usuário".
*   **COUSR1AI:** Define os campos de entrada recebidos da tela "Adicionar Usuário".
*   **COCOM01Y:** Contém variáveis e constantes comuns.
*   **COUSR01:** Contém estruturas de dados específicas para gerenciamento de usuários.
*   **COTTL01Y:** Contém definições para títulos e rótulos.
*   **CSDAT01Y:** Contém variáveis e rotinas relacionadas à data.
*   **CSMSG01Y:** Contém variáveis e rotinas relacionadas a mensagens.
*   **CSUSR01Y:** Contém variáveis e rotinas relacionadas ao usuário.

**Arquivos:**

*   **USRSEC:** O arquivo de banco de dados do usuário contendo informações do usuário, incluindo ID do Usuário, senha e tipo de usuário.

**Variáveis:**

*   **WS-USRSEC-FILE:** Contém o nome do arquivo 'USRSEC' para acessar o banco de dados do usuário.
*   **SEC-USR-ID:** Armazena o ID do Usuário inserido pelo administrador.
*   **SEC-USR-FNAME:** Armazena o Nome inserido pelo administrador.
*   **SEC-USR-LNAME:** Armazena o Sobrenome inserido pelo administrador.
*   **SEC-USR-PWD:** Armazena a Senha inserida pelo administrador.
*   **SEC-USR-TYPE:** Armazena o Tipo de Usuário selecionado pelo administrador.

**Métodos:**

*   **WRITE-USER-SEC-FILE:** Grava os dados do novo usuário no arquivo USRSEC.
*   **INITIALIZE-ALL-FIELDS:** Limpa os campos de entrada na tela "Adicionar Usuário".

## Segurança

*   **Controle de Acesso:** Somente administradores têm acesso à funcionalidade "Adicionar Novo Usuário".
*   **Gerenciamento de Senha:** Embora o programa capture a senha inserida pelo administrador, é crucial implementar práticas seguras de armazenamento e gerenciamento de senha para proteger as credenciais do usuário.

## Impacto em Outros Sistemas

*   **Autenticação do Usuário:** A criação bem-sucedida de um novo usuário no USRSEC permite que o usuário faça login no sistema CardDemo e acesse as funcionalidades autorizadas.
*   **Auditoria:** O sistema deve registrar todos os eventos de criação de usuário para fins de auditoria e segurança.

## Modelos

| Campo de Nome  | Tipo | Descrição                      |
| :------------ | :---- | :------------------------------- |
| SEC-USR-ID   | X(XX) | Identificador exclusivo do usuário |
| SEC-USR-FNAME  | X(XX) | Nome do usuário                |
| SEC-USR-LNAME  | X(XX) | Sobrenome do usuário             |
| SEC-USR-PWD    | X(XX) | Senha do usuário               |
| SEC-USR-TYPE | X(XX) | Função do usuário (Regular ou Administrador) |

## Principais Referências

*   **Arquivo USRSEC:** O armazenamento de dados primário para informações do usuário.
*   **Copybook COUSR01:** Contém estruturas de dados específicas para gerenciamento de usuários.
*   **Copybook CSUSR01Y:** Contém variáveis e rotinas relacionadas ao usuário.
*   **Diretrizes de Segurança do Aplicativo CardDemo:** Consulte estas diretrizes para obter informações sobre práticas seguras de armazenamento e gerenciamento de senha.

**Considerações Adicionais:**

*   **Regras de Complexidade de Senha:** Implemente regras de complexidade de senha para aumentar a segurança.
*   **Tratamento de Erros:** Aprimore o tratamento de erros para fornecer mensagens mais amigáveis e registro para depuração.
*   **Internacionalização:** Considere o suporte a vários idiomas para nomes de usuário e mensagens se o aplicativo exigir.
*   **Acessibilidade:** Projete a tela "Adicionar Novo Usuário" seguindo as diretrizes de acessibilidade para acomodar usuários com deficiência.

**Observação:** Esta especificação é baseada no trecho de código fornecido e assume certas funcionalidades e estruturas de dados com base em práticas comuns de programação COBOL. Pode ser necessário um refinamento adicional com base na documentação e nos requisitos completos do sistema CardDemo.

--Made by "Smart Engineering" (by Compass.UOL)--