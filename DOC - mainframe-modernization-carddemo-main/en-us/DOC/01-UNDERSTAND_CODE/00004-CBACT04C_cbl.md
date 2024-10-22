Generated at: 1st October of 2024

##  Interest Calculation for Credit Card Accounts

**File:**  \src\CBACT04C.cbl

**Context:**

This program is the heart of the monthly interest calculation process for credit card accounts. It's a behind-the-scenes workhorse that ensures interest is applied accurately to each customer's balance, taking into account their specific credit card terms and any relevant disclosure groups.

**Action:**

1. **Gathering Data:** The program starts by collecting information from various sources:
    * **Transaction Category Balance File:** This file contains a breakdown of each customer's balance, categorized by transaction type (e.g., purchases, cash advances).
    * **Cross-Reference File:** This file links a customer's credit card number to their account ID, allowing the program to retrieve all necessary information.
    * **Disclosure Group File:** This file holds the interest rates associated with different account groups and transaction categories.
    * **Account Master File:** This is the central repository for all customer account information, including balances and interest rates.

2. **Calculating Interest:**
    * For each customer and transaction category, the program retrieves the corresponding interest rate from the Disclosure Group File. If a specific group's rate is missing, it defaults to a predefined 'DEFAULT' group.
    * It then calculates the monthly interest by multiplying the transaction category balance by the monthly interest rate.
    * The calculated monthly interest is added to the customer's total interest for the month.

3. **Updating Accounts and Generating Transactions:**
    * The program updates the customer's account balance in the Account Master File by adding the calculated total interest.
    * It also generates a transaction record for the interest applied, which includes details like transaction ID, amount, and timestamps. This record is then written to the Transaction File for future reference and reporting.

4. **Closing the Books:**
    * Once all accounts have been processed, the program closes all the files it accessed, ensuring data integrity.

**Business Rules:**

* **Interest Rate Determination:**  Interest rates are determined based on a combination of the customer's assigned account group and the specific transaction category.  This allows for flexible and targeted interest rate application.
* **Default Interest Rate:** If a specific disclosure group's interest rate is not found, the system utilizes a default interest rate, ensuring interest calculation can proceed without interruption.
* **Transaction History:** The program meticulously records each interest application as a separate transaction, maintaining a transparent and auditable trail of all interest-related activity.
* **Monthly Interest Calculation:** Interest is calculated on a monthly basis, aligning with standard billing cycles.

--Made by "Smart Engineering" (by Compass.UOL)--