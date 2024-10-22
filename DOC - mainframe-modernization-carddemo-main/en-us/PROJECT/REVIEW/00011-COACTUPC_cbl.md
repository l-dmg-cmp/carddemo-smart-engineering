Generated at: 1st October of 2024

## Technical Analysis Review

**File:**  COACTUPC.cbl

**Title:**  Account Update Program

**Summary:** 

The COACTUPC program is a COBOL program that provides a CICS interface for updating customer account information. It interacts with Account Master, Customer Master, and Card Data files. The program allows users to search for an account, view its details, make changes, and commit those changes to the database. The program performs various data validations to ensure data integrity.

**Technology:**

* **Programming Language:** COBOL
* **Framework/Library:**  CICS
* **Database:** VSAM (Virtual Storage Access Method) files are implied by the CICS READ commands, which are commonly used to access VSAM datasets.
* **Others Tools:** `Not available`

**Reference, Class and Method:**

| Reference | Description |
|---|---|
| `CSUTLDWY` | Generic date edit variables CCYYMMDD. |
| `CVCRD01Y` | Common working storage variables. |
| `CSLKPCDY` | North America Phone Area codes. |
| `DFHBMSCA` | IBM-supplied copybook for BMS macros. |
| `DFHAID` | IBM-supplied copybook for defining AID (Attention Identifier) fields. |
| `COTTL01Y` | Screen Titles. |
| `COACTUP` | Account Update Screen Layout. |
| `CSDAT01Y` | Current Date. |
| `CSMSG01Y` | Common Messages. |
| `CSMSG02Y` | Abend Variables. |
| `CSUSR01Y` | Signed on user data. |
| `CVACT01Y` | ACCT RECORD LAYOUT. |
| `CVACT03Y` | CARD XREF LAYOUT. |
| `CVCUS01Y` | CUSTOMER LAYOUT. |
| `COCOM01Y` | Application Commarea Copybook. |
| `CSSTRPFY` | Common code to store PFKey. |
| `CSUTLDPY` | Common Date Routines. |


| Class | Description |
|---|---|
| `Not available` |  |

| Method(Public) | Description |
|---|---|
| `Not available` |  |

| Method(Private) | Description |
|---|---|
| `0000-MAIN` | Main procedure of the program. Handles program initialization, input processing, decision making, and program termination. |
| `COMMON-RETURN` | Common return point for the program. Moves data to the commarea and issues a CICS RETURN command. |
| `0000-MAIN-EXIT` | Exit point for the main procedure. |
| `1000-PROCESS-INPUTS` |  Processes user inputs from the map. |
| `1100-RECEIVE-MAP` | Receives user input from the map. |
| `1200-EDIT-MAP-INPUTS` | Edits and validates the user input received from the map. |
| `1205-COMPARE-OLD-NEW` | Compares the old and new values of the account and customer data to determine if any changes have been made. |
| `1210-EDIT-ACCOUNT` | Validates the account number entered by the user. |
| `1215-EDIT-MANDATORY` | Checks if a mandatory field is supplied. |
| `1220-EDIT-YESNO` | Validates a Yes/No field. |
| `1225-EDIT-ALPHA-REQD` | Validates a required alphabetic field. |
| `1230-EDIT-ALPHANUM-REQD` | Validates a required alphanumeric field. |
| `1235-EDIT-ALPHA-OPT` | Validates an optional alphabetic field. |
| `1240-EDIT-ALPHANUM-OPT` | Validates an optional alphanumeric field. |
| `1245-EDIT-NUM-REQD` | Validates a required numeric field. |
| `1250-EDIT-SIGNED-9V2` | Validates a signed numeric field with 2 decimal places. |
| `1260-EDIT-US-PHONE-NUM` | Validates a US phone number. |
| `EDIT-AREA-CODE` | Edits and validates the area code portion of a US phone number. |
| `EDIT-US-PHONE-PREFIX` | Edits and validates the prefix (exchange) portion of a US phone number. |
| `EDIT-US-PHONE-LINENUM` | Edits and validates the line number portion of a US phone number. |
| `EDIT-US-PHONE-EXIT` | Exit point for the US phone number edit routine. |
| `1265-EDIT-US-SSN` | Validates a US Social Security Number. |
| `1270-EDIT-US-STATE-CD` | Validates a US state code. |
| `1275-EDIT-FICO-SCORE` | Validates a FICO credit score. |
| `1280-EDIT-US-STATE-ZIP-CD` | Performs a basic validation of a US state code and ZIP code combination. |
| `2000-DECIDE-ACTION` | Determines the appropriate action to take based on user input and program state. |
| `3000-SEND-MAP` | Sends the map to the user's terminal. |
| `3100-SCREEN-INIT` | Initializes the screen with default values and program information. |
| `3200-SETUP-SCREEN-VARS` | Sets up the screen variables based on the program state and user input. |
| `3201-SHOW-INITIAL-VALUES` | Sets the initial values for the screen fields. |
| `3202-SHOW-ORIGINAL-VALUES` | Displays the original values of the account and customer data on the screen. |
| `3203-SHOW-UPDATED-VALUES` | Displays the updated values of the account and customer data on the screen. |
| `3250-SETUP-INFOMSG` | Sets up the information message to be displayed to the user. |
| `3300-SETUP-SCREEN-ATTRS` | Sets up the screen attributes, including field protection and color. |
| `3310-PROTECT-ALL-ATTRS` | Protects all fields on the screen. |
| `3320-UNPROTECT-FEW-ATTRS` | Unprotects specific fields on the screen based on the program state. |
| `3390-SETUP-INFOMSG-ATTRS` | Sets up the attributes for the information message field. |
| `3400-SEND-SCREEN` | Sends the map to the user's terminal. |
| `9000-READ-ACCT` | Reads account data based on the account number. |
| `9200-GETCARDXREF-BYACCT` | Reads the Card Cross Reference file by account number. |
| `9300-GETACCTDATA-BYACCT` | Reads account data from the Account Master file by account number. |
| `9400-GETCUSTDATA-BYCUST` | Reads customer data from the Customer Master file by customer ID. |
| `9500-STORE-FETCHED-DATA` | Stores the fetched account and customer data in the commarea. |
| `9600-WRITE-PROCESSING` | Handles the update process for both account and customer data. |
| `9700-CHECK-CHANGE-IN-REC` | Checks if the account or customer record has been changed by another user since it was last read. |
| `ABEND-ROUTINE` | Handles program abends (abnormal terminations). |
| `EDIT-DATE-CCYYMMDD` | Edits a date in CCYYMMDD format. |
| `EDIT-DATE-OF-BIRTH` | Edits a date of birth. |

--Made by "Smart Engineering" (by Compass.UOL)--