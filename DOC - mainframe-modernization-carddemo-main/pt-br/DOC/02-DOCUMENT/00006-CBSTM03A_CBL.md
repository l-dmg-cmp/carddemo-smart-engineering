Gerado em: 1º de outubro de 2024

# Geração de Extrato de Conta CardDemo

## Título

- Título do Documento: CardDemo Geração de Extrato de Conta - Especificação do Programa

## Arquivo

- Arquivo: \src\CBSTM03A.CBL

## Descrição Resumida

Este documento descreve as especificações para o programa de Geração de Extrato de Conta CardDemo (CBSTM03A.CBL). Este programa é um processo em lote responsável por gerar extratos de conta para portadores de cartão de crédito. O programa recupera dados do cliente, da conta e de transações de várias fontes, calcula as despesas totais e produz extratos em dois formatos: texto simples (extrato bancário tradicional) e HTML (para visualização online).

## Histórico de Versões

- Versão 1.0: Versão Inicial

## Descrição do Processo

O programa de Geração de Extrato de Conta executa as seguintes etapas:

1. **Coleta de Dados:** Coleta dados do cliente, detalhes da conta e histórico de transações de fontes de dados separadas com base no número da conta.
2. **Organização e Formatação de Dados:** Estrutura os dados coletados em um formato claro e legível, preparando-os para apresentação no extrato.
3. **Processamento de Transações:** Lista as transações individuais em ordem cronológica, incluindo detalhes como data, descrição e valor.
4. **Cálculo da Despesa Total:** Calcula as despesas totais incorridas pelo titular da conta durante o período do extrato.
5. **Geração de Extrato:** Produz duas versões do extrato: texto simples e HTML.

## Requisitos para Iniciar o Processo

1. **Arquivo de Transações (TRNXFILE):** Este arquivo contém registros de transações para todos os clientes.
2. **Arquivo de Referência Cruzada (XREFFILE):** Este arquivo vincula IDs de clientes, IDs de contas e números de cartão de crédito.
3. **Arquivo do Cliente (CUSTFILE):** Este arquivo armazena informações do cliente, como nomes, endereços e pontuações de crédito.
4. **Arquivo de Conta (ACCTFILE):** Este arquivo contém dados específicos da conta, como IDs de conta e saldos atuais.

## Validações e Regras

* **Integridade de Dados:** Garante a consistência dos dados em diferentes fontes, como a correspondência de transações com as contas e clientes corretos.
* **Clareza e Transparência:** Apresenta informações em um formato fácil de entender para fornecer uma visão geral clara da atividade da conta.
* **Flexibilidade:** Atende a diferentes preferências de entrega, gerando extratos em formato de texto simples e HTML.
* **Confidencialidade:** Embora não seja explicitamente definido, o sistema deve incorporar medidas de segurança para proteger dados financeiros confidenciais.

## Detalhes Técnicos

**Programa Principal:**

* **`CBSTM03A`:** O principal programa COBOL responsável por orquestrar o processo de geração do extrato da conta.

**Sub-rotinas:**

* **`CBSTM03B`:** Uma sub-rotina utilitária usada para operações de E/S de arquivo, como abrir, ler e fechar arquivos.

**Estruturas de Dados:**

* **`STATEMENT-LINES`:** Define a estrutura e o layout do extrato de texto simples.
* **`HTML-LINES`:** Define a estrutura e o layout do extrato HTML.
* **`WS-TRNX-TABLE`:** Uma tabela bidimensional usada para armazenar e organizar dados de transações recuperados do arquivo de transações.

**Variáveis:**

* **`WS-FL-DD`:** Mantém o código do arquivo indicando o arquivo atual sendo processado.
* **`WS-SAVE-CARD`:** Armazena o número do cartão de crédito do cliente atual sendo processado.
* **`CR-CNT`:** Conta o número de registros de cartão de crédito processados.
* **`TR-CNT`:** Conta o número de transações processadas para um cartão específico.
* **`WS-TOTAL-AMT`:** Acumula o valor total da transação para o extrato atual.

**Métodos:**

* **`1000-XREFFILE-GET-NEXT`:** Recupera o próximo registro do arquivo de referência cruzada.
* **`2000-CUSTFILE-GET`:** Recupera o registro do cliente com base no ID do cliente.
* **`3000-ACCTFILE-GET`:** Recupera o registro da conta com base no ID da conta.
* **`4000-TRNXFILE-GET`:** Recupera e processa transações para um cartão de crédito específico.
* **`5000-CREATE-STATEMENT`:** Inicializa e preenche as estruturas de dados do extrato.
* **`6000-WRITE-TRANS`:** Grava os detalhes da transação individual no extrato.
* **`8100-FILE-OPEN`:** Abre os arquivos necessários (TRNXFILE, XREFFILE, CUSTFILE, ACCTFILE).
* **`9100-TRNXFILE-CLOSE`** a **`9400-ACCTFILE-CLOSE`:** Fecha os arquivos abertos.

## Impacto em Outros Sistemas

* **Sistema de Impressão:** Os extratos de texto simples gerados podem ser enviados para um sistema de impressão para distribuição de mala direta física.
* **Sistema de Banco Online:** Os extratos HTML gerados podem ser fornecidos como entrada para o sistema de banco online para acesso online pelos clientes.
* **Sistemas de Relatórios:** Os dados de transações processados pelo programa podem ser usados por sistemas de relatórios para gerar vários relatórios de negócios.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `CARD-XREF-RECORD` | Registro | Contém informações de referência cruzada (ID do cliente, ID da conta, número do cartão). |
| `CUSTOMER-RECORD` | Registro | Contém informações do cliente (nome, endereço, pontuação de crédito). |
| `ACCOUNT-RECORD` | Registro | Contém detalhes da conta (ID da conta, saldo atual). |
| `TRNX-RECORD` | Registro | Representa um registro de transação (número do cartão, ID da transação, detalhes, valor). |

## Referências Principais

* **`CBSTM03B`:** Sub-rotina para operações de E/S de arquivo.
* **`COSTM01`, `CVACT03Y`, `CUSTREC`, `CVACT01Y`:** Copybooks COBOL contendo estruturas de dados e definições.

**Considerações Adicionais:**

* **Tratamento de Erros:** Implemente o tratamento de erros abrangente para gerenciar erros de arquivo, inconsistências de dados e outras situações inesperadas.
* **Otimização de Desempenho:** Otimize o programa para processamento eficiente de grandes volumes de transações, potencialmente usando técnicas como classificação e indexação.
* **Segurança:** Implemente medidas de segurança adequadas para restringir o acesso a dados confidenciais e garantir a confidencialidade dos dados.

--Made by "Smart Engineering" (by Compass.UOL)--