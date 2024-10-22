Gerado em: 1º de outubro de 2024

## Revisão de Análise Técnica

**Arquivo:**  COACTUPC.cbl

**Título:**  Programa de Atualização de Conta

**Resumo:** 

O programa COACTUPC é um programa COBOL que fornece uma interface CICS para atualizar informações de contas de clientes. Ele interage com os arquivos Account Master, Customer Master e Card Data. O programa permite que os usuários pesquisem uma conta, visualizem seus detalhes, façam alterações e confirmem essas alterações no banco de dados. O programa executa várias validações de dados para garantir a integridade dos dados.

**Tecnologia:**

* **Linguagem de Programação:** COBOL
* **Framework/Biblioteca:**  CICS
* **Banco de dados:** Os arquivos VSAM (Virtual Storage Access Method) estão implícitos nos comandos CICS READ, que são comumente usados para acessar conjuntos de dados VSAM.
* **Outras Ferramentas:** `Not available`

**Referência, Classe e Método:**

| Reference | Descrição |
|---|---|
| `CSUTLDWY` | Variáveis de edição de data genérica CCYYMMDD. |
| `CVCRD01Y` | Variáveis de área de trabalho comuns. |
| `CSLKPCDY` | Códigos de área de telefone da América do Norte. |
| `DFHBMSCA` | Copybook fornecido pela IBM para macros BMS. |
| `DFHAID` | Copybook fornecido pela IBM para definir campos AID (Attention Identifier). |
| `COTTL01Y` | Títulos de tela. |
| `COACTUP` | Layout da tela de atualização da conta. |
| `CSDAT01Y` | Data atual. |
| `CSMSG01Y` | Mensagens comuns. |
| `CSMSG02Y` | Variáveis Abend. |
| `CSUSR01Y` | Dados do usuário conectado. |
| `CVACT01Y` | LAYOUT DO REGISTRO ACCT. |
| `CVACT03Y` | LAYOUT DE REFERÊNCIA CRUZADA DO CARTÃO. |
| `CVCUS01Y` | LAYOUT DO CLIENTE. |
| `COCOM01Y` | Copybook da Commarea do aplicativo. |
| `CSSTRPFY` | Código comum para armazenar PFKey. |
| `CSUTLDPY` | Rotinas comuns de data. |


| Classe | Descrição |
|---|---|
| `Not available` |  |

| Método(Público) | Descrição |
|---|---|
| `Not available` |  |

| Método(Privado) | Descrição |
|---|---|
| `0000-MAIN` | Procedimento principal do programa. Manipula a inicialização do programa, processamento de entrada, tomada de decisão e término do programa. |
| `COMMON-RETURN` | Ponto de retorno comum para o programa. Move dados para a commarea e emite um comando CICS RETURN. |
| `0000-MAIN-EXIT` | Ponto de saída para o procedimento principal. |
| `1000-PROCESS-INPUTS` |  Processa entradas do usuário a partir do mapa. |
| `1100-RECEIVE-MAP` | Recebe entrada do usuário a partir do mapa. |
| `1200-EDIT-MAP-INPUTS` | Edita e valida a entrada do usuário recebida do mapa. |
| `1205-COMPARE-OLD-NEW` | Compara os valores antigos e novos dos dados da conta e do cliente para determinar se alguma alteração foi feita. |
| `1210-EDIT-ACCOUNT` | Valida o número da conta inserido pelo usuário. |
| `1215-EDIT-MANDATORY` | Verifica se um campo obrigatório foi fornecido. |
| `1220-EDIT-YESNO` | Valida um campo Sim/Não. |
| `1225-EDIT-ALPHA-REQD` | Valida um campo alfabético obrigatório. |
| `1230-EDIT-ALPHANUM-REQD` | Valida um campo alfanumérico obrigatório. |
| `1235-EDIT-ALPHA-OPT` | Valida um campo alfabético opcional. |
| `1240-EDIT-ALPHANUM-OPT` | Valida um campo alfanumérico opcional. |
| `1245-EDIT-NUM-REQD` | Valida um campo numérico obrigatório. |
| `1250-EDIT-SIGNED-9V2` | Valida um campo numérico assinado com 2 casas decimais. |
| `1260-EDIT-US-PHONE-NUM` | Valida um número de telefone dos EUA. |
| `EDIT-AREA-CODE` | Edita e valida a parte do código de área de um número de telefone dos EUA. |
| `EDIT-US-PHONE-PREFIX` | Edita e valida a parte do prefixo (troca) de um número de telefone dos EUA. |
| `EDIT-US-PHONE-LINENUM` | Edita e valida a parte do número da linha de um número de telefone dos EUA. |
| `EDIT-US-PHONE-EXIT` | Ponto de saída para a rotina de edição de número de telefone dos EUA. |
| `1265-EDIT-US-SSN` | Valida um número de Seguro Social dos EUA. |
| `1270-EDIT-US-STATE-CD` | Valida um código de estado dos EUA. |
| `1275-EDIT-FICO-SCORE` | Valida uma pontuação de crédito FICO. |
| `1280-EDIT-US-STATE-ZIP-CD` | Executa uma validação básica da combinação de código de estado e CEP dos EUA. |
| `2000-DECIDE-ACTION` | Determina a ação apropriada a ser tomada com base na entrada do usuário e no estado do programa. |
| `3000-SEND-MAP` | Envia o mapa para o terminal do usuário. |
| `3100-SCREEN-INIT` | Inicializa a tela com os valores padrão e informações do programa. |
| `3200-SETUP-SCREEN-VARS` | Configura as variáveis de tela com base no estado do programa e na entrada do usuário. |
| `3201-SHOW-INITIAL-VALUES` | Define os valores iniciais para os campos da tela. |
| `3202-SHOW-ORIGINAL-VALUES` | Exibe os valores originais dos dados da conta e do cliente na tela. |
| `3203-SHOW-UPDATED-VALUES` | Exibe os valores atualizados dos dados da conta e do cliente na tela. |
| `3250-SETUP-INFOMSG` | Configura a mensagem de informação a ser exibida ao usuário. |
| `3300-SETUP-SCREEN-ATTRS` | Configura os atributos da tela, incluindo proteção de campo e cor. |
| `3310-PROTECT-ALL-ATTRS` | Protege todos os campos na tela. |
| `3320-UNPROTECT-FEW-ATTRS` | Desprotege campos específicos na tela com base no estado do programa. |
| `3390-SETUP-INFOMSG-ATTRS` | Configura os atributos para o campo de mensagem de informação. |
| `3400-SEND-SCREEN` | Envia o mapa para o terminal do usuário. |
| `9000-READ-ACCT` | Lê os dados da conta com base no número da conta. |
| `9200-GETCARDXREF-BYACCT` | Lê o arquivo Card Cross Reference por número de conta. |
| `9300-GETACCTDATA-BYACCT` | Lê os dados da conta do arquivo Account Master por número de conta. |
| `9400-GETCUSTDATA-BYCUST` | Lê os dados do cliente do arquivo Customer Master por ID do cliente. |
| `9500-STORE-FETCHED-DATA` | Armazena os dados da conta e do cliente buscados na commarea. |
| `9600-WRITE-PROCESSING` | Manipula o processo de atualização para dados de conta e cliente. |
| `9700-CHECK-CHANGE-IN-REC` | Verifica se o registro da conta ou do cliente foi alterado por outro usuário desde que foi lido pela última vez. |
| `ABEND-ROUTINE` | Manipula os abends do programa (terminações anormais). |
| `EDIT-DATE-CCYYMMDD` | Edita uma data no formato CCYYMMDD. |
| `EDIT-DATE-OF-BIRTH` | Edita uma data de nascimento. |

--Made by "Smart Engineering" (by Compass.UOL)--