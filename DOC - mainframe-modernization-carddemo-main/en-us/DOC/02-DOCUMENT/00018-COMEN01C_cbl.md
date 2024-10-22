Generated at: 1st October of 2024

# CardDemo Main Menu Navigation

## Title

- Title Document: CardDemo Application - Main Menu Program Specification

## File

- `\src\COMEN01C.cbl`

## Summary Description

This document outlines the functionality of the COMEN01C program, which serves as the main menu for regular users in the CardDemo application. This program is responsible for presenting users with a list of available actions, capturing their choice, and directing them to the appropriate module for execution. 

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Released on July 19, 2022. 

## Process Description

The COMEN01C program facilitates user navigation through the CardDemo application. The process flow is as follows:

1. **Display Menu:** Upon successful login, the program presents a menu with numbered options tailored to the user's access level (regular users see different options than administrators). 
2. **Capture Choice:** The user enters the number corresponding to their desired action.
3. **Validate Input:**  The program checks if the input is a valid number within the range of available options and if the user is authorized to perform the selected action. 
4. **Direct to Action:** If the input is valid, the program redirects the user to the corresponding program module. For example, choosing to view account details will trigger the account viewing module.
5. **Handle Invalid Input:**  If the input is invalid, an error message is displayed, prompting the user to enter a correct choice.

## Requirements to Start the Process

1. **User Login:** The user must have logged in successfully.
2. **User Type:** The menu options displayed depend on whether the user is a regular user or an administrator.
3. **Menu Options:** The program needs a defined set of menu options, their corresponding program modules, and access levels. 

## Validations and Rules

* **Input Validation:** The program validates if the user's input is a number, within the allowed range, and corresponds to an accessible action based on their user type.
* **User Authorization:**  The program ensures that users can only access functions they are permitted to use, preventing unauthorized access to sensitive information or functionalities.

## Technical Details

**Main Program:**

* **`COMEN01C.cbl`:** The COBOL program that controls the main menu.

**Copybooks:**

* **`COCOM01Y.cbl`:** Contains common communication variables.
* **`COMEN02Y.cbl`:** Contains variables specific to the main menu screen.
* **`COMEN01.cbl`:** Defines the layout of the main menu screen.
* **`COTTL01Y.cbl`:**  Contains title information.
* **`CSDAT01Y.cbl`:**  Contains date-related variables and routines. 
* **`CSMSG01Y.cbl`:**  Contains message-related variables and routines.
* **`CSUSR01Y.cbl`:** Contains user-related variables and routines.

**CICS Commands:**

* **`SEND`:**  Used to display the menu screen.
* **`RECEIVE`:** Used to capture user input.
* **`XCTL`:**  Used to transfer control to other program modules.

**Variables:**

* **`WS-OPTION`:**  Stores the user's chosen menu option.
* **`CDEMO-MENU-OPT-COUNT`:**  Holds the total number of menu options.
* **`CDEMO-MENU-OPT-PGMNAME`:** An array storing the program names associated with each menu option.
* **`CDEMO-USRTYP-USER`:**  A flag indicating whether the current user is a regular user.
* **`CDEMO-MENU-OPT-USRTYPE`:**  An array indicating the user type allowed for each menu option.

**Methods/Paragraphs:**

* **`MAIN-PARA`:** The main procedure that controls the program flow.
* **`PROCESS-ENTER-KEY`:** Processes the user's selection after they press the Enter key.
* **`RETURN-TO-SIGNON-SCREEN`:**  Returns the user to the sign-on screen.
* **`SEND-MENU-SCREEN`:**  Displays the main menu screen.
* **`RECEIVE-MENU-SCREEN`:** Receives user input from the menu screen.
* **`POPULATE-HEADER-INFO`:**  Populates the header information on the screen.
* **`BUILD-MENU-OPTIONS`:** Dynamically builds the menu options based on user type.


## Security

* **Access Control:** The program enforces access control by displaying only the menu options the user is authorized to use.
* **Input Validation:** Input validation prevents potential vulnerabilities from unexpected input, enhancing the application's security.

## Impact on Other Systems

* **User Management:** The program relies on user authentication and authorization data from the user management system.
* **Program Modules:** The main menu acts as a central hub, connecting to other program modules like account viewing, transaction listing, etc. 

## Models

| Name Field | Type | Description |
|---|---|---|
| `CDEMO-MENU-OPT-NUM` | Array of Strings | Stores the number displayed for each menu option. |
| `CDEMO-MENU-OPT-NAME` | Array of Strings | Stores the descriptive names of each menu option. |
| `CDEMO-MENU-OPT-PGMNAME` | Array of Strings | Stores the program names associated with each menu option. |
| `CDEMO-MENU-OPT-USRTYPE` | Array of Strings |  Indicates the user type (e.g., 'U' for regular users, 'A' for administrators) allowed for each menu option. |

## Main References

* **CICS (Customer Information Control System):** The transaction processing system used.
* **BMS (Basic Mapping Support):**  Used for defining and managing screen layouts.
* **COBOL Copybooks:**  Reusable code modules containing data structures and logic shared across the application.

--Made by "Smart Engineering" (by Compass.UOL)--