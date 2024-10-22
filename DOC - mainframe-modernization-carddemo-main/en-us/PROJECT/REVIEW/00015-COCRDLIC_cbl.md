Generated at: 1st October of 2024

## Technical Analysis Review

**File:**  \COCRDLIC.cbl

**Title:**  Credit Card List 

**Summary:** 

This COBOL program, `COCRDLIC.CBL`, presents a list of credit cards to the user. The list displayed depends on the user's role and any context passed to the program. 

* **Admin Users:** See all credit cards.
* **Non-Admin Users:** See only cards associated with the account number (`ACCT`) stored in a `COMMAREA` (a data structure for program communication).

The program handles user interaction, including paging through results (PF7/F8 keys), selecting a card to view details (PF5), and returning to a menu (PF3).  It interacts with a VSAM file (`CARDDAT`) to retrieve credit card data, likely indexed by `CARDAIX`, and uses a `COMMAREA` for data sharing with other programs in the application.

**Technology:**

* **Programming Language:** COBOL
* **Framework/Library:**  `Not available`
* **Database:**
  * **VSAM (Virtual Storage Access Method):**  The program uses VSAM datasets (`CARDDAT`, `CARDAIX`) for storing and accessing credit card data.
* **Others Tools:** 
   * **CICS (Customer Information Control System):**  The code heavily relies on CICS commands for screen handling (`SEND MAP`, `RECEIVE MAP`), program control (`XCTL`), and data access (`STARTBR`, `READNEXT`, `ENDBR`).

**Reference, Class and Method:**

| Reference | Description |
|---|---|
|  `CVCRD01Y` | Likely contains working storage variables related to credit card processing. |
|  `COCOM01Y` | Defines the layout of the application's `COMMAREA`. |
|  `COTTL01Y` |  Provides screen titles and common display elements. |
|  `COCRDLI` | Defines the layout of the Credit Card List screen. |
|  `CSDAT01Y` |  Contains routines or variables for handling dates. |
|  `CSMSG01Y` |  Holds common messages used by the application. |
|  `CSMSG02Y` |  Likely defines variables for abend (abnormal end) handling. |
|  `CSUSR01Y` |  Contains data structures related to the signed-on user. |
|  `CVACT02Y` |  Defines the layout of the `CARD-RECORD` used for reading card data. |
|  `DFHBMSCA` |  A standard CICS copybook for defining map attributes and symbolic map I/O. |
|  `DFHAID` | A CICS copybook that defines the Attention Identifier (AID) fields used to handle PF keys and other special keys. |
|  `CSSTRPFY` |  Common code to store PFKey. |


| Class | Description |
|---|---|
| `Not available` |  |

| Method(Public) | Description |
|---|---|
| `Not available` |  |

| Method(Private) | Description |
|---|---|
| `0000-MAIN` | Main program logic. Initializes variables, handles user input and program flow. |
| `COMMON-RETURN` |  Common return point for the program. Moves data to the `COMMAREA`, issues a CICS RETURN command. |
| `1000-SEND-MAP` |  Prepares and sends the credit card list screen to the user. |
| `1100-SCREEN-INIT` |  Initializes the screen fields with data. |
| `1200-SCREEN-ARRAY-INIT` |  Populates the screen array with credit card details. |
| `1250-SETUP-ARRAY-ATTRIBS` |  Sets the display attributes for the screen array elements. |
| `1300-SETUP-SCREEN-ATTRS` | Sets the display attributes for the screen fields. |
| `1400-SETUP-MESSAGE` |  Sets up and displays messages to the user. |
| `1500-SEND-SCREEN` |  Issues the CICS SEND MAP command to display the screen. |
| `2000-RECEIVE-MAP` |  Receives user input from the screen. |
| `2100-RECEIVE-SCREEN` |  Issues the CICS RECEIVE MAP command to get data from the screen. |
| `2200-EDIT-INPUTS` |  Edits and validates user input. |
| `2210-EDIT-ACCOUNT` | Validates the account number input. |
| `2220-EDIT-CARD` | Validates the card number input. |
| `2250-EDIT-ARRAY` |  Edits the screen array for user selections. |
| `9000-READ-FORWARD` |  Reads credit card records in a forward direction, starting from a given key. |
| `9100-READ-BACKWARDS` | Reads credit card records in reverse order, starting from a given key. |
| `9500-FILTER-RECORDS` |  Filters credit card records based on user-supplied criteria (account and card number). |
| `SEND-PLAIN-TEXT` |  Sends a plain text error message to the user (likely for debugging). |
| `SEND-LONG-TEXT` |  Sends a longer text message, likely for debugging, to the user. |

--Made by "Smart Engineering" (by Compass.UOL)--