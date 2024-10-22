Generated at: 1st October of 2024

# **Card Transaction Report Layout Specification**

## Title

- Title Document: Card Transaction Report Layout Specification

## File

- `\CVTRA07Y.cpy`

## Summary Description

This document outlines the structure and content of a daily transaction report for a credit card system. The report provides a clear and organized summary of all transactions within a specified date range.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68 (July 19, 2022): Initial version

## Process Description

This code defines how the transaction data will be organized and presented in a report. It's like a template that ensures consistency and clarity for anyone reviewing the report. 

1. **Report Header:** The report starts with a header that displays the report title ("Daily Transaction Report") and the date range of the transactions included.
2. **Transaction Details:** The main body of the report lists individual transactions, each providing details such as:
    - Transaction ID
    - Account ID
    - Transaction Type (code and description)
    - Category (code and description)
    - Transaction Source
    - Amount
3. **Headers and Totals:** For better readability, the report includes column headers for each data point and calculates totals at three levels:
    - Page Total: Sum of transactions on each page
    - Account Total: Sum of transactions for each account
    - Grand Total: Sum of all transactions in the report

## Requirements to Start the Process

1. **Transaction Data:** The system needs access to a dataset containing all the necessary transaction details.
2. **Report Generation Trigger:**  A process or event should trigger the generation of this report (e.g., end of day, user request).

## Validations and Rules

* **Data Accuracy:** The system should ensure the accuracy and completeness of transaction data before generating the report.
* **Data Formatting:** The report should adhere to a consistent format for dates, currency, and other data points.

## Technical Details

**Variables:**

* **`REPORT-NAME-HEADER`:** Defines the header section of the report, including the report title and date range.
* **`TRANSACTION-DETAIL-REPORT`:**  Outlines the structure for each transaction record within the report.
* **`TRANSACTION-HEADER-1`:** Defines the column headers for the transaction details section.
* **`TRANSACTION-HEADER-2`:** A visual separator (a line) to distinguish the header from the transaction details.
* **`REPORT-PAGE-TOTALS`:**  Calculates and presents the total amount for transactions on a single page.
* **`REPORT-ACCOUNT-TOTALS`:** Calculates and presents the total amount for all transactions associated with a specific account.
* **`REPORT-GRAND-TOTALS`:** Calculates and presents the grand total amount for all transactions within the specified date range.

## Impact on Other Systems

* **Reporting System:** The output of this code will be used by the reporting system to generate the actual report.
* **Data Analysis:** The structured format of the report facilitates data analysis for business insights.

## Models

| Name Field | Type | Description |
|---|---|---|
| `REPT-SHORT-NAME` | String | Short name/code for the report. |
| `REPT-LONG-NAME` | String | Full descriptive name of the report. |
| `REPT-START-DATE` | Date | Start date for transactions included in the report. |
| `REPT-END-DATE` | Date | End date for transactions included in the report. |
| `TRAN-REPORT-TRANS-ID` | String | Unique identifier for each transaction. |
| `TRAN-REPORT-ACCOUNT-ID` | String | Identifier of the account associated with the transaction. |
| `TRAN-REPORT-TYPE-CD` | String | Code representing the type of transaction. |
| `TRAN-REPORT-TYPE-DESC` | String | Description of the transaction type. |
| `TRAN-REPORT-CAT-CD` | String | Code representing the category of the transaction. |
| `TRAN-REPORT-CAT-DESC` | String | Description of the transaction category. |
| `TRAN-REPORT-SOURCE` | String | Source or channel of the transaction. |
| `TRAN-REPORT-AMT` | Decimal | Amount of the transaction. |
| `REPT-PAGE-TOTAL` | Decimal | Total amount of transactions on a page. |
| `REPT-ACCOUNT-TOTAL` | Decimal | Total amount of transactions for an account. |
| `REPT-GRAND-TOTAL` | Decimal | Grand total amount of all transactions. |

## Main References

* **Transaction Data Source:**  This report layout relies on a data source that provides all the necessary transaction details.
* **Report Generation Engine:**  The layout will be used by a report generation engine or tool to produce the final report document.

--Made by "Smart Engineering" (by Compass.UOL)--