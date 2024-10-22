Gerado em: 1º de outubro de 2024

# Especificação de Cálculo de Juros do CardDemo

## Título

- Título do Documento: CardDemo Módulo de Cálculo de Juros - Especificação de Processamento em Lote

## Descrição resumida

Este documento descreve os requisitos e especificações para o Módulo de Cálculo de Juros do CardDemo, um programa de processamento em lote responsável por calcular e aplicar juros mensais a contas de cartão de crédito dentro do sistema CardDemo. Este módulo garante uma avaliação precisa dos juros com base em regras predefinidas e detalhes da conta do cliente.

## Histórico da Versão

- Versão 1.0: Versão inicial - Cálculo de Juros com base no Grupo de Contas e Categoria de Transação

## Descrição do Processo

O Módulo de Cálculo de Juros opera como um processo em lote, executado periodicamente (provavelmente mensalmente) para calcular e aplicar encargos de juros às contas dos clientes. O processo envolve as seguintes etapas:

1. **Coleta de Dados:** O módulo recupera dados de várias fontes, incluindo Arquivo de Saldo de Categoria de Transação, Arquivo de Referência Cruzada, Arquivo de Grupo de Divulgação e Arquivo Mestre de Conta.

2. **Cálculo de Juros:** Com base no grupo de contas do cliente, categoria de transação e taxas de juros predefinidas, o módulo calcula os juros mensais para cada categoria de transação.

3. **Atualização da Conta:** Os juros calculados são adicionados ao saldo da conta do cliente no Arquivo Mestre da Conta.

4. **Geração de Transação:** O módulo gera um registro de transação para cada aplicação de juros, registrando os detalhes da transação, valor e timestamps.

5. **Integridade de Dados:** Após a conclusão, o módulo garante o fechamento de todos os arquivos acessados, mantendo a integridade dos dados.

## Requisitos para Iniciar o Processo

1. **Arquivo de Saldo de Categoria de Transação (TCATBALF):** Contém uma divisão do saldo de cada cliente, categorizado por tipo de transação (por exemplo, compras, adiantamentos em dinheiro).

2. **Arquivo de Referência Cruzada (XREFFILE):** Vincula o número do cartão de crédito de um cliente ao seu ID de conta.

3. **Arquivo de Grupo de Divulgação (DISCGRP):** Contém as taxas de juros associadas a diferentes grupos de contas e categorias de transação.

4. **Arquivo Mestre de Conta (ACCTFILE):** O repositório central para informações da conta do cliente, incluindo saldos e taxas de juros.

## Validações e Regras

* **Determinação da Taxa de Juros:** As taxas de juros são determinadas com base no grupo de contas atribuído ao cliente e na categoria de transação específica.

* **Taxa de Juros Padrão:** Se a taxa de juros de um grupo de divulgação específico não for encontrada, o sistema utiliza uma taxa de juros do grupo 'DEFAULT' predefinida.

* **Histórico de Transações:** Cada aplicação de juros é registrada como uma transação separada no Arquivo de Transações.

* **Cálculo de Juros Mensais:** Os juros são calculados e aplicados mensalmente.

## Detalhes técnicos

**Programa Principal:**

* **`CBACT04C.cbl`:** O principal programa COBOL responsável por executar o processo de cálculo de juros.

**Arquivos Principais:**

* **TCATBAL-FILE:** Arquivo de Saldo de Categoria de Transação
* **XREF-FILE:** Arquivo de Referência Cruzada
* **DISCGRP-FILE:** Arquivo de Grupo de Divulgação
* **ACCOUNT-FILE:** Arquivo Mestre de Conta
* **TRANSACT-FILE:** Arquivo de Transação

**Variáveis Importantes:**

* **`TRAN-CAT-BAL`:** Saldo da categoria de transação
* **`DIS-INT-RATE`:** Taxa de juros recuperada do Arquivo de Grupo de Divulgação
* **`WS-MONTHLY-INT`:** Juros mensais calculados
* **`WS-TOTAL-INT`:** Juros totais acumulados para a conta
* **`ACCT-CURR-BAL`:** Saldo atual da conta
* **`TRAN-ID`:** Identificador exclusivo para cada transação
* **`TRAN-TYPE-CD`:** Código do tipo de transação (por exemplo, '01' para juros)
* **`TRAN-CAT-CD`:** Código da categoria de transação (por exemplo, '05' para juros)
* **`TRAN-SOURCE`:** Origem da transação (por exemplo, 'Sistema')
* **`TRAN-DESC`:** Descrição da transação
* **`TRAN-AMT`:** Valor da transação
* **`TRAN-CARD-NUM`:** Número do cartão de crédito associado à transação
* **`TRAN-ORIG-TS`:** Timestamp da origem da transação
* **`TRAN-PROC-TS`:** Timestamp do processamento da transação

**Métodos/Parágrafos:**

* **`1000-TCATBALF-GET-NEXT`:** Lê registros do Arquivo de Saldo de Categoria de Transação.
* **`1050-UPDATE-ACCOUNT`:** Atualiza o saldo da conta no Arquivo Mestre da Conta.
* **`1100-GET-ACCT-DATA`:** Recupera dados da conta do Arquivo Mestre da Conta.
* **`1110-GET-XREF-DATA`:** Recupera dados de referência cruzada do Arquivo de Referência Cruzada.
* **`1200-GET-INTEREST-RATE`:** Recupera a taxa de juros do Arquivo de Grupo de Divulgação.
* **`1300-COMPUTE-INTEREST`:** Calcula os juros mensais.
* **`1300-B-WRITE-TX`:** Grava o registro da transação de juros no Arquivo de Transações.

## Segurança

* **Segurança de Processamento em Lote:** A execução do trabalho em lote deve estar sujeita a medidas de segurança adequadas, incluindo acesso restrito a dados e sistemas de produção.

## Impacto em Outros Sistemas

* **Módulo de Gerenciamento de Conta:** Os cálculos de juros realizados por este módulo impactam diretamente os saldos das contas dos clientes.
* **Módulo de Faturamento:** As transações de juros geradas serão refletidas nos extratos dos clientes.
* **Módulo de Relatórios:** Os cálculos de juros serão usados para gerar vários relatórios, como relatórios mensais de juros ganhos.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `FD-TRAN-CAT-KEY` | Grupo | Campos-chave para o Arquivo de Saldo de Categoria de Transação |
| `FD-TRANCAT-ACCT-ID` | Numérico (9) | Identificador da Conta |
| `FD-TRANCAT-TYPE-CD` | Alfanumérico (2) | Código do Tipo de Transação |
| `FD-TRANCAT-CD` | Numérico (4) | Código da Transação |
| `FD-XREF-CARD-NUM` | Alfanumérico (16) | Número do Cartão de Crédito |
| `FD-XREF-CUST-NUM` | Numérico (9) | Número do Cliente |
| `FD-XREF-ACCT-ID` | Numérico (11) | Identificador da Conta |
| `FD-DISCGRP-KEY` | Grupo | Campos-chave para o Arquivo de Grupo de Divulgação |
| `FD-DIS-ACCT-GROUP-ID` | Alfanumérico (10) | Identificador do Grupo de Contas |
| `FD-DIS-TRAN-TYPE-CD` | Alfanumérico (2) | Código do Tipo de Transação |
| `FD-DIS-TRAN-CAT-CD` | Numérico (4) | Código da Transação |

## Principais Referências

* **Documentação de Arquitetura do Sistema CardDemo**
* **Dicionário de Dados**

**Considerações Adicionais:**

* **Tratamento de Erros:** Implemente um tratamento de erros robusto para gerenciar situações inesperadas (por exemplo, erros de arquivo, dados inválidos) normalmente.
* **Log:** Incorpore mecanismos de log detalhados para rastrear o fluxo do processo, erros e exceções.
* **Otimização de Desempenho:** Considere técnicas de otimização de desempenho para lidar com grandes volumes de dados com eficiência.
* **Escalabilidade:** Projete o módulo para acomodar o crescimento futuro no volume de dados e nos requisitos de processamento.

**Observação:** Esta especificação é baseada no trecho de código fornecido e pode não abranger todos os aspectos do Módulo de Cálculo de Juros. Análise adicional e colaboração com a equipe de desenvolvimento são recomendadas para uma compreensão e implementação abrangentes.

--Made by "Smart Engineering" (by Compass.UOL)--