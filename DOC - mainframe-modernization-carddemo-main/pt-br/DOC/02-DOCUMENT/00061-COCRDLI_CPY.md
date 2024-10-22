Gerado em: 1º de outubro de 2024

# Especificação de Layout de Dados de Cartão de Crédito

## Título do Documento: Especificação de Layout de Dados de Cartão de Crédito para Sistemas Internos e Externos

## Arquivo

- Rota do Arquivo: \COCRDLI.CPY

## Descrição Resumida

Este documento descreve a estrutura das informações do cartão de crédito (CCRDL) usadas em nosso sistema. Ele define dois layouts - CCRDLIAI (interno) e CCRDLIAO (externo) - para lidar com dados de forma consistente e segura em diferentes partes do sistema e durante a comunicação com entidades externas.

## Histórico de Versões

- Versão 1.0: Especificação inicial para o layout de dados do cartão de crédito.

## Descrição do Processo

Esta especificação define um formato padronizado para informações de cartão de crédito, garantindo consistência e interoperabilidade em nossos sistemas e com sistemas externos. O layout CCRDLIAI define a estrutura interna das informações do cartão de crédito, enquanto o layout CCRDLIAO é usado para trocar informações com sistemas externos ou exibi-las aos usuários.

## Requisitos

1.  **Formato de Dados Padronizado:** Um formato consistente para dados de cartão de crédito é crucial para processamento e comunicação perfeitos.
2.  **Segurança:** Informações confidenciais do cartão de crédito exigem tratamento e armazenamento seguros.

## Validações e Regras

1.  **Validação do Tipo de Dado:** Cada campo no layout deve aderir ao tipo de dado definido (por exemplo, numérico, alfanumérico).
2.  **Validação do Comprimento do Campo:** O comprimento de cada campo deve ser limitado ao número especificado de caracteres.
3.  **Consistência de Dados:** Garanta a consistência de dados entre layouts internos e externos por meio de regras apropriadas de mapeamento e transformação.
4.  **Conformidade de Segurança:** Aderir aos padrões do setor (por exemplo, PCI DSS) para lidar e armazenar dados confidenciais do titular do cartão.

## Detalhes técnicos

### Variáveis

-   **`CCRDLIAI`:**  Estrutura de dados que representa o layout interno das informações do cartão de crédito.
-   **`CCRDLIAO`:**  Estrutura de dados que representa o layout externo das informações do cartão de crédito.
-   **`TRNNAME`:** Nome ou identificador da transação.
-   **`TITLE01`:** Título descritivo ou cabeçalho para as informações do cartão de crédito.
-   **`CURDATE`:** Data atual.
-   **`PGMNAME`:** Nome do programa.
-   **`TITLE02`:** Segundo título descritivo ou cabeçalho.
-   **`CURTIME`:** Hora atual.
-   **`PAGENO`:** Número da página.
-   **`ACCTSID`:** Identificador da conta.
-   **`CARDSID`:** Identificador do cartão.
-   **`CRDSEL[1-7]`:**  Sinalizadores ou indicadores relacionados à seleção do cartão de crédito.
-   **`CRDSTP[1-7]`:**  Sinalizadores ou indicadores relacionados ao status ou tipo do cartão de crédito.
-   **`ACCTNO[1-7]`:** Números de conta.
-   **`CRDNUM[1-7]`:** Números do cartão de crédito.
-   **`CRDSTS[1-7]`:** Status do cartão de crédito.
-   **`INFOMSG`:** Mensagem informativa.
-   **`ERRMSG`:** Mensagem de erro.

## Segurança

-   **Criptografia de Dados:** Implemente métodos robustos de criptografia para proteger informações confidenciais do cartão de crédito durante o armazenamento e transmissão.
-   **Controle de Acesso:** Imponha medidas rígidas de controle de acesso para restringir o acesso não autorizado aos dados do cartão de crédito.

## Impacto em outros sistemas

-   **Sistema de Processamento de Pagamento:** O layout impacta diretamente o sistema de processamento de pagamento, garantindo a troca perfeita de dados para autorização e liquidação de transações.
-   **Relatórios e Análise:** O layout padronizado facilita relatórios precisos e consistentes sobre transações com cartão de crédito e dados do cliente.
-   **Sistemas Externos:** O layout externo garante compatibilidade com sistemas externos para troca e integração de dados.

## Modelos

| Nome do Campo | Tipo        | Descrição                                                         |
| :---------- | :---------- | :------------------------------------------------------------------ |
| TRNNAME    | Alfanumérico | Nome ou identificador da transação                                       |
| TITLE01    | Alfanumérico | Título descritivo ou cabeçalho para as informações do cartão de crédito       |
| CURDATE    | Data         | Data atual                                                         |
| PGMNAME    | Alfanumérico | Nome do programa                                                        |
| TITLE02    | Alfanumérico | Segundo título descritivo ou cabeçalho                                  |
| CURTIME    | Hora         | Hora atual                                                         |
| PAGENO     | Numérico      | Número da página                                                           |
| ACCTSID    | Alfanumérico | Identificador da conta                                                    |
| CARDSID    | Alfanumérico | Identificador do cartão                                                     |
| CRDSEL     | Alfanumérico | Sinalizador de seleção de cartão de crédito                                          |
| CRDSTP     | Alfanumérico | Sinalizador de status ou tipo de cartão de crédito                                      |
| ACCTNO     | Alfanumérico | Número da conta                                                       |
| CRDNUM     | Alfanumérico | Número do cartão de crédito                                                   |
| CRDSTS     | Alfanumérico | Status do cartão de crédito                                                  |
| INFOMSG    | Alfanumérico | Mensagem informativa                                                 |
| ERRMSG     | Alfanumérico | Mensagem de erro                                                        |

## Referências Principais

-   **PCI DSS (Padrão de Segurança de Dados da Indústria de Cartões de Pagamento):**  Padrão de segurança do setor para tratamento de dados do titular do cartão.

## Considerações Adicionais

-   **Internacionalização:** Considere os requisitos e padrões internacionais para formatos de dados de cartão de crédito, se aplicável.
-   **Mascaramento de Dados e Tokenização:** Implemente técnicas de mascaramento de dados ou tokenização para aumentar ainda mais a segurança, substituindo dados confidenciais do titular do cartão por substitutos não confidenciais.
-   **Registro e Auditoria:** Mantenha registros abrangentes de todos os acessos, modificações e transmissões de dados de cartão de crédito para fins de auditoria e monitoramento de segurança.

--Made by "Smart Engineering" (by Compass.UOL)--