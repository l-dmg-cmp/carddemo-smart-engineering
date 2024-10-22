Generated at: 1st October of 2024

##  Navigating the CardDemo Application: A User's Journey through the Main Menu

**File:**  \src\COMEN01C.cbl

This COBOL program acts as the central hub for regular users within the CardDemo application, much like a digital menu in a restaurant. 

**Context:**

Imagine a user logging into the CardDemo system to manage their credit card activities. Upon successful login, they are greeted by a menu screen presenting a list of actions they can perform. This program dictates what the user sees on this menu and how their selections are handled.

**Action:**

1. **Displaying the Menu:** The program starts by presenting a neatly organized menu with numbered options. Each option corresponds to a specific action, such as viewing account details, listing transactions, or making a payment.

2. **Capturing User Choice:**  The user enters the number associated with their desired action.

3. **Input Validation:**  Before proceeding, the program double-checks if the entered number is valid. It ensures that the input is indeed a number, falls within the range of available options, and corresponds to an action accessible to the user based on their user type (regular user versus administrator).

4. **Directing to the Chosen Action:**  Once the input is validated, the program acts as a traffic controller, directing the user to the appropriate program module responsible for executing the chosen action. For instance, if the user chooses to view their account details, the program will trigger the account viewing module.

5. **Handling Invalid Input:** If the user enters an invalid option, the program promptly displays an error message, guiding them to input a correct choice.

**Business Rules:**

* **User-Specific Menu:** The menu options displayed are tailored to the user's access level. Regular users are presented with options relevant to their account activities, while administrative functions are reserved for authorized personnel.

* **Secure Access:**  The program enforces authorization checks, ensuring that users can only access functions they are permitted to use. This prevents unauthorized access to sensitive information or functionalities.

* **Seamless Navigation:**  The program acts as a central navigation point, enabling users to easily browse through different functionalities of the CardDemo application. It provides a user-friendly way to interact with the system.

* **Error Prevention:**  The built-in input validation mechanism ensures data integrity and prevents errors by catching incorrect user inputs before they can cause any issues within the system.

--Made by "Smart Engineering" (by Compass.UOL)--