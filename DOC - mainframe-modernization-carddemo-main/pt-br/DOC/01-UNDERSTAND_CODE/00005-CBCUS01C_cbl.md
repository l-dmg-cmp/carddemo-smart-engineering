## Decodificando o Processador de Arquivos de Dados do Cliente (CBCUS01C)

**Arquivo:**  \src\CBCUS01C.cbl

Este programa lê e exibe os dados do cliente de um arquivo chamado `CUSTFILE`. Pense nisso como folhear um arquivo, abrindo a pasta de cada cliente e, em seguida, mostrando as informações na tela do computador.

**Contexto:**

No aplicativo CardDemo, precisamos de uma maneira de acessar e exibir as informações do cliente. Este programa lida com essa tarefa. 

**Ação:**

1. **Abrir o Arquivo:** O programa começa abrindo o arquivo `CUSTFILE` onde os dados do cliente são armazenados.
2. **Ler Informações do Cliente:** Em seguida, ele lê as informações de cada cliente, um por um.
3. **Mostrar as Informações:** Para cada cliente, o programa exibe seus detalhes na tela.
4. **Fechar o Arquivo:** Depois que todas as informações do cliente forem processadas, o programa fecha o arquivo `CUSTFILE`.

**Regras de Negócio:**

* **Dados do Cliente:** Este programa acessa e exibe dados confidenciais do cliente, garantindo que essas informações sejam tratadas com cuidado e segurança.
* **Processamento Sequencial:** O programa processa os dados do cliente sequencialmente, o que significa que ele lê e exibe informações de um cliente após o outro na ordem em que estão armazenados no arquivo.
* **Tratamento de Erros:** O programa inclui verificações para possíveis erros durante as operações do arquivo (abrir, ler, fechar) e exibe mensagens se ocorrer algum problema. Isso garante a integridade dos dados e a estabilidade do sistema.

--Made by "Smart Engineering" (by Compass.UOL)--