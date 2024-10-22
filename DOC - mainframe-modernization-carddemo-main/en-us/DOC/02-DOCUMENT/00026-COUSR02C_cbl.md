Generated at: 1st October of 2024

# CardDemo User Update Program Specification

## Title

- Title Document: CardDemo User Update Program Specification

## File

- File:  \src\COUSR02C.cbl

## Summary Description

This document outlines the specifications for the COUSR02C program within the CardDemo application. This program is responsible for managing updates to user information, ensuring data integrity and system security throughout the process. 

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial version - July 19, 2022

## Process Description

The COUSR02C program facilitates the updating of user information within the CardDemo application. The process involves the following steps:

1. **User Selection:** An administrator selects a user for update, typically from a list of existing users.
2. **Data Retrieval:** The program retrieves the selected user's information from the USRSEC file (user database).
3. **Information Display:**  The retrieved information, including user ID, first name, last name, password, and user type, is displayed on the administrator's screen for review and potential modification.
4. **Data Modification:** The administrator can modify any of the displayed fields except for the user ID.
5. **Data Validation:** Before updating the database, the program validates the modified data to ensure all mandatory fields are filled and data formats are correct. 
6. **Database Update:** If the entered data passes validation, the program updates the user's record in the USRSEC file. 
7. **Confirmation Message:**  A confirmation message is displayed to the administrator upon successful update. If errors occur during validation or update, appropriate error messages are shown.

## Requirements to Start the Process

1. **Administrator Privileges:** Only authorized administrators have access to the user update functionality.
2. **Active User Session:** An active user session is required to interact with the CardDemo application.
3. **Valid User ID:**  A valid user ID must be provided to identify the user record to be updated.

## Validations and Rules

* **Mandatory Fields:**  User ID, First Name, Last Name, Password, and User Type are mandatory fields and cannot be left empty.
* **Data Format Validation:** The program checks the data format of specific fields, such as the User ID and Password, to ensure they adhere to predefined system rules.
* **Password Confirmation:**  While not explicitly mentioned, the program should ideally prompt the administrator to re-enter the new password to prevent accidental typos.
* **Data Integrity:** The program prioritizes the accuracy and completeness of user information to maintain the integrity of the system's data.

## Technical Details

**Main Program:**

* **COUSR02C:** The main COBOL program responsible for orchestrating the user update process.

**Main Screens:**

* **COUSR2A:** The main screen used for displaying and modifying user information.

**Main Files:**

* **USRSEC:** The VSAM file containing user information, including user ID, password, user type, and other relevant details.

**Main Variables:**

* **USRIDINI:**  User ID entered by the administrator.
* **FNAMEI:** First Name of the user.
* **LNAMEI:** Last Name of the user.
* **PASSWDI:** Password entered by the administrator.
* **USRTYPEI:** User Type (e.g., Administrator, Standard User).
* **WS-MESSAGE:**  A variable used to display messages to the administrator.
* **ERRMSGO:** A variable used to display error messages to the administrator.

**Main Methods:**

* **PROCESS-ENTER-KEY:** Handles the administrator's input after pressing the Enter key.
* **UPDATE-USER-INFO:** Validates user input and updates the user information in the USRSEC file.
* **RETURN-TO-PREV-SCREEN:** Returns the administrator to the previous screen.
* **SEND-USRUPD-SCREEN:**  Sends the user update screen (COUSR2A) to the administrator's terminal.
* **RECEIVE-USRUPD-SCREEN:**  Receives data from the user update screen.
* **POPULATE-HEADER-INFO:** Populates the header information of the screen.
* **READ-USER-SEC-FILE:** Reads user information from the USRSEC file.
* **UPDATE-USER-SEC-FILE:** Updates user information in the USRSEC file.
* **CLEAR-CURRENT-SCREEN:** Clears the current screen.
* **INITIALIZE-ALL-FIELDS:** Initializes all input fields on the screen.

## Security

* **Access Control:** Only authorized administrators with appropriate access privileges can access and modify user information.
* **Data Validation:** Input data validation helps prevent malicious data or commands from being entered into the system.

## Impact on Other Systems

* **User Authentication:** Changes to user information, particularly passwords, can impact other parts of the CardDemo application that rely on user authentication.
* **Audit Logging:** While not explicitly mentioned, any changes made to user information should be logged for auditing and security purposes.

## Models

| Name Field | Type | Description |
|---|---|---|
| SEC-USR-ID | String | Unique identifier for each user. |
| SEC-USR-FNAME | String | User's first name. |
| SEC-USR-LNAME | String | User's last name. |
| SEC-USR-PWD | String | User's password for system access. |
| SEC-USR-TYPE | String | Defines the user's role and permissions within the application. |

## Main References

* **COUSR02A:**  The BMS mapset used for the user update screen.
* **COUSR2AI:**  The data structure associated with the user update screen.
* **COUSR2AO:** The data structure used for sending data to the user update screen.
* **COCOM01Y:** Copybook containing common variables and data structures.
* **COUSR02:** Copybook containing data structures specific to the COUSR02C program.
* **COTTL01Y:** Copybook containing title and header information.
* **CSDAT01Y:** Copybook containing date-related variables and routines.
* **CSMSG01Y:** Copybook containing message-related variables and routines.
* **CSUSR01Y:** Copybook containing user-related variables and data structures.
* **DFHAID:**  CICS system-related data area.
* **DFHBMSCA:** CICS communication area for BMS maps.


## Additional Considerations

* **Password Complexity Rules:** Implement password complexity rules to enhance system security. 
* **Password Encryption:** Store passwords securely using encryption to protect sensitive user data.
* **Audit Trail:** Maintain an audit trail of all user updates, including who made the changes, what was changed, and when the changes were made.
* **Error Handling:** Implement comprehensive error handling to gracefully manage unexpected situations and provide informative messages to the administrator.

--Made by "Smart Engineering" (by Compass.UOL)--