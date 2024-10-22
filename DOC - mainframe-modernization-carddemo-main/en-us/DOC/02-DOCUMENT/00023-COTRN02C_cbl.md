Generated at: 1st October of 2024

# CardDemo Transaction Addition

## File

- `\src\COTRN02C.cbl`

## Summary Description

This document outlines the specifications for the "Add Transaction" functionality within the CardDemo application. This functionality enables authorized users to manually input details of new credit card transactions into the system. 

## Version History

- Version: CardDemo_v1.0-15-g27d6c6f-68 (July 19, 2022)

## Process Description

This program facilitates the addition of new transactions to the CardDemo application. It functions like a digital form for recording credit card purchases.

1. **Data Input:** The user enters the details of the credit card transaction.
2. **Data Validation:** The system verifies the accuracy and completeness of the entered data.
3. **Transaction Recording:** Upon successful validation, the system assigns a unique ID to the transaction and stores the details in the database. 
4. **Confirmation:** The user receives confirmation that the transaction has been successfully added.
5. **Error Handling:** If any discrepancies are found in the entered data, the system flags the errors and prompts the user for correction.

## Requirements to Start the Process

1.  **User Authentication:** The user must be logged in to the CardDemo application with appropriate authorization to access and use the "Add Transaction" functionality.
2.  **Input Data:** The user needs to provide the required transaction details, including but not limited to:
    -   Account ID
    -   Card Number
    -   Transaction Type
    -   Category
    -   Transaction Source
    -   Description
    -   Amount
    -   Origination Date
    -   Processing Date
    -   Merchant ID
    -   Merchant Name
    -   Merchant City
    -   Merchant Zip Code

## Validations and Rules of the Process

*   **Data Type Validation:** The system verifies that data entered in each field conforms to the expected data type (e.g., numeric values for Account ID, Card Number, Amount, etc.).
*   **Data Format Validation:** The system enforces specific formats for certain data fields, such as YYYY-MM-DD for dates and -99999999.99 for the transaction amount.
*   **Data Existence Validation:** The system checks whether the entered Account ID and Card Number exist in the respective databases.
*   **Mandatory Fields:** The system ensures all mandatory fields are filled with appropriate data.
*   **Real-time Validation:** Validation occurs in real-time as the user enters data, providing immediate feedback and facilitating error correction.

## Technical Details

**Variables:**

- `WS-ACCT-ID-N`:  Numeric representation of the account ID.
- `WS-CARD-NUM-N`: Numeric representation of the card number.
- `WS-TRAN-ID-N`: Numeric representation of the generated transaction ID.
- `WS-TRAN-AMT`: Transaction amount.
- `WS-TRAN-DATE`: Date of the transaction.
- `WS-DATE-FORMAT`: Format of the date (YYYY-MM-DD).
- `TRAN-ID`: Unique identifier for each transaction.
- `TRAN-TYPE-CD`: Code representing the type of transaction.
- `TRAN-CAT-CD`: Code representing the category of the transaction.
- `TRAN-SOURCE`: Source of the transaction.
- `TRAN-DESC`: Description of the transaction.
- `TRAN-AMT`: Amount of the transaction.
- `TRAN-CARD-NUM`: Credit card number associated with the transaction.
- `TRAN-MERCHANT-ID`: Unique identifier for the merchant.
- `TRAN-MERCHANT-NAME`: Name of the merchant.
- `TRAN-MERCHANT-CITY`: City of the merchant.
- `TRAN-MERCHANT-ZIP`: Zip code of the merchant.
- `TRAN-ORIG-TS`: Timestamp indicating when the transaction was initiated.
- `TRAN-PROC-TS`: Timestamp indicating when the transaction was processed.

**Methods/Functions:**

- `PROCESS-ENTER-KEY`:  This function is triggered when the user presses the Enter key. It initiates the validation process for both key fields (Account ID and Card Number) and data fields. If the input data passes all validations, the transaction is added.
- `VALIDATE-INPUT-KEY-FIELDS`: This function validates the Account ID and Card Number entered by the user. It checks if the entries are numeric and if they exist in the system.
- `VALIDATE-INPUT-DATA-FIELDS`: This function validates all other data fields entered by the user. It ensures all mandatory fields are filled and that data conforms to the required format and type. 
- `ADD-TRANSACTION`: This function adds a new transaction record to the TRANSACT file upon successful validation of user inputs.
- `COPY-LAST-TRAN-DATA`: This function allows users to copy data from the last entered transaction, simplifying data entry for similar consecutive transactions.
- `RETURN-TO-PREV-SCREEN`: This function returns the user to the previous screen.
- `SEND-TRNADD-SCREEN`: This function displays the transaction addition screen to the user.
- `RECEIVE-TRNADD-SCREEN`: This function receives user input from the transaction addition screen.
- `POPULATE-HEADER-INFO`: This function populates header information on the screen, such as the title, transaction ID, program name, current date, and time.
- `READ-CXACAIX-FILE`: This function reads data from the CXACAIX file, which appears to be a cross-reference file for accounts.
- `READ-CCXREF-FILE`: This function reads data from the CCXREF file, which appears to be a cross-reference file for credit cards.
- `STARTBR-TRANSACT-FILE`, `READPREV-TRANSACT-FILE`, `ENDBR-TRANSACT-FILE`: These functions manage the reading and writing of transaction records from/to the TRANSACT file.
- `WRITE-TRANSACT-FILE`: This function writes a new transaction record to the TRANSACT file.
- `CLEAR-CURRENT-SCREEN`:  This function clears all fields on the current screen.
- `INITIALIZE-ALL-FIELDS`: This function initializes all data fields, typically setting them to default values or spaces.

## Security

-   **Authorization:** Only authorized users with specific roles and permissions can access and use this functionality.
-   **Data Validation and Integrity:** The rigorous validation process ensures data accuracy and protects the system from invalid or malicious data inputs.
-   **Auditability:**  All actions performed within this functionality are logged, maintaining an audit trail for security and tracking purposes.

## Impact on Other Systems

-   **Transaction Processing:** New transactions added through this functionality will be included in subsequent transaction processing routines, potentially impacting financial calculations, reporting, and other downstream processes.
-   **Account Management:** New transactions may affect account balances, credit limits, and other account-related parameters.
-   **Reporting and Analytics:**  This functionality directly influences the data used for generating reports and performing analytics related to credit card transactions, which may be used by various stakeholders for business intelligence and decision-making.

## Models

| Name Field | Type | Description |
|---|---|---|
| TRAN-ID        | Numeric     | Unique identifier for a transaction. |
| TRAN-TYPE-CD   | Code         | Represents the type of transaction (e.g., purchase, refund). |
| TRAN-CAT-CD    | Code         | Categorizes the transaction (e.g., groceries, entertainment). |
| TRAN-SOURCE    | Text         | Indicates the origin of the transaction (e.g., online, in-store). |
| TRAN-DESC      | Text         | Provides a brief description of the transaction. |
| TRAN-AMT       | Numeric     | Stores the monetary value of the transaction. |
| TRAN-CARD-NUM   | Numeric     | Holds the credit card number associated with the transaction. |
| TRAN-MERCHANT-ID | Numeric     | Identifies the merchant involved in the transaction. |
| TRAN-MERCHANT-NAME | Text         | Stores the name of the merchant. |
| TRAN-MERCHANT-CITY | Text         | Indicates the city of the merchant's location. |
| TRAN-MERCHANT-ZIP | Text         | Represents the zip code of the merchant's location. |
| TRAN-ORIG-TS   | Timestamp    | Records the date and time when the transaction was initiated. |
| TRAN-PROC-TS   | Timestamp    | Records the date and time when the transaction was processed. |

## Main References

-   `TRANSACT` file: This file stores the details of all transactions.
-   `CXACAIX` file:  A cross-reference file that likely contains account-related information.
-   `CCXREF` file: A cross-reference file that likely contains credit card-related information.

This specification is based on the analysis of the provided COBOL code snippet and aims to present the information in a clear and business-friendly language for stakeholders. However, further technical documentation and collaboration with the development team are essential for a comprehensive understanding and implementation of this functionality.

--Made by "Smart Engineering" (by Compass.UOL)--