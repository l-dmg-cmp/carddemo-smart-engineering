Generated at: 1st October of 2024

# CardDemo User Management - User Deletion

## Title Document: CardDemo User Management - User Deletion Specification

## Summary Description

This document outlines the specifications for the "Delete User" functionality within the CardDemo application, a COBOL-based system designed for managing credit card operations. This functionality enables authorized users, likely administrators, to remove user accounts from the system, adhering to essential business rules for security and data integrity.

## Version History

- Version 1.0: Initial version - User deletion with basic validation and confirmation.

## Process Description

The User Deletion process enables the removal of a user's access and information from the CardDemo system. The process involves the following steps:

1. **User Identification:** An authorized user initiates the deletion process by providing the User ID of the account to be deleted.
2. **Confirmation Check:** The system retrieves and displays the user's details based on the entered User ID. This step allows the administrator to confirm that they are deleting the correct account, thus ensuring data integrity.
3. **Deletion Execution:** Upon confirmation, usually by pressing a designated function key, the system removes the user's record from the 'USRSEC' file, which likely stores user credentials and information.
4. **Result Communication:** The system provides feedback to the administrator, confirming the successful deletion or displaying an error message if any issues occurred during the process.

## Requirements to Start the Process

1. **Authorized User:** Only authorized personnel, such as administrators, with the necessary privileges can access and execute the user deletion functionality.
2. **Valid User ID:** A valid User ID of the account to be deleted must be provided.
3. **Confirmation:** The system requires explicit confirmation from the administrator to proceed with the deletion, mitigating the risk of accidental deletions.

## Validations and Rules

* **Authorization:** Only authenticated users with appropriate roles and permissions can delete user accounts, ensuring system security.
* **User ID Validation:** The system checks the validity of the entered User ID. Deletion proceeds only if the User ID exists in the 'USRSEC' file.
* **Confirmation Requirement:** The system mandates user confirmation before executing the deletion to prevent unintended data loss.
* **Error Handling:** The system incorporates error handling mechanisms to manage and communicate any issues encountered during the deletion process, such as an invalid User ID or problems accessing the 'USRSEC' file.

## Technical Details

**Main Programs:**

* **`COUSR03C`:** This program handles the user deletion process within the CardDemo application.

**Main Functions/Methods:**

* **`PROCESS-ENTER-KEY`:** This function validates the entered User ID and retrieves user information from the 'USRSEC' file.
* **`DELETE-USER-INFO`:** This function handles the deletion of the user record from the 'USRSEC' file.
* **`READ-USER-SEC-FILE`:**  This function reads user data from the 'USRSEC' file based on the provided User ID.
* **`DELETE-USER-SEC-FILE`:** This function performs the deletion of the user record from the 'USRSEC' file.

**Variables:**

* **`USRIDINI`:**  A string representing the User ID input by the administrator.
* **`SEC-USER-DATA`:**  A data structure containing user information read from the 'USRSEC' file.
* **`WS-USRSEC-FILE`:** A string variable storing the name of the 'USRSEC' file, likely 'USRSEC'.

## Security

* **Authorization:** The user deletion functionality is restricted to authenticated users with specific roles and permissions. This restriction is crucial to prevent unauthorized access and actions within the system. While the specific authorization mechanism is not detailed in the provided code, it's assumed to be part of the broader CardDemo security framework, potentially managed through CICS security features.

## Impact on Other Systems

* **User Authentication:** Deleting a user from the 'USRSEC' file directly impacts user authentication. The deleted user can no longer log in to the CardDemo application, as their credentials are removed from the system.
* **Auditing and Reporting:** The user deletion process should be logged for audit trails. This ensures accountability and traceability of actions within the CardDemo application.

## Models

| Name Field        | Type   | Description                                      |
|-------------------|--------|--------------------------------------------------|
| `SEC-USR-ID`     | String | User ID for identifying a user in the system. |
| `SEC-USR-FNAME`  | String | User's First Name.                             |
| `SEC-USR-LNAME`  | String | User's Last Name.                              |
| `SEC-USR-TYPE`   | String | User's Type (e.g., Administrator, User).       |

## Main References

* **`USRSEC` file:** The primary data file containing user information, including credentials and details.
* **CICS (Customer Information Control System):** The transaction processing system used by CardDemo. It likely handles user authentication and authorization.

**Additional Considerations:**

* **Data Retention Policy:**  Consider implementing a 'deactivation' flag instead of permanent deletion to comply with data retention policies. A deactivated user account becomes unusable but their data is retained in the system.
* **Audit Trail:** Implement a comprehensive audit trail to log user deletion events, including the user performing the deletion, the deleted user's ID, and the timestamp. This log enhances security and provides an audit history for tracking actions within the system.
* **Confirmation Message:** Enhance the confirmation message to clearly display the consequences of deleting a user account, such as irreversibility and impact on other functionalities. This provides a final checkpoint for the administrator and minimizes the risk of accidental deletions.

--Made by "Smart Engineering" (by Compass.UOL)--