Generated at: 1st October of 2024

# CardDemo Account Update Specification

## Title

- Title Document: CardDemo Account Update Program Specification

## File

- File: COACTUPC.cbl

## Summary Description

The CardDemo Account Update Program is a COBOL program that allows authorized users (such as customer service representatives) to view and update customer account information within the CardDemo application. This program ensures data integrity, authorization, an audit trail, concurrency control, and data security.

## Version History

- Version 1.0: Initial version (July 2022)

## Process Description

The program follows these steps:

1. **Initialization:** Sets up the necessary variables and prepares the system.
2. **Input Processing:** Receives user input for account and customer details through a screen interface.
3. **Data Validation:** Checks the entered information against predefined criteria to ensure accuracy and consistency.
4. **Data Retrieval:** Retrieves existing account and customer data from VSAM files based on the provided account number.
5. **Data Comparison:** Compares new data with existing data to identify changes.
6. **Update Confirmation:** Prompts the user to confirm updates to prevent accidental modifications.
7. **Data Update:** Updates the account and customer records in VSAM files with the confirmed new information.
8. **Concurrency Check:** Checks for simultaneous updates by other users to prevent data inconsistencies.

## Requirements to Start the Process

1. **Authorized User:** Only authorized users, like customer service representatives, can access and modify account data.
2. **Account Number:** The account number is required to retrieve and update the correct account information.
3. **Customer Information:** Customer information, such as name, address, and contact details, might be required for updates.

## Validations and Rules

* **Data Integrity:** Strict data validation rules are enforced to ensure the accuracy and consistency of account information. For example, account numbers must be numeric, credit limits must be positive numbers, and phone numbers must be in the correct format.
* **Authorization:** Only authorized users are allowed to access and modify account data.
* **Audit Trail:** All updates are tracked to maintain a history of changes for each account.
* **Concurrency Control:** The program handles concurrent updates to prevent data corruption and ensure that changes made by one user do not overwrite those made by another.
* **Data Security:** Sensitive data like customer SSN and financial information is handled with care to protect customer privacy.

## Technical Details

**Main Program:**

* **COACTUPC:** The main COBOL program handling account updates.

**Data Structures:**

* **ACCT-UPDATE-RECORD:** Data structure for storing account information to be updated.
* **CUST-UPDATE-RECORD:** Data structure for storing customer information to be updated.

**Variables:**

* **WS-CARD-RID-ACCT-ID:** Account ID used for retrieving and updating account data in VSAM files.
* **WS-CARD-RID-CUST-ID:** Customer ID used for retrieving and updating customer data in VSAM files.
* **ACUP-NEW-DETAILS:**  Structure containing the new account and customer details input by the user.
* **ACUP-OLD-DETAILS:** Structure containing the original account and customer details retrieved from VSAM files.

**Methods:**

* **9000-READ-ACCT:**  Retrieves account and customer data based on the provided account number.
* **9600-WRITE-PROCESSING:** Updates account and customer records in VSAM files.
* **9700-CHECK-CHANGE-IN-REC:** Checks for changes in the account and customer records before updating to ensure data consistency.

## Security

* **Authorization:** The program should only be accessible to authorized users with appropriate credentials.
* **Data Security:** Sensitive data like customer SSN and financial information should be encrypted or protected using other security measures.

## Impact on Other Systems

* **CardDemo Application:** The program directly impacts the CardDemo application by providing the functionality to update account information.
* **VSAM Files:** The program interacts with VSAM files to read and update account and customer data.

## Models

| Name Field | Type | Description |
|---|---|---|
| ACCT-UPDATE-ID | Numeric (9,0) | Account ID |
| ACCT-UPDATE-ACTIVE-STATUS | Alphanumeric (1) | Account status (Active/Inactive) |
| ACCT-UPDATE-CURR-BAL | Numeric (10,2) | Current account balance |
| ACCT-UPDATE-CREDIT-LIMIT | Numeric (10,2) | Credit limit |
| ACCT-UPDATE-CASH-CREDIT-LIMIT | Numeric (10,2) | Cash credit limit |
| ACCT-UPDATE-OPEN-DATE | Alphanumeric (10) | Account open date (YYYY-MM-DD) |
| ACCT-UPDATE-EXPIRAION-DATE | Alphanumeric (10) | Account expiration date (YYYY-MM-DD) |
| ACCT-UPDATE-REISSUE-DATE | Alphanumeric (10) | Account reissue date (YYYY-MM-DD) |
| ACCT-UPDATE-CURR-CYC-CREDIT | Numeric (10,2) | Current cycle credit |
| ACCT-UPDATE-CURR-CYC-DEBIT | Numeric (10,2) | Current cycle debit |
| ACCT-UPDATE-GROUP-ID | Alphanumeric (10) | Account group ID |
| CUST-UPDATE-ID | Numeric (9,0) | Customer ID |
| CUST-UPDATE-FIRST-NAME | Alphanumeric (25) | Customer's first name |
| CUST-UPDATE-MIDDLE-NAME | Alphanumeric (25) | Customer's middle name |
| CUST-UPDATE-LAST-NAME | Alphanumeric (25) | Customer's last name |
| CUST-UPDATE-ADDR-LINE-1 | Alphanumeric (50) | Customer's address line 1 |
| CUST-UPDATE-ADDR-LINE-2 | Alphanumeric (50) | Customer's address line 2 |
| CUST-UPDATE-ADDR-LINE-3 | Alphanumeric (50) | Customer's address line 3 |
| CUST-UPDATE-ADDR-STATE-CD | Alphanumeric (2) | Customer's state code |
| CUST-UPDATE-ADDR-COUNTRY-CD | Alphanumeric (3) | Customer's country code |
| CUST-UPDATE-ADDR-ZIP | Alphanumeric (10) | Customer's zip code |
| CUST-UPDATE-PHONE-NUM-1 | Alphanumeric (15) | Customer's phone number 1 |
| CUST-UPDATE-PHONE-NUM-2 | Alphanumeric (15) | Customer's phone number 2 |
| CUST-UPDATE-SSN | Numeric (9,0) | Customer's Social Security Number |
| CUST-UPDATE-GOVT-ISSUED-ID | Alphanumeric (20) | Customer's government-issued ID |
| CUST-UPDATE-DOB-YYYY-MM-DD | Alphanumeric (10) | Customer's date of birth (YYYY-MM-DD) |
| CUST-UPDATE-EFT-ACCOUNT-ID | Alphanumeric (10) | Customer's EFT account ID |
| CUST-UPDATE-PRI-CARD-IND | Alphanumeric (1) | Primary card holder indicator |
| CUST-UPDATE-FICO-CREDIT-SCORE | Numeric (3,0) | Customer's FICO credit score |

## Main References

* **VSAM Files:**
    * ACCTDAT: Account master file
    * CUSTDAT: Customer master file
    * CARDDAT: Card data file
    * CARDAIX: Alternate index for CARDDAT based on account ID
    * CXACAIX: Alternate index for a card cross-reference file based on account ID

* **CICS (Customer Information Control System):**  Handles transaction processing, user interaction, and communication with the mainframe.
* **BMS (Basic Mapping Support):** Manages screen layouts and user interactions.

**Additional Considerations:**

* **Error Handling:** The program includes error handling routines to manage unexpected conditions and provide informative error messages.
* **Logging:** Consider implementing logging mechanisms to track updates and user actions for auditing and troubleshooting purposes.
* **Performance:**  Optimize data access and update operations for efficient performance, especially in high-volume transaction environments.
* **Integration:** The program should seamlessly integrate with other components of the CardDemo application.

--Made by "Smart Engineering" (by Compass.UOL)--