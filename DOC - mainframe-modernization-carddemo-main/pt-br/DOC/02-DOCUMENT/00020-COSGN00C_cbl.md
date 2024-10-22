Gerado em: 1 de outubro de 2024

# Aplicativo CardDemo: Autenticação de Usuário Segura e Controle de Acesso

## Título

- Título do Documento: Aplicativo CardDemo - Especificação do Módulo de Autenticação

## Descrição resumida

Este documento descreve as especificações para o módulo de Autenticação (COSGN00C) dentro do aplicativo CardDemo, um sistema baseado em COBOL projetado para gerenciamento de cartão de crédito. O módulo garante a autenticação segura do usuário, validando as credenciais do usuário em relação aos dados armazenados. Após a verificação bem-sucedida, ele concede aos usuários acesso ao aplicativo com base em suas funções definidas, direcionando-os para as funcionalidades apropriadas.

## Histórico da Versão

- CardDemo_v1.0-15-g27d6c6f-68: Implementado redirecionamento baseado em função, medidas de segurança aprimoradas.

## Descrição do Processo

O módulo de Autenticação gerencia o acesso do usuário ao aplicativo CardDemo através das seguintes etapas:

1. **Exibir Tela de Autenticação:** O módulo apresenta uma tela solicitando que o usuário insira seu ID de Usuário e Senha.
2. **Capturar Entrada do Usuário:** O sistema captura o ID de Usuário e a Senha inseridos pelo usuário.
3. **Validar Credenciais do Usuário:** Ele verifica se o ID de Usuário inserido existe no sistema. Se encontrado, ele compara a Senha inserida com a Senha criptografada armazenada para aquele ID de Usuário.
4. **Determinar o Tipo de Usuário:** Após a validação bem-sucedida, o sistema identifica a função do usuário (por exemplo, Administrador ou Usuário Regular) a partir dos dados do usuário.
5. **Direcionar o Usuário para o Menu Apropriado:** Com base na função do usuário, o módulo redireciona o usuário para a parte relevante do aplicativo (por exemplo, menu do Administrador ou Menu Principal).

## Requisitos para Iniciar o Processo

1. **Ambiente CICS Ativo:** O módulo opera em um ambiente CICS para processamento de transações.
2. **Conjunto de Dados VSAM Disponível:** O acesso ao arquivo VSAM (USRSEC) que armazena as credenciais e funções do usuário é crucial.
3. **Entrada do Usuário:** O usuário precisa fornecer seu ID de Usuário e Senha.

## Validações e Regras

* **Validação de Dados:** O módulo valida a entrada do usuário para caracteres vazios ou inválidos nos campos ID de Usuário e Senha.
* **Autenticação:** Somente usuários com credenciais válidas (ID de Usuário correto e Senha correspondente) têm acesso concedido.
* **Autorização:** O acesso do usuário é restrito com base em sua função. Os administradores têm acesso às funções administrativas, enquanto os usuários regulares têm acesso limitado.

## Detalhes técnicos

**Programa Principal:**

* **`COSGN00C.cbl`:** O programa principal que lida com o processo de autenticação.

**Funções Principais:**

* **`PROCESS-ENTER-KEY`:** Processa a entrada do usuário na tela de autenticação, validando os dados inseridos e iniciando o processo de autenticação.
* **`READ-USER-SEC-FILE`:** Lê os dados do usuário do arquivo VSAM (USRSEC) com base no ID de Usuário inserido. 
* **`SEND-SIGNON-SCREEN`:** Exibe a tela de autenticação para o usuário.
* **`SEND-PLAIN-TEXT`:** Exibe mensagens para o usuário.
* **`POPULATE-HEADER-INFO`:** Preenche as informações do cabeçalho nas telas, incluindo detalhes do aplicativo, data e hora. 

**Variáveis:**

* **`WS-USER-ID`:** Armazena o ID de Usuário inserido.
* **`WS-USER-PWD`:** Armazena a Senha inserida.
* **`SEC-USR-PWD`:** Recupera a Senha armazenada para o Usuário do arquivo VSAM.
* **`SEC-USR-TYPE`:** Recupera o tipo de usuário (por exemplo, 'ADMIN' ou 'USER') do arquivo VSAM.

## Segurança

* **Autenticação:** O módulo realiza a autenticação do usuário comparando a Senha inserida com a Senha armazenada para o ID de Usuário correspondente.
* **Armazenamento de Senha:** As senhas são armazenadas com segurança no arquivo VSAM. No entanto, o método de criptografia ou hash usado para armazenamento de senha não é especificado no código fornecido.
* **Controle de Acesso:** O controle de acesso baseado em função é implementado, limitando o acesso do usuário a funções específicas com base em suas funções definidas.

## Impacto em Outros Sistemas

* **Módulos CardDemo:** O módulo de autenticação é crucial para todos os outros módulos dentro do aplicativo CardDemo, pois controla o acesso e a autorização do usuário.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| WS-USER-ID | Alfanumérico (PIC X(08)) | Armazena o ID de Usuário inserido pelo usuário durante a autenticação. |
| WS-USER-PWD | Alfanumérico (PIC X(08)) | Armazena a Senha inserida pelo usuário durante a autenticação. |
| SEC-USER-DATA | Item de Grupo | Representa o registro do usuário recuperado do arquivo VSAM (USRSEC), contendo detalhes do usuário como ID de Usuário, Senha e Tipo de Usuário. |
| SEC-USR-PWD | Alfanumérico (PIC X(08)) | Parte de SEC-USER-DATA, armazena a Senha criptografada para o usuário. |
| SEC-USR-TYPE | Alfanumérico (PIC X(01)) | Parte de SEC-USER-DATA, armazena o tipo de usuário (por exemplo, 'A' para Administrador, 'U' para Usuário Regular). |
| CDEMO-USER-ID | Alfanumérico (PIC X(08)) | Armazena o ID de Usuário na área de comunicação (COMMAREA) para uso por outros módulos dentro do aplicativo. |
| CDEMO-USER-TYPE | Alfanumérico (PIC X(01)) | Armazena o tipo de usuário na área de comunicação (COMMAREA) para uso por outros módulos. |

## Referências Principais

* **`USRSEC` (Arquivo VSAM):** Armazena as credenciais do usuário (ID de Usuário, Senha) e o tipo de usuário (função).
* **`COSGN00` (Copybook):** Contém estruturas de dados para a tela de autenticação.
* **`CSUSR01Y` (Copybook):** Contém estruturas de dados relacionadas às informações do usuário.
* **`COCOM01Y` (Copybook):** Provavelmente contém estruturas de dados comuns e variáveis usadas em todo o aplicativo CardDemo.

**Considerações Adicionais:**

* **Complexidade da Senha:** Imponha políticas de senha forte, exigindo que os usuários definam senhas complexas.
* **Gerenciamento de Sessão:** Implemente o gerenciamento de sessão seguro para rastrear as sessões do usuário e impedir o acesso não autorizado.
* **Log de Auditoria:** Registre todas as tentativas de autenticação, bem-sucedidas e malsucedidas, para auditoria e monitoramento de segurança.
* **Tratamento de Erros:** Forneça mensagens de erro específicas ao usuário para IDs de usuário, senhas incorretas ou tentativas de acesso não autorizado.
* **Autenticação Multifator (MFA):** Considere implementar MFA para uma camada adicional de segurança.

--Made by "Smart Engineering" (by Compass.UOL)--