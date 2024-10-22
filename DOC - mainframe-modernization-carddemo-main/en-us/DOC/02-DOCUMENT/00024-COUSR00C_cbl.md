Generated at: 1st October of 2024

# CardDemo User Management: List Users

## Title

- Title Document: CardDemo Application - User List Functionality Specification

## File

- File: \src\COUSR00C.cbl

## Summary description

This document outlines the functionality of the COUSR00C program within the CardDemo application. This program is responsible for displaying a list of users to authorized personnel (administrators). It allows for navigation through paginated user records and selection of specific users for update or deletion.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial implementation of User List Functionality

## Process Description

The User List functionality provides a way for administrators to view and manage user accounts within the CardDemo system. The process involves the following steps:

1. **Access User List:** An administrator accesses the user list functionality, likely through a menu option.
2. **Initial Display:** The system retrieves and displays an initial page of user records from the secure USRSEC file. Each record likely includes User ID, Name, and User Type.
3. **Pagination:** The administrator can navigate through multiple pages of user records using function keys (PF7 for the previous page, PF8 for the next page).
4. **User Selection:**  The administrator can select a user record for update (U) or delete (D) actions.
5. **Action Handoff:** Based on the selected action (U/D), the program redirects the administrator to the appropriate program (COUSR02C for update, COUSR03C for delete) along with the selected user's ID.

## Requirements to Start the Process

1. **User Role:** Only authorized personnel with administrative privileges can access and use this functionality.
2. **Active Session:** The administrator must have an active session within the CardDemo application.

## Validations and Rules

* **Security:** Access to the user list, user details, and actions are restricted to authenticated administrators.
* **Input Validation:** The program validates user selections to ensure only valid options (U/D) are processed.
* **Data Integrity:** The program interacts with the secure USRSEC file, ensuring the integrity and confidentiality of user data.

## Technical Details

**Main Program:**

* **`COUSR00C`:** This program handles the display and management of the user list.

**Main Functions:**

* **`PROCESS-ENTER-KEY`:**  Processes user input, particularly the selection of a user for update or deletion.
* **`PROCESS-PF7-KEY`:**  Handles the navigation to the previous page of user records.
* **`PROCESS-PF8-KEY`:**  Handles the navigation to the next page of user records.
* **`PROCESS-PAGE-FORWARD`:** Fetches and populates the next page of user records.
* **`PROCESS-PAGE-BACKWARD`:** Fetches and populates the previous page of user records.
* **`POPULATE-USER-DATA`:** Populates the display fields with data from the fetched user records.
* **`INITIALIZE-USER-DATA`:** Clears the display fields to prepare for displaying a new set of records.
* **`RETURN-TO-PREV-SCREEN`:**  Returns the user to the previous screen.
* **`SEND-USRLST-SCREEN`:** Sends the user list screen to the administrator's terminal.
* **`RECEIVE-USRLST-SCREEN`:** Receives user input from the user list screen.
* **`POPULATE-HEADER-INFO`:** Populates the header information of the screen.
* **`STARTBR-USER-SEC-FILE`:** Starts a browse session with the USRSEC file.
* **`READNEXT-USER-SEC-FILE`:** Reads the next record from the USRSEC file.
* **`READPREV-USER-SEC-FILE`:** Reads the previous record from the USRSEC file.
* **`ENDBR-USER-SEC-FILE`:** Ends the browse session with the USRSEC file.

**Variables:**

* **`WS-USRSEC-FILE`:** Stores the name of the secure user file (USRSEC).
* **`CDEMO-CU00-USR-SELECTED`:** Stores the ID of the user selected for an action.
* **`CDEMO-CU00-USR-SEL-FLG`:** Stores the action selected (U/D) for the chosen user.
* **`CDEMO-CU00-PAGE-NUM`:** Tracks the current page number being displayed.
* **`CDEMO-CU00-USRID-FIRST`:**  Stores the User ID of the first record on the current page.
* **`CDEMO-CU00-USRID-LAST`:** Stores the User ID of the last record on the current page.

## Security

* **Authorization:** Access to this functionality is restricted to authorized personnel with administrative privileges, ensuring that sensitive user data is protected from unauthorized access and modification.

## Impact on Other Systems

* **User Management Programs (COUSR02C, COUSR03C):** This program directly interacts with the user update (COUSR02C) and delete (COUSR03C) programs, passing the selected user's information for further processing.
* **USRSEC File:** This program directly reads data from the USRSEC file, which likely impacts performance based on file size and system load.

## Models

| Name Field        | Type   | Description                                                  |
|--------------------|--------|--------------------------------------------------------------|
| SEC-USR-ID        | String | User ID                                                     |
| SEC-USR-FNAME     | String | User's First Name                                            |
| SEC-USR-LNAME     | String | User's Last Name                                             |
| SEC-USR-TYPE      | String | User Type (e.g., Administrator, User)                        |
| USRID01I - USRID10I | String | Display fields for User IDs on the current page              |
| FNAME01I - FNAME10I | String | Display fields for User First Names on the current page     |
| LNAME01I - LNAME10I | String | Display fields for User Last Names on the current page      |
| UTYPE01I - UTYPE10I | String | Display fields for User Types on the current page            |

## Main References

* **USRSEC File:** The secure file containing user data.
* **COUSR02C Program:**  The program responsible for updating user information.
* **COUSR03C Program:**  The program responsible for deleting user information.

--Made by "Smart Engineering" (by Compass.UOL)--