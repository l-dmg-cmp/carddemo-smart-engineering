Generated at: 1st October of 2024

# **Card Transaction Interest Rate Grouping**

## Title

- Title Document: CardDemo - Disclosure Group Structure Specification

## File

- `\CVTRA02Y.cpy`

## Summary description

This document outlines the structure and function of the "Disclosure Group" within the CardDemo application. This structure is crucial for determining the interest rate applied to specific credit card transactions based on factors like account type, transaction type, and category.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68 (July 19, 2022): Initial version

## Process Description

The Disclosure Group structure defines how the system categorizes and assigns interest rates to different types of credit card transactions. Each group represents a unique combination of Account Group, Transaction Type, and Transaction Category. 

When a transaction occurs, the system identifies its corresponding Disclosure Group using these attributes. The interest rate associated with that specific group is then applied to calculate the interest charged on the transaction.

## Requirements to Start the Process

1. **Defined Account Groups:** A predefined set of codes representing different account groups (e.g., Gold, Platinum).
2. **Defined Transaction Types:** A predefined set of codes representing different transaction types (e.g., Purchase, Cash Advance).
3. **Defined Transaction Categories:** A predefined set of codes representing different transaction categories (e.g., Groceries, Travel).
4. **Assigned Interest Rates:** Each Disclosure Group must have an assigned interest rate, defined as a percentage.

## Validations and Rules

* **Unique Disclosure Groups:** Each combination of Account Group, Transaction Type, and Transaction Category must represent a unique Disclosure Group.
* **Valid Interest Rate:** The assigned interest rate must be a valid numerical value within a predefined range.

## Technical Details

**Data Structure:**

- `DIS-GROUP-RECORD`:  Represents a single Disclosure Group.
    - `DIS-GROUP-KEY`:  Uniquely identifies the Disclosure Group.
        - `DIS-ACCT-GROUP-ID`: A 10-character code for the Account Group.
        - `DIS-TRAN-TYPE-CD`: A 2-character code for the Transaction Type.
        - `DIS-TRAN-CAT-CD`: A 4-digit numeric code for the Transaction Category.
    - `DIS-INT-RATE`: A signed numeric field (with two decimal places) storing the interest rate associated with this Disclosure Group.

## Impact on Other Systems

* **Transaction Processing:** This structure directly impacts how the system calculates interest on credit card transactions.
* **Reporting:** The Disclosure Group structure can be used for generating reports on interest income based on different transaction categories.

## Models

| Name Field | Type | Description |
|---|---|---|
| DIS-ACCT-GROUP-ID | String (10 characters) | Unique code for identifying an Account Group. |
| DIS-TRAN-TYPE-CD | String (2 characters) |  Unique code for identifying a Transaction Type. |
| DIS-TRAN-CAT-CD | Integer (4 digits) |  Unique code for identifying a Transaction Category. |
| DIS-INT-RATE | Decimal (4 digits, 2 decimal places) | Interest rate associated with the Disclosure Group. |

## Main References

* **Transaction Processing Module:**  This module would use the Disclosure Group information to apply the correct interest rate to each transaction.
* **Account Management Module:**  This module would likely be responsible for defining and managing the different Account Groups.

**Additional Considerations:**

* **Maintenance:**  The system should allow for easy maintenance of Disclosure Groups, including adding new groups, modifying existing groups, and deactivating outdated groups.
* **Auditing:**  All changes to Disclosure Groups should be logged for auditing purposes.

--Made by "Smart Engineering" (by Compass.UOL)--