Generated at: 1st October of 2024

# CardDemo User Management Menu

## Title

- Title Document: CardDemo Application - Administrative User Management Menu Specification

## Summary description

This document outlines the specifications for the "User Management" administrative menu within the CardDemo application. This menu is a critical component of the system's security framework, providing authorized personnel with tools to manage user accounts and their associated permissions.

## Version History

- CardDemo_v1.0-26-g42273c1-79: Initial implementation of the User Management menu.

## Process Description

The "User Management" menu within the CardDemo application presents a set of options to administrators for managing user access:

1. **User List:** Displays a comprehensive list of all registered users in the system. This list likely includes usernames, and potentially other details like user IDs or access levels.
2. **User Add:** Enables the creation of new user accounts. Administrators would input the necessary details for the new user, including a unique username, password and assigning appropriate access levels.
3. **User Update:** Facilitates the modification of existing user information. This could involve resetting passwords, updating user details, or modifying access permissions.
4. **User Delete:** Allows for the removal of user accounts from the system. This action is usually performed when a user is no longer active or their access needs to be revoked.

## Requirements to Start the Process

1. **Administrator Access:** Only authorized personnel with administrative privileges are permitted to access and use the "User Management" menu.
2. **Active CardDemo System:** The CardDemo application needs to be operational and running on the mainframe system.

## Validations and Rules

* **Access Control:**  Strict access control mechanisms are crucial. Only authenticated and authorized administrators should be able to view, modify, or delete user accounts.
* **Data Validation:**  When adding or updating users, the system must enforce data validation rules. This includes checks for unique usernames, strong password requirements, and valid data formats for other user attributes.
* **Confirmation Before Deletion:** The system should request confirmation before deleting a user account to prevent accidental deletions.

## Technical Details

**Main Program:** COADM02Y (This program defines the layout and options within the "User Management" menu)

**Subprograms:**

* **COUSR00C (User List):**  This program retrieves and displays the list of all users.
* **COUSR01C (User Add):** This program handles the creation of new user accounts.
* **COUSR02C (User Update):** This program manages the modification of existing user details.
* **COUSR03C (User Delete):**  This program handles the deletion of user accounts.

**Variables/Data Structures:**

* **CDEMO-ADMIN-OPT-COUNT:**  A variable that stores the total number of options available in the menu (in this case, 4).
* **CDEMO-ADMIN-OPTIONS-DATA:**  A data structure that holds the details for each menu option, including:
    * **CDEMO-ADMIN-OPT-NUM:**  A sequential number identifying each menu option (1, 2, 3, 4).
    * **CDEMO-ADMIN-OPT-NAME:**  A descriptive name for the menu option (e.g., "User List (Security)").
    * **CDEMO-ADMIN-OPT-PGMNAME:**  The name of the COBOL subprogram associated with each menu option (e.g., COUSR00C).

## Security

* **Authorization:** The menu itself and each of its functionalities should have robust authorization checks to ensure that only users with the necessary permissions can access and perform actions.
* **Secure Storage:** User credentials (usernames, passwords) should be stored securely, ideally using encryption or hashing algorithms to protect against unauthorized access.

## Impact on Other Systems

The "User Management" menu has a direct impact on the overall security and integrity of the CardDemo application. By controlling user access, it ensures that only authorized personnel can perform specific actions and access sensitive data within the system.

## Models

| Name Field | Type | Description |
|---|---|---|
| CDEMO-ADMIN-OPT-NUM | Numeric (9(02)) | A unique numerical identifier for each menu option. |
| CDEMO-ADMIN-OPT-NAME | Alphanumeric (X(35)) | A descriptive text label displayed for each menu option. |
| CDEMO-ADMIN-OPT-PGMNAME | Alphanumeric (X(08)) | The name of the COBOL program associated with each menu option. |

## Main References

* COADM02Y copybook (defines the structure and data for the User Management menu)
* COUSR00C (program for listing users)
* COUSR01C (program for adding new users)
* COUSR02C (program for updating user information)
* COUSR03C (program for deleting users)

--Made by "Smart Engineering" (by Compass.UOL)--