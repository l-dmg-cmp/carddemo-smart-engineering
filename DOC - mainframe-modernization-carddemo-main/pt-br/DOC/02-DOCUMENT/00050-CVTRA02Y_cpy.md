Gerado em: 1º de outubro de 2024

# **Agrupamento de Taxa de Juros de Transação de Cartão**

## Título

- Título do Documento: CardDemo - Especificação da Estrutura do Grupo de Divulgação

## Arquivo

- `\CVTRA02Y.cpy`

## Descrição resumida

Este documento descreve a estrutura e função do "Grupo de Divulgação" dentro do aplicativo CardDemo. Essa estrutura é crucial para determinar a taxa de juros aplicada a transações específicas de cartão de crédito com base em fatores como tipo de conta, tipo de transação e categoria.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68 (19 de julho de 2022): Versão inicial

## Descrição do Processo

A estrutura do Grupo de Divulgação define como o sistema categoriza e atribui taxas de juros a diferentes tipos de transações de cartão de crédito. Cada grupo representa uma combinação única de Grupo de Conta, Tipo de Transação e Categoria de Transação. 

Quando uma transação ocorre, o sistema identifica seu Grupo de Divulgação correspondente usando esses atributos. A taxa de juros associada a esse grupo específico é então aplicada para calcular os juros cobrados na transação.

## Requisitos para Iniciar o Processo

1. **Grupos de Conta Definidos:** Um conjunto predefinido de códigos representando diferentes grupos de contas (por exemplo, Ouro, Platina).
2. **Tipos de Transação Definidos:** Um conjunto predefinido de códigos representando diferentes tipos de transações (por exemplo, Compra, Adiantamento em Dinheiro).
3. **Categorias de Transação Definidas:** Um conjunto predefinido de códigos representando diferentes categorias de transações (por exemplo, Mercearias, Viagens).
4. **Taxas de Juros Atribuídas:** Cada Grupo de Divulgação deve ter uma taxa de juros atribuída, definida como uma porcentagem.

## Validações e Regras

* **Grupos de Divulgação Exclusivos:** Cada combinação de Grupo de Conta, Tipo de Transação e Categoria de Transação deve representar um Grupo de Divulgação exclusivo.
* **Taxa de Juros Válida:** A taxa de juros atribuída deve ser um valor numérico válido dentro de um intervalo predefinido.

## Detalhes técnicos

**Estrutura de Dados:**

- `DIS-GROUP-RECORD`: Representa um único Grupo de Divulgação.
    - `DIS-GROUP-KEY`: Identifica exclusivamente o Grupo de Divulgação.
        - `DIS-ACCT-GROUP-ID`: Um código de 10 caracteres para o Grupo de Conta.
        - `DIS-TRAN-TYPE-CD`: Um código de 2 caracteres para o Tipo de Transação.
        - `DIS-TRAN-CAT-CD`: Um código numérico de 4 dígitos para a Categoria de Transação.
    - `DIS-INT-RATE`: Um campo numérico assinado (com duas casas decimais) armazenando a taxa de juros associada a este Grupo de Divulgação.

## Impacto em Outros Sistemas

* **Processamento de Transações:** Esta estrutura impacta diretamente como o sistema calcula os juros sobre as transações de cartão de crédito.
* **Relatórios:** A estrutura do Grupo de Divulgação pode ser usada para gerar relatórios sobre a receita de juros com base em diferentes categorias de transações.

## Modelos

| Campo de Nome | Tipo | Descrição |
|---|---|---|
| DIS-ACCT-GROUP-ID | String (10 caracteres) | Código exclusivo para identificar um Grupo de Conta. |
| DIS-TRAN-TYPE-CD | String (2 caracteres) |  Código exclusivo para identificar um Tipo de Transação. |
| DIS-TRAN-CAT-CD | Inteiro (4 dígitos) |  Código exclusivo para identificar uma Categoria de Transação. |
| DIS-INT-RATE | Decimal (4 dígitos, 2 casas decimais) | Taxa de juros associada ao Grupo de Divulgação. |

## Principais Referências

* **Módulo de Processamento de Transações:** Este módulo usaria as informações do Grupo de Divulgação para aplicar a taxa de juros correta a cada transação.
* **Módulo de Gerenciamento de Conta:** Este módulo provavelmente seria responsável por definir e gerenciar os diferentes Grupos de Conta.

**Considerações Adicionais:**

* **Manutenção:** O sistema deve permitir a fácil manutenção dos Grupos de Divulgação, incluindo a adição de novos grupos, modificação de grupos existentes e desativação de grupos obsoletos.
* **Auditoria:** Todas as alterações nos Grupos de Divulgação devem ser registradas para fins de auditoria.

--Made by "Smart Engineering" (by Compass.UOL)--