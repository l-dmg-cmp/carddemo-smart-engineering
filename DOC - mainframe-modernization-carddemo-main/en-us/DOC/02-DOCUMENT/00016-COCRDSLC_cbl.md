Generated at: 1st October of 2024

# Credit Card Detail Retrieval System

## Title Document: Credit Card Detail Retrieval Program - Functional Specification

## File

-  \src\COCRDSLC.cbl

## Summary Description

The Credit Card Detail Retrieval program is a core component of the credit card management system. It allows customer service representatives to quickly access detailed credit card information using either the account number or the card number. This program emphasizes data security by validating user inputs before accessing sensitive information.

## Version History

- Version 1.0: Initial version (April 2022)

## Process Description

1. **Input Capture:**  The program receives either an account number or a card number as input.
2. **Input Validation:** The program checks if the provided input is valid (numeric and of the correct length). 
3. **Database Search:**  If valid, the program searches the 'CARDDAT' database for a matching record.
4. **Data Retrieval:** Upon finding a match, the program retrieves all relevant card details.
5. **Data Display:** The program formats the retrieved information and sends it back to the user interface for display.

## Requirements to Start the Process

1. **User Input:** The user needs to provide either a valid account number or card number.
2. **Database Connection:** The program requires access to the 'CARDDAT' database.

## Validations and Rules

- **Data Type Validation:** The program ensures the entered account or card number is numeric.
- **Length Validation:** The program verifies the entered data is the correct length (11 digits for the account number, 16 digits for the card number).
- **Data Security:** The program will not access the database if the input is invalid, protecting against unauthorized data access.

## Technical Details

**Main Program:** COCRDSLC.cbl

**Variables:**

- **`WS-CARD-RID-CARDNUM`:** Stores the input card number (16 digits).
- **`WS-CARD-RID-ACCT-ID`:** Stores the input account number (11 digits).
- **`LIT-CARDFILENAME`:**  Holds the name of the credit card database file ('CARDDAT').

**Methods:**

- **`9100-GETCARD-BYACCTCARD`:**  This method searches the 'CARDDAT' database using the provided card number.
- **`9150-GETCARD-BYACCT`:** This method is not used in this version of the program. It suggests the possibility of searching by account number using a different index or access path in the future.

## Security

- **Input Validation:** By strictly validating user inputs, the program prevents SQL injection attempts and unauthorized data access.

## Impact on Other Systems

- **User Interface:** The program provides data to the user interface for display to the customer service representative.
- **CARDDAT Database:** The program directly interacts with the 'CARDDAT' database for data retrieval.

## Models

| Name Field           | Type | Description                              |
|----------------------|------|------------------------------------------|
| WS-CARD-RID-CARDNUM | X(16) | Credit Card Number (16 characters)       |
| WS-CARD-RID-ACCT-ID | 9(11) | Account Number (11 digits)               |
| CARD-RECORD          | Array | Contains the retrieved credit card data |

## Main References

- **`CARDDAT` Database:** The primary data source for credit card information.
- **User Interface:** The system responsible for capturing user input and displaying the retrieved card details.

--Made by "Smart Engineering" (by Compass.UOL)--