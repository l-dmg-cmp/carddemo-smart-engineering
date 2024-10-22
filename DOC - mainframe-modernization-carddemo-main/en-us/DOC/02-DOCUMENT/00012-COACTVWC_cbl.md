Generated at: 1st October of 2024

# **Credit Card Management System**

## Title

- Title Document: Credit Card Management System - Account View Functionality Specification

## File

- `\COACTVWC.cbl`

## Summary description

This document outlines the "Account View" functionality within a credit card management system. This functionality allows authorized users, such as customer service representatives, to view detailed information about a specific credit card account using the account number.

## Version History

- Version 1.0: Initial version - Basic account view functionality.

## Process Description

1. **Account Number Input:** The user provides a credit card account number.
2. **Data Retrieval:** The system retrieves account information from various data sources:
    - **Account Cross-Reference File (CARDXREF):** Used to find the corresponding customer ID based on the provided account number.
    - **Customer Data File (CUSTDAT):** Retrieves customer information (name, address, etc.) using the customer ID from the previous step.
    - **Account Data File (ACCTDAT):** Retrieves detailed account information (balance, credit limit, etc.) using the provided account number.
3. **Display Account Details:** The retrieved information is presented to the user in a clear and organized manner.
4. **Navigation:** The user can navigate to other related functionalities within the system, such as viewing transaction history or updating account information.

## Requirements to Start the Process

1. **Valid Account Number:** The user must provide a valid credit card account number.
2. **User Authentication:**  The user must be authenticated and authorized to access sensitive account information.
3. **Data Availability:** The required data files (CARDXREF, CUSTDAT, ACCTDAT) must be accessible to the system.

## Validations and Rules

* **Account Number Validation:** The system validates the entered account number to ensure it is valid and exists within the system.
* **Data Integrity:** Data retrieved from multiple files is cross-checked to ensure accuracy and consistency.
* **Security and Access Control:** Access to this functionality and sensitive financial information is restricted to authorized personnel only.

## Technical Details

**Main Program:**

* **COACTVWC:** The main COBOL program responsible for handling the "Account View" functionality.

**Main Functions/Methods:**

* **9000-READ-ACCT:** This function orchestrates the process of reading account details.
* **9200-GETCARDXREF-BYACCT:** Retrieves the customer ID associated with the account number from the CARDXREF file.
* **9300-GETACCTDATA-BYACCT:** Retrieves detailed account information from the ACCTDAT file.
* **9400-GETCUSTDATA-BYCUST:** Retrieves customer information from the CUSTDAT file.

**Variables:**

* **WS-CARD-RID-ACCT-ID:** Stores the input account number.
* **CDEMO-CUST-ID:** Stores the customer ID retrieved from CARDXREF.
* **ACCOUNT-RECORD:** Data structure holding account information from ACCTDAT.
* **CUSTOMER-RECORD:** Data structure holding customer information from CUSTDAT.

## Security

* **Access Control:** The system should implement strict access control measures to ensure that only authorized personnel can access the "Account View" functionality and view sensitive account information. This may involve role-based access control (RBAC) to restrict access based on user roles and privileges.

## Impact on Other Systems

* **Transaction History Viewing:** The "Account View" functionality may provide a link or option to view the transaction history associated with the displayed account.
* **Account Update Functionality:** Similarly, it may allow navigation to an "Account Update" functionality to modify account details.
* **Reporting Systems:** Account information retrieved by this functionality may be used as input for various reports, such as customer statements or account summaries.

## Models

| Name Field          | Type     | Description                                          |
|---------------------|----------|------------------------------------------------------|
| Account Number     | String   | Unique identifier for a credit card account.       |
| Customer ID         | Integer  | Unique identifier for a customer.                   |
| Account Status      | String   | Status of the account (e.g., Active, Closed).        |
| Current Balance     | Decimal  | Current balance of the account.                    |
| Credit Limit        | Decimal  | Maximum credit limit allowed on the account.      |
| Available Credit    | Decimal  | Amount of credit currently available for use.      |
| Customer Name      | String   | Full name of the customer.                          |
| Customer Address   | String   | Customer's billing address.                          |
| Account Open Date   | Date     | Date when the account was opened.                  |
| Expiration Date     | Date     | Expiration date of the credit card.                 |

## Main References

* **CARDXREF (Account Cross-Reference File):** Contains the relationship between account numbers and customer IDs.
* **CUSTDAT (Customer Data File):** Stores customer information.
* **ACCTDAT (Account Data File):** Stores detailed information for each credit card account.

--Made by "Smart Engineering" (by Compass.UOL)--