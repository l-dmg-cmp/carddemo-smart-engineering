Generated at: 1st October of 2024

# **CardDemo Administrative Data Display System**

## Title

- Title Document: CardDemo Administrative Data Display System - COBOL Copybook Specification

## File

- `\copybooks\COADM01.CPY`

## Summary Description

This document outlines the structure and function of the `COADM01.CPY` copybook within the CardDemo application. This copybook is crucial for maintaining a consistent and user-friendly display of administrative data across different screens and reports in the system.

## Version History

- Version 1.0: Initial Version

## Process Description

The `COADM01.CPY` copybook defines two data structures: `COADM1AI` and `COADM1AO`. 

1. **`COADM1AI` (Internal Format):** This structure stores administrative data in a compact, numeric format (`COMP`) for efficient processing within the mainframe environment. This format is primarily intended for internal system operations.

2. **`COADM1AO` (Display Format):** This structure redefines `COADM1AI`, mapping the numeric data to corresponding character-based fields. This transformation is essential for presenting information to users in a readable format on screens or reports.

## Requirements to Start the Process

1. **COBOL Compiler:**  The copybook requires a COBOL compiler to be included in programs that use it.
2. **CICS Environment:** The copybook is designed for use within a CICS environment, which handles screen interactions.

## Validations and Rules

* **Data Consistency:** The copybook ensures that administrative details are presented uniformly across the application.
* **User Interface:** The structure facilitates a visually organized display of information for users.
* **Error Communication:** The inclusion of an error message field (`ERRMSGL`, `ERRMSGI`) provides a standardized way to convey system issues to the user.

## Technical Details

**Data Structures:**

* **`COADM1AI`:**  Holds administrative data in a compressed numeric format.
* **`COADM1AO`:** Redefines `COADM1AI` to present data in a user-friendly, character-based format.

**Data Fields:**

* **`TRNNAMEL`, `TRNNAMEI`, etc.:** Transaction Name (used for internal identification and logging).
* **`TITLE01L`, `TITLE01I`, `TITLE02L`, `TITLE02I`, etc.:**  Screen Titles (displayed at the top of screens).
* **`CURDATEL`, `CURDATEI`, `CURTIMEL`, `CURTIMEI`:** Current Date and Time (displayed for user reference).
* **`PGMNAMEL`, `PGMNAMEI`:** Program Name (used for identification and navigation).
* **`OPTN001L`, `OPTN001I`... `OPTN012L`, `OPTN012I`:** Menu Options (presented to the user).
* **`OPTIONL`, `OPTIONI`:** Selected Option (indicates the user's choice from the menu).
* **`ERRMSGL`, `ERRMSGI`:** Error Message (displays system messages or error notifications to the user).

**Character Encoding and Presentation:**

* Fields in `COADM1AO` ending with 'C', 'P', 'H', 'V', 'O' likely control the visual attributes of data on the screen (color, highlighting, positioning, etc.).

## Security

This copybook primarily focuses on data structuring and presentation and does not directly handle sensitive information or security functions. However, the administrative data it manages, such as transaction names and user selections, could be used indirectly for audit trails or system monitoring.

## Impact on Other Systems

* **Screens and Reports:** This copybook directly impacts the display of administrative information on various screens and reports within the CardDemo application.
* **User Experience:**  Consistent presentation of information improves the user experience by providing a familiar and understandable interface.

## Models

| Name Field | Type | Description |
|---|---|---|
| TRNNAMEL | Alphanumeric (PIC X(4)) | Transaction name in internal format. |
| TRNNAMEI | Alphanumeric (PIC X(4)) | Transaction name in display format. |
| TITLE01L | Alphanumeric (PIC X(4)) | First screen title in internal format. |
| TITLE01I | Alphanumeric (PIC X(40)) | First screen title in display format. |
| CURDATEL | Alphanumeric (PIC X(4)) | Current date in internal format. |
| CURDATEI | Alphanumeric (PIC X(8)) | Current date in display format (YYYYMMDD). |
| CURTIMEL | Alphanumeric (PIC X(4)) | Current time in internal format. |
| CURTIMEI | Alphanumeric (PIC X(8)) | Current time in display format (HHMMSS). |
| PGMNAMEL | Alphanumeric (PIC X(4)) | Program name in internal format. |
| PGMNAMEI | Alphanumeric (PIC X(8)) | Program name in display format. |
| OPTN001L | Alphanumeric (PIC X(4)) | First menu option in internal format. |
| OPTN001I | Alphanumeric (PIC X(40)) | First menu option in display format. |
| OPTIONL | Alphanumeric (PIC X(4)) | Selected option in internal format. |
| OPTIONI | Alphanumeric (PIC X(2)) | Selected option in display format. |
| ERRMSGL | Alphanumeric (PIC X(4)) | Error message in internal format. |
| ERRMSGI | Alphanumeric (PIC X(78)) | Error message in display format. |

## Main References

* **COBOL Programming Language:** The copybook is written in COBOL and adheres to its syntax and data structures.
* **CICS (Customer Information Control System):**  The copybook is designed for use within a CICS environment, which is common for mainframe applications with interactive screens.
* **BMS (Basic Mapping Support):**  The copybook likely interacts with BMS maps to define the layout and presentation of data on screens.

--Made by "Smart Engineering" (by Compass.UOL)--