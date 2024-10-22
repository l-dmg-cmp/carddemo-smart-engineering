Gerado em: 1º de outubro de 2024

# Menu de Gerenciamento de Usuários do CardDemo

## Título

- Título do Documento: CardDemo Application - Especificação do Menu Administrativo de Gerenciamento de Usuários

## Descrição resumida

Este documento descreve as especificações para o menu administrativo "User Management" (Gerenciamento de Usuários) dentro da aplicação CardDemo. Este menu é um componente crítico da estrutura de segurança do sistema, fornecendo ao pessoal autorizado ferramentas para gerenciar contas de usuário e suas permissões associadas.

## Histórico de Versões

- CardDemo_v1.0-26-g42273c1-79: Implementação inicial do menu User Management.

## Descrição do Processo

O menu "User Management" dentro da aplicação CardDemo apresenta um conjunto de opções para os administradores gerenciarem o acesso do usuário:

1. **User List (Lista de Usuários):** Exibe uma lista abrangente de todos os usuários registrados no sistema. Esta lista provavelmente inclui nomes de usuários e, potencialmente, outros detalhes como IDs de usuário ou níveis de acesso.
2. **User Add (Adicionar Usuário):** Permite a criação de novas contas de usuário. Os administradores inserem os detalhes necessários para o novo usuário, incluindo um nome de usuário exclusivo, senha e atribuição de níveis de acesso apropriados.
3. **User Update (Atualizar Usuário):** Facilita a modificação de informações existentes do usuário. Isso pode envolver a redefinição de senhas, atualização de detalhes do usuário ou modificação de permissões de acesso.
4. **User Delete (Excluir Usuário):** Permite a remoção de contas de usuário do sistema. Esta ação geralmente é realizada quando um usuário não está mais ativo ou seu acesso precisa ser revogado.

## Requisitos para Iniciar o Processo

1. **Administrator Access (Acesso de Administrador):** Somente pessoal autorizado com privilégios administrativos tem permissão para acessar e usar o menu "User Management".
2. **Active CardDemo System (Sistema CardDemo Ativo):** A aplicação CardDemo precisa estar operacional e em execução no sistema mainframe.

## Validações e Regras

* **Access Control (Controle de Acesso):** Mecanismos rigorosos de controle de acesso são cruciais. Somente administradores autenticados e autorizados devem ser capazes de visualizar, modificar ou excluir contas de usuário.
* **Data Validation (Validação de Dados):** Ao adicionar ou atualizar usuários, o sistema deve impor regras de validação de dados. Isso inclui verificações de nomes de usuário exclusivos, requisitos de senha forte e formatos de dados válidos para outros atributos do usuário.
* **Confirmation Before Deletion (Confirmação Antes da Exclusão):** O sistema deve solicitar confirmação antes de excluir uma conta de usuário para evitar exclusões acidentais.

## Detalhes Técnicos

**Main Program (Programa Principal):** COADM02Y (Este programa define o layout e as opções dentro do menu "User Management")

**Subprograms (Subprogramas):**

* **COUSR00C (User List):** Este programa recupera e exibe a lista de todos os usuários.
* **COUSR01C (User Add):** Este programa lida com a criação de novas contas de usuário.
* **COUSR02C (User Update):** Este programa gerencia a modificação de detalhes existentes do usuário.
* **COUSR03C (User Delete):** Este programa lida com a exclusão de contas de usuário.

**Variables/Data Structures (Variáveis/Estruturas de Dados):**

* **CDEMO-ADMIN-OPT-COUNT:** Uma variável que armazena o número total de opções disponíveis no menu (neste caso, 4).
* **CDEMO-ADMIN-OPTIONS-DATA:** Uma estrutura de dados que contém os detalhes para cada opção do menu, incluindo:
    * **CDEMO-ADMIN-OPT-NUM:** Um número sequencial identificando cada opção do menu (1, 2, 3, 4).
    * **CDEMO-ADMIN-OPT-NAME:** Um nome descritivo para a opção do menu (por exemplo, "User List (Security)").
    * **CDEMO-ADMIN-OPT-PGMNAME:** O nome do subprograma COBOL associado a cada opção do menu (por exemplo, COUSR00C).

## Segurança

* **Authorization (Autorização):** O menu em si e cada uma de suas funcionalidades devem ter verificações de autorização robustas para garantir que somente usuários com as permissões necessárias possam acessar e realizar ações.
* **Secure Storage (Armazenamento Seguro):** As credenciais do usuário (nomes de usuário, senhas) devem ser armazenadas com segurança, idealmente usando algoritmos de criptografia ou hashing para proteger contra acesso não autorizado.

## Impacto em Outros Sistemas

O menu "User Management" tem um impacto direto na segurança geral e integridade da aplicação CardDemo. Ao controlar o acesso do usuário, ele garante que somente pessoal autorizado possa realizar ações específicas e acessar dados confidenciais dentro do sistema.

## Modelos

| Nome do Campo | Tipo | Descrição |
|---|---|---|
| CDEMO-ADMIN-OPT-NUM | Numérico (9(02)) | Um identificador numérico exclusivo para cada opção de menu. |
| CDEMO-ADMIN-OPT-NAME | Alfanumérico (X(35)) | Um rótulo de texto descritivo exibido para cada opção de menu. |
| CDEMO-ADMIN-OPT-PGMNAME | Alfanumérico (X(08)) | O nome do programa COBOL associado a cada opção de menu. |

## Principais Referências

* COADM02Y copybook (define a estrutura e os dados para o menu User Management)
* COUSR00C (programa para listar usuários)
* COUSR01C (programa para adicionar novos usuários)
* COUSR02C (programa para atualizar informações do usuário)
* COUSR03C (programa para excluir usuários)

--Made by "Smart Engineering" (by Compass.UOL)--