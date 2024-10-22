Gerado em: 1º de outubro de 2024

# Especificação de Registro de Transação de Cartão de Crédito

## Título

- Título do Documento: Registro de Transação de Cartão de Crédito - Especificação da Estrutura de Dados

## Descrição Resumida

Este documento descreve a estrutura de um registro de transação de cartão de crédito dentro de um sistema financeiro baseado em COBOL. Ele define os campos de dados, seus formatos e suas finalidades, garantindo a captura de dados de transação padronizada e consistente.

## Histórico de Versões

- Versão 1.0: CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022)

## Descrição do Processo

O arquivo `CVTRA05Y.cpy` define um copybook COBOL, que atua como um modelo para um registro de transação. Este modelo garante que cada transação seja registrada uniformemente, contendo todas as informações necessárias para processamento, análise e auditoria.

## Requisitos para Iniciar o Processo

- **Compilador COBOL:** O sistema deve ter um compilador COBOL para interpretar e integrar esta definição de copybook.
- **Armazenamento de Dados:** Um mecanismo de armazenamento de dados (provavelmente VSAM) é necessário para armazenar os registros de transações.

## Validações e Regras

- **Tipos de Dados e Tamanhos:** Cada campo de dados possui um tipo de dados específico (por exemplo, alfanumérico, numérico) e restrição de tamanho, garantindo a integridade dos dados.
- **ID de Transação Único:** Cada transação deve ter um identificador exclusivo (`TRAN-ID`) para distingui-la das outras.
- **Códigos de Tipo de Transação e Categoria:** Códigos padronizados são usados para categorizar transações por tipo e categoria, facilitando a análise e geração de relatórios.

## Detalhes Técnicos

**Variáveis:**

- `TRAN-ID`: Um campo alfanumérico de 16 caracteres que representa o ID da transação exclusivo.
- `TRAN-TYPE-CD`: Um campo alfanumérico de 2 caracteres que representa o Código do Tipo de Transação (por exemplo, "SA" para Venda, "CR" para Crédito).
- `TRAN-CAT-CD`: Um campo numérico de 4 dígitos que representa o Código da Categoria da Transação (por exemplo, "5010" para Compras de Supermercado).
- `TRAN-SOURCE`: Um campo alfanumérico de 10 caracteres indicando a Origem da Transação (por exemplo, "Terminal POS").
- `TRAN-DESC`: Um campo alfanumérico de 100 caracteres fornecendo uma breve Descrição da Transação.
- `TRAN-AMT`: Um campo numérico de 9 dígitos com duas casas decimais representando o Valor da Transação.
- `TRAN-MERCHANT-ID`: Um campo numérico de 9 dígitos que representa o ID do Comerciante.
- `TRAN-MERCHANT-NAME`: Um campo alfanumérico de 50 caracteres contendo o Nome do Comerciante.
- `TRAN-MERCHANT-CITY`: Um campo alfanumérico de 50 caracteres contendo a Cidade do Comerciante.
- `TRAN-MERCHANT-ZIP`: Um campo alfanumérico de 10 caracteres contendo o CEP do Comerciante.
- `TRAN-CARD-NUM`: Um campo alfanumérico de 16 caracteres que representa o Número do Cartão usado.
- `TRAN-ORIG-TS`: Um campo alfanumérico de 26 caracteres registrando a Timestamp original da Transação.
- `TRAN-PROC-TS`: Um campo alfanumérico de 26 caracteres registrando a Timestamp de Processamento da Transação.

## Impacto em Outros Sistemas

- **Processamento de Transações:** Esta estrutura de registro é crucial para o processamento de transações, garantindo que todos os dados necessários sejam capturados.
- **Relatórios e Análise:** O formato padronizado permite consultas, relatórios e análises eficientes dos dados de transações.
- **Auditoria:** As informações detalhadas e timestamps facilitam a auditoria e o rastreamento de transações financeiras.

## Modelos

| Nome do Campo | Tipo | Descrição |
|---|---|---|
| TRAN-ID | Alfanumérico (X) | Identificador único para a transação (16 caracteres) |
| TRAN-TYPE-CD | Alfanumérico (X) | Código de duas letras indicando a natureza da transação (por exemplo, "SA" para venda, "CR" para crédito) |
| TRAN-CAT-CD | Numérico (9) | Código de quatro dígitos fornecendo uma categorização específica da transação (por exemplo, "5010" para compras de supermercado) |
| TRAN-SOURCE | Alfanumérico (X) | Identifica a origem da transação (por exemplo, "terminal POS", "Gateway de pagamento online") (10 caracteres) |
| TRAN-DESC | Alfanumérico (X) | Breve descrição da transação (100 caracteres) |
| TRAN-AMT | Numérico (S9V99) | Valor monetário da transação (9 dígitos com 2 casas decimais) |
| TRAN-MERCHANT-ID | Numérico (9) | Identificador exclusivo para o comerciante (9 dígitos) |
| TRAN-MERCHANT-NAME | Alfanumérico (X) | Nome do comerciante (50 caracteres) |
| TRAN-MERCHANT-CITY | Alfanumérico (X) | Cidade do comerciante (50 caracteres) |
| TRAN-MERCHANT-ZIP | Alfanumérico (X) | CEP do comerciante (10 caracteres) |
| TRAN-CARD-NUM | Alfanumérico (X) | Número do cartão de crédito usado para a transação (16 caracteres) |
| TRAN-ORIG-TS | Alfanumérico (X) | Timestamp da transação original (26 caracteres) |
| TRAN-PROC-TS | Alfanumérico (X) | Timestamp de quando a transação foi processada (26 caracteres) |

## Principais Referências

- Padrões de Linguagem de Programação COBOL
- Documentação VSAM (Virtual Storage Access Method) (se aplicável)
- Documentação do sistema para o sistema financeiro específico que usa este copybook.

--Made by "Smart Engineering" (by Compass.UOL)--