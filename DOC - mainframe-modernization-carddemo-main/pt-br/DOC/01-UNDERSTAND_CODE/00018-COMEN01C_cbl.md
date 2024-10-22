--CONTEÚDO TRADUZIDO--
Gerado em: 1º de outubro de 2024

## Navegando pela Aplicação CardDemo: A Jornada do Usuário pelo Menu Principal

**Arquivo:**  \src\COMEN01C.cbl

Este programa COBOL atua como o hub central para usuários regulares dentro da aplicação CardDemo, semelhante a um menu digital em um restaurante.

**Contexto:**

Imagine um usuário fazendo login no sistema CardDemo para gerenciar as atividades do seu cartão de crédito. Após o login bem-sucedido, ele é recebido por uma tela de menu apresentando uma lista de ações que podem ser realizadas. Este programa dita o que o usuário vê neste menu e como suas seleções são tratadas.

**Ação:**

1. **Exibindo o Menu:** O programa começa apresentando um menu bem organizado com opções numeradas. Cada opção corresponde a uma ação específica, como visualizar detalhes da conta, listar transações ou fazer um pagamento.

2. **Capturando a Escolha do Usuário:** O usuário insere o número associado à ação desejada.

3. **Validação de Entrada:** Antes de prosseguir, o programa verifica se o número inserido é válido. Ele garante que a entrada seja de fato um número, esteja dentro do intervalo de opções disponíveis e corresponda a uma ação acessível ao usuário com base em seu tipo de usuário (usuário regular versus administrador).

4. **Direcionando para a Ação Escolhida:** Uma vez que a entrada é validada, o programa atua como um controlador de tráfego, direcionando o usuário para o módulo de programa apropriado responsável por executar a ação escolhida. Por exemplo, se o usuário optar por visualizar os detalhes da sua conta, o programa acionará o módulo de visualização da conta.

5. **Lidando com Entrada Inválida:** Se o usuário inserir uma opção inválida, o programa exibe imediatamente uma mensagem de erro, orientando-o a inserir uma escolha correta.

**Regras de Negócio:**

* **Menu Específico do Usuário:** As opções de menu exibidas são personalizadas para o nível de acesso do usuário. Usuários regulares recebem opções relevantes às suas atividades de conta, enquanto funções administrativas são reservadas para pessoal autorizado.

* **Acesso Seguro:** O programa aplica verificações de autorização, garantindo que os usuários só possam acessar funções que têm permissão para usar. Isso impede o acesso não autorizado a informações confidenciais ou funcionalidades.

* **Navegação Contínua:** O programa atua como um ponto central de navegação, permitindo que os usuários naveguem facilmente pelas diferentes funcionalidades da aplicação CardDemo. Ele fornece uma maneira amigável de interagir com o sistema.

* **Prevenção de Erros:** O mecanismo integrado de validação de entrada garante a integridade dos dados e previne erros ao detectar entradas incorretas do usuário antes que elas possam causar problemas dentro do sistema.

--Made by "Smart Engineering" (by Compass.UOL)--