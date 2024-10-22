## Cálculo de Juros para Contas de Cartão de Crédito

**Arquivo:**  \src\CBACT04C.cbl

**Contexto:**

Este programa é o coração do processo mensal de cálculo de juros para contas de cartão de crédito. É um trabalhador de bastidores que garante que os juros sejam aplicados com precisão ao saldo de cada cliente, levando em consideração os termos específicos do cartão de crédito e quaisquer grupos de divulgação relevantes.

**Ação:**

1. **Coleta de Dados:** O programa começa coletando informações de várias fontes:
    * **Arquivo de Saldo de Categoria de Transação:** Este arquivo contém uma divisão do saldo de cada cliente, categorizado por tipo de transação (por exemplo, compras, adiantamentos em dinheiro).
    * **Arquivo de Referência Cruzada:** Este arquivo vincula o número do cartão de crédito de um cliente à sua ID de conta, permitindo que o programa recupere todas as informações necessárias.
    * **Arquivo do Grupo de Divulgação:** Este arquivo contém as taxas de juros associadas a diferentes grupos de contas e categorias de transações.
    * **Arquivo Mestre da Conta:** Este é o repositório central para todas as informações da conta do cliente, incluindo saldos e taxas de juros.

2. **Calculando Juros:**
    * Para cada cliente e categoria de transação, o programa recupera a taxa de juros correspondente do Arquivo do Grupo de Divulgação. Se a taxa de um grupo específico estiver faltando, ele assume como padrão um grupo 'DEFAULT' predefinido.
    * Em seguida, calcula os juros mensais multiplicando o saldo da categoria da transação pela taxa de juros mensal.
    * Os juros mensais calculados são adicionados ao total de juros do cliente para o mês.

3. **Atualizando Contas e Gerando Transações:**
    * O programa atualiza o saldo da conta do cliente no Arquivo Mestre da Conta adicionando o total de juros calculado.
    * Ele também gera um registro de transação para os juros aplicados, que inclui detalhes como ID da transação, valor e carimbos de data/hora. Este registro é então gravado no Arquivo de Transação para referência futura e relatórios.

4. **Fechando os Livros:**
    * Depois que todas as contas são processadas, o programa fecha todos os arquivos que acessou, garantindo a integridade dos dados.

**Regras de Negócio:**

* **Determinação da Taxa de Juros:** As taxas de juros são determinadas com base em uma combinação do grupo de conta atribuído ao cliente e da categoria de transação específica. Isso permite uma aplicação de taxa de juros flexível e direcionada.
* **Taxa de Juros Padrão:** Se a taxa de juros de um grupo de divulgação específico não for encontrada, o sistema utiliza uma taxa de juros padrão, garantindo que o cálculo de juros possa prosseguir sem interrupção.
* **Histórico de Transações:** O programa registra meticulosamente cada aplicação de juros como uma transação separada, mantendo um rastro transparente e auditável de todas as atividades relacionadas a juros.
* **Cálculo de Juros Mensais:** Os juros são calculados mensalmente, alinhados com os ciclos de cobrança padrão.

--Made by "Smart Engineering" (by Compass.UOL)--