Generated at: 1st October of 2024

# Credit Card Management System

## Title

- Title Document: Credit Card List Display and Navigation Specification

## File

- `\COCRDLIC.cbl`

## Summary Description

This document outlines the specifications for the "Credit Card List Display and Navigation" module within the Credit Card Management System. This module is responsible for presenting a list of credit cards to users and enabling them to navigate through this list efficiently. 

## Version History

- Version 1.0: Initial version - Basic credit card listing and navigation.

## Process Description

The program retrieves credit card data and displays it to the user in a paginated list format. Users can interact with the list by:

1. **Filtering:** Users can optionally narrow down the list by entering an Account ID and/or a specific Card Number.
2. **Navigation:** Users can move through the pages of results using function keys:
    - `F7` - Previous Page
    - `F8` - Next Page
3. **Selection:** Users can choose a specific card from the list to view more details or perform actions like updating card information.

## Requirements to Start the Process

1. **User Authentication:** The user must be logged into the system.
2. **User Role:** The program needs to determine the user's role (Administrator or Regular User) as this dictates which credit cards are visible. 
    - Administrators see all credit cards.
    - Regular Users only see cards linked to their own account number.

## Validations and Rules

- **Input Validation:**
    - Account ID, if entered, must be a valid 11-digit number.
    - Card Number, if entered, must be a valid 16-digit number.
- **User Role-Based Data Access:**  Credit card visibility is restricted based on user roles to protect sensitive data.
- **Single Selection for Actions:** Users can select only one card at a time to view details or perform updates.

## Technical Details

**Main Program:**

- `COCRDLIC.cbl`: This COBOL program handles all the logic for displaying the list, filtering, navigation, and user input.

**Data Structures:**

- `WS-SCREEN-DATA`: A data structure that holds the credit card information formatted for display on the screen. 
- `WS-CARD-RID`:  A data structure that holds the key fields (Card Number, Account ID) used to retrieve credit card records.

**Methods:**

- `9000-READ-FORWARD`: Retrieves a page of credit card records, moving forward through the data.
- `9100-READ-BACKWARDS`: Retrieves a page of credit card records, moving backward through the data.
- `9500-FILTER-RECORDS`: Applies the Account ID and/or Card Number filters to the retrieved records.

**Variables:**

- `WS-SCRN-COUNTER`: Keeps track of the current page number.
- `WS-MAX-SCREEN-LINES`:  Specifies the maximum number of credit card records displayed on a single page.
- `WS-CA-FIRST-CARD-NUM`, `WS-CA-LAST-CARD-NUM`, `WS-CA-FIRST-CARD-ACCT-ID`, `WS-CA-LAST-CARD-ACCT-ID`: These variables store the key fields (card number, account ID) of the first and last records displayed on the current page, used for navigation.

## Security

- **User Role-Based Access Control:** The system enforces strict access control based on user roles, ensuring only authorized personnel can view sensitive credit card information.

## Impact on Other Systems

- **Credit Card Detail View Module:** This module depends on the Credit Card List module to provide it with the selected credit card information for detailed viewing.
- **Credit Card Update Module:** This module also depends on the list module to receive the selected credit card information for updating.

## Models

| Name Field         | Type    | Description                                        |
|--------------------|---------|----------------------------------------------------|
| WS-ROW-ACCTNO     | String  | Account Number associated with the credit card.   |
| WS-ROW-CARD-NUM   | String  | Credit Card Number.                                |
| WS-ROW-CARD-STATUS | String  | Status of the credit card (e.g., Active, Inactive). |

## Main References

- `CICS (Customer Information Control System)`:  Used for transaction processing and screen handling.
- `VSAM (Virtual Storage Access Method)`: The underlying data storage mechanism for credit card records.
- `BMS (Basic Mapping Support)`:  Used for defining and managing screen layouts.
- `CARDDAT`: The VSAM file that stores the credit card data.
- `CARDAIX`: An alternate index on the CARDDAT file, likely used for efficient retrieval by Account ID.

--Made by "Smart Engineering" (by Compass.UOL)--