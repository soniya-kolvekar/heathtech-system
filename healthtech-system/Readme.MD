# HealthTech Prescription Management System

This project is a backend-based HealthTech Prescription Management System developed using Node.js, Express.js, and SQLite3 following the MVC architecture.

The main goal of this project was to create a secure system where doctors and patients can access prescriptions based on their roles.

In this project:
- Patients can register and login
- Doctors can login, create prescriptions, update prescriptions, and view prescriptions created by them
- Patients can only view their assigned prescriptions

To implement this, I used:
- JWT Authentication for secure login
- bcrypt for password hashing
- Role-based authorization middleware for access control
- SQLite3 for database management
- MVC structure for clean code organization

I created separate tables for users and prescriptions with proper relational mapping using foreign keys.

The project also includes:
- Protected routes
- CRUD operations
- Validation and error handling
- schema.sql and queries.sql for database structure and testing

All APIs were tested using Postman and database operations were verified using SQLite Viewer/DB Browser.