Gerado em: 1º de outubro de 2024

# Sistema de Recuperação de Detalhes de Cartão de Crédito

## Documento de Título: Programa de Recuperação de Detalhes de Cartão de Crédito - Especificação Funcional

## Arquivo

-  \src\COCRDSLC.cbl

## Descrição Resumida

O programa de Recuperação de Detalhes de Cartão de Crédito é um componente central do sistema de gerenciamento de cartão de crédito. Ele permite que representantes de atendimento ao cliente acessem rapidamente informações detalhadas do cartão de crédito usando o número da conta ou o número do cartão. Este programa enfatiza a segurança de dados validando as entradas do usuário antes de acessar informações confidenciais.

## Histórico da Versão

- Versão 1.0: Versão inicial (Abril de 2022)

## Descrição do Processo

1. **Captura de Entrada:** O programa recebe como entrada um número de conta ou um número de cartão.
2. **Validação de Entrada:** O programa verifica se a entrada fornecida é válida (numérica e com o comprimento correto).
3. **Pesquisa no Banco de Dados:** Se válida, o programa pesquisa no banco de dados 'CARDDAT' por um registro correspondente.
4. **Recuperação de Dados:** Ao encontrar uma correspondência, o programa recupera todos os detalhes relevantes do cartão.
5. **Exibição de Dados:** O programa formata as informações recuperadas e as envia de volta para a interface do usuário para exibição.

## Requisitos para Iniciar o Processo

1. **Entrada do Usuário:** O usuário precisa fornecer um número de conta válido ou um número de cartão.
2. **Conexão com o Banco de Dados:** O programa requer acesso ao banco de dados 'CARDDAT'.

## Validações e Regras

- **Validação de Tipo de Dados:** O programa garante que o número da conta ou do cartão inserido seja numérico.
- **Validação de Comprimento:** O programa verifica se os dados inseridos têm o comprimento correto (11 dígitos para o número da conta, 16 dígitos para o número do cartão).
- **Segurança de Dados:** O programa não acessará o banco de dados se a entrada for inválida, protegendo contra acesso não autorizado aos dados.

## Detalhes técnicos

**Programa Principal:** COCRDSLC.cbl

**Variáveis:**

- **`WS-CARD-RID-CARDNUM`:** Armazena o número do cartão de entrada (16 dígitos).
- **`WS-CARD-RID-ACCT-ID`:** Armazena o número da conta de entrada (11 dígitos).
- **`LIT-CARDFILENAME`:**  Mantém o nome do arquivo do banco de dados do cartão de crédito ('CARDDAT').

**Métodos:**

- **`9100-GETCARD-BYACCTCARD`:** Este método pesquisa o banco de dados 'CARDDAT' usando o número do cartão fornecido.
- **`9150-GETCARD-BYACCT`:** Este método não é usado nesta versão do programa. Ele sugere a possibilidade de pesquisar por número de conta usando um índice ou caminho de acesso diferente no futuro.

## Segurança

- **Validação de Entrada:** Ao validar rigorosamente as entradas do usuário, o programa impede tentativas de injeção de SQL e acesso não autorizado a dados.

## Impacto em Outros Sistemas

- **Interface do Usuário:** O programa fornece dados para a interface do usuário para exibição ao representante de atendimento ao cliente.
- **Banco de Dados CARDDAT:** O programa interage diretamente com o banco de dados 'CARDDAT' para recuperação de dados.

## Modelos

| Nome do Campo         | Tipo | Descrição                               |
|----------------------|------|------------------------------------------|
| WS-CARD-RID-CARDNUM | X(16) | Número do Cartão de Crédito (16 caracteres) |
| WS-CARD-RID-ACCT-ID | 9(11) | Número da Conta (11 dígitos)             |
| CARD-RECORD          | Array | Contém os dados recuperados do cartão de crédito |

## Principais Referências

- **Banco de Dados `CARDDAT`:** A principal fonte de dados para informações do cartão de crédito.
- **Interface do Usuário:** O sistema responsável por capturar a entrada do usuário e exibir os detalhes do cartão recuperado.

--Made by "Smart Engineering" (by Compass.UOL)--