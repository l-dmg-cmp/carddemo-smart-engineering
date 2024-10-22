Gerado em: 1º de outubro de 2024

# Tradutor de Ação do Usuário CICS

## Título

- Título do Documento: Especificação do Tradutor de Ação do Usuário CICS

## Arquivo

- `\CSSTRPFY.cpy`

## Descrição Resumida

Este documento descreve a funcionalidade de um programa COBOL projetado para um ambiente CICS. Este programa traduz ações do usuário em um terminal em funções específicas do programa, atuando como uma ponte entre a interface do usuário e a lógica do aplicativo.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo:

Este programa captura ações do usuário em um terminal, como teclas pressionadas (incluindo teclas de função) e as traduz em funções predefinidas do programa. Em vez de acionar diretamente essas funções, ele define sinalizadores em uma área de memória compartilhada (área comum) para indicar a intenção do usuário. Essa abordagem promove flexibilidade e capacidade de manutenção, pois a lógica do programa subjacente pode ser modificada sem impactar diretamente o mecanismo de tradução.

## Requisitos para Iniciar o Processo:

1.  **Ambiente CICS:** O programa foi projetado para ser executado em um ambiente CICS em um sistema mainframe IBM.
2.  **Entrada do Terminal:** O programa espera entrada na forma de Identificadores de Atenção (AIDs) gerados por ações do usuário em um terminal.
3.  **Acesso à Área Comum:** O programa requer acesso a uma área comum predefinida para definir sinalizadores que representam as ações traduzidas do usuário.

## Validações e Regras:

- **Validação de AID:** O programa valida os AIDs recebidos em relação a uma lista predefinida de ações suportadas.
- **Gerenciamento de Sinalizadores:** O programa define sinalizadores específicos na área comum com base nos AIDs validados, indicando a ação pretendida do usuário.

## Detalhes Técnicos:

**Variáveis:**

- **`EIBAID`:** Uma variável do sistema que contém o Identificador de Atenção (AID) da última ação do usuário.
- **`CCARD-AID-ENTER`**, **`CCARD-AID-CLEAR`**, **`CCARD-AID-PA1`**, **`CCARD-AID-PA2`**, **`CCARD-AID-PFK01`** a **`CCARD-AID-PFK12`**: Sinalizadores na área comum que representam várias ações do usuário, como Enter, Clear, teclas PA e teclas de função (teclas PF).

**Métodos:**

- **`EVALUATE TRUE`**: Usado para comparar o `EIBAID` com AIDs predefinidos.
- **`WHEN`**: Usado dentro do bloco `EVALUATE` para corresponder a AIDs específicos e definir os sinalizadores correspondentes.
- **`SET`**: Usado para definir o valor dos sinalizadores na área comum.

## Impacto em Outros Sistemas:

- **Programas Dependentes:** Outros programas no aplicativo CICS dependem dos sinalizadores definidos por este programa na área comum para determinar a ação pretendida do usuário e responder de acordo.

## Modelos:

Não aplicável para este programa específico, pois ele se concentra principalmente na tradução de ações do usuário em sinalizadores.

## Principais Referências:

- **CICS Application Programming Guide:** Fornece informações sobre AIDs, áreas comuns e outros conceitos de programação CICS.
- **IBM System/370 Principles of Operation:** Oferece informações detalhadas sobre a arquitetura e o conjunto de instruções dos mainframes IBM.

## Considerações Adicionais:

- **Tratamento de Erros:** Implemente o tratamento de erros para gerenciar AIDs inesperados ou problemas com o acesso à área comum.
- **Log:** Inclua recursos de log para rastrear ações do usuário e auxiliar na depuração.
- **Documentação:** Mantenha documentação abrangente dos AIDs suportados, sinalizadores correspondentes e suas funções pretendidas no aplicativo.

--Made by "Smart Engineering" (by Compass.UOL)--