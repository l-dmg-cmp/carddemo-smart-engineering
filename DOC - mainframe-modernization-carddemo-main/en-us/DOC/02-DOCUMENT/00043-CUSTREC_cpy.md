Generated at: 1st October of 2024

# Customer Data Record Specification

## Title Document: CardDemo - Customer Data Structure Specification

## File

- `CUSTREC.cpy`

## Summary

This document outlines the structure of customer information within the CardDemo application. This structure, defined in the `CUSTREC.cpy` file, serves as a blueprint for how customer data is organized and stored. Understanding this structure is crucial for anyone working with customer data in the CardDemo system, including developers, testers, and business analysts. 

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial version (July 19, 2022)

## Process Description

The `CUSTREC.cpy` file defines a COBOL data structure called `CUSTOMER-RECORD`. This structure acts as a template for storing information about each customer.  Each field within the `CUSTOMER-RECORD` represents a specific attribute of the customer.

## Requirements to Start the Process

This data structure is fundamental to the CardDemo application. Any process involving customer data will rely on this structure. 

## Validations and Rules

- **Data Types:** Each field in the `CUSTOMER-RECORD` has a defined data type (e.g., `PIC 9(09)` for numeric data, `PIC X(25)` for text data). This enforces data consistency and accuracy.
- **Unique Customer ID:** The `CUST-ID` field is likely intended to be a unique identifier for each customer. 
- **Business Rules:** Specific business rules may dictate how certain fields are populated or used. For example, there might be rules around credit score validation or address verification.

## Technical Details

**Variables:**

- **`CUSTOMER-RECORD`:**  The main data structure holding all customer information.
- **`CUST-ID`:**  A unique numeric identifier for each customer.
- **`CUST-FIRST-NAME`, `CUST-MIDDLE-NAME`, `CUST-LAST-NAME`:**  Fields for storing the customer's full name.
- **`CUST-ADDR-LINE-1`, `CUST-ADDR-LINE-2`, `CUST-ADDR-LINE-3`:**  Fields for storing the customer's address.
- **`CUST-ADDR-STATE-CD`, `CUST-ADDR-COUNTRY-CD`, `CUST-ADDR-ZIP`:**  Fields for storing the customer's state, country, and ZIP code. 
- **`CUST-PHONE-NUM-1`, `CUST-PHONE-NUM-2`:** Fields for storing the customer's phone numbers.
- **`CUST-SSN`:** The customer's Social Security Number (SSN).
- **`CUST-GOVT-ISSUED-ID`:**  A government-issued identification number.
- **`CUST-DOB-YYYYMMDD`:** The customer's date of birth.
- **`CUST-EFT-ACCOUNT-ID`:** The customer's Electronic Funds Transfer (EFT) account ID.
- **`CUST-PRI-CARD-HOLDER-IND`:** An indicator of whether the customer is a primary cardholder.
- **`CUST-FICO-CREDIT-SCORE`:**  The customer's FICO credit score.

## Security

- **Data Sensitivity:** The `CUSTOMER-RECORD` contains sensitive personal information. Access to this data should be strictly controlled and protected according to relevant data privacy regulations and security best practices.

## Impact on Other Systems

- **Customer-Facing Applications:** This data structure likely underpins how customer data is displayed and managed in various parts of the CardDemo application.
- **Reporting and Analytics:**  This structure would be essential for generating reports and performing analysis on customer data.

## Data Model

| Name Field | Type | Description |
|---|---|---|
| `CUST-ID` | Numeric (9 digits) | Unique customer identifier. |
| `CUST-FIRST-NAME` | Text (25 characters) | Customer's first name. |
| `CUST-MIDDLE-NAME` | Text (25 characters) | Customer's middle name. |
| `CUST-LAST-NAME` | Text (25 characters) | Customer's last name. |
| `CUST-ADDR-LINE-1` | Text (50 characters) | Customer's address line 1. |
| `CUST-ADDR-LINE-2` | Text (50 characters) | Customer's address line 2. |
| `CUST-ADDR-LINE-3` | Text (50 characters) | Customer's address line 3. |
| `CUST-ADDR-STATE-CD` | Text (2 characters) | Customer's state code. |
| `CUST-ADDR-COUNTRY-CD` | Text (3 characters) | Customer's country code. |
| `CUST-ADDR-ZIP` | Text (10 characters) | Customer's ZIP code. |
| `CUST-PHONE-NUM-1` | Text (15 characters) | Customer's primary phone number. |
| `CUST-PHONE-NUM-2` | Text (15 characters) | Customer's secondary phone number. |
| `CUST-SSN` | Numeric (9 digits) | Customer's Social Security Number. |
| `CUST-GOVT-ISSUED-ID` | Text (20 characters) | Customer's government-issued ID. |
| `CUST-DOB-YYYYMMDD` | Text (10 characters) | Customer's date of birth (YYYYMMDD). |
| `CUST-EFT-ACCOUNT-ID` | Text (10 characters) | Customer's Electronic Funds Transfer account ID. |
| `CUST-PRI-CARD-HOLDER-IND` | Text (1 character) | Indicator if the customer is the primary cardholder. |
| `CUST-FICO-CREDIT-SCORE` | Numeric (3 digits) | Customer's FICO credit score. |

## Main References

- This data structure is likely referenced by numerous programs and modules within the CardDemo application.

--Made by "Smart Engineering" (by Compass.UOL)--