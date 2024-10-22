--CONTENT TO TRANSLATE--
Gerado em: 1º de outubro de 2024

##  Validação de Data na Aplicação CardDemo

**Arquivo:**  \src\CSUTLDPY.cpy

Este código garante que as datas inseridas no sistema CardDemo sejam precisas e lógicas. Ele funciona como um guardião, impedindo que datas incorretas ou sem sentido causem problemas.

**Contexto:**

Imagine um cliente solicitando um cartão de crédito através do aplicativo CardDemo. Ele precisa inserir sua data de nascimento. Este código entra em ação para garantir que a data fornecida faça sentido.

**Ação:**

1. **Verificação de Formato:** O código primeiro confirma se a data foi inserida no formato correto (AAAA MM DD). 
2. **Validação de Componentes:** Em seguida, ele divide a data em suas partes individuais (ano, mês, dia) e valida cada uma. 
    * **Ano:**  O código verifica se o século é razoável (19xx ou 20xx) para evitar erros como alguém inserir acidentalmente seu ano de nascimento como 1850.
    * **Mês:** Ele garante que o mês esteja entre 1 e 12.
    * **Dia:** Ele verifica se o dia está dentro do intervalo válido para o mês fornecido (por exemplo, não 30 de fevereiro). 
3. **Lógica de Ano Bissexto:**  O código inclui tratamento especial para fevereiro, garantindo que 29 de fevereiro só seja aceito em anos bissextos.
4. **Prevenção de Data Futura:**  Para evitar que alguém insira uma data de nascimento futura, o código compara a data fornecida com a data atual.
5. **Verificação Externa (Opcional):** O código pode utilizar opcionalmente um serviço externo (`CSUTLDTC`) para validação de data adicional e rigorosa.

**Regras de Negócio:**

* **Integridade de Dados:**  Datas precisas são cruciais para muitos aspectos do gerenciamento de cartão de crédito, incluindo cálculo de juros, determinação de elegibilidade e geração de relatórios. Este código atua como uma proteção contra corrupção de dados.
* **Experiência do Usuário:**  Embora invisível para o usuário, este código evita cenários frustrantes como solicitações rejeitadas devido a erros simples de digitação de data. Isso contribui para uma experiência mais suave e amigável.
* **Conformidade:** As instituições financeiras costumam ter regulamentações rígidas em relação à precisão dos dados. Este código ajuda o aplicativo CardDemo a cumprir esses padrões.

--Made by "Smart Engineering" (by Compass.UOL)--