Generated at: 1st October of 2024

# CardDemo Transaction Report Generation

## Title

- Title Document: CardDemo Transaction Report Generation - Program Specification

## File

- `\src\CORPT00C.cbl`

## Summary description

This document outlines the specifications for the "Transaction Report Generation" module within the CardDemo application. This module empowers business users to effortlessly generate comprehensive reports summarizing credit card transactions for specific periods, such as monthly, yearly, or custom date ranges.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial version - July 19, 2022

## Process Description

The "Transaction Report Generation" module streamlines the process of obtaining summarized transaction data. Here's a breakdown of how it works:

1. **User Input:** The user selects their desired report type (Monthly, Yearly, or Custom). For custom reports, they input a start and end date.
2. **Data Validation:** The system rigorously checks the validity of user-entered dates, ensuring logical consistency and adherence to the correct format.
3. **Report Request Preparation:** Based on the user's selections, the system formulates a set of instructions, akin to a recipe, tailored for the report generation process.
4. **Request Submission:** The request, along with the instructions, is securely submitted to a queue dedicated to report generation tasks.
5. **Confirmation:** The user receives a confirmation message on their screen, acknowledging the successful submission of their report request.

## Requirements to Start the Process

1. **User Authentication:** The user must be logged into the CardDemo system.
2. **Report Type Selection:** The user needs to choose from the available report types: Monthly, Yearly, or Custom.
3. **Date Input (Custom Report):** For custom reports, the user must provide valid start and end dates.

## Validations and Rules

- **Date Validation:** The system enforces strict date validation rules to ensure data integrity. This includes checks for:
    - **Format:** Dates must adhere to the specified format (YYYY-MM-DD).
    - **Logical Order:** The start date cannot be later than the end date.
    - **Valid Dates:** Dates must represent valid calendar dates (e.g., no February 30th).
- **Confirmation:** The user is prompted to confirm their request before it is submitted for processing.

## Technical Details

**Main Program:**

- `CORPT00C.cbl`: The core program responsible for handling user input, validating data, and submitting the report generation request.

**Main Functions/Methods:**

- `PROCESS-ENTER-KEY`: Manages user input and initiates the appropriate actions based on the selected report type.
- `SUBMIT-JOB-TO-INTRDR`: Prepares and submits the report generation job to the internal reader queue.
- `WIRTE-JOBSUB-TDQ`: Writes the job details to the Transient Data Queue (TDQ) for processing.

**Variables:**

- `WS-REPORT-NAME`: Stores the name of the selected report type (e.g., "Monthly", "Yearly", "Custom").
- `WS-START-DATE`: Stores the start date for the report.
- `WS-END-DATE`: Stores the end date for the report.
- `JOB-DATA`: Contains the JCL (Job Control Language) instructions for the report generation job.

## Security

- **Authorization:** Access to the "Transaction Report Generation" module is restricted to authorized users with the necessary permissions.

## Impact on Other Systems

- **Batch Processing System:**  The module relies on the batch processing system to execute the report generation job.
- **Reporting Database:**  The report generation process retrieves data from the reporting database to compile the report.

## Models

| Name Field | Type | Description |
|---|---|---|
| WS-REPORT-NAME | String | Name of the selected report type |
| WS-START-DATE | Date | Start date for the report |
| WS-END-DATE | Date | End date for the report |
| JOB-DATA | String | JCL instructions for the report generation job |

## Main References

- `CSUTLDTC`: External program or utility used for date validation.
- `TRANREPT`: Batch program responsible for generating the transaction report.
- `JOBS`: Transient Data Queue (TDQ) used for submitting batch jobs.

--Made by "Smart Engineering" (by Compass.UOL)--