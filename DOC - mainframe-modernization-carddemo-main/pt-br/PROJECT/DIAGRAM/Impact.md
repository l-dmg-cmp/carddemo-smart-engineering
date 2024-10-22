--CONTENT TO TRANSLATE--
Gerado em: 1º de outubro de 2024

# Título: CardDemo: Um Aplicativo COBOL Baseado em CICS para Gestão de Cartões de Crédito

# Sumário:
O aplicativo CardDemo é um sistema legado escrito em COBOL, projetado para gerenciar transações com cartão de crédito e dados relacionados. Ele opera em um ambiente CICS (Customer Information Control System), típico de sistemas de mainframe IBM. O aplicativo utiliza arquivos VSAM (Virtual Storage Access Method) para armazenamento persistente de dados e BMS (Basic Mapping Support) para interações de tela com usuários por meio de terminais 3270.

O sistema fornece funcionalidades para gerenciamento de contas, processamento de transações, autenticação de usuário e geração de relatórios. Essas funcionalidades são implementadas por meio de uma série de programas COBOL interconectados, cada um responsável por tarefas específicas, como visualizar detalhes da conta, processar pagamentos, adicionar novos usuários, gerar relatórios e muito mais.

# Descrição:
O aplicativo CardDemo é um sistema monolítico onde diferentes módulos são fortemente acoplados. Mudanças em um módulo podem ter um impacto cascata em outras partes do aplicativo. Por exemplo, modificações na estrutura de um arquivo VSAM exigiriam alterações em todos os programas que leem ou gravam nesse arquivo. Da mesma forma, alterações na área de comunicação comum (COMMAREA) afetariam todos os programas que dependem dela para troca de dados.

# Diagrama
```mermaid
flowchart LR
    COSGN00C["COSGN00C\nSign-on"]
    COMEN01C["COMEN01C\nMain Menu"]
    COADM01C["COADM01C\nAdmin Menu"]
    COACTVWC["COACTVWC\nAccount View"]
    COACTUPC["COACTUPC\nAccount Update"]
    COBIL00C["COBIL00C\nBill Payment"]
    COCRDLIC["COCRDLIC\nCredit Card List"]
    COCRDSLC["COCRDSLC\nCredit Card Detail"]
    COCRDUPC["COCRDUPC\nCredit Card Update"]
    CORPT00C["CORPT00C\nReport Generation"]
    COTRN00C["COTRN00C\nTransaction List"]
    COTRN01C["COTRN01C\nView Transaction"]
    COTRN02C["COTRN02C\nAdd Transaction"]
    COUSR00C["COUSR00C\nUser List"]
    COUSR01C["COUSR01C\nAdd User"]
    COUSR02C["COUSR02C\nUpdate User"]
    COUSR03C["COUSR03C\nDelete User"]
    Batch["Batch Programs\n(CBxxxxx)"]

    COSGN00C --> COMEN01C
    COSGN00C --> COADM01C

    COMEN01C --> COACTVWC
    COMEN01C --> COBIL00C
    COMEN01C --> COCRDLIC
    COMEN01C --> CORPT00C
    COMEN01C --> COTRN00C

    COADM01C --> COUSR00C

    COCRDLIC --> COCRDSLC
    COCRDSLC --> COCRDUPC

    COTRN00C --> COTRN01C
    COTRN00C --> COTRN02C

    COUSR00C --> COUSR01C
    COUSR00C --> COUSR02C
    COUSR00C --> COUSR03C

    CORPT00C --> Batch
```

--Made by "Smart Engineering" (by Compass.UOL)--