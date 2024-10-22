Generated at: 1st October of 2024

# **CardDemo User Management System**

## Title

- Title Document: CardDemo User Management System - Add New User Specification

## File

- \CardDemo Application\Main Programs\COUSR01C.cbl

## Summary description

This document outlines the specifications for the "Add New User" functionality within the CardDemo User Management System. This functionality allows administrators to create new user accounts in the system. The program ensures data integrity by validating user inputs and enforcing business rules, including mandatory fields and unique user IDs.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: User Management Update

## Process Description

The "Add New User" process enables the addition of new users to the CardDemo system with the following steps:

1.  **Access User Add Screen:** The administrator navigates to the "Add User" screen.
2.  **Input User Data:** The administrator enters the new user's information, including First Name, Last Name, User ID, Password, and User Type (Regular or Admin).
3.  **Submit User Data:** The administrator submits the entered data.
4.  **Data Validation:** The system validates the input data, ensuring all mandatory fields are filled and the chosen User ID is unique.
5.  **Save User Data:** If validation is successful, the system saves the new user's information to the USRSEC file (user database).
6.  **Confirmation Message:** The system displays a confirmation message to the administrator, indicating successful user creation.
7.  **Clear Input Fields:** The system clears the input fields, preparing the screen for another user to be added.

## Requirements to Start the Process

1.  **Administrator Access:** The user initiating the process must have administrator privileges.
2.  **Access to Add User Screen:** The administrator should be able to navigate to the "Add User" screen within the CardDemo application.

## Validations and Rules

*   **Mandatory Fields:** First Name, Last Name, User ID, Password, and User Type are mandatory fields. The system will not proceed without these fields being filled.
*   **Unique User ID:** Each User ID must be unique. Attempts to create a user with an existing User ID will be rejected.
*   **User Roles:** The system recognizes two user roles: "Regular" and "Admin". The administrator assigns one of these roles to the new user during account creation.

## Technical Details

**Main Program:**

*   **COUSR01C.cbl:** The main program responsible for handling the "Add New User" functionality.

**Data Structures/Copybooks:**

*   **COUSR1AO:** Defines the output fields displayed on the "Add User" screen.
*   **COUSR1AI:** Defines the input fields received from the "Add User" screen.
*   **COCOM01Y:** Contains common variables and constants.
*   **COUSR01:** Contains data structures specific to user management.
*   **COTTL01Y:** Contains definitions for titles and labels.
*   **CSDAT01Y:** Contains date-related variables and routines.
*   **CSMSG01Y:** Contains message-related variables and routines.
*   **CSUSR01Y:** Contains user-related variables and routines.

**Files:**

*   **USRSEC:** The user database file containing user information, including User ID, password, and user type.

**Variables:**

*   **WS-USRSEC-FILE:** Contains the file name 'USRSEC' for accessing the user database.
*   **SEC-USR-ID:** Stores the User ID entered by the administrator.
*   **SEC-USR-FNAME:** Stores the First Name entered by the administrator.
*   **SEC-USR-LNAME:** Stores the Last Name entered by the administrator.
*   **SEC-USR-PWD:** Stores the Password entered by the administrator.
*   **SEC-USR-TYPE:** Stores the User Type selected by the administrator.

**Methods:**

*   **WRITE-USER-SEC-FILE:** Writes the new user data to the USRSEC file.
*   **INITIALIZE-ALL-FIELDS:** Clears the input fields on the "Add User" screen.

## Security

*   **Access Control:** Only administrators have access to the "Add New User" functionality.
*   **Password Management:** While the program captures the password entered by the administrator, it is crucial to implement secure password storage and management practices to protect user credentials.

## Impact on Other Systems

*   **User Authentication:** The successful creation of a new user in USRSEC allows the user to log in to the CardDemo system and access authorized functionalities.
*   **Auditing:** The system should log all user creation events for audit and security purposes.

## Models

| Name Field     | Type | Description                     |
| :------------- | :---- | :------------------------------ |
| SEC-USR-ID    | X(XX) | Unique user identifier          |
| SEC-USR-FNAME | X(XX) | User's first name               |
| SEC-USR-LNAME | X(XX) | User's last name                |
| SEC-USR-PWD   | X(XX) | User's password                |
| SEC-USR-TYPE  | X(XX) | User's role (Regular or Admin) |

## Main References

*   **USRSEC file:** The primary data store for user information.
*   **COUSR01 copybook:** Contains data structures specific to user management.
*   **CSUSR01Y copybook:** Contains user-related variables and routines.
*   **CardDemo Application Security Guidelines:** Refer to these guidelines for information on secure password storage and management practices.

**Additional Considerations:**

*   **Password Complexity Rules:** Implement password complexity rules to enhance security.
*   **Error Handling:** Enhance error handling to provide more user-friendly messages and logging for debugging.
*   **Internationalization:** Consider supporting multiple languages for user names and messages if the application requires it.
*   **Accessibility:** Design the "Add New User" screen following accessibility guidelines to accommodate users with disabilities.

**Note:** This specification is based on the provided code snippet and assumes certain functionalities and data structures based on common COBOL programming practices. Further refinement may be required based on the complete CardDemo system documentation and requirements.

--Made by "Smart Engineering" (by Compass.UOL)--