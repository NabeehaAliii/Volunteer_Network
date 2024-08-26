# Volunteer Network Backend

This repository contains the backend code for the Volunteer Network application. The backend is built using Node.js and Express.js and provides RESTful API endpoints for managing users, organizations, opportunities, and donations within the Volunteer Network platform.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Final Note](#finalnotes)
  
## Getting Started

To get started with the backend of the Volunteer Network, follow the steps below to set up and run the application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **MySQL** (Ensure you have MySQL installed and running)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/NabeehaAliii/Volunteer_Network.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd Volunteer_Network/Node App
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your MySQL database:

   - Create a new database in MySQL.
   - Run the necessary SQL scripts to create the tables (if you have them in a SQL file, or manually create them based on your models).
   - Update the database configuration in your application.

   You can find the database configuration settings in `db.js`
   
## Running the Application

1. Ensure your MySQL database is running.

2. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will start on `http://localhost:3001` by default.

## Project Structure

Here's a breakdown of the project's structure:

```
Volunteer_Network
│
└───Node App
    │
    ├───src
    │   ├───controllers      # Controllers handle the logic for routes
    │   │   ├───authController.js
    │   │   ├───causes.js
    │   │   ├───donation.js
    │   │   ├───opportunities.js
    │   │   ├───organization.js
    │   │   └───user.js
    │   ├───db                # Database connection files
    │   │   └───db.js
    │   ├───models            # Models define the schema for MySQL tables
    │   │   ├───authcontroller.js
    │   │   ├───cause.js
    │   │   ├───donation.js
    │   │   ├───opportunity.js
    │   │   ├───organization.js
    │   │   └───user.js
    │   ├───routes            # Routes define API endpoints
    │   │   ├───authcontroller.js
    │   │   ├───causes.js
    │   │   ├───donation.js
    │   │   ├───opportunities.js
    │   │   ├───organization.js
    │   │   └───user.js
    │   └───uploads           # Directory for file uploads
    ├───uploads
    ├───package.json          # Project dependencies and scripts
    ├───package-lock.json
    └───app.js                # Main entry point for the backend application
```

### Explanation of Key Files:

- **app.js**: The main entry point for the application. It sets up middleware, routes, and other essential configurations.
- **Controllers**: Handle the business logic for each feature (e.g., managing users, organizations).
- **Models**: Define the database schema and interact with the MySQL database.
- **Routes**: Define the API endpoints and map them to the appropriate controller functions.

## API Endpoints

Here are some of the key API endpoints available in the backend:

- **User Management**:
  - `POST /user/login` - Authenticate a user and generate a token.
  - `POST /user/signup` - Register a new user.
- **Organizations**:
  - `GET /organization` - Get a list of organizations.
  - `POST /organization` - Create a new organization.
- **Opportunities**:
  - `GET /opportunities` - Get a list of volunteer opportunities.
  - `POST /opportunities` - Create a new opportunity.
- **Donations**:
  - `GET /donations` - Get a list of donations.
  - `POST /donations` - Create a new donation.

Refer to the specific route files in the `src/routes` directory for more detailed information on each endpoint.

## Technologies Used

- **Node.js** - JavaScript runtime for server-side programming.
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL** - Relational database management system for storing application data.
- **Express-Session** - Middleware for managing user sessions.
- **CORS** - Middleware to enable Cross-Origin Resource Sharing.
- **body-parser** - Middleware to parse incoming request bodies.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## Final Notes

Thank you for checking out this project! If you find it helpful, please consider starring the repository on GitHub
