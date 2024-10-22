Generated at: 1st October of 2024

##  Credit Card Details Retrieval: Fetching and Displaying Card Information

**File:**  \src\COCRDSLC.cbl

This COBOL program forms the backend logic for a system that manages credit card details. It handles user requests for specific credit card information, retrieves the data, and presents it in an organized manner.

**Context:**

Imagine a customer service representative needs to access a customer's credit card details. They would input either the account number or the card number into their system. This program acts as the engine behind the scenes, fetching the relevant details from the database.

**Action:**

1. **Input Gathering:** The program starts by capturing the account number and/or card number entered by the user.
2. **Data Validation:** Before proceeding, the program checks if the entered information is valid (e.g., the account number should be numeric and of a specific length). 
3. **Database Search:** Based on the input, the program searches a database called "CARDDAT" to find the matching credit card record. It can search using either the account number or the card number.
4. **Data Retrieval:** Upon finding a match, the program pulls all relevant details associated with that card, such as the cardholder's name, card number, expiry date, and status.
5. **Information Display:** Finally, the program neatly organizes the retrieved information and sends it back to the user's interface for display.

**Business Rules:**

* **Data Security:** The program does not directly interact with the database if the entered information is invalid, preventing unauthorized access to sensitive credit card data.
* **Flexible Search:** The system allows searching for credit card details using either the account number or the card number, providing flexibility to the user.
* **Accurate Information Display:** The program ensures that the retrieved card details are presented to the user in a clear and understandable format.

--Made by "Smart Engineering" (by Compass.UOL)--