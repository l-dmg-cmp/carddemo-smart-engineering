Generated at: 1st October of 2024

# **Title Document:** CardDemo Application - Program Specification

# **Epic 1: Investment Product Management**

- **Objective:**  Provide a comprehensive suite of tools for creating, managing, configuring, and reporting on investment products offered by Sicredi.
- **Actors:**  Product managers, financial analysts, system administrators, bank tellers, customer service representatives.
- **Requirements:**
    - Ability to define and configure various investment product types, including fixed income, variable income, savings accounts, and specialized products.
    - Support for different interest rate calculation methods, fee structures, and tax regimes.
- **Files Involved:**
    * `ccrmbaa.prg` (Registering Investment Applications)
    * `ccrmbba.prg` (Investment Title Redemption)
    * `ccrmbbc.prg` (Managing Exclusive Product Redemptions)
    * `ccrmbeb.prg` (Renegotiating Interest Rates)
    * `ccrmbeq.prg` (Managing Investment Rate Groups)
    * `ccrmber.prg` (Managing Savings Rates)
    * `ccrmcab.prg` (Product Listing Report)

# **Epic 2: Account Management**

- **Objective:** Provide functionalities to manage customer accounts, including viewing, updating, and performing transactions.
- **Actors:** Customer service representatives, system administrators, customers (through online banking).
- **Requirements:**
    - Ability to view account balances, transaction history, and account details.
    - Functionality to update customer information, such as address, phone number, and email.
    - Support for various account operations, including deposits, withdrawals, transfers, and bill payments.
- **Files Involved:**
    * `COACTUPC.cbl` (CardDemo Account Update)
    * `COACTVWC.cbl` (Credit Card Management System - Account View Functionality)
    * `CVACT01Y.cpy` (CardDemo Account Management System - Account Record Specification)

# **Epic 3: Credit Card Management**

- **Objective:**  Manage credit card lifecycle, including issuing new cards, activating/deactivating cards, setting credit limits, and handling card-related transactions.
- **Actors:**  Credit analysts, customer service representatives, system administrators.
- **Requirements:**
    - Ability to generate new credit card numbers and associate them with customer accounts.
    - Functionality to activate, deactivate, and block credit cards.
    - Support for setting and adjusting credit limits.
    - Processes for handling credit card payments, purchases, cash advances, and other transactions.
- **Files Involved:**
    * `CBACT02C.cbl` (Card Data File Processor)
    * `CBACT03C.cbl` (Card Account Cross-Reference Data File Processor)
    * `COCRDLIC.cbl` (Credit Card List Display and Navigation)
    * `COCRDSLC.cbl` (Credit Card Detail Retrieval System)
    * `COCRDUPC.cbl` (Credit Card Detail Update Program)
    * `CVACT02Y.cpy` (Card Data Structure Specification)
    * `CVACT03Y.cpy` (Credit Card Management System - Card Cross-Reference Data Specification)
    * `COCRDLI_CPY.md` (Credit Card Data Layout Specification for Internal and External Systems)
    * `COCRDSL_CPY.md` (Credit Card Display Structure Specification)
    * `COCRDUP_CPY.md` (Credit Card Duplicate Check Data Structure)

# **Epic 4: Transaction Processing**

- **Objective:** Process various types of transactions efficiently, accurately, and securely, ensuring data integrity and regulatory compliance.
- **Actors:**  System administrators, batch processing system, clearinghouse systems.
- **Requirements:**
    - Support for processing credit card transactions from multiple channels, such as online, POS terminals, and ATMs.
    - Real-time transaction authorization and fraud detection mechanisms.
    - Accurate and efficient transaction settlement and reconciliation processes.
    - Compliance with industry standards, such as PCI DSS, for secure handling of sensitive cardholder data.
- **Files Involved:**
    * `CBACT04C.cbl` (CardDemo Interest Calculation)
    * `CBSTM03A.CBL` (CardDemo Account Statement Generation)
    * `CBSTM03B.CBL` (Card Transaction File Processor Subroutine)
    * `CBTRN01C.cbl` (CardDemo Daily Transaction Processing)
    * `CBTRN02C.cbl` (CardDemo Daily Transaction Processing)
    * `CBTRN03C.cbl` (CardDemo Credit Card Transaction Detail Report Generation)
    * `COBIL00C.cbl` (CardDemo Online Bill Payment)
    * `COTRN00C.cbl` (CardDemo Application: Transaction Listing Functionality)
    * `COTRN01C.cbl` (CardDemo Transaction Details Retrieval)
    * `COTRN02C.cbl` (CardDemo Transaction Addition)
    * `COSTM01_CPY.md` (CardDemo Transaction Reporting Structure)
    * `COBIL00_CPY.md` (Bill Payment Transaction Processor)
    * `COTRN00_CPY.md` (Transaction Handling System)
    * `COTRN01_CPY.md` (Credit Card Transaction Record Specification)
    * `COTRN02_CPY.md` (Card Transaction Data Structure)

# **Epic 5: Reporting and Analytics**

- **Objective:** Generate various reports and provide analytical insights to support decision-making, track business performance, and ensure regulatory compliance.
- **Actors:**  Management, business analysts, auditors.
- **Requirements:**
    - Ability to generate reports on key performance indicators, such as transaction volume, revenue, and fraud rates.
    - Customizable reporting features to allow users to define specific data filters, date ranges, and report formats.
    - Integration with data visualization tools for creating interactive dashboards and reports.
    - Generation of regulatory reports required by governing bodies and industry standards.
- **Files Involved:**
    * `CBSTM03A.CBL` (CardDemo Account Statement Generation)
    * `CBTRN03C.cbl` (CardDemo Credit Card Transaction Detail Report Generation)
    * `CORPT00C.cbl` (CardDemo Transaction Report Generation)
    * `COSTM01_CPY.md` (CardDemo Transaction Reporting Structure)
    * `CORPT00_CPY.md` (Corporate Report Parameter Input)
    * `CVTRA07Y.cpy` (Card Transaction Report Layout Specification)

# **Epic 6: User Management and Security**

- **Objective:**  Manage user access, roles, and permissions to ensure system security and data confidentiality.
- **Actors:**  System administrators, security administrators.
- **Requirements:**
    - Role-based access control (RBAC) to restrict user access to authorized functionalities.
    - Strong authentication mechanisms, such as two-factor authentication, to prevent unauthorized access.
    - Audit trails to track user actions and system changes for security and compliance purposes.
    - Secure password management policies and procedures.
- **Files Involved:**
    * `COADM01C.cbl` (CardDemo Application: Administrative Menu)
    * `COSGN00C.cbl` (CardDemo Application: Secure User Authentication and Access Control)
    * `COUSR00C.cbl` (CardDemo User Management: List Users)
    * `COUSR01C.cbl` (CardDemo User Management System)
    * `COUSR02C.cbl` (CardDemo User Update Program)
    * `COUSR03C.cbl` (CardDemo User Management - User Deletion)
    * `COADM02Y_cpy.md` (CardDemo User Management Menu)
    * `COMEN02Y_cpy.md` (CardDemo Application: Admin Menu)
    * `COADM01_CPY.md` (CardDemo Administrative Data Display System)
    * `COSGN00_CPY.md` (User Login Information Management)
    * `COUSR00_CPY.md` (User Management Screen)
    * `COUSR01_CPY.md` (User Information Management)
    * `COUSR02_CPY.md` (User Account Management System)
    * `COUSR03_CPY.md` (User Information Management)

# **Epic 7: Batch Processing**

- **Objective:**  Handle large volumes of data and perform operations during off-peak hours to ensure efficient system performance.
- **Actors:**  Schedulers, batch processing system.
- **Requirements:**
    - Automated scheduling and execution of batch jobs.
    * `CBACT01C.cbl` (CardDemo Application: Account Data Batch Processing)
    * `CBACT02C.cbl` (Card Data File Processor)
    * `CBACT03C.cbl` (Card Account Cross-Reference Data File Processor)
    * `CBACT04C.cbl` (CardDemo Interest Calculation)
    * `CBCUS01C.cbl` (CardDemo Customer Data Extract)
    * `CBSTM03A.CBL` (CardDemo Account Statement Generation)
    * `CBTRN01C.cbl` (CardDemo Daily Transaction Processing)
    * `CBTRN02C.cbl` (CardDemo Daily Transaction Processing)
    * `CBTRN03C.cbl` (CardDemo Credit Card Transaction Detail Report Generation)

# **Epic 8: Customer Data Management**

- **Objective:**  Maintain accurate and up-to-date customer information for various business operations, including account management, marketing, and customer service.
- **Actors:**  Customer service representatives, marketing team, data analysts.
- **Requirements:**
    - Centralized storage of customer data, including contact information, demographics, and account preferences.
    - Data validation and cleansing processes to ensure data accuracy and consistency.
    - Ability to segment customer data for targeted marketing campaigns and personalized customer service.
    - Compliance with data privacy regulations, such as GDPR, for handling sensitive customer information.
- **Files Involved:**
    * `CBCUS01C.cbl` (CardDemo Customer Data Extract)
    * `CUSTREC_cpy.md` (Customer Data Record Specification)
    * `CVCUS01Y_cpy.md` (Customer Data Specification)
    * `CUSTREC.cpy` (Customer Data Record Specification)

# **Epic 9: System Utilities**

- **Objective:** Provide a set of utility functions to support system maintenance, data management, and other operational tasks.
- **Actors:**  System administrators, developers.
- **Requirements:**
    - Utilities for data conversion, such as date and time formats, to ensure compatibility between different systems.
    - Functions for logging, error handling, and debugging to facilitate system troubleshooting and maintenance.
    - Tools for data backup and recovery to prevent data loss and ensure business continuity.
- **Files Involved:**
    * `CSUTLDTC.cbl` (CardDemo Application: Date Conversion Utility)
    * `CSDAT01Y_cpy.md` (CardDemo Date and Time Management)
    * `CSLKPCDY_cpy.md` (Data Integrity Guardian: Ensuring Accurate Phone Numbers, State Codes, and ZIP Codes)
    * `CSMSG01Y_cpy.md` (CardDemo Application Message Display)
    * `CSMSG02Y_cpy.md` (Card System Error Handling)
    * `CSSETATY_cpy.md` (CardDemo Field Validation)
    * `CSSTRPFY_cpy.md` (CICS User Action Translator)
    * `CSUSR01Y_cpy.md` (User Security Profile Management)
    * `CSUTLDPY_cpy.md` (CardDemo Application - Date Validation Module)
    * `CSUTLDWY_cpy.md` (Date Management Toolkit)
    * `CSDAT01Y.cpy` (CardDemo Application - Date and Time Standard Specification)
    * `CSLKPCDY.cpy` (Data Integrity Guardian: Ensuring Accurate Phone Numbers, State Codes, and ZIP Codes)
    * `CSMSG01Y.cpy` (CardDemo Application - Common Message Repository Specification)
    * `CSMSG02Y.cpy` (Card System Error Logging Specification)
    * `CSSETATY.cpy` (CardDemo Field Validation Specification)
    * `CSSTRPFY.cpy` (CICS User Action Translator Specification)
    * `CSUSR01Y.cpy` (User Security Profile - Data Structure Specification)
    * `CSUTLDPY.cpy` (CardDemo Application - Date Validation Module Specification)
    * `CSUTLDWY.cpy` (Date Management Toolkit - COBOL Copybook Specification)

# **Epic 10: Data Files Management**

- **Objective:** Define and manage data files used for storing and retrieving information within the CardDemo application.
- **Actors:**  System administrators, database administrators.
- **Requirements:**
    - Definition of file structures, record layouts, and data types.
    - Allocation of storage space and management of file access permissions.
    - Implementation of data backup and recovery procedures for critical data files.
    - Monitoring of file usage and performance tuning as needed.
- **Files Involved:**
    * `LISTCAT.txt` (CardDemo Application: Data Storage Inventory)
    * `acctdata.txt` (Credit Card Management System - Account Data Specification)
    * `carddata.txt` (Credit Card Data Extraction and Validation)
    * `cardxref.txt` (Credit Card Tracking System)
    * `custdata.txt` (Customer Data Management System)
    * `dailytran.txt` (Daily Transaction Processing System)
    * `discgrp.txt` (Disk Group Allocation Specification)
    * `tcatbal.txt` (Transaction Category Balance Report Specification)
    * `trancatg.txt` (Credit Card Transaction Processing System)
    * `trantype.txt` (Transaction Type Code Translator)

--Made by "Smart Engineering" (by Compass.UOL)--