Gerado em: 1º de outubro de 2024

# CardDemo Relatório de Detalhes de Transações de Cartão de Crédito

## Título

- Título do Documento: CardDemo Relatório de Detalhes de Transações de Cartão de Crédito - Especificação do Programa

## Arquivo

- Arquivo: \src\CBTRN03C.cbl

## Descrição Resumida

Este documento descreve as especificações para o programa CBTRN03C dentro do aplicativo CardDemo. Este programa COBOL em lote gera um relatório detalhado das transações de cartão de crédito, resumindo informações importantes para um período específico. 

## Histórico de Versões

- Versão 1.0: Versão inicial - CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022)

## Descrição do Processo

O programa CBTRN03C lê dados de transações de cartão de crédito de um arquivo sequencial (TRANSACT-FILE), recupera informações relacionadas de arquivos indexados (XREF-FILE, TRANTYPE-FILE, TRANCATG-FILE) e gera um relatório formatado (REPORT-FILE) resumindo as transações. 

Aqui está uma análise simplificada do processo:

1. **Inicialização:** O programa abre todos os arquivos necessários (dados de transação, dados de referência cruzada para contas, tipos de transação, categorias de transação, saída do relatório e parâmetros de data).
2. **Entrada do Intervalo de Datas:** Ele lê as datas de início e término do relatório de um arquivo separado (DATE-PARMS-FILE).
3. **Processamento de Transações:** O programa lê cada registro de transação e executa o seguinte:
   - **Recuperação de Dados:** Busca informações adicionais sobre a transação, como detalhes da conta, descrição do tipo de transação e descrição da categoria dos respectivos arquivos indexados.
   - **Agregação de Dados:** Calcula totais de página, totais de conta e um total geral para as transações processadas.
   - **Formatação do Relatório:**  Formata as informações recuperadas em um relatório estruturado, incluindo cabeçalhos, detalhes da transação e totais resumidos.
4. **Geração do Relatório:** O programa grava o relatório formatado em um arquivo de saída (REPORT-FILE).
5. **Término:** O programa fecha todos os arquivos abertos e termina.

## Requisitos para Iniciar o Processo

1. **Arquivos de Entrada:**
   - **TRANSACT-FILE:** Contém registros de transações de cartão de crédito.
   - **XREF-FILE:**  Contém dados de referência cruzada vinculando números de cartão a IDs de conta.
   - **TRANTYPE-FILE:** Contém descrições para diferentes tipos de transação.
   - **TRANCATG-FILE:** Contém descrições para diferentes categorias de transação.
   - **DATE-PARMS-FILE:** Contém as datas de início e término do período do relatório. 

2. **Arquivo de Saída:**
   - **REPORT-FILE:** O programa irá gerar um arquivo de relatório contendo as informações detalhadas da transação.

## Validações e Regras

- **Validação do Intervalo de Datas:** O programa deve validar as datas de início e término lidas do DATE-PARMS-FILE para garantir que sejam datas válidas e que a data de início não seja posterior à data de término.
- **Verificações de Status do Arquivo:**  O programa realiza verificações no status das operações do arquivo (abrir, ler, gravar, fechar) e trata de quaisquer erros encontrados.
- **Validação de Dados:** Embora não seja descrito explicitamente, o programa deve idealmente incluir verificações de validação de dados nos dados da transação para garantir sua precisão e consistência. Por exemplo:
    - Validar valores de transação para garantir que sejam numéricos.
    - Verificar os tipos e categorias de transação em relação aos dados nos respectivos arquivos.
    - Verificar se há algum elemento de dados inválido ou ausente nos registros de transação. 

## Detalhes Técnicos

**Seções Principais:**

- **IDENTIFICATION DIVISION:** Identifica o programa e seu autor.
- **ENVIRONMENT DIVISION:** Define os arquivos usados pelo programa.
- **DATA DIVISION:**  Descreve a estrutura dos dados de entrada e saída.
- **PROCEDURE DIVISION:** Contém a lógica do programa.

**Estruturas de Dados Principais:**

- **TRAN-RECORD:**  Estrutura que contém um único registro de transação lido do TRANSACT-FILE.
- **CARD-XREF-RECORD:** Estrutura que contém dados de referência cruzada lidos do XREF-FILE.
- **TRAN-TYPE-RECORD:**  Estrutura que contém a descrição do tipo de transação lida do TRANTYPE-FILE.
- **TRAN-CAT-RECORD:**  Estrutura que contém a descrição da categoria da transação lida do TRANCATG-FILE.
- **REPORT-***:  Várias estruturas usadas para formatar e gravar dados no arquivo de relatório.

**Funções/Parágrafos Principais:**

- **0000-TRANFILE-OPEN:** Abre o TRANSACT-FILE para leitura.
- **0100-REPTFILE-OPEN:** Abre o REPORT-FILE para gravação.
- **0200-CARDXREF-OPEN:** Abre o XREF-FILE para leitura.
- **0300-TRANTYPE-OPEN:** Abre o TRANTYPE-FILE para leitura.
- **0400-TRANCATG-OPEN:** Abre o TRANCATG-FILE para leitura.
- **0500-DATEPARM-OPEN:** Abre o DATE-PARMS-FILE para leitura.
- **0550-DATEPARM-READ:** Lê as datas de início e término do DATE-PARMS-FILE.
- **1000-TRANFILE-GET-NEXT:** Lê o próximo registro de transação do TRANSACT-FILE.
- **1100-WRITE-TRANSACTION-REPORT:**  Formata e grava os detalhes da transação no arquivo de relatório.
- **1110-WRITE-PAGE-TOTALS:** Grava os totais da página no arquivo de relatório.
- **1120-WRITE-ACCOUNT-TOTALS:** Grava os totais da conta no arquivo de relatório.
- **1110-WRITE-GRAND-TOTALS:**  Grava o total geral no arquivo de relatório.
- **1120-WRITE-HEADERS:** Grava os cabeçalhos do relatório no arquivo de relatório.
- **1111-WRITE-REPORT-REC:**  Grava um registro formatado no arquivo de relatório.
- **1120-WRITE-DETAIL:** Formata e grava uma única linha de detalhe da transação no relatório.
- **1500-A-LOOKUP-XREF:**  Recupera o ID da conta do XREF-FILE com base no número do cartão.
- **1500-B-LOOKUP-TRANTYPE:** Recupera a descrição do tipo de transação do TRANTYPE-FILE.
- **1500-C-LOOKUP-TRANCATG:** Recupera a descrição da categoria da transação do TRANCATG-FILE.
- **9000-TRANFILE-CLOSE:** Fecha o TRANSACT-FILE.
- **9100-REPTFILE-CLOSE:** Fecha o REPORT-FILE.
- **9200-CARDXREF-CLOSE:** Fecha o XREF-FILE.
- **9300-TRANTYPE-CLOSE:** Fecha o TRANTYPE-FILE.
- **9400-TRANCATG-CLOSE:** Fecha o TRANCATG-FILE.
- **9500-DATEPARM-CLOSE:** Fecha o DATE-PARMS-FILE.
- **9999-ABEND-PROGRAM:**  Interrompe o programa em caso de erro fatal.
- **9910-DISPLAY-IO-STATUS:**  Exibe o status do arquivo em caso de erro de E/S. 

**Variáveis:**

- **WS-START-DATE:** Armazena a data de início do período do relatório.
- **WS-END-DATE:** Armazena a data de término do período do relatório.
- **WS-PAGE-TOTAL:**  Accumula o valor total da transação para a página atual.
- **WS-ACCOUNT-TOTAL:**  Acumula o valor total da transação para a conta atual.
- **WS-GRAND-TOTAL:** Acumula o total geral de todos os valores de transação.
- **TRANFILE-STATUS, CARDXREF-STATUS, TRANTYPE-STATUS, TRANCATG-STATUS, REPTFILE-STATUS, DATEPARM-STATUS:**  Variáveis para armazenar o status do arquivo após cada operação de E/S.


## Segurança

- **Não Aplicável:** O trecho de código fornecido não contém nenhuma implementação de segurança explícita. 

**Considerações de Segurança:**

- **Controle de Acesso:**  Implemente mecanismos de controle de acesso para restringir o acesso não autorizado ao programa, arquivos de entrada e relatórios de saída. Isso pode envolver autenticação de usuário e autorização com base em funções e permissões predefinidas.
- **Criptografia de Dados:**  Considere criptografar dados confidenciais nos arquivos de transação, especialmente se eles contiverem informações de identificação pessoal (PII) ou detalhes financeiros, para proteger contra acesso não autorizado.
- **Registro de Auditoria:** Implemente o registro de auditoria para rastrear a execução do programa, acesso do usuário e quaisquer modificações feitas nos dados. Isso ajuda a identificar e investigar quaisquer violações de segurança ou atividades suspeitas.

## Impacto em Outros Sistemas

- **Dependências de Dados:** O programa depende da disponibilidade oportuna e precisa de dados dos arquivos de entrada (dados de transação, dados de referência cruzada, tipos de transação, categorias de transação e parâmetros de data). Quaisquer problemas ou atrasos nesses sistemas de origem impactarão diretamente o processo de geração do relatório.
- **Sistemas a Jusante:** O relatório de detalhes da transação gerado pode ser usado como entrada para outros sistemas a jusante, como:
    - **Sistemas de Reconciliação:**  Para reconciliar transações com extratos bancários e outros registros financeiros.
    - **Sistemas de Detecção de Fraude:** Para identificar transações potencialmente fraudulentas com base em padrões e anomalias nos dados.
    - **Sistemas de Business Intelligence:** Para analisar tendências de transações, comportamento do cliente e outros insights de negócios.

## Modelos

| Nome do Campo | Tipo | Descrição |
|---|---|---|
| FD-TRANFILE-REC | Registro | Representa um registro no TRANSACT-FILE. |
| FD-TRANS-DATA | Alfanumérico | Contém os dados reais da transação (detalhes não especificados no código). |
| FD-TRAN-PROC-TS | Alfanumérico | Contém o registro de data e hora de quando a transação foi processada. |
| FD-CARDXREF-REC | Registro | Representa um registro no XREF-FILE. |
| FD-XREF-CARD-NUM | Alfanumérico | Contém o número do cartão de crédito. |
| FD-XREF-DATA | Alfanumérico | Contém dados adicionais de referência cruzada (detalhes não especificados). |
| FD-TRANTYPE-REC | Registro | Representa um registro no TRANTYPE-FILE. |
| FD-TRAN-TYPE | Alfanumérico | Contém o código do tipo de transação. |
| FD-TRAN-DATA | Alfanumérico | Contém a descrição do tipo de transação. |
| FD-TRAN-CAT-RECORD | Registro | Representa um registro no TRANCATG-FILE. |
| FD-TRAN-CAT-KEY | Grupo |  Uma chave composta consistindo no código do tipo de transação (FD-TRAN-TYPE-CD) e código da categoria (FD-TRAN-CAT-CD). |
| FD-TRAN-CAT-DATA | Alfanumérico | Contém a descrição da categoria da transação. |
| FD-REPTFILE-REC | Alfanumérico | Representa uma linha no REPORT-FILE. |
| FD-DATEPARM-REC | Alfanumérico | Representa um registro no DATE-PARMS-FILE (detalhes não especificados). |

## Principais Referências

- **VSAM (Virtual Storage Access Method):**  O sistema de arquivos usado para armazenar e acessar os arquivos de dados.
- **COBOL (Common Business-Oriented Language):**  A linguagem de programação usada para escrever o programa.
- **JCL (Job Control Language):** Usado para definir e gerenciar trabalhos em lote no sistema mainframe.
- **Copybooks:**  Módulos de código reutilizáveis (por exemplo, CVTRA05Y, CVACT03Y) contendo estruturas de dados e rotinas comuns.

--Made by "Smart Engineering" (by Compass.UOL)--