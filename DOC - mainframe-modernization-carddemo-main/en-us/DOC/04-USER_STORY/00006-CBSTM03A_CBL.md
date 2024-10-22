Generated at: 1st October of 2024

# **Title Document:** CardDemo Account Statement Generator - Program Specification

# **Summary Description:**
The CardDemo Account Statement Generator program (CBSTM03A.CBL) is a batch process that generates account statements for credit card holders. The program reads customer, account, and transaction data from various input files, performs calculations, and generates statements in plain text and HTML formats.

# **User Stories:**
As a data analyst, I need to ensure that only valid records are used in financial analysis, so I need a program that can read and validate data from multiple sources and generate accurate account statements.

# **Related Epic:**
4 - Transaction Processing

# **Functional Requirements:**
* The program must read customer data from the `CUSTFILE`.
* The program must read account data from the `ACCTFILE`.
* The program must read transaction data from the `TRNXFILE`.
* The program must validate that transaction data is correctly associated with customer and account data.
* The program must calculate the total expenses for each account based on the transaction data.
* The program must generate account statements in plain text format, adhering to a predefined layout.
* The program must generate account statements in HTML format, suitable for online viewing.
* The program must handle file I/O operations, including opening, reading, writing, and closing files.
* The program must implement error handling mechanisms to gracefully manage issues like invalid data or file errors.

**Business Rules:**
* **Data Integrity:** The program ensures that data from different sources (`CUSTFILE`, `ACCTFILE`, `TRNXFILE`) is accurately matched and presented. For instance, it makes sure that transactions are linked to the correct account and customer.
* **Clarity and Transparency:** The generated statement is designed to be easy to understand, providing a clear overview of all account activity. 
* **Flexibility:** By producing both plain text and HTML versions, the program caters to different preferences and delivery methods.

# **Non-Functional Requirements:**
* **Performance:** The program should process large transaction volumes efficiently within a reasonable timeframe.
* **Reliability:** The program must operate reliably, producing accurate and consistent results.
* **Maintainability:** The program's code should be well-structured, documented, and easy to understand and maintain.
* **Security:** The program should handle sensitive financial data securely, incorporating access controls and data encryption as needed.

# **Acceptance Criteria:**
* The program successfully reads and processes customer, account, and transaction data from the input files.
* The program correctly validates data integrity, ensuring transactions are linked to the correct customers and accounts.
* The program accurately calculates total expenses for each account based on the transaction history.
* The program generates plain text and HTML statements that adhere to the specified layouts.
* The program handles errors gracefully, logging issues and exiting gracefully without data corruption.

# **Code Improvements:**
* **Error Handling:** Enhance error handling by providing more specific error messages and implementing a centralized error logging mechanism.
* **Documentation:** Improve code readability and maintainability by adding more in-line comments explaining complex logic and data structures.
* **Performance Optimization:**  Investigate performance bottlenecks, potentially using sorting or indexing techniques for large datasets.

# **Security Improvements:**
* **File Permissions:**  Implement strict file permissions to restrict access to sensitive data files.
* **Data Encryption:** Consider encrypting sensitive data at rest and in transit to protect customer information.
* **Auditing:** Implement an audit trail to track program execution, data access, and any modifications made to sensitive data.

# **Conceptual Diagram:**

```mermaid
sequenceDiagram
    %%Indicates the Participants involved in the process
    participant CBSTM03A
    participant CBSTM03B
    participant TRNXFILE
    participant XREFFILE
    participant CUSTFILE
    participant ACCTFILE
    participant STMTFILE
    participant HTMLFILE

    activate CBSTM03A

    CBSTM03A->>+CBSTM03B: Open TRNXFILE
    CBSTM03B->>+TRNXFILE: Open
    TRNXFILE-->>-CBSTM03B: Open Successful
    CBSTM03B->>-CBSTM03A: Open Successful

    CBSTM03A->>+CBSTM03B: Open XREFFILE
    CBSTM03B->>+XREFFILE: Open
    XREFFILE-->>-CBSTM03B: Open Successful
    CBSTM03B->>-CBSTM03A: Open Successful

    CBSTM03A->>+CBSTM03B: Open CUSTFILE
    CBSTM03B->>+CUSTFILE: Open
    CUSTFILE-->>-CBSTM03B: Open Successful
    CBSTM03B->>-CBSTM03A: Open Successful

    CBSTM03A->>+CBSTM03B: Open ACCTFILE
    CBSTM03B->>+ACCTFILE: Open
    ACCTFILE-->>-CBSTM03B: Open Successful
    CBSTM03B->>-CBSTM03A: Open Successful

    loop For Each Record in XREFFILE
        CBSTM03A->>+CBSTM03B: Read Record from XREFFILE
        CBSTM03B->>+XREFFILE: Read
        XREFFILE-->>-CBSTM03B: Customer ID, Account ID, Card Number
        CBSTM03B->>-CBSTM03A: Customer ID, Account ID, Card Number

        CBSTM03A->>+CBSTM03B: Read Record from CUSTFILE using Customer ID
        CBSTM03B->>+CUSTFILE: Read
        CUSTFILE-->>-CBSTM03B: Customer Data
        CBSTM03B->>-CBSTM03A: Customer Data

        CBSTM03A->>+CBSTM03B: Read Record from ACCTFILE using Account ID
        CBSTM03B->>+ACCTFILE: Read
        ACCTFILE-->>-CBSTM03B: Account Data
        CBSTM03B->>-CBSTM03A: Account Data

        CBSTM03A->>+CBSTM03A:  Process Transactions for Card Number
        loop For Each Record in TRNXFILE
            CBSTM03A->>+CBSTM03B: Read Record from TRNXFILE
            CBSTM03B->>+TRNXFILE: Read
            TRNXFILE-->>-CBSTM03B: Transaction Data
            CBSTM03B->>-CBSTM03A: Transaction Data

            alt Card Number Matches
                CBSTM03A->>+CBSTM03A: Add Transaction to Statement
            else Card Number Does Not Match
                CBSTM03A->>+CBSTM03A: Continue to Next Transaction
            end
        end

        CBSTM03A->>+CBSTM03A: Generate Plain Text Statement
        CBSTM03A->>+STMTFILE: Write Statement
        STMTFILE->>-CBSTM03A: Write Successful

        CBSTM03A->>+CBSTM03A: Generate HTML Statement
        CBSTM03A->>+HTMLFILE: Write Statement
        HTMLFILE->>-CBSTM03A: Write Successful
    end

    CBSTM03A->>+CBSTM03B: Close TRNXFILE
    CBSTM03B->>+TRNXFILE: Close
    TRNXFILE-->>-CBSTM03B: Close Successful
    CBSTM03B->>-CBSTM03A: Close Successful

    CBSTM03A->>+CBSTM03B: Close XREFFILE
    CBSTM03B->>+XREFFILE: Close
    XREFFILE-->>-CBSTM03B: Close Successful
    CBSTM03B->>-CBSTM03A: Close Successful

    CBSTM03A->>+CBSTM03B: Close CUSTFILE
    CBSTM03B->>+CUSTFILE: Close
    CUSTFILE-->>-CBSTM03B: Close Successful
    CBSTM03B->>-CBSTM03A: Close Successful

    CBSTM03A->>+CBSTM03B: Close ACCTFILE
    CBSTM03B->>+ACCTFILE: Close
    ACCTFILE-->>-CBSTM03B: Close Successful
    CBSTM03B->>-CBSTM03A: Close Successful

    deactivate CBSTM03A
```

--Made by "Smart Engineering" (by Compass.UOL)--