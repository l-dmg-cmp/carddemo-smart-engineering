Generated at: 1st October of 2024

# CardDemo Application: Secure User Authentication and Access Control

## Title

- Title Document: CardDemo Application - Sign-on Module Specification

## Summary description

This document outlines the specifications for the Sign-on module (COSGN00C) within the CardDemo application, a COBOL-based system designed for credit card management. The module ensures secure user authentication, validating user credentials against stored data. Upon successful verification, it grants users access to the application based on their defined roles, directing them to the appropriate functionalities.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Implemented role-based redirection, enhanced security measures.

## Process Description

The Sign-on module manages user access to the CardDemo application through the following steps:

1. **Display Sign-on Screen:** The module presents a screen prompting the user to enter their User ID and Password.
2. **Capture User Input:** The system captures the entered User ID and Password from the user.
3. **Validate User Credentials:** It checks if the entered User ID exists in the system. If found, it compares the entered Password against the encrypted Password stored for that User ID.
4. **Determine User Type:** Upon successful validation, the system identifies the user's role (e.g., Administrator or Regular User) from the user data.
5. **Direct User to Appropriate Menu:** Based on the user's role, the module redirects the user to the relevant part of the application (e.g., Administrator menu or Main Menu).

## Requirements to Start the Process

1. **Active CICS Environment:** The module operates within a CICS environment for transaction processing.
2. **Available VSAM Dataset:**  Access to the VSAM file (USRSEC) storing user credentials and roles is crucial.
3. **User Input:** The user needs to provide their User ID and Password.

## Validations and Rules

* **Data Validation:** The module validates user input for empty or invalid characters in the User ID and Password fields.
* **Authentication:**  Only users with valid credentials (correct User ID and matching Password) are granted access.
* **Authorization:** User access is restricted based on their role. Administrators have access to administrative functions, while regular users have limited access.

## Technical Details

**Main Program:**

* **`COSGN00C.cbl`:**  The main program handling the sign-on process.

**Main Functions:**

* **`PROCESS-ENTER-KEY`:** Processes user input from the sign-on screen, validating the entered data and initiating the authentication process.
* **`READ-USER-SEC-FILE`:** Reads user data from the VSAM file (USRSEC) based on the entered User ID. 
* **`SEND-SIGNON-SCREEN`:**  Displays the sign-on screen to the user.
* **`SEND-PLAIN-TEXT`:** Displays messages to the user.
* **`POPULATE-HEADER-INFO`:**  Populates header information on screens, including application details, date, and time. 

**Variables:**

* **`WS-USER-ID`:** Stores the entered User ID.
* **`WS-USER-PWD`:** Stores the entered Password.
* **`SEC-USR-PWD`:**  Retrieves the stored Password for the User from the VSAM file.
* **`SEC-USR-TYPE`:**  Retrieves the user type (e.g., 'ADMIN' or 'USER') from the VSAM file.

## Security

* **Authentication:** The module performs user authentication by comparing the entered Password with the stored Password for the corresponding User ID.
* **Password Storage:**  Passwords are stored securely in the VSAM file. However, the method of encryption or hashing used for Password storage is not specified in the provided code.
* **Access Control:**  Role-based access control is implemented, limiting user access to specific functions based on their defined roles.

## Impact on Other Systems

* **CardDemo Modules:**  The sign-on module is crucial for all other modules within the CardDemo application, as it controls user access and authorization.

## Models

| Name Field | Type | Description |
|---|---|---|
| WS-USER-ID | Alphanumeric (PIC X(08)) | Stores the User ID entered by the user during sign-on. |
| WS-USER-PWD | Alphanumeric (PIC X(08)) | Stores the Password entered by the user during sign-on. |
| SEC-USER-DATA | Group Item | Represents the user record retrieved from the VSAM file (USRSEC), containing user details like User ID, Password, and User Type. |
| SEC-USR-PWD | Alphanumeric (PIC X(08)) | Part of SEC-USER-DATA, stores the encrypted Password for the user. |
| SEC-USR-TYPE | Alphanumeric (PIC X(01)) | Part of SEC-USER-DATA, stores the user type (e.g., 'A' for Administrator, 'U' for Regular User). |
| CDEMO-USER-ID | Alphanumeric (PIC X(08)) | Stores the User ID in the communication area (COMMAREA) for use by other modules within the application. |
| CDEMO-USER-TYPE | Alphanumeric (PIC X(01)) | Stores the user type in the communication area (COMMAREA) for use by other modules. |

## Main References

* **`USRSEC` (VSAM File):** Stores user credentials (User ID, Password) and user type (role).
* **`COSGN00` (Copybook):** Contains data structures for the sign-on screen.
* **`CSUSR01Y` (Copybook):**  Contains data structures related to user information.
* **`COCOM01Y` (Copybook):** Likely contains common data structures and variables used across the CardDemo application.

**Additional Considerations:**

* **Password Complexity:** Enforce strong Password policies requiring users to set complex Passwords.
* **Session Management:** Implement secure session management to track user sessions and prevent unauthorized access.
* **Audit Logging:** Log all sign-on attempts, successful and unsuccessful, for security auditing and monitoring.
* **Error Handling:**  Provide specific error messages to the user for incorrect User IDs, Passwords, or unauthorized access attempts.
* **Multi-Factor Authentication (MFA):** Consider implementing MFA for an additional layer of security.

--Made by "Smart Engineering" (by Compass.UOL)--