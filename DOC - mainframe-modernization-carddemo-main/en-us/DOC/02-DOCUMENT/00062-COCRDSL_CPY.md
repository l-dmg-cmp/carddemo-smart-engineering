Generated at: 1st October of 2024

# Credit Card Display Structure Specification

## Title Document: Credit Card Display Structure Specification

## File

- File: \COCRDSL.CPY

## Summary description

This document outlines the structure of how credit card information is organized and displayed within the system, particularly for user interfaces. It ensures consistent and user-friendly presentation of credit card data.

## Version History

- Version 1.0: Initial Version

## Process Description

This specification defines two data structures, `CCRDSLAI` and `CCRDSLAO`, to standardize credit card information storage and presentation. 

- **`CCRDSLAI`:** This structure defines the raw data fields for a credit card record.  It acts as a container holding individual pieces of information about the credit card.
- **`CCRDSLAO`:** This structure builds upon `CCRDSLAI` and adds display attributes to each data field. It's specifically designed for presenting this information on a screen, potentially with color coding or highlighting.

## Requirements to Start the Process

1. **COBOL Compiler:**  The code needs to be compiled and integrated into the broader system.
2. **User Interface:** A user interface (likely terminal-based) is needed to display the information according to the defined structure.

## Validations and Rules

- **Standardized Data:**  By strictly defining the structure and data types, the system ensures all credit card information is stored uniformly, simplifying processing and management.
- **Data Integrity:**  Specific data types and lengths (e.g., `PIC X(16)` for a 16-character card number) help maintain data accuracy.
- **User-Friendly Interface:** The inclusion of display attributes aims to present the information clearly and intuitively to users.

## Technical Details

**Data Structures:**

- **`CCRDSLAI`:** Container for raw credit card data.
- **`CCRDSLAO`:** Extends `CCRDSLAI` with display attributes for each field.

**Data Fields (Common to both structures):**

- **`TRNNAME`:** Transaction name (e.g., "Purchase", "Payment").
- **`TITLE01`, `TITLE02`:** Headings or labels for display.
- **`CURDATE`, `CURTIME`:**  Current date and time, likely for transaction logging.
- **`PGMNAME`:** Program name, potentially for tracking where the data is used.
- **`ACCTSID`, `CARDSID`:** Account and card identifiers for linking to customer records.
- **`CRDNAME`:**  Cardholder's name as it appears on the card.
- **`CRDSTCD`:** Credit card type code (e.g., "VISA", "MC" for Mastercard).
- **`EXPMON`, `EXPYEAR`:** Card expiry month and year.
- **`INFOMSG`, `ERRMSG`:** Messages to provide information or errors to the user.
- **`FKEYS`:** Function keys (e.g., "F1 for Help") for user interaction.

**Display Attributes (Specific to `CCRDSLAO`):**

- Fields like `C`, `P`, `H`, `V`, `O` likely represent display attributes such as color, highlighting, visibility, etc., for each data field.

## Security

- **Data Masking:** Implement data masking techniques to hide sensitive credit card information like the full card number during display, showing only the last four digits.
- **Access Control:** Restrict access to credit card information based on user roles and permissions.

## Impact on Other Systems

- **User Interface:** The defined structure directly impacts how the user interface presents credit card information.
- **Data Storage:**  The data types and lengths defined in the structures may influence how credit card data is stored in the database or files.

## Models

| Name Field | Type | Description | Display Attributes |
|---|---|---|---|
| TRNNAME | String | Transaction name | Color, Position |
| TITLE01 | String | Heading or label | Color, Position |
| CURDATE | Date | Current date | Color, Position |
| PGMNAME | String | Program name |  Color, Position |
| ACCTSID | String | Account identifier | Color, Position |
| CARDSID | String | Credit card number (masked) | Color, Position |
| CRDNAME | String | Cardholder's name | Color, Position |
| CRDSTCD | String | Credit card type code | Color, Position |
| EXPMON | String | Expiry month | Color, Position |
| EXPYEAR | String | Expiry year | Color, Position |
| INFOMSG | String | Information message | Color, Position |
| ERRMSG | String | Error message | Color, Position, Blinking |
| FKEYS | String | Function keys | Color, Position |

## Main References

- COBOL Programming Language specifications for data types and structures.
- System documentation for the user interface and data storage mechanisms.

--Made by "Smart Engineering" (by Compass.UOL)--