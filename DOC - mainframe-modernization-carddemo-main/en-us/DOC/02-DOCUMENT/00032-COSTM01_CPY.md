Generated at: 1st October of 2024

# CardDemo Transaction Reporting Structure

## Title Document: CardDemo Transaction Reporting Structure - Data Layout Specification

## Summary Description

This document outlines the structure of transaction data used for generating reports within the CardDemo system. This standardized format ensures clear and consistent reporting across all functionalities.

## Version History

- Version 1.0: Initial Version

## Process Description

The CardDemo system utilizes a predefined data structure, `TRNX-RECORD`, to represent individual credit/debit card transactions for reporting purposes. This structure is divided into two main sections:

1. **`TRNX-KEY`:**  Uniquely identifies each transaction using the card number (`TRNX-CARD-NUM`) and a unique transaction ID (`TRNX-ID`). This enables efficient retrieval and tracking of individual transactions.
2. **`TRNX-REST`:** Contains detailed information about the transaction, including:
    - Transaction Type (`TRNX-TYPE-CD`): Categorizes the transaction (e.g., purchase, refund).
    - Transaction Category (`TRNX-CAT-CD`): Further classifies the transaction (e.g., groceries, travel).
    - Transaction Source (`TRNX-SOURCE`): Identifies the origin of the transaction (e.g., online, POS terminal).
    - Transaction Description (`TRNX-DESC`): Provides a brief explanation of the transaction.
    - Transaction Amount (`TRNX-AMT`): Records the monetary value of the transaction.
    - Merchant Information (`TRNX-MERCHANT-ID`, `TRNX-MERCHANT-NAME`, `TRNX-MERCHANT-CITY`, `TRNX-MERCHANT-ZIP`): Stores details about the merchant involved in the transaction.
    - Transaction Timestamps (`TRNX-ORIG-TS`, `TRNX-PROC-TS`): Records the initiation and processing times of the transaction, facilitating chronological tracking and analysis.

## Requirements to Start the Process

1.  **Transaction Data:** The system must capture all necessary transaction details as defined in the `TRNX-RECORD` structure.
2.  **Report Generation Module:** A module or component capable of processing and formatting the transaction data according to the defined structure for report generation.

## Validations and Rules

*   **Data Integrity:** All transaction data must adhere to the specified data types and lengths defined in the `TRNX-RECORD` structure to ensure data integrity.
*   **Data Validation:** The system should implement validation rules to ensure the accuracy and consistency of transaction data (e.g., valid transaction types and categories, valid date and time formats).

## Technical Details

**Variables:**

*   **`TRNX-RECORD`**:  A data structure representing a single transaction.
*   **`TRNX-KEY`**:  A sub-structure within `TRNX-RECORD` that uniquely identifies a transaction.
*   **`TRNX-REST`**: A sub-structure within `TRNX-RECORD` that holds detailed information about the transaction.
*   **`TRNX-CARD-NUM`**:  A 16-character field representing the credit/debit card number.
*   **`TRNX-ID`**:  A 16-character field serving as a unique identifier for the transaction.
*   **`TRNX-TYPE-CD`**:  A 2-character code representing the type of transaction.
*   **`TRNX-CAT-CD`**:  A 4-digit code representing the category of the transaction.
*   **`TRNX-SOURCE`**:  A 10-character field indicating the source of the transaction.
*   **`TRNX-DESC`**:  A 100-character field providing a description of the transaction.
*   **`TRNX-AMT`**:  A numeric field with two decimal places representing the transaction amount.
*   **`TRNX-MERCHANT-ID`**:  A 9-digit field representing the merchant's unique identifier.
*   **`TRNX-MERCHANT-NAME`**:  A 50-character field containing the merchant's name.
*   **`TRNX-MERCHANT-CITY`**:  A 50-character field indicating the city of the merchant's location.
*   **`TRNX-MERCHANT-ZIP`**:  A 10-character field representing the ZIP code of the merchant's location.
*   **`TRNX-ORIG-TS`**:  A 26-character field storing the date and time of the transaction initiation.
*   **`TRNX-PROC-TS`**: A 26-character field storing the date and time of the transaction processing.

## Impact on Other Systems

*   **Reporting Modules:** This standardized transaction data structure directly impacts any reporting modules within CardDemo, ensuring consistency in data formatting and presentation across reports.
*   **Data Analysis:** The structured data facilitates efficient data analysis by providing a consistent format for querying and aggregating transaction information.

## Models

| Name Field          | Type         | Description                                                     |
| ------------------- | ------------ | --------------------------------------------------------------- |
| `TRNX-CARD-NUM`     | Alphanumeric | Credit/debit card number (up to 16 digits)                   |
| `TRNX-ID`           | Alphanumeric | Unique transaction identifier (up to 16 characters)         |
| `TRNX-TYPE-CD`      | Code (2)      | Transaction type code (e.g., "PR" for Purchase, "RF" for Refund) |
| `TRNX-CAT-CD`       | Code (4)      | Transaction category code (e.g., "FOOD" for Groceries, "TRVL" for Travel) |
| `TRNX-SOURCE`       | Alphanumeric | Transaction source (e.g., "ONLINE", "POS", "ATM")            |
| `TRNX-DESC`         | Alphanumeric | Transaction description (up to 100 characters)                |
| `TRNX-AMT`          | Numeric       | Transaction amount (with 2 decimal places)                    |
| `TRNX-MERCHANT-ID`  | Numeric       | Merchant identifier (up to 9 digits)                          |
| `TRNX-MERCHANT-NAME`| Alphanumeric | Merchant name (up to 50 characters)                            |
| `TRNX-MERCHANT-CITY`| Alphanumeric | Merchant city (up to 50 characters)                            |
| `TRNX-MERCHANT-ZIP` | Alphanumeric | Merchant ZIP code (up to 10 characters)                       |
| `TRNX-ORIG-TS`      | Timestamp    | Transaction initiation timestamp                               |
| `TRNX-PROC-TS`      | Timestamp    | Transaction processing timestamp                              |

## Main References

*   **CardDemo Reporting System:** The primary system utilizing this data structure for generating transaction reports.

**Additional Considerations:**

*   **Data Dictionary:** Maintaining a comprehensive data dictionary that defines each data field and its allowed values will be beneficial for data management and consistency.
*   **Data Security:** Implement appropriate data security measures to protect sensitive transaction data from unauthorized access and modifications.
*   **Performance Optimization:** Consider performance implications when handling large volumes of transaction data and implement optimization strategies as needed.

--Made by "Smart Engineering" (by Compass.UOL)--