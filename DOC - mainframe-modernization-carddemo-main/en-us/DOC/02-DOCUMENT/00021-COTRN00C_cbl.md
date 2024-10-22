Generated at: 1st October of 2024

# CardDemo Application: Transaction Listing Functionality

## Title Document: CardDemo Transaction Listing Module - Technical Specification

## File

- `\src\COTRN00C.cbl`

## Summary Description

This document outlines the technical specifications for the Transaction Listing module within the CardDemo application. This module provides users with a way to view their credit card transaction history, similar to a bank statement. It allows for navigation through pages of transactions and displays key details like transaction ID, date, description, and amount.

## Version History

- Version 1.0: Initial version

## Process Description

The Transaction Listing module retrieves transaction records from the VSAM database and presents them to the user in a paginated format. Users can navigate through their transaction history using page up and page down functionalities. The module also allows for transaction selection, although this feature is not fully implemented in the current version. 

## Requirements to Start the Process

1. **User Authentication:** The user should be authenticated and authorized to access the CardDemo application.
2. **Active Session:** The user should have an active session with the application.
3. **Transaction Data:** The TRANSACT file in the VSAM database should contain the user's transaction history.

## Validations and Rules

* **Data Retrieval:** The system should only retrieve transactions associated with the logged-in user's account.
* **Pagination:** The number of transactions displayed per page should be limited to avoid overwhelming the user.
* **Navigation Limits:** The system should prevent navigation beyond the first and last pages of the transaction history.
* **Error Handling:**  Appropriate error messages should be displayed for invalid inputs or system errors.

## Technical Details

**Main Program:**

* **`COTRN00C.cbl`:** This COBOL program handles the transaction listing functionality.

**Main Functions/Paragraphs:**

* **`MAIN-PARA`:**  The main procedure that controls the program flow.
* **`PROCESS-ENTER-KEY`:**  Handles user input for transaction selection.
* **`PROCESS-PF7-KEY`:**  Handles the "Page Up" functionality.
* **`PROCESS-PF8-KEY`:**  Handles the "Page Down" functionality.
* **`PROCESS-PAGE-FORWARD`:**  Retrieves and displays the next page of transactions.
* **`PROCESS-PAGE-BACKWARD`:** Retrieves and displays the previous page of transactions.
* **`POPULATE-TRAN-DATA`:**  Fills the screen fields with transaction details.
* **`INITIALIZE-TRAN-DATA`:**  Clears the screen fields for the next set of transactions.
* **`SEND-TRNLST-SCREEN`:**  Sends the transaction list screen to the user's terminal.
* **`RECEIVE-TRNLST-SCREEN`:**  Receives user input from the transaction list screen.
* **`STARTBR-TRANSACT-FILE`:**  Opens the TRANSACT file for browsing.
* **`READNEXT-TRANSACT-FILE`:**  Reads the next transaction record from the file.
* **`READPREV-TRANSACT-FILE`:**  Reads the previous transaction record from the file.
* **`ENDBR-TRANSACT-FILE`:**  Closes the TRANSACT file.

**Variables:**

* **`WS-TRANID`:**  Transaction ID for COTRN00C.
* **`WS-TRANSACT-FILE`:**  Name of the VSAM file containing transaction data.
* **`WS-PAGE-NUM`:**  Current page number being displayed.
* **`CDEMO-CT00-TRNID-FIRST`:**  Transaction ID of the first transaction on the current page.
* **`CDEMO-CT00-TRNID-LAST`:**   Transaction ID of the last transaction on the current page.
* **`CDEMO-CT00-PAGE-NUM`:**     Current page number.
* **`TRAN-ID`:**  Transaction ID used for retrieving records.
* **`TRAN-AMT`:**  Transaction amount.
* **`TRAN-ORIG-TS`:**  Transaction timestamp.
* **`TRAN-DESC`:**  Transaction description.

## Security

* **User Authentication and Authorization:** The CardDemo application should have security mechanisms to authenticate users and authorize access to transaction data. 
* **Data Privacy:** Transaction data should be handled securely to protect user privacy. 

## Impact on Other Systems

* **Account Management Module:** The Transaction Listing module might be integrated with the Account Management module, allowing users to view transactions within the context of their account details.
* **Reporting Module:** Transaction data displayed in this module could be used as input for generating reports in a separate Reporting module.

## Models

Not applicable for this specific module as it primarily deals with data retrieval and presentation.

## Main References

* **`COTRN0A`:**  BMS mapset used for the transaction listing screen.
* **`TRANSACT`:**  VSAM file containing transaction data. 
* **`COSGN00C`:** Program handling the sign-on process.
* **`COMEN01C`:**  Program handling the main menu.
* **`COTRN01C`:**  Program handling the transaction details view.

**Additional Considerations:**

* **User Interface:**  The user interface should be intuitive and user-friendly. Consider using clear labels, consistent formatting, and providing visual cues for navigation.
* **Performance:** Optimize data retrieval and screen rendering for optimal performance, especially when dealing with large transaction histories.
* **Error Logging:**  Implement error logging to track and resolve issues effectively.
* **Internationalization:**  If the application needs to support multiple languages and currencies, ensure the module is designed to handle these requirements.

--Made by "Smart Engineering" (by Compass.UOL)--