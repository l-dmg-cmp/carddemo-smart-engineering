Generated at: 1st October of 2024

# CardDemo Account Statement Generation

## Title

- Title Document: CardDemo Account Statement Generation - Program Specification

## File

- File: \src\CBSTM03A.CBL

## Summary Description

This document outlines the specifications for the CardDemo Account Statement Generation program (CBSTM03A.CBL). This program is a batch process responsible for generating account statements for credit card holders. The program retrieves customer, account, and transaction data from various sources, calculates the total expenses, and produces statements in two formats: plain text (traditional bank statement) and HTML (for online viewing).

## Version History

- Version 1.0: Initial Version

## Process Description

The Account Statement Generation program performs the following steps:

1. **Data Gathering:** Collects customer data, account details, and transaction history from separate data sources based on the account number.
2. **Data Organization and Formatting:** Structures the collected data into a clear and readable format, preparing it for presentation on the statement.
3. **Transaction Processing:**  Lists individual transactions chronologically, including details such as date, description, and amount.
4. **Total Expense Calculation:**  Calculates the total expenses incurred by the account holder during the statement period.
5. **Statement Generation:** Produces two versions of the statement: plain text and HTML.

## Requirements to Start the Process

1. **Transaction File (TRNXFILE):** This file contains transaction records for all customers. 
2. **Cross-Reference File (XREFFILE):** This file links customer IDs, account IDs, and credit card numbers.
3. **Customer File (CUSTFILE):** This file stores customer information like names, addresses, and credit scores.
4. **Account File (ACCTFILE):** This file holds account-specific data such as account IDs and current balances.

## Validations and Rules

* **Data Integrity:** Ensures data consistency across different sources, such as matching transactions to the correct accounts and customers.
* **Clarity and Transparency:** Presents information in an easy-to-understand format to provide a clear overview of account activity.
* **Flexibility:** Caters to different delivery preferences by generating statements in both plain text and HTML formats.
* **Confidentiality:**  Although not explicitly defined, the system should incorporate security measures to protect sensitive financial data.

## Technical Details

**Main Program:**

* **`CBSTM03A`:** The main COBOL program responsible for orchestrating the account statement generation process.

**Subroutines:**

* **`CBSTM03B`:** A utility subroutine used for file I/O operations like opening, reading, closing files.

**Data Structures:**

* **`STATEMENT-LINES`:**  Defines the structure and layout of the plain text statement.
* **`HTML-LINES`:** Defines the structure and layout of the HTML statement.
* **`WS-TRNX-TABLE`:** A two-dimensional table used to store and organize transaction data retrieved from the transaction file.

**Variables:**

* **`WS-FL-DD`:** Holds the file code indicating the current file being processed.
* **`WS-SAVE-CARD`:**  Stores the credit card number of the current customer being processed.
* **`CR-CNT`:** Counts the number of credit card records processed.
* **`TR-CNT`:** Counts the number of transactions processed for a specific card.
* **`WS-TOTAL-AMT`:** Accumulates the total transaction amount for the current statement.

**Methods:**

* **`1000-XREFFILE-GET-NEXT`:** Retrieves the next record from the cross-reference file.
* **`2000-CUSTFILE-GET`:**  Retrieves the customer record based on the customer ID.
* **`3000-ACCTFILE-GET`:**  Retrieves the account record based on the account ID.
* **`4000-TRNXFILE-GET`:** Retrieves and processes transactions for a specific credit card.
* **`5000-CREATE-STATEMENT`:**  Initializes and populates the statement data structures.
* **`6000-WRITE-TRANS`:** Writes individual transaction details to the statement.
* **`8100-FILE-OPEN`:**  Opens the required files (TRNXFILE, XREFFILE, CUSTFILE, ACCTFILE).
* **`9100-TRNXFILE-CLOSE` through `9400-ACCTFILE-CLOSE`:** Closes the opened files.

## Impact on Other Systems

* **Printing System:**  The generated plain text statements may be sent to a printing system for physical mail distribution.
* **Online Banking System:** The generated HTML statements may be provided as input to the online banking system for online access by customers.
* **Reporting Systems:** The transaction data processed by the program may be used by reporting systems for generating various business reports.

## Models

| Name Field | Type | Description |
|---|---|---|
| `CARD-XREF-RECORD` | Record | Contains cross-reference information (customer ID, account ID, card number). |
| `CUSTOMER-RECORD` | Record |  Holds customer information (name, address, credit score). |
| `ACCOUNT-RECORD` | Record | Contains account details (account ID, current balance). |
| `TRNX-RECORD` | Record | Represents a transaction record (card number, transaction ID, details, amount). |

## Main References

* **`CBSTM03B`:** Subroutine for file I/O operations.
* **`COSTM01`, `CVACT03Y`, `CUSTREC`, `CVACT01Y`:** COBOL copybooks containing data structures and definitions. 

**Additional Considerations:**

* **Error Handling:** Implement comprehensive error handling to manage file errors, data inconsistencies, and other unexpected situations.
* **Performance Optimization:** Optimize the program for efficient processing of large transaction volumes, potentially using techniques like sorting and indexing.
* **Security:** Implement appropriate security measures to restrict access to sensitive data and ensure data confidentiality.

--Made by "Smart Engineering" (by Compass.UOL)--