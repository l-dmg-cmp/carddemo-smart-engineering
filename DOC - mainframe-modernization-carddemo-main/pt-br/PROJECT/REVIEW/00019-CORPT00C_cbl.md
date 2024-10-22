Gerado em: 1 de outubro de 2024

## Revisão de Análise Técnica

**Arquivo:**  \src\CORPT00C.cbl

**Título:**  Submissão de Relatório de Transação

**Resumo:** 

Este programa COBOL, `CORPT00C`, faz parte da aplicação `CardDemo`. Ele lida com o envio online de jobs em lote para gerar relatórios de transações. Os usuários podem optar por gerar relatórios mensalmente, anualmente ou com base em um intervalo de datas personalizado. O programa interage com o CICS para tratamento de telas e usa TDQs (Transient Data Queues) para passar informações de jobs para um processo em lote.

**Tecnologia:**

* **Linguagem de Programação:** COBOL
* **Framework/Biblioteca:**  CICS (Customer Information Control System)
* **Banco de Dados:**  Embora o banco de dados específico não seja nomeado explicitamente, o código faz referência a um arquivo chamado `TRANSACT`, sugerindo a existência de um banco de dados ou sistema de arquivos para armazenar dados de transações. 
* **Outras Ferramentas:**  
    * **JCL (Job Control Language):** O programa constrói instruções JCL para enviar jobs em lote.
    * **TDQ (Transient Data Queue):** Usada para comunicação entre o programa online e o job em lote.

**Referência, Classe e Método:**

| Reference | Descrição |
|---|---|
| `COCOM01Y` |  Provavelmente um copybook contendo definições de áreas de comunicação comuns. |
| `CORPT00`  |  Provavelmente um copybook definindo estruturas de dados ou variáveis específicas para o programa ou módulo `CORPT00`. |
| `COTTL01Y` |  Possivelmente um copybook para títulos e rótulos usados em toda a aplicação. |
| `CSDAT01Y` |  Provavelmente um copybook relacionado a rotinas de manipulação de datas ou estruturas de dados. |
| `CSMSG01Y` |  Provavelmente um copybook para lidar com mensagens, incluindo mensagens de erro. |
| `CVTRA05Y` |  Potencialmente um copybook para estruturas de dados relacionadas a transações. |
| `DFHAID`   |  Um copybook CICS padrão que fornece definições para campos de área de comunicação usados por comandos CICS. |
| `DFHBMSCA`  |  Um copybook CICS padrão que define a estrutura da área de comunicação CICS. |

| Classe | Descrição |
|---|---|
| `Not available` |  |

| Método(Público) | Descrição |
|---|---|
| `Not available` |  |

| Método(Privado) | Descrição |
|---|---|
| `MAIN-PARA` | O ponto de entrada principal do programa. Ele lida com inicialização, interações de tela e chama outros parágrafos com base na entrada do usuário. |
| `PROCESS-ENTER-KEY` |  Processa a entrada do usuário quando a tecla Enter é pressionada. Ele valida a entrada, formata os dados e se prepara para enviar o job em lote. |
| `SUBMIT-JOB-TO-INTRDR` |  Lida com o prompt de confirmação para envio do job e grava o JCL no TDQ `JOBS`. |
| `WIRTE-JOBSUB-TDQ` |  Grava o registro JCL no TDQ `JOBS`.  |
| `RETURN-TO-PREV-SCREEN` |  Navega de volta para a tela CICS anterior. |
| `SEND-TRNRPT-SCREEN` |  Envia o mapa `CORPT0A` para o terminal do usuário, exibindo mensagens e permitindo entrada. |
| `RETURN-TO-CICS` |  Emite um comando CICS RETURN para encerrar a execução do programa. |
| `RECEIVE-TRNRPT-SCREEN` |  Recebe a entrada do usuário do mapa `CORPT0A`. |
| `POPULATE-HEADER-INFO` |  Preenche informações de cabeçalho, como data e hora, na tela. |
| `INITIALIZE-ALL-FIELDS` |  Inicializa e limpa vários campos de dados. |

--Made by "Smart Engineering" (by Compass.UOL)--