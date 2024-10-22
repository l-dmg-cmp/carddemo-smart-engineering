Gerado em: 1º de outubro de 2024

# Sistema de Gerenciamento de Cartão de Crédito

## Título

- Título do Documento: Especificação de Exibição e Navegação da Lista de Cartões de Crédito

## Arquivo

- `\COCRDLIC.cbl`

## Descrição Resumida

Este documento descreve as especificações do módulo "Exibição e Navegação da Lista de Cartões de Crédito" dentro do Sistema de Gerenciamento de Cartão de Crédito. Este módulo é responsável por apresentar uma lista de cartões de crédito aos usuários e permitir que eles naveguem por essa lista de forma eficiente.

## Histórico de Versões

- Versão 1.0: Versão inicial - Listagem e navegação básica de cartão de crédito.

## Descrição do Processo

O programa recupera os dados do cartão de crédito e os exibe para o usuário em um formato de lista paginada. Os usuários podem interagir com a lista:

1. **Filtrando:** Os usuários podem opcionalmente restringir a lista inserindo um ID de conta e/ou um Número de Cartão específico.
2. **Navegação:** Os usuários podem navegar pelas páginas de resultados usando as teclas de função:
    - `F7` - Página Anterior
    - `F8` - Próxima Página
3. **Seleção:** Os usuários podem escolher um cartão específico da lista para visualizar mais detalhes ou realizar ações como atualizar as informações do cartão.

## Requisitos para Iniciar o Processo

1. **Autenticação do Usuário:** O usuário deve estar conectado ao sistema.
2. **Função do Usuário:** O programa precisa determinar a função do usuário (Administrador ou Usuário Regular), pois isso determina quais cartões de crédito estão visíveis.
    - Os administradores veem todos os cartões de crédito.
    - Usuários regulares veem apenas cartões vinculados ao seu próprio número de conta.

## Validações e Regras

- **Validação de Entrada:**
    - O ID da conta, se inserido, deve ser um número válido de 11 dígitos.
    - O Número do Cartão, se inserido, deve ser um número válido de 16 dígitos.
- **Acesso a Dados Baseado na Função do Usuário:** A visibilidade do cartão de crédito é restrita com base nas funções do usuário para proteger dados confidenciais.
- **Seleção Única para Ações:** Os usuários podem selecionar apenas um cartão por vez para visualizar detalhes ou realizar atualizações.

## Detalhes Técnicos

**Programa Principal:**

- `COCRDLIC.cbl`: Este programa COBOL lida com toda a lógica para exibir a lista, filtrar, navegar e inserir dados do usuário.

**Estruturas de Dados:**

- `WS-SCREEN-DATA`: Uma estrutura de dados que contém as informações do cartão de crédito formatadas para exibição na tela.
- `WS-CARD-RID`: Uma estrutura de dados que contém os campos-chave (Número do Cartão, ID da Conta) usados para recuperar registros de cartão de crédito.

**Métodos:**

- `9000-READ-FORWARD`: Recupera uma página de registros de cartão de crédito, avançando pelos dados.
- `9100-READ-BACKWARDS`: Recupera uma página de registros de cartão de crédito, voltando pelos dados.
- `9500-FILTER-RECORDS`: Aplica os filtros de ID de conta e/ou Número do Cartão aos registros recuperados.

**Variáveis:**

- `WS-SCRN-COUNTER`: Acompanha o número da página atual.
- `WS-MAX-SCREEN-LINES`: Especifica o número máximo de registros de cartão de crédito exibidos em uma única página.
- `WS-CA-FIRST-CARD-NUM`, `WS-CA-LAST-CARD-NUM`, `WS-CA-FIRST-CARD-ACCT-ID`, `WS-CA-LAST-CARD-ACCT-ID`: Essas variáveis armazenam os campos-chave (número do cartão, ID da conta) do primeiro e último registros exibidos na página atual, usados para navegação.

## Segurança

- **Controle de Acesso Baseado em Função do Usuário:** O sistema impõe um controle de acesso rígido com base nas funções do usuário, garantindo que apenas pessoal autorizado possa visualizar informações confidenciais do cartão de crédito.

## Impacto em Outros Sistemas

- **Módulo de Visualização Detalhada do Cartão de Crédito:** Este módulo depende do módulo Lista de Cartões de Crédito para fornecer as informações do cartão de crédito selecionado para visualização detalhada.
- **Módulo de Atualização de Cartão de Crédito:** Este módulo também depende do módulo de lista para receber as informações do cartão de crédito selecionado para atualização.

## Modelos

| Campo de Nome       | Tipo     | Descrição                                             |
|---------------------|----------|-------------------------------------------------------|
| WS-ROW-ACCTNO      | String   | Número da conta associado ao cartão de crédito.      |
| WS-ROW-CARD-NUM     | String   | Número do Cartão de Crédito.                           |
| WS-ROW-CARD-STATUS  | String   | Status do cartão de crédito (por exemplo, Ativo, Inativo). |

## Principais Referências

- `CICS (Customer Information Control System)`: Usado para processamento de transações e tratamento de tela.
- `VSAM (Virtual Storage Access Method)`: O mecanismo de armazenamento de dados subjacente para registros de cartão de crédito.
- `BMS (Basic Mapping Support)`: Usado para definir e gerenciar layouts de tela.
- `CARDDAT`: O arquivo VSAM que armazena os dados do cartão de crédito.
- `CARDAIX`: Um índice alternativo no arquivo CARDDAT, provavelmente usado para recuperação eficiente por ID de conta.

--Made by "Smart Engineering" (by Compass.UOL)--