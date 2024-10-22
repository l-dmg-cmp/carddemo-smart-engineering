Generated at: 1st October of 2024

# CardDemo Application: Date Conversion Utility

## Title Document: CardDemo Application - Date Conversion Utility (CSUTLDTC) Specification

## File:
- `\CSUTLDTC.cbl`

## Summary Description
This document outlines the specifications for the Date Conversion Utility (CSUTLDTC), a COBOL program within the CardDemo application. This utility provides a critical function for the system by converting dates from human-readable formats, like "MM-DD-YYYY," into the Lilian format, a numerical representation easily processed by computers. This conversion is essential for various date-related operations, including calculating interest, generating reports, and managing account activities.

## Version History
- Version 1.0: Initial Version

## Process Description
The Date Conversion Utility streamlines date handling within the CardDemo application. The process involves:

1. **Receiving Date Information:** The utility receives a date string and its corresponding format (e.g., "10-01-2024" and "MM-DD-YYYY").
2. **Utilizing System Function (CEEDAYS):** The utility leverages a built-in system function called "CEEDAYS" specifically designed for date conversions. This function understands various date formats.
3. **Date Validation and Conversion:** The "CEEDAYS" function checks the validity of the provided date based on the given format. If valid, it converts the date into the Lilian format.
4. **Error Handling:** If an invalid date or format is provided, "CEEDAYS" flags an error. The utility then generates a user-friendly error message detailing the issue (e.g., "Invalid Month," "Bad Pic String").
5. **Returning Results:**  The utility sends back the converted Lilian date if the conversion is successful. In case of an error, it provides a descriptive error message to pinpoint the problem.

## Requirements to Start the Process
1. **Input Date:** A character string representing the date to be converted.
2. **Date Format:** A character string specifying the format of the input date (e.g., "MM-DD-YYYY," "DD-MM-YYYY").

## Validations and Rules
- **Date Format:** The input date format must be supported by the "CEEDAYS" function.
- **Date Validity:** The input date itself must be a valid date (e.g., no February 30th).

## Technical Details

**Main Program:**
- **CSUTLDTC:** This program handles the entire date conversion process.

**Main Functions/Methods:**
- **CEEDAYS:**  A system-level function used to convert dates to the Lilian format.

**Variables:**
- **WS-DATE-TO-TEST:** Holds the input date string.
- **WS-DATE-FORMAT:** Holds the input date format string.
- **OUTPUT-LILLIAN:** Stores the converted Lilian date.
- **FEEDBACK-CODE:** Contains the return code from the "CEEDAYS" function, indicating success or specific errors.
- **LS-DATE:**  Receives the input date string from the calling program.
- **LS-DATE-FORMAT:**  Receives the input date format from the calling program.
- **LS-RESULT:** Returns the result of the conversion (either the Lilian date or an error message).

## Security
- This utility does not directly handle sensitive data. However, ensuring the accuracy of date conversions is crucial for maintaining data integrity within the CardDemo application.

## Impact on Other Systems
- The Date Conversion Utility is fundamental for other programs within the CardDemo application that rely on accurate date calculations (e.g., interest calculation modules, report generators).

## Models
Not applicable for this utility as it primarily focuses on data manipulation.

## Main References
- **CEEDAYS System Function Documentation:** This documentation provides comprehensive information about the "CEEDAYS" function, its supported date formats, and return codes.

**Additional Considerations:**
- **Error Logging:**  Consider implementing detailed error logging to record any issues encountered during the conversion process. This can be helpful for debugging and system monitoring.
- **Performance:** As this utility may be called frequently, ensure that the "CEEDAYS" function and the overall program logic are optimized for performance.

--Made by "Smart Engineering" (by Compass.UOL)--