Generated at: 1st October of 2024

## Technical Analysis Review

**File:**  \COACTVWC.cbl

**Title:**  Account View

**Summary:** 

This COBOL program provides a user interface for viewing and potentially updating account information. It interacts with a Customer Account Cross-Reference file (CARDXREF), an Account Master file (ACCTDAT), and a Customer Master file (CUSTDAT) to retrieve and display account and customer details. The program handles user input, performs basic validation, retrieves data from the files, and displays the results on a screen. It allows navigation to other related programs within the system.

**Technology:**

* **Programming Language:** COBOL
* **Framework/Library:**  CICS (Customer Information Control System)
* **Database:**
  * **VSAM (Virtual Storage Access Method):**  Likely, as CICS often interacts with VSAM files. 
* **Others Tools:**  `Not available` 

**Reference, Class and Method:**

| Reference | Description |
|---|---|
|  `CVCRD01Y` |  Copybook likely defining common card-related data structures. |
| `COCOM01Y` |  Copybook likely defining a common communication area (COMMAREA) structure. |
| `DFHBMSCA` |  IBM-supplied copybook for CICS message handling. |
| `DFHAID` |  IBM-supplied copybook for accessing CICS terminal and transaction information. |
| `COTTL01Y` | Copybook likely defining screen titles and formatting. |
| `COACTVW` |  Copybook defining the screen layout (BMS - Basic Mapping Support). |
| `CSDAT01Y` |  Copybook likely providing date-related functions and data structures. |
| `CSMSG01Y` |  Copybook likely defining common messages used across the application. |
| `CSMSG02Y` |  Copybook likely defining abend (abnormal end) related variables and messages. |
| `CSUSR01Y` |  Copybook likely containing signed-on user information and related data. |
| `CVACT01Y` |  Copybook defining the layout of the Account record. |
| `CVACT02Y` |  Copybook likely defining a data structure related to Accounts, possibly a secondary record associated with an account. |
| `CVACT03Y` |  Copybook defining the layout of the Card Cross-Reference record. |
| `CVCUS01Y` |  Copybook defining the layout of the Customer record. |
| `CSSTRPFY` |  Copybook likely defining common routines for handling PF keys (Program Function keys). |



| Class | Description |
|---|---|
| `Not available` |  |

| Method(Public) | Description |
|---|---|
| `0000-MAIN` |  Main program logic.  Handles program initialization, input processing, data retrieval, and screen display. |
| `1000-SEND-MAP` |  Sends the account view screen to the user's terminal. |
| `1100-SCREEN-INIT` |  Initializes screen fields with default values and retrieves system information like date and time. |
| `1200-SETUP-SCREEN-VARS` |  Sets up screen variables based on the program's state and retrieved data. |
| `1300-SETUP-SCREEN-ATTRS` |  Sets screen attributes like field protection and color based on the context. |
| `1400-SEND-SCREEN` |  Sends the formatted screen to the user's terminal using CICS SEND MAP command. |
| `2000-PROCESS-INPUTS` |  Processes user inputs from the screen. |
| `2100-RECEIVE-MAP` |  Receives user input from the screen using the CICS RECEIVE MAP command. |
| `2200-EDIT-MAP-INPUTS` |  Validates user input for correctness and completeness. |
| `2210-EDIT-ACCOUNT` |  Specifically validates the entered account number. |
| `9000-READ-ACCT` |  Main routine to retrieve account and customer data. |
| `9200-GETCARDXREF-BYACCT` |  Reads the CARDXREF file using the account number as the key. |
| `9300-GETACCTDATA-BYACCT` |  Reads the ACCTDAT file using the account number. |
| `9400-GETCUSTDATA-BYCUST` |  Reads the CUSTDAT file using the customer ID retrieved from the CARDXREF. |
| `SEND-PLAIN-TEXT` |  Sends a plain text message to the user's terminal - likely for debugging or simple messages. |
| `SEND-LONG-TEXT` |  Sends a longer text message to the terminal - likely for detailed error messages or debugging information. |
| `ABEND-ROUTINE` |  Handles abnormal program terminations (abends), logs error information, and informs the user. |

| Method(Private) | Description |
|---|---|
| `Not available` |  |

--Made by "Smart Engineering" (by Compass.UOL)--