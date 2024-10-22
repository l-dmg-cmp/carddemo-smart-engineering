Gerado em: 1 de outubro de 2024

# Especificação do Registro de Dados do Cliente

## Título do Documento: CardDemo - Especificação da Estrutura de Dados do Cliente

## Arquivo

- `CUSTREC.cpy`

## Sumário

Este documento descreve a estrutura das informações do cliente dentro da aplicação CardDemo. Esta estrutura, definida no arquivo `CUSTREC.cpy`, serve como um modelo de como os dados do cliente são organizados e armazenados. Compreender esta estrutura é crucial para qualquer pessoa que trabalhe com dados de clientes no sistema CardDemo, incluindo desenvolvedores, testadores e analistas de negócios.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial (19 de julho de 2022)

## Descrição do Processo

O arquivo `CUSTREC.cpy` define uma estrutura de dados COBOL chamada `CUSTOMER-RECORD`. Esta estrutura atua como um modelo para armazenar informações sobre cada cliente. Cada campo dentro do `CUSTOMER-RECORD` representa um atributo específico do cliente.

## Requisitos para Iniciar o Processo

Esta estrutura de dados é fundamental para a aplicação CardDemo. Qualquer processo que envolva dados do cliente dependerá desta estrutura.

## Validações e Regras

- **Tipos de Dados:** Cada campo no `CUSTOMER-RECORD` possui um tipo de dado definido (por exemplo, `PIC 9(09)` para dados numéricos, `PIC X(25)` para dados de texto). Isso garante a consistência e a precisão dos dados.
- **ID do Cliente Exclusivo:** O campo `CUST-ID` provavelmente se destina a ser um identificador exclusivo para cada cliente.
- **Regras de Negócio:** Regras de negócio específicas podem ditar como determinados campos são preenchidos ou usados. Por exemplo, pode haver regras sobre validação de pontuação de crédito ou verificação de endereço.

## Detalhes Técnicos

**Variáveis:**

- **`CUSTOMER-RECORD`:** A estrutura de dados principal que contém todas as informações do cliente.
- **`CUST-ID`:** Um identificador numérico exclusivo para cada cliente.
- **`CUST-FIRST-NAME`, `CUST-MIDDLE-NAME`, `CUST-LAST-NAME`:** Campos para armazenar o nome completo do cliente.
- **`CUST-ADDR-LINE-1`, `CUST-ADDR-LINE-2`, `CUST-ADDR-LINE-3`:** Campos para armazenar o endereço do cliente.
- **`CUST-ADDR-STATE-CD`, `CUST-ADDR-COUNTRY-CD`, `CUST-ADDR-ZIP`:** Campos para armazenar o estado, país e CEP do cliente.
- **`CUST-PHONE-NUM-1`, `CUST-PHONE-NUM-2`:** Campos para armazenar os números de telefone do cliente.
- **`CUST-SSN`:** Número de Segurança Social (SSN) do cliente.
- **`CUST-GOVT-ISSUED-ID`:** Um número de identificação emitido pelo governo.
- **`CUST-DOB-YYYYMMDD`:** Data de nascimento do cliente.
- **`CUST-EFT-ACCOUNT-ID`:** ID da conta de Transferência Eletrônica de Fundos (EFT) do cliente.
- **`CUST-PRI-CARD-HOLDER-IND`:** Um indicador se o cliente é o titular principal do cartão.
- **`CUST-FICO-CREDIT-SCORE`:** Pontuação de crédito FICO do cliente.

## Segurança

- **Sensibilidade dos Dados:** O `CUSTOMER-RECORD` contém informações pessoais confidenciais. O acesso a esses dados deve ser estritamente controlado e protegido de acordo com as regulamentações de privacidade de dados relevantes e as melhores práticas de segurança.

## Impacto em Outros Sistemas

- **Aplicativos Voltados para o Cliente:** Esta estrutura de dados provavelmente sustenta como os dados do cliente são exibidos e gerenciados em várias partes da aplicação CardDemo.
- **Relatórios e Análise:** Esta estrutura seria essencial para gerar relatórios e realizar análises de dados do cliente.

## Modelo de Dados

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| `CUST-ID` | Numérico (9 dígitos) | Identificador exclusivo do cliente. |
| `CUST-FIRST-NAME` | Texto (25 caracteres) | Primeiro nome do cliente. |
| `CUST-MIDDLE-NAME` | Texto (25 caracteres) | Nome do meio do cliente. |
| `CUST-LAST-NAME` | Texto (25 caracteres) | Sobrenome do cliente. |
| `CUST-ADDR-LINE-1` | Texto (50 caracteres) | Linha de endereço 1 do cliente. |
| `CUST-ADDR-LINE-2` | Texto (50 caracteres) | Linha de endereço 2 do cliente. |
| `CUST-ADDR-LINE-3` | Texto (50 caracteres) | Linha de endereço 3 do cliente. |
| `CUST-ADDR-STATE-CD` | Texto (2 caracteres) | Código do estado do cliente. |
| `CUST-ADDR-COUNTRY-CD` | Texto (3 caracteres) | Código do país do cliente. |
| `CUST-ADDR-ZIP` | Texto (10 caracteres) | CEP do cliente. |
| `CUST-PHONE-NUM-1` | Texto (15 caracteres) | Número de telefone principal do cliente. |
| `CUST-PHONE-NUM-2` | Texto (15 caracteres) | Número de telefone secundário do cliente. |
| `CUST-SSN` | Numérico (9 dígitos) | Número de Segurança Social do cliente. |
| `CUST-GOVT-ISSUED-ID` | Texto (20 caracteres) | ID emitido pelo governo do cliente. |
| `CUST-DOB-YYYYMMDD` | Texto (10 caracteres) | Data de nascimento do cliente (AAAA/MM/DD). |
| `CUST-EFT-ACCOUNT-ID` | Texto (10 caracteres) | ID da conta de Transferência Eletrônica de Fundos do cliente. |
| `CUST-PRI-CARD-HOLDER-IND` | Texto (1 caractere) | Indicador se o cliente é o titular principal do cartão. |
| `CUST-FICO-CREDIT-SCORE` | Numérico (3 dígitos) | Pontuação de crédito FICO do cliente. |

## Principais Referências

- É provável que esta estrutura de dados seja referenciada por vários programas e módulos dentro da aplicação CardDemo.

--Made by "Smart Engineering" (by Compass.UOL)--