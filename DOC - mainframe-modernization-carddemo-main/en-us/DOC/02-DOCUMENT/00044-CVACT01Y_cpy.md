Generated at: 1st October of 2024

# **CardDemo Account Management System**

## Title

- Title Document: CardDemo Account Management System - Account Record Specification

## File

- `\CVACT01Y.cpy`

## Summary description

This document outlines the structure and data fields within the "Account Record" used in the CardDemo system. This record serves as a template for holding all essential information about each customer's credit card account. 

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial version - July 19, 2022

## Process Description

The Account Record doesn't represent a process itself but defines the data structure for storing account information. This information is crucial for various system functionalities, including:

1. **Account Creation:** When a new account is opened, all account details are populated in a new Account Record.
2. **Account Access and Validation:** The system uses the Account Record to verify account status, credit limits, and other details during transactions or account inquiries.
3. **Transaction Processing:**  Account balance, credit limits, and other relevant information from the Account Record are updated based on transactions like purchases, payments, or cash withdrawals.
4. **Account Management:**  The system uses the Account Record for functionalities like viewing account statements, updating account information, or managing credit limits.
5. **Reporting:** Account data from Account Records is aggregated and used for generating various reports, such as account statements, credit utilization reports, and more.

## Requirements to Start the Process

N/A - This is a data structure, not a process.

## Validations and Rules

* **Unique Account ID (ACCT-ID):** Each account must have a unique identifier to ensure accurate transaction processing and account management.
* **Account Status (ACCT-ACTIVE-STATUS):** This field determines if an account is active and eligible for transactions. Only active accounts should be allowed for operations.
* **Credit Limit Management:** Fields like 'ACCT-CREDIT-LIMIT' and 'ACCT-CASH-CREDIT-LIMIT' are crucial for controlling credit risk and should be validated during transactions.
* **Data Integrity:** All dates, balances, and other numerical values should be validated for the correct format and range to maintain data integrity.

## Technical Details

**Variables:**

* **`ACCT-ID`:**  A unique 11-digit number identifying each account. 
* **`ACCT-ACTIVE-STATUS`:** A 1-character field indicating whether the account is active ('Y' for yes, 'N' for no).
* **`ACCT-CURR-BAL`:**  The current balance of the account, stored as a number with two decimal places.
* **`ACCT-CREDIT-LIMIT`:** The maximum credit allowed on the account, stored as a number with two decimal places.
* **`ACCT-CASH-CREDIT-LIMIT`:**  The maximum amount of cash that can be withdrawn from the account, stored as a number with two decimal places.
* **`ACCT-OPEN-DATE`:**  The date when the account was opened, stored in the format YYYY-MM-DD.
* **`ACCT-EXPIRAION-DATE`:** The date when the account expires, stored in the format YYYY-MM-DD.
* **`ACCT-REISSUE-DATE`:**  The date when the account was last renewed, stored in the format YYYY-MM-DD.
* **`ACCT-CURR-CYC-CREDIT`:**  The total amount of credits applied to the account in the current cycle, stored as a number with two decimal places.
* **`ACCT-CURR-CYC-DEBIT`:**  The total amount of debits applied to the account in the current cycle, stored as a number with two decimal places.
* **`ACCT-ADDR-ZIP`:** The ZIP code associated with the account, stored as a 10-character string.
* **`ACCT-GROUP-ID`:** An identifier for the group the account belongs to (e.g., "PREMIUM"), stored as a 10-character string.
* **`FILLER`:**  Reserved space for future use, currently empty.

## Security

While not explicitly defined in this code snippet, access to Account Records and modifications to account information should be strictly controlled and secured through appropriate authentication and authorization mechanisms within the CardDemo system. 

## Impact on Other Systems

The Account Record structure is fundamental to the CardDemo application and impacts various system components:

* **Transaction Processing:**  Directly relies on account information for authorization, balance updates, and limit checks.
* **Customer Service Applications:**  Used for viewing account details, history, and managing account settings.
* **Reporting and Analytics:** Provides essential data for generating various reports on account performance, credit utilization, and customer behavior. 

## Models

| Name Field | Type | Description |
|---|---|---|
| ACCT-ID | Numeric(11) | Unique identifier for each account. |
| ACCT-ACTIVE-STATUS | Character(1) | Indicates if the account is active ('Y'/'N'). |
| ACCT-CURR-BAL | Decimal | Current account balance. |
| ACCT-CREDIT-LIMIT | Decimal | Maximum credit allowed on the account. |
| ACCT-CASH-CREDIT-LIMIT | Decimal | Maximum cash withdrawal limit. |
| ACCT-OPEN-DATE | Date | Date when the account was opened (YYYY-MM-DD). |
| ACCT-EXPIRAION-DATE | Date | Account expiration date (YYYY-MM-DD). |
| ACCT-REISSUE-DATE | Date | Date the account was last renewed (YYYY-MM-DD). |
| ACCT-CURR-CYC-CREDIT | Decimal | Total credits in the current cycle. |
| ACCT-CURR-CYC-DEBIT | Decimal | Total debits in the current cycle. |
| ACCT-ADDR-ZIP | String(10) | ZIP code associated with the account. |
| ACCT-GROUP-ID | String(10) | Group affiliation of the account (if any). |
| FILLER | String(178) | Space reserved for future use. | 

## Main References

* This Account Record structure likely interacts with other data structures and modules within the CardDemo system, such as transaction records, customer information, and payment processing modules.

--Made by "Smart Engineering" (by Compass.UOL)--