Gerado em: 1º de outubro de 2024

# **CardDemo Gerenciamento de Data e Hora**

## Título

- Título do Documento: CardDemo Application -  Especificação Padrão de Data e Hora

## Arquivo

- `\CSDAT01Y.cpy`

## Descrição resumida

Este documento descreve o formato padronizado para lidar com informações de data e hora no aplicativo CardDemo. Ele garante consistência e precisão na gravação, exibição e processamento de datas e horas em todas as funcionalidades do sistema.

## Histórico de Versões

- CardDemo_v1.0-15-g27d6c6f-68: Versão inicial - 19 de julho de 2022

## Descrição do Processo

O arquivo `CSDAT01Y.cpy` define uma estrutura padrão para representar informações de data e hora no aplicativo CardDemo.

1. **Armazenamento de Data e Hora:** Ele estabelece contêineres específicos para armazenar os valores de ano, mês, dia, hora, minuto, segundo e milissegundo.

2. **Flexibilidade de Formato:** O código suporta diferentes formatos de exibição para datas (AAAA-MM-DD, MM/DD/AA) e horas (HH:MM:SS), garantindo compatibilidade com várias fontes de entrada/saída.

3. **Representação Interna:** Ele lida com a conversão desses formatos legíveis por humanos em uma representação interna consistente que o sistema pode usar eficientemente para cálculos e comparações.

## Requisitos para Iniciar o Processo

1. Este padrão deve ser implementado e referenciado em todos os módulos e programas do aplicativo CardDemo que lidam com informações de data e hora.

## Validações e Regras

* **Precisão:** Todos os módulos devem aderir aos formatos definidos para garantir o registro e processamento precisos de data e hora.
* **Consistência:** O mesmo formato deve ser usado consistentemente em todo o aplicativo para evitar discrepâncias e garantir a integridade dos dados.

## Detalhes Técnicos

**Variáveis:**

* **`WS-CURDATE`:** Armazena a data atual no formato AAAAMMDD.
* **`WS-CURDATE-YEAR`:** Armazena o ano atual (AAAA).
* **`WS-CURDATE-MONTH`:** Armazena o mês atual (MM).
* **`WS-CURDATE-DAY`:** Armazena o dia atual (DD).
* **`WS-CURTIME`:** Armazena a hora atual no formato HHMMSS.
* **`WS-CURTIME-HOURS`:** Armazena a hora atual (HH).
* **`WS-CURTIME-MINUTE`:** Armazena o minuto atual (MM).
* **`WS-CURTIME-SECOND`:** Armazena o segundo atual (SS).
* **`WS-CURTIME-MILSEC`:** Armazena o milissegundo atual (centésimos de segundo).
* **`WS-CURDATE-MM-DD-YY`:** Armazena a data no formato MM/DD/AA.
* **`WS-CURTIME-HH-MM-SS`:** Armazena a hora no formato HH:MM:SS.
* **`WS-TIMESTAMP`:** Armazena um valor de timestamp combinando data e hora com milissegundos no formato AAAA-MM-DD HH:MM:SS.SSSSSS.
* **`WS-TIMESTAMP-DT-YYYY`:** Armazena o ano do timestamp (AAAA).
* **`WS-TIMESTAMP-DT-MM`:** Armazena o mês do timestamp (MM).
* **`WS-TIMESTAMP-DT-DD`:** Armazena o dia do timestamp (DD).
* **`WS-TIMESTAMP-TM-HH`:** Armazena a hora do timestamp (HH).
* **`WS-TIMESTAMP-TM-MM`:** Armazena o minuto do timestamp (MM).
* **`WS-TIMESTAMP-TM-SS`:** Armazena o segundo do timestamp (SS).
* **`WS-TIMESTAMP-TM-MS6`:** Armazena o milissegundo do timestamp (SSSSSS).

## Impacto em Outros Sistemas

* Todos os módulos e programas dentro do aplicativo CardDemo que lidam com dados de data e hora serão afetados.

## Modelos

| Nome do Campo | Tipo | Descrição |
|---|---|---|
| WS-CURDATE |  9(08) | Data atual no formato AAAAMMDD. |
| WS-CURDATE-YEAR | 9(04) | Ano atual (AAAA). |
| WS-CURDATE-MONTH | 9(02) | Mês atual (MM). |
| WS-CURDATE-DAY | 9(02) | Dia atual (DD). |
| WS-CURTIME | 9(08) | Hora atual no formato HHMMSS. |
| WS-CURTIME-HOURS | 9(02) | Hora atual (HH). |
| WS-CURTIME-MINUTE | 9(02) | Minuto atual (MM). |
| WS-CURTIME-SECOND | 9(02) | Segundo atual (SS). |
| WS-CURTIME-MILSEC | 9(02) | Milissegundo atual (centésimos de segundo). |
| WS-CURDATE-MM-DD-YY |  String | Data atual no formato MM/DD/AA. |
| WS-CURTIME-HH-MM-SS | String | Hora atual no formato HH:MM:SS. |
| WS-TIMESTAMP | String | Valor de timestamp combinando data e hora com milissegundos. |
| WS-TIMESTAMP-DT-YYYY | 9(04) | Ano do timestamp (AAAA). |
| WS-TIMESTAMP-DT-MM | 9(02) | Mês do timestamp (MM). |
| WS-TIMESTAMP-DT-DD | 9(02) | Dia do timestamp (DD). |
| WS-TIMESTAMP-TM-HH | 9(02) | Hora do timestamp (HH). |
| WS-TIMESTAMP-TM-MM | 9(02) | Minuto do timestamp (MM). |
| WS-TIMESTAMP-TM-SS | 9(02) | Segundo do timestamp (SS). |
| WS-TIMESTAMP-TM-MS6 | 9(06) | Milissegundos do timestamp (SSSSSS). |

## Principais Referências

* Todos os módulos de programa dentro do aplicativo CardDemo que usam informações de data e hora.

**Considerações Adicionais:**

* **Fuso Horário:** A especificação não menciona explicitamente o tratamento de fuso horário. O esclarecimento sobre o gerenciamento de fuso horário é necessário, especialmente para aplicativos que lidam com transações em diferentes locais geográficos.
* **Horário de Verão (DST):** A consideração dos ajustes de DST é essencial para garantir a cronometragem precisa durante as transições de DST.

--Made by "Smart Engineering" (by Compass.UOL)--