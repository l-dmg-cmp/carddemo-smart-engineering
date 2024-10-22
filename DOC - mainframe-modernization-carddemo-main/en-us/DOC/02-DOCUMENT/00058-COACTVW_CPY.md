Generated at: 1st October of 2024

# Card Account View Module

## Title

- Title Document: Card Account View Module Specification

## Summary description

This document outlines the specifications for the Card Account View module within the CardDemo application. This module is responsible for presenting a comprehensive view of customer account information, including account status, balances, limits, and customer details. It ensures standardized data presentation and consistency in handling account data throughout the system.

## Version History

- Version 1.0: Initial version

## Process Description

The Card Account View module retrieves and displays account information. The process involves the following steps:

1.  **Request Account Information:** The module receives a request to view account information. This request typically originates from a user action within the system.
2.  **Retrieve Data:** The module fetches the required data from the VSAM files based on the provided account ID.
3.  **Format Data:** The retrieved data is formatted into a user-friendly layout using the CACTVWAO structure. This includes formatting numeric values, arranging fields, and handling any necessary data conversions.
4.  **Display Information:** The formatted account information is presented to the user or to the requesting system component.

## Requirements to Start the Process

1.  **Account ID:** A unique identifier for the account to be viewed.

## Validations and Rules

*   **Data Retrieval Validation:** The module validates the retrieved data to ensure its integrity and completeness.
*   **Authorization:** Access to account information may be subject to authorization checks based on user roles and permissions.

## Technical Details

**Copybooks:**

*   **`COACTVW.CPY`:** Defines the data structures used for account information retrieval and display.

**Data Structures:**

*   **`CACTVWAI`:** This structure defines the format of data as it is retrieved from storage. It includes raw data fields for account details, balances, limits, customer information, and system messages.
*   **`CACTVWAO`:** This structure defines the format for presenting account information to the user or other system components. It mirrors the `CACTVWAI` structure but focuses on user-friendly formatting, such as displaying numeric values with commas and decimal points.

**Business Rules:**

*   **Standardized Account Information:** The `CACTVWAI` structure ensures that account data is handled consistently throughout the system.
*   **Clear Data Presentation:** The `CACTVWAO` structure provides a clear and understandable format for presenting account information.
*   **Comprehensive Account Snapshot:** The module aims to provide a complete view of account-related information, including balances, limits, customer details, and any system messages.

## Impact on Other Systems

*   **User Interface:** The module provides data for display in user interfaces, such as account summary screens or printed reports.
*   **Other System Modules:** Other modules within the CardDemo application may request account information through this module.

## Models

| Name Field        | Type        | Description                                                                                                                                                                                                      |
| ----------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ACCTSIDI`        | Alphanumeric | Unique Account ID.                                                                                                                                                                                                    |
| `ACSTTUSI`        | Alphanumeric | Account Status (e.g., 'A' for Active, 'C' for Closed).                                                                                                                                                               |
| `ACRDLIMI`        | Alphanumeric | Credit Limit (formatted as text).                                                                                                                                                                                    |
| `ACURBALI`        | Alphanumeric | Current Account Balance (formatted as text).                                                                                                                                                                         |
| `ACSFNAMI`        | Alphanumeric | Customer First Name.                                                                                                                                                                                                |
| `ACSMNAMI`        | Alphanumeric | Customer Middle Name.                                                                                                                                                                                               |
| `ACSLNAMI`        | Alphanumeric | Customer Last Name.                                                                                                                                                                                                 |
| `ACSADL1I`        | Alphanumeric | Customer Address Line 1.                                                                                                                                                                                               |
| `ACSSTTEI`        | Alphanumeric | Customer Address State Code.                                                                                                                                                                                           |
| `ACSADL2I`        | Alphanumeric | Customer Address Line 2.                                                                                                                                                                                               |
| `ACSZIPCI`        | Alphanumeric | Customer Address ZIP Code.                                                                                                                                                                                            |
| `ACSCITYI`        | Alphanumeric | Customer City.                                                                                                                                                                                                      |
| `ACSCTRYI`        | Alphanumeric | Customer Country Code.                                                                                                                                                                                               |
| `ACSPHN1I`        | Alphanumeric | Customer Phone Number 1.                                                                                                                                                                                             |
| `ACSGOVTI`        | Alphanumeric | Customer Government Identification Number (e.g., Social Security Number).                                                                                                                                             |
| `ACSPHN2I`        | Alphanumeric | Customer Phone Number 2.                                                                                                                                                                                             |
| `ACSEFTCI`        | Alphanumeric | Customer Effective Date (date the customer information became effective).                                                                                                                                              |
| `ACSPFLGI`        | Alphanumeric | Customer Profile Flag (indicates specific customer attributes or flags).                                                                                                                                                 |
| `INFOMSGI`        | Alphanumeric | Informational Messages related to the account.                                                                                                                                                                          |
| `ERRMSGI`        | Alphanumeric | Error Messages related to the account.                                                                                                                                                                               |
| `ADTOPENI`        | Alphanumeric | Account Date Open.                                                                                                                                                                                                    |
| `AEXPDTI`        | Alphanumeric | Account Expiration Date.                                                                                                                                                                                                 |
| `ACSHLIMI`        | Alphanumeric | Account Cash Limit.                                                                                                                                                                                                   |
| `AREISDTI`        | Alphanumeric | Account Reissue Date.                                                                                                                                                                                                  |
| `ACRCYCRI`        | Alphanumeric | Account Currency.                                                                                                                                                                                                      |
| `AADDGRPI`        | Alphanumeric | Account Address Group.                                                                                                                                                                                                 |
| `ACRCYDBI`        | Alphanumeric | Account Currency Debit.                                                                                                                                                                                                 |
| `ACSTNUMI`        | Alphanumeric | Account Statement Number.                                                                                                                                                                                              |
| `ACSTSSNI`        | Alphanumeric | Account Statement Season.                                                                                                                                                                                             |
| `ACSTDOBI`        | Alphanumeric | Account Statement Date Open.                                                                                                                                                                                           |
| `ACSTFCOI`        | Alphanumeric | Account Statement First Contact.                                                                                                                                                                                        |
| `TRNNAMEI`        | Alphanumeric | Transaction Name.                                                                                                                                                                                                     |
| `TITLE01I`       | Alphanumeric | Title 01.                                                                                                                                                                                                           |
| `CURDATEI`       | Alphanumeric | Current Date.                                                                                                                                                                                                         |
| `PGMNAMEI`       | Alphanumeric | Program Name.                                                                                                                                                                                                        |
| `TITLE02I`       | Alphanumeric | Title 02.                                                                                                                                                                                                           |
| `CURTIMEI`       | Alphanumeric | Current Time.                                                                                                                                                                                                         |

## Main References

-   **VSAM Files:** Account information is stored in VSAM files. The specific VSAM files accessed by this module are determined by the CardDemo application's data model.
-   **COBOL Programs:** Other COBOL programs within the CardDemo application may interact with this module to request or update account information.
-   **BMS Maps:** The module uses BMS maps for screen formatting and user interaction.
-   **CICS Commands:** CICS commands are used for transaction processing, data retrieval, and screen handling.

--Made by "Smart Engineering" (by Compass.UOL)--