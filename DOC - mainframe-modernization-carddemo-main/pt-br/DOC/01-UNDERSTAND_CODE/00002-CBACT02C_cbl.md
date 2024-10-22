##  Processamento de Arquivo de Dados de Cartão: Uma Visão Interna

**Arquivo:**  \src\CBACT02C.cbl

**Contexto:**

Este programa é uma parte fundamental da aplicação CardDemo, responsável por ler e exibir as informações armazenadas no arquivo de dados de cartão de crédito. Pense nele como abrir uma planilha com todos os detalhes do seu cartão de crédito e imprimir seu conteúdo.

**Ação:**

1. **Acesso ao Arquivo:** O programa começa abrindo o arquivo de dados do cartão de crédito. Ele espera que o arquivo seja estruturado de uma maneira específica (VSAM KSDS) para localizar informações rapidamente.
2. **Leitura de Dados:** Assim que o arquivo é aberto, o programa lê cada registro de cartão de crédito, um por um.
3. **Exibição:**  Para cada registro lido, o programa exibe as informações do cartão de crédito. Isso pode ser enviar os dados para uma impressora ou mostrá-los em uma tela.
4. **Tratamento de Erros:** Se houver algum problema ao acessar ou ler o arquivo, o programa sinaliza um erro, exibe uma mensagem e interrompe o processamento posterior.
5. **Fechamento do Arquivo:** Após processar todos os registros ou encontrar um erro, o programa fecha o arquivo de dados do cartão de crédito para evitar qualquer corrupção de dados.

**Regras de Negócio:**

* **Processamento Sequencial:** O programa lê e exibe os registros do cartão de crédito um após o outro na ordem em que são armazenados no arquivo.
* **Relato de Erros:** Quaisquer problemas encontrados ao acessar ou ler o arquivo de dados do cartão de crédito são relatados com mensagens de erro específicas, permitindo investigação e resolução.
* **Integridade de Dados:** O programa garante a integridade dos dados abrindo e fechando corretamente o arquivo do cartão de crédito, evitando perda ou corrupção potencial de dados.

--Made by "Smart Engineering" (by Compass.UOL)--