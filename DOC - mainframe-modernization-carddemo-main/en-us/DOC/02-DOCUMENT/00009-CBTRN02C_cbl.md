Generated at: 1st October of 2024

# **CardDemo Daily Transaction Processing**

## Title
- Title Document: CardDemo - Daily Transaction Processor Specification

## File

- File Route: \src\CBTRN02C.cbl

## Summary Description
This document outlines the specifications for the CardDemo Daily Transaction Processor, a COBOL batch program crucial for the CardDemo application. This program forms the core of the daily credit card processing system. Its primary function is to process daily credit card transactions, applying them to customer accounts while adhering to predefined business rules. This document aims to provide a clear understanding of the program's functionality, requirements, and technical details for both technical and non-technical stakeholders.

## Version History
- CardDemo_v1.0-15-g27d6c6f-68: July 19, 2022 -  Initial version

## Process Description
1. **Initialization (Open Files):** The program begins by opening all the necessary files:
   - Daily Transaction File (input): Contains a list of daily credit card transactions.
   - Transaction File (output): Stores successfully processed transactions.
   - Cross-Reference File (input): Maps credit card numbers to account IDs.
   - Daily Rejects File (output): Records rejected transactions with reasons.
   - Account File (input/output): Holds customer account information.
   - Transaction Category Balance File (input/output): Tracks balances for different transaction categories.
2. **Process Daily Transactions:**
   - The program reads each transaction from the Daily Transaction File.
   - For each transaction, it performs the following:
     - **Validation:**
       - Checks if the credit card number is valid by referencing the Cross-Reference File.
       - Verifies if a corresponding account exists using the Account File.
       - Ensures the transaction does not exceed the account's credit limit.
       - Confirms that the credit card used is not expired.
     - **Update Balances:**
       - If the transaction is valid, the program updates:
         - Transaction Category Balance: This tracks totals for various transaction types (e.g., purchases, payments).
         - Account Balance: The customer's account balance is adjusted, increasing for payments and decreasing for purchases.
     - **Record Transaction:**
       - The validated transaction, along with a timestamp, is recorded in the Transaction File.
     - **Handle Rejections:**
       - If a transaction fails validation, it is marked with a reason for rejection and written to the Daily Rejects File for further investigation and potential follow-up.
3. **Closure (Close Files):** Once all transactions are processed, the program closes all the opened files.

## Requirements to Start the Process
- Access to the following files with appropriate permissions:
   - Daily Transaction File (input)
   - Transaction File (output)
   - Cross-Reference File (input)
   - Daily Rejects File (output)
   - Account File (input/output)
   - Transaction Category Balance File (input/output)

## Validations and Rules
- **Credit Limit:** The system prevents transactions that would cause an account to exceed its credit limit.
- **Card Expiration:** Transactions are rejected if the credit card used is past its expiration date.
- **Transaction Categorization:** Transactions are categorized to allow the business to track different activity types.
- **Rejection Handling:** Invalid transactions are logged with reasons, providing an audit trail.

## Technical Details
### Variables:
- `DALYTRAN-RECORD`: Holds the current transaction being processed from the Daily Transaction File.
- `TRAN-RECORD`: Stores the details of the transaction being processed for output to the Transaction File.
- `CARD-XREF-RECORD`: Contains the cross-reference information read from the Cross-Reference File.
- `ACCOUNT-RECORD`: Holds the account information read from the Account File.
- `TRAN-CAT-BAL-RECORD`: Stores the transaction category balance information.
- `WS-VALIDATION-FAIL-REASON`: Contains a code indicating the reason for transaction validation failure.
- `WS-VALIDATION-FAIL-REASON-DESC`: Holds a textual description of the reason for transaction validation failure.
- `WS-TRANSACTION-COUNT`: Tracks the total number of transactions processed.
- `WS-REJECT-COUNT`: Tracks the total number of transactions rejected.

### Methods:
- `0000-DALYTRAN-OPEN`: Opens the Daily Transaction File.
- `0100-TRANFILE-OPEN`: Opens the Transaction File.
- `0200-XREFFILE-OPEN`: Opens the Cross-Reference File.
- `0300-DALYREJS-OPEN`: Opens the Daily Rejects File.
- `0400-ACCTFILE-OPEN`: Opens the Account File.
- `0500-TCATBALF-OPEN`: Opens the Transaction Category Balance File.
- `1000-DALYTRAN-GET-NEXT`: Reads the next transaction from the Daily Transaction File.
- `1500-VALIDATE-TRAN`: Orchestrates the transaction validation process.
  - `1500-A-LOOKUP-XREF`: Looks up the credit card number in the Cross-Reference File.
  - `1500-B-LOOKUP-ACCT`: Retrieves account information, checks for overlimit, and card expiration.
- `2000-POST-TRANSACTION`: Processes a valid transaction, including updating balances and writing records.
- `2500-WRITE-REJECT-REC`: Writes a rejected transaction to the Daily Rejects File.
- `2700-UPDATE-TCATBAL`: Updates the Transaction Category Balance File.
  - `2700-A-CREATE-TCATBAL-REC`: Creates a new record in the Transaction Category Balance File if one doesn't exist.
  - `2700-B-UPDATE-TCATBAL-REC`: Updates an existing record in the Transaction Category Balance File.
- `2800-UPDATE-ACCOUNT-REC`: Updates the Account File with the transaction details.
- `2900-WRITE-TRANSACTION-FILE`: Writes the processed transaction to the Transaction File.
- `9000-DALYTRAN-CLOSE`: Closes the Daily Transaction File.
- `9100-TRANFILE-CLOSE`: Closes the Transaction File.
- `9200-XREFFILE-CLOSE`: Closes the Cross-Reference File.
- `9300-DALYREJS-CLOSE`: Closes the Daily Rejects File.
- `9400-ACCTFILE-CLOSE`: Closes the Account File.
- `9500-TCATBALF-CLOSE`: Closes the Transaction Category Balance File.

## Impact on Other Systems
- This program directly interacts with several other components of the CardDemo application:
  - It receives input from the Daily Transaction File, which is likely generated by another system or process.
  - It updates the Transaction File, Account File, and Transaction Category Balance File, which are used by other components for various functionalities like reporting, account management, etc.
  - The Daily Rejects File generated by this program serves as an audit trail and is likely monitored by a separate process or team.

## Models
| Name Field | Type | Description |
|---|---|---|
| `DALYTRAN-ID` | String | Unique identifier for each daily transaction. |
| `DALYTRAN-TYPE-CD` | String |  Code indicating the type of transaction (e.g., purchase, payment). |
| `DALYTRAN-CAT-CD` | String | Code categorizing the transaction (e.g., groceries, fuel, entertainment). |
| `DALYTRAN-SOURCE` | String | Source of the transaction (e.g., online, POS terminal). |
| `DALYTRAN-DESC` | String | Description of the transaction. |
| `DALYTRAN-AMT` | Decimal | Amount of the transaction. |
| `DALYTRAN-MERCHANT-ID` | String | Unique identifier for the merchant involved in the transaction. |
| `DALYTRAN-MERCHANT-NAME` | String | Name of the merchant. |
| `DALYTRAN-MERCHANT-CITY` | String | City of the merchant. |
| `DALYTRAN-MERCHANT-ZIP` | String | ZIP code of the merchant. |
| `DALYTRAN-CARD-NUM` | String | Credit card number used for the transaction. |
| `DALYTRAN-ORIG-TS` | String | Timestamp indicating when the transaction was initiated. |
| `TRAN-PROC-TS` | String | Timestamp indicating when the transaction was processed. |
| `XREF-ACCT-ID` | String | Account ID associated with the credit card number. |
| `ACCT-CURR-BAL` | Decimal | Current account balance. |
| `ACCT-CURR-CYC-CREDIT` | Decimal | Total credits in the current cycle. |
| `ACCT-CURR-CYC-DEBIT` | Decimal | Total debits in the current cycle. |
| `ACCT-CREDIT-LIMIT` | Decimal | Credit limit of the account. |
| `ACCT-EXPIRATION-DATE` | String | Expiration date of the credit card. |
| `TRAN-CAT-BAL` | Decimal | Balance for a specific transaction category. |
| `FD-TRAN-CAT-KEY` | String | Composite key for the transaction category balance record (includes account ID, transaction type code, and category code). |


## Main References
- Daily Transaction File: Provides the input for the program.
- Transaction File: Stores the successfully processed transactions.
- Cross-Reference File: Used to validate credit card numbers and retrieve account IDs.
- Daily Rejects File: Contains rejected transactions and reasons for rejection.
- Account File: Provides and updates customer account information.
- Transaction Category Balance File: Tracks balances for different transaction categories.

--Made by "Smart Engineering" (by Compass.UOL)--