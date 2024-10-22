Generated at: 1st October of 2024

# CardDemo Application: Administrative Menu

## Title

- Title Document: CardDemo Application - Administrative Menu Specification

## File

- File: `\src\COADM01C.cbl`

## Summary description

This document outlines the specifications for the Administrative Menu within the CardDemo application. This menu serves as a central hub for authorized personnel to perform administrative tasks. It provides a user-friendly interface for managing various aspects of the credit card system.

## Version History

- Version CardDemo_v1.0-15-g27d6c6f-68: Initial version - July 19, 2022

## Process Description

The Administrative Menu provides authorized users with a streamlined approach to managing the CardDemo application. 

1. **Display Menu:** Upon successful login by an authorized user, the program presents a menu listing various administrative functions.
2. **Option Selection:** The administrator can choose a desired option from the displayed menu.
3. **Input Validation:** The program validates the selected option to ensure it's a valid choice.
4. **Action Execution:** Based on the chosen option, the program redirects the administrator to the corresponding administrative module.

## Requirements to Start the Process

1. **User Authentication:** The user must be authenticated as an authorized administrator to access the Administrative Menu.
2. **Menu Display:** The program should accurately display the menu options available to the administrator.

## Validations and Rules

* **Authorization:** Access to the Administrative Menu is restricted to authorized administrators.
* **Input Validation:** The program validates user input to ensure only valid options are processed.
* **Error Handling:** The program should gracefully handle invalid selections or unexpected errors.

## Technical Details

**Main Program:**

* **`COADM01C.cbl`:** This program manages the display, input, and navigation of the Administrative Menu.

**Copybooks:**

* **`COCOM01Y.cbl`:** Contains common variables and constants used across the application.
* **`COADM02Y.cbl`:**  Contains variables and data structures specific to the Administrative Menu.
* **`COADM01.cbl`:** Contains the screen layout definitions for the Administrative Menu.
* **`COTTL01Y.cbl`:** Contains variables and routines for handling screen titles and messages.
* **`CSDAT01Y.cbl`:** Contains data structures and routines for date manipulation.
* **`CSMSG01Y.cbl`:** Contains message definitions used by the application.
* **`CSUSR01Y.cbl`:** Contains user-related data structures and variables.

**Main Functions/Methods:**

* **`MAIN-PARA`:**  The main procedure that controls the program flow.
* **`PROCESS-ENTER-KEY`:** Handles the processing of user input.
* **`RETURN-TO-SIGNON-SCREEN`:** Redirects the user to the sign-on screen.
* **`SEND-MENU-SCREEN`:** Displays the Administrative Menu screen.
* **`RECEIVE-MENU-SCREEN`:** Receives user input from the Administrative Menu screen.
* **`POPULATE-HEADER-INFO`:** Populates the header information on the screen.
* **`BUILD-MENU-OPTIONS`:** Dynamically builds the menu options based on configuration.

**Variables:**

* **`WS-OPTION`:** Stores the user's selected menu option.
* **`CDEMO-ADMIN-OPT-COUNT`:**  Represents the total number of administrative menu options.
* **`CDEMO-ADMIN-OPT-PGMNAME`:** An array that stores the program names associated with each menu option.
* **`CDEMO-ADMIN-OPT-NAME`:** An array that stores the display names of each menu option.

## Security

* **Access Control:**  Access to the Administrative Menu is restricted to authorized personnel through user authentication mechanisms.
* **Input Validation:**  The program validates user input to prevent security vulnerabilities such as injection attacks.

## Impact on Other Systems

* **Other Administrative Modules:** The Administrative Menu serves as a central navigation point for other administrative modules within the CardDemo application.

## Models

Not applicable for this component as it focuses on user interface and navigation.

## Main References

* **Sign-on Program:** The Administrative Menu interacts with the sign-on program (`COSGN00C`) for user authentication.
* **Administrative Modules:** The menu references and potentially interacts with other administrative modules based on user selections.

--Made by "Smart Engineering" (by Compass.UOL)--