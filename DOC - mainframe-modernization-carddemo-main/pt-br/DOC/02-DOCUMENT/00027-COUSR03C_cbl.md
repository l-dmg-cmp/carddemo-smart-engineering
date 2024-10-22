Gerado em: 1º de outubro de 2024

# Gerenciamento de Usuários do CardDemo - Exclusão de Usuário

## Título do Documento: Especificação de Exclusão de Usuário do Gerenciamento de Usuários do CardDemo

## Descrição Resumida

Este documento descreve as especificações para a funcionalidade "Excluir Usuário" dentro do aplicativo CardDemo, um sistema baseado em COBOL projetado para gerenciar operações de cartão de crédito. Essa funcionalidade permite que usuários autorizados, provavelmente administradores, removam contas de usuário do sistema, aderindo a regras de negócios essenciais para segurança e integridade de dados.

## Histórico de Versões

- Versão 1.0: Versão inicial - Exclusão de usuário com validação básica e confirmação.

## Descrição do Processo

O processo de Exclusão de Usuário permite a remoção do acesso e das informações de um usuário do sistema CardDemo. O processo envolve as seguintes etapas:

1. **Identificação do Usuário:** Um usuário autorizado inicia o processo de exclusão fornecendo o ID de Usuário da conta a ser excluída.
2. **Verificação de Confirmação:** O sistema recupera e exibe os detalhes do usuário com base no ID de Usuário inserido. Esta etapa permite que o administrador confirme se está excluindo a conta correta, garantindo a integridade dos dados.
3. **Execução da Exclusão:** Após a confirmação, geralmente pressionando uma tecla de função designada, o sistema remove o registro do usuário do arquivo 'USRSEC', que provavelmente armazena credenciais e informações do usuário.
4. **Comunicação de Resultados:** O sistema fornece feedback ao administrador, confirmando a exclusão bem-sucedida ou exibindo uma mensagem de erro se ocorrer algum problema durante o processo.

## Requisitos para Iniciar o Processo

1. **Usuário autorizado:** Somente pessoal autorizado, como administradores, com os privilégios necessários podem acessar e executar a funcionalidade de exclusão de usuário.
2. **ID de usuário válido:** Um ID de usuário válido da conta a ser excluída deve ser fornecido.
3. **Confirmação:** O sistema requer confirmação explícita do administrador para prosseguir com a exclusão, mitigando o risco de exclusões acidentais.

## Validações e Regras

* **Autorização:** Somente usuários autenticados com funções e permissões apropriadas podem excluir contas de usuário, garantindo a segurança do sistema.
* **Validação de ID de Usuário:** O sistema verifica a validade do ID de Usuário inserido. A exclusão prossegue somente se o ID de Usuário existir no arquivo 'USRSEC'.
* **Requisito de Confirmação:** O sistema exige a confirmação do usuário antes de executar a exclusão para evitar perda não intencional de dados.
* **Tratamento de Erros:** O sistema incorpora mecanismos de tratamento de erros para gerenciar e comunicar quaisquer problemas encontrados durante o processo de exclusão, como um ID de Usuário inválido ou problemas para acessar o arquivo 'USRSEC'.

## Detalhes técnicos

**Programas Principais:**

* **`COUSR03C`:** Este programa lida com o processo de exclusão de usuário no aplicativo CardDemo.

**Funções/Métodos Principais:**

* **`PROCESS-ENTER-KEY`:** Esta função valida o ID de Usuário inserido e recupera as informações do usuário do arquivo 'USRSEC'.
* **`DELETE-USER-INFO`:** Esta função lida com a exclusão do registro do usuário do arquivo 'USRSEC'.
* **`READ-USER-SEC-FILE`:** Esta função lê os dados do usuário do arquivo 'USRSEC' com base no ID de Usuário fornecido.
* **`DELETE-USER-SEC-FILE`:** Esta função executa a exclusão do registro do usuário do arquivo 'USRSEC'.

**Variáveis:**

* **`USRIDINI`:** Uma string que representa o ID de Usuário inserido pelo administrador.
* **`SEC-USER-DATA`:** Uma estrutura de dados contendo informações do usuário lidas do arquivo 'USRSEC'.
* **`WS-USRSEC-FILE`:** Uma variável de string que armazena o nome do arquivo 'USRSEC', provavelmente 'USRSEC'.

## Segurança

* **Autorização:** A funcionalidade de exclusão de usuário é restrita a usuários autenticados com funções e permissões específicas. Essa restrição é crucial para evitar acesso não autorizado e ações dentro do sistema. Embora o mecanismo de autorização específico não seja detalhado no código fornecido, presume-se que faça parte da estrutura de segurança mais ampla do CardDemo, potencialmente gerenciada por meio de recursos de segurança CICS.

## Impacto em Outros Sistemas

* **Autenticação de Usuário:** Excluir um usuário do arquivo 'USRSEC' impacta diretamente na autenticação do usuário. O usuário excluído não pode mais fazer login no aplicativo CardDemo, pois suas credenciais são removidas do sistema.
* **Auditoria e Relatórios:** O processo de exclusão do usuário deve ser registrado para trilhas de auditoria. Isso garante a responsabilidade e a rastreabilidade das ações dentro do aplicativo CardDemo.

## Modelos

| Campo de Nome      | Tipo   | Descrição                                      |
|-------------------|--------|--------------------------------------------------|
| `SEC-USR-ID`     | String | ID de Usuário para identificar um usuário no sistema. |
| `SEC-USR-FNAME`  | String | Primeiro Nome do Usuário.                             |
| `SEC-USR-LNAME`  | String | Sobrenome do Usuário.                              |
| `SEC-USR-TYPE`   | String | Tipo de Usuário (por exemplo, Administrador, Usuário).       |

## Principais Referências

* **Arquivo `USRSEC`:** O arquivo de dados primário contendo informações do usuário, incluindo credenciais e detalhes.
* **CICS (Customer Information Control System):** O sistema de processamento de transações usado pelo CardDemo. Ele provavelmente lida com autenticação e autorização de usuários.

**Considerações Adicionais:**

* **Política de Retenção de Dados:** Considere implementar um sinalizador de 'desativação' em vez de exclusão permanente para cumprir as políticas de retenção de dados. Uma conta de usuário desativada se torna inutilizável, mas seus dados são retidos no sistema.
* **Trilha de Auditoria:** Implemente uma trilha de auditoria abrangente para registrar eventos de exclusão de usuário, incluindo o usuário que está realizando a exclusão, o ID do usuário excluído e a data e hora. Este log aumenta a segurança e fornece um histórico de auditoria para rastrear ações dentro do sistema.
* **Mensagem de Confirmação:** Aprimore a mensagem de confirmação para exibir claramente as consequências da exclusão de uma conta de usuário, como irreversibilidade e impacto em outras funcionalidades. Isso fornece um ponto de verificação final para o administrador e minimiza o risco de exclusões acidentais.

--Made by "Smart Engineering" (by Compass.UOL)--