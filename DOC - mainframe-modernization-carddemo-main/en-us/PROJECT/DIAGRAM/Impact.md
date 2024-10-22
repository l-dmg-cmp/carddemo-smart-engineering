Generated at: 1st October of 2024

# Title: CardDemo: A CICS-based COBOL Application for Credit Card Management

# Summary:
The CardDemo application is a legacy system written in COBOL, designed to manage credit card transactions and related data. It operates within a CICS (Customer Information Control System) environment, typical of IBM mainframe systems. The application utilizes VSAM (Virtual Storage Access Method) files for persistent data storage and BMS (Basic Mapping Support) for screen interactions with users via 3270 terminals.

The system provides functionalities for account management, transaction processing, user authentication, and reporting. These functionalities are implemented through a series of interconnected COBOL programs, each responsible for specific tasks such as viewing account details, processing payments, adding new users, generating reports, and more.

# Description:
The CardDemo application is a monolithic system where different modules are tightly coupled. Changes in one module may have a cascading impact on other parts of the application. For example, modifications to the structure of a VSAM file would necessitate changes in all programs that read or write to that file. Similarly, changes to the common communication area (COMMAREA) would affect all programs that rely on it for data exchange.

# Diagram
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