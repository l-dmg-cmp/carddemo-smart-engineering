Generated at: 1st October of 2024

# CardDemo Interest Calculation Specification

## Title

- Title Document: CardDemo Interest Calculation Module -  Batch Processing Specification

## Summary description

This document outlines the requirements and specifications for the CardDemo Interest Calculation Module, a batch processing program responsible for calculating and applying monthly interest to credit card accounts within the CardDemo system. This module ensures accurate interest assessment based on predefined rules and customer account details.

## Version History

- Version 1.0: Initial version - Interest Calculation based on Account Group and Transaction Category

## Process Description

The Interest Calculation Module operates as a batch process, executed periodically (likely monthly) to calculate and apply interest charges to customer accounts. The process involves the following steps:

1. **Data Gathering:** The module retrieves data from various sources, including Transaction Category Balance File, Cross-Reference File, Disclosure Group File, and Account Master File.

2. **Interest Calculation:** Based on the customer's account group, transaction category, and predefined interest rates, the module calculates monthly interest for each transaction category.

3. **Account Update:** The calculated interest is added to the customer's account balance in the Account Master File.

4. **Transaction Generation:**  The module generates a transaction record for each interest application, recording the transaction details, amount, and timestamps.

5. **Data Integrity:** Upon completion, the module ensures the closure of all accessed files, maintaining data integrity.

## Requirements to Start the Process

1. **Transaction Category Balance File (TCATBALF):** Contains a breakdown of each customer's balance, categorized by transaction type (e.g., purchases, cash advances).

2. **Cross-Reference File (XREFFILE):** Links a customer's credit card number to their account ID.

3. **Disclosure Group File (DISCGRP):** Holds the interest rates associated with different account groups and transaction categories.

4. **Account Master File (ACCTFILE):** The central repository for customer account information, including balances and interest rates.

## Validations and Rules

* **Interest Rate Determination:** Interest rates are determined based on the customer's assigned account group and the specific transaction category.

* **Default Interest Rate:** If a specific disclosure group's interest rate is not found, the system utilizes a predefined 'DEFAULT' group's interest rate.

* **Transaction History:** Each interest application is recorded as a separate transaction in the Transaction File.

* **Monthly Interest Calculation:** Interest is calculated and applied on a monthly basis.

## Technical Details

**Main Program:**

* **`CBACT04C.cbl`:**  The main COBOL program responsible for executing the interest calculation process.

**Main Files:**

* **TCATBAL-FILE:** Transaction Category Balance File
* **XREF-FILE:** Cross-Reference File
* **DISCGRP-FILE:** Disclosure Group File
* **ACCOUNT-FILE:** Account Master File
* **TRANSACT-FILE:** Transaction File

**Important Variables:**

* **`TRAN-CAT-BAL`:** Transaction category balance
* **`DIS-INT-RATE`:** Interest rate retrieved from the Disclosure Group File
* **`WS-MONTHLY-INT`:** Calculated monthly interest
* **`WS-TOTAL-INT`:** Total interest accumulated for the account
* **`ACCT-CURR-BAL`:** Current balance of the account
* **`TRAN-ID`:** Unique identifier for each transaction
* **`TRAN-TYPE-CD`:** Transaction type code (e.g., '01' for interest)
* **`TRAN-CAT-CD`:** Transaction category code (e.g., '05' for interest)
* **`TRAN-SOURCE`:** Source of the transaction (e.g., 'System')
* **`TRAN-DESC`:** Description of the transaction
* **`TRAN-AMT`:** Amount of the transaction
* **`TRAN-CARD-NUM`:** Credit card number associated with the transaction
* **`TRAN-ORIG-TS`:** Timestamp of the transaction origination
* **`TRAN-PROC-TS`:** Timestamp of the transaction processing

**Methods/Paragraphs:**

* **`1000-TCATBALF-GET-NEXT`:** Reads records from the Transaction Category Balance File.
* **`1050-UPDATE-ACCOUNT`:** Updates the account balance in the Account Master File.
* **`1100-GET-ACCT-DATA`:** Retrieves account data from the Account Master File.
* **`1110-GET-XREF-DATA`:** Retrieves cross-reference data from the Cross-Reference File.
* **`1200-GET-INTEREST-RATE`:** Retrieves the interest rate from the Disclosure Group File.
* **`1300-COMPUTE-INTEREST`:** Calculates the monthly interest.
* **`1300-B-WRITE-TX`:** Writes the interest transaction record to the Transaction File.

## Security

* **Batch Processing Security:** The batch job execution should be subject to appropriate security measures, including restricted access to production data and systems.

## Impact on Other Systems

* **Account Management Module:** The interest calculations performed by this module directly impact customer account balances.
* **Billing Module:**  The interest transactions generated will be reflected in customer statements.
* **Reporting Module:** The interest calculations will be used for generating various reports, such as monthly interest earned reports.

## Models

| Name Field | Type | Description |
|---|---|---|
| `FD-TRAN-CAT-KEY` | Group | Key fields for Transaction Category Balance File |
| `FD-TRANCAT-ACCT-ID` | Numeric (9) | Account Identifier |
| `FD-TRANCAT-TYPE-CD` | Alphanumeric (2) | Transaction Type Code |
| `FD-TRANCAT-CD` | Numeric (4) | Transaction Code |
| `FD-XREF-CARD-NUM` | Alphanumeric (16) | Credit Card Number |
| `FD-XREF-CUST-NUM` | Numeric (9) | Customer Number |
| `FD-XREF-ACCT-ID` | Numeric (11) | Account Identifier |
| `FD-DISCGRP-KEY` | Group | Key fields for Disclosure Group File |
| `FD-DIS-ACCT-GROUP-ID` | Alphanumeric (10) | Account Group Identifier |
| `FD-DIS-TRAN-TYPE-CD` | Alphanumeric (2) | Transaction Type Code |
| `FD-DIS-TRAN-CAT-CD` | Numeric (4) | Transaction Code |

## Main References

* **CardDemo System Architecture Documentation**
* **Data Dictionary**

**Additional Considerations:**

* **Error Handling:**  Implement robust error handling to manage unexpected situations (e.g., file errors, invalid data) gracefully.
* **Logging:**  Incorporate detailed logging mechanisms to track the process flow, errors, and exceptions.
* **Performance Optimization:** Consider performance optimization techniques for handling large volumes of data efficiently.
* **Scalability:** Design the module to accommodate future growth in data volume and processing requirements.

**Note:** This specification is based on the provided code snippet and might not cover all aspects of the Interest Calculation Module. Further analysis and collaboration with the development team are recommended for a comprehensive understanding and implementation.

--Made by "Smart Engineering" (by Compass.UOL)--