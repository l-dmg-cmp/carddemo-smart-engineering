Generated at: 1st October of 2024

## Technical Analysis Review

**File:**  \src\CORPT00C.cbl

**Title:**  Transaction Report Submission

**Summary:** 

This COBOL program, `CORPT00C`, is part of the `CardDemo` application. It handles the online submission of batch jobs to generate transaction reports. Users can choose to generate reports on a monthly, yearly, or custom date range basis.  The program interacts with CICS for screen handling and uses TDQs (Transient Data Queues) to pass job information to a batch process.

**Technology:**

* **Programming Language:** COBOL
* **Framework/Library:**  CICS (Customer Information Control System)
* **Database:**  While the specific database is not explicitly named, the code references a file named `TRANSACT`, suggesting the existence of a database or file system for storing transaction data. 
* **Others Tools:**  
    * **JCL (Job Control Language):** The program constructs JCL statements to submit batch jobs.
    * **TDQ (Transient Data Queue):** Used for communication between the online program and the batch job.

**Reference, Class and Method:**

| Reference | Description |
|---|---|
| `COCOM01Y` |  Likely a copybook containing common communication area definitions. |
| `CORPT00`  |  Probably a copybook defining data structures or variables specific to the `CORPT00` program or module. |
| `COTTL01Y` |  Possibly a copybook for titles and labels used across the application. |
| `CSDAT01Y` |  Likely a copybook related to date manipulation routines or data structures. |
| `CSMSG01Y` |  Probably a copybook for handling messages, including error messages. |
| `CVTRA05Y` |  Potentially a copybook for transaction-related data structures. |
| `DFHAID`   |  A standard CICS copybook providing definitions for communication area fields used by CICS commands. |
| `DFHBMSCA`  |  A standard CICS copybook defining the structure of the CICS communication area. |

| Class | Description |
|---|---|
| `Not available` |  |

| Method(Public) | Description |
|---|---|
| `Not available` |  |

| Method(Private) | Description |
|---|---|
| `MAIN-PARA` | The main entry point of the program. It handles initialization, screen interactions, and calls other paragraphs based on user input. |
| `PROCESS-ENTER-KEY` |  Processes user input when the Enter key is pressed. It validates input, formats data, and prepares to submit the batch job. |
| `SUBMIT-JOB-TO-INTRDR` |  Handles the confirmation prompt for job submission and writes the JCL to the `JOBS` TDQ. |
| `WIRTE-JOBSUB-TDQ` |  Writes the JCL record to the `JOBS` TDQ.  |
| `RETURN-TO-PREV-SCREEN` |  Navigates back to the previous CICS screen. |
| `SEND-TRNRPT-SCREEN` |  Sends the `CORPT0A` map to the user's terminal, displaying messages and allowing for input. |
| `RETURN-TO-CICS` |  Issues a CICS RETURN command to end the program's execution. |
| `RECEIVE-TRNRPT-SCREEN` |  Receives user input from the `CORPT0A` map. |
| `POPULATE-HEADER-INFO` |  Populates header information, such as date and time, on the screen. |
| `INITIALIZE-ALL-FIELDS` |  Initializes and clears various data fields. |

--Made by "Smart Engineering" (by Compass.UOL)--