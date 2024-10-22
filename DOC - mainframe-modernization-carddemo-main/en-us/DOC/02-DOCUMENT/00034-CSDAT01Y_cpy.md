Generated at: 1st October of 2024

# **CardDemo Date and Time Management**

## Title

- Title Document: CardDemo Application - Date and Time Standard Specification

## File

- `\CSDAT01Y.cpy`

## Summary description

This document outlines the standardized format for handling date and time information within the CardDemo application. It ensures consistency and accuracy in recording, displaying, and processing dates and times across all system functionalities.

## Version History

- CardDemo_v1.0-15-g27d6c6f-68: Initial version - July 19, 2022

## Process Description

The `CSDAT01Y.cpy` file defines a standard structure for representing date and time information within the CardDemo application. 

1. **Date and Time Storage:**  It establishes specific containers to hold year, month, day, hour, minute, second, and millisecond values.

2. **Format Flexibility:** The code supports different display formats for dates (YYYY-MM-DD, MM/DD/YY) and times (HH:MM:SS), ensuring compatibility with various input/output sources.

3. **Internal Representation:** It handles the conversion of these human-readable formats into a consistent internal representation that the system can efficiently use for calculations and comparisons.

## Requirements to Start the Process

1. This standard must be implemented and referenced in all modules and programs of the CardDemo application that handle date and time information.

## Validations and Rules

* **Accuracy:** All modules must adhere to the defined formats to ensure accurate date and time recording and processing.
* **Consistency:**  The same format should be used consistently across the application to avoid discrepancies and ensure data integrity.

## Technical Details

**Variables:**

* **`WS-CURDATE`:** Stores the current date in YYYYMMDD format.
* **`WS-CURDATE-YEAR`:** Stores the current year (YYYY).
* **`WS-CURDATE-MONTH`:** Stores the current month (MM).
* **`WS-CURDATE-DAY`:** Stores the current day (DD).
* **`WS-CURTIME`:** Stores the current time in HHMMSS format.
* **`WS-CURTIME-HOURS`:** Stores the current hour (HH).
* **`WS-CURTIME-MINUTE`:** Stores the current minute (MM).
* **`WS-CURTIME-SECOND`:** Stores the current second (SS).
* **`WS-CURTIME-MILSEC`:** Stores the current millisecond (hundreths of a second).
* **`WS-CURDATE-MM-DD-YY`:**  Stores the date in MM/DD/YY format.
* **`WS-CURTIME-HH-MM-SS`:** Stores the time in HH:MM:SS format.
* **`WS-TIMESTAMP`:** Stores a timestamp value combining date and time with milliseconds in YYYY-MM-DD HH:MM:SS.SSSSSS format.
* **`WS-TIMESTAMP-DT-YYYY`:** Stores the timestamp year (YYYY).
* **`WS-TIMESTAMP-DT-MM`:** Stores the timestamp month (MM).
* **`WS-TIMESTAMP-DT-DD`:** Stores the timestamp day (DD).
* **`WS-TIMESTAMP-TM-HH`:** Stores the timestamp hour (HH).
* **`WS-TIMESTAMP-TM-MM`:** Stores the timestamp minute (MM).
* **`WS-TIMESTAMP-TM-SS`:** Stores the timestamp second (SS).
* **`WS-TIMESTAMP-TM-MS6`:** Stores the timestamp millisecond (SSSSSS).

## Impact on Other Systems

* All modules and programs within the CardDemo application that deal with date and time data will be affected.

## Models

| Name Field | Type | Description |
|---|---|---|
| WS-CURDATE |  9(08) | Current date in YYYYMMDD format. |
| WS-CURDATE-YEAR | 9(04) | Current year (YYYY). |
| WS-CURDATE-MONTH | 9(02) | Current month (MM). |
| WS-CURDATE-DAY | 9(02) | Current day (DD). |
| WS-CURTIME | 9(08) | Current time in HHMMSS format. |
| WS-CURTIME-HOURS | 9(02) | Current hour (HH). |
| WS-CURTIME-MINUTE | 9(02) | Current minute (MM). |
| WS-CURTIME-SECOND | 9(02) | Current second (SS). |
| WS-CURTIME-MILSEC | 9(02) | Current millisecond (hundreths of a second). |
| WS-CURDATE-MM-DD-YY |  String | Current date in MM/DD/YY format. |
| WS-CURTIME-HH-MM-SS | String | Current time in HH:MM:SS format. |
| WS-TIMESTAMP | String | Timestamp value combining date and time with milliseconds. |
| WS-TIMESTAMP-DT-YYYY | 9(04) | Timestamp year (YYYY). |
| WS-TIMESTAMP-DT-MM | 9(02) | Timestamp month (MM). |
| WS-TIMESTAMP-DT-DD | 9(02) | Timestamp day (DD). |
| WS-TIMESTAMP-TM-HH | 9(02) | Timestamp hour (HH). |
| WS-TIMESTAMP-TM-MM | 9(02) | Timestamp minute (MM). |
| WS-TIMESTAMP-TM-SS | 9(02) | Timestamp second (SS). |
| WS-TIMESTAMP-TM-MS6 | 9(06) | Timestamp milliseconds (SSSSSS). |

## Main References

* All program modules within the CardDemo application that use date and time information. 

**Additional Considerations:**

* **Time Zone:** The specification does not explicitly mention time zone handling. Clarification on time zone management is necessary, especially for applications dealing with transactions across different geographical locations.
* **Daylight Saving Time (DST):**  Consideration for DST adjustments is essential to ensure accurate timekeeping during DST transitions.

--Made by "Smart Engineering" (by Compass.UOL)--