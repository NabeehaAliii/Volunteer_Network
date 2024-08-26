# Volunteer Network Frontend

This repository contains the frontend code for the **Volunteer Network** application. The front end is built using **React.js** and provides a user-friendly interface for volunteers and organizations to connect, manage opportunities, and facilitate donations.

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Screenshots
Including some screenshots showcasing the application's functionality.

### Home Page
<img width="948" alt="HomePage" src="https://github.com/user-attachments/assets/32af1c4d-b0ac-451f-96b9-846f52dde4dd">

*Description: The main landing page of the Volunteer Network.*

### Opportunities Search Page
<img width="959" alt="Finding_Opportunities_based_on_preferences" src="https://github.com/user-attachments/assets/af995d09-496a-4711-a961-7ab2068ea9aa">

*Description: Users can search for volunteer opportunities based on their preferences.*

### Login Page
<img width="949" alt="login" src="https://github.com/user-attachments/assets/7d1c54ef-3f9d-49ac-bc90-91c4c79b9858">

*Description: Users can log in to access more features.*

### Organization List Based on Location
<img width="918" alt="Organization_list_based_on_location" src="https://github.com/user-attachments/assets/c3b8a910-dc9c-46c2-85d8-f15d04abbad1">

*Description: Users can search for organizations based on their location.*

### Register/Sign Up Page
<img width="945" alt="Register_SignUp" src="https://github.com/user-attachments/assets/f59bbdcb-c749-4623-8cc1-2f6274abc7ed">
*Description: New users can sign up to become members of the Volunteer Network.*

---

## Features

- **User Authentication:** Sign up and log in functionality for volunteers and organizations.
- **Browse Opportunities:** View and search for available volunteering opportunities.
- **Opportunity Management:** Organizations can create, update, and delete opportunities.
- **Donation System:** Users can make donations.
- **Responsive Design:** Optimized for various device sizes.
- **Interactive UI:** Smooth and intuitive user experience with easy to use design.
- **Profile Management:** Users can manage their profiles.

---

## Technologies Used

### Frontend

- [**React.js**](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [**React Router**](https://reactrouter.com/) - For handling routing in React applications.
- [**Axios**](https://axios-http.com/) - For making HTTP requests to the backend API.
- [**Redux**](https://redux.js.org/) - State management library.
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework for styling.
- [**JWT Decode**](https://github.com/auth0/jwt-decode) - For decoding JSON Web Tokens.
---

## Prerequisites

Before running this project, ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **Git**
- Backend API running (Ensure the [Volunteer Network Backend](https://github.com/NabeehaAliii/Volunteer_Network_Backend) is up and running)

---

## Getting Started

Follow these instructions to set up and run the frontend application on your local machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NabeehaAliii/Volunteer_Network.git
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd Volunteer_Network/react-app
   ```

3. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

2. **Access the application:**

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   The application should now be running locally.

### Building for Production

To build the application for production, run:

Using npm:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

---

## Project Structure

```
Volunteer_Network/
├── react-app/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/              # Image assets
│   │   ├── components/
│   │   │   ├── common/              # Reusable components
│   │   │   ├── layout/              # Layout components (e.g., Header, Footer)
│   │   │   └── specific/            # Components specific to certain pages
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Opportunities/
│   │   │   ├── Organization/
│   │   │   ├── Profile/
│   │   │   └── Auth/
│   │   ├── redux/
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   └── store.js
│   │   ├── routes/
│   │   │   └── AppRouter.js
│   │   ├── services/
│   │   │   └── api.js               # Axios instances and API calls
│   │   ├── utils/
│   │   │   ├── validation.js        # Form validation schemas
│   │   │   └── helpers.js           # Helper functions
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env                         # Environment variables
│   ├── package.json
│   └── README.md
```

### Explanation of Folders and Files

- **public/**: Contains static files like `index.html` and images that need to be served directly.
- **src/**: Contains the source code of the application.
  - **assets/**: Stores images, fonts, and other static assets.
  - **components/**: Reusable UI components.
  - **pages/**: Components representing different pages/routes.
  - **redux/**: Redux setup including actions, reducers, and store configuration.
  - **routes/**: Application routing configuration.
  - **services/**: Contains API service files for handling HTTP requests.
  - **utils/**: Utility functions and helpers.
  - **App.js**: Root component that brings everything together.
  - **index.js**: Entry point of the application.
- **.env**: Environment variable configurations.
- **package.json**: Lists dependencies and scripts.
- **README.md**: Documentation for the frontend application.

---

## Environment Variables

The application uses environment variables to manage configuration settings. Create a `.env` file in the `react-app` directory and add the following variables:

```env
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
# Add any other necessary variables
```

**Note:** Never commit your `.env` file to version control. Make sure it's included in your `.gitignore` file.

---

## API Endpoints

The frontend communicates with the backend through various API endpoints. Here are some of the key endpoints used:

- **Authentication**
  - `POST /api/auth/login` - User login
  - `POST /api/auth/register` - User registration
  - `POST /api/auth/logout` - User logout

- **Opportunities**
  - `GET /api/opportunities` - Get all opportunities
  - `GET /api/opportunities/:id` - Get opportunity by ID
  - `POST /api/opportunities` - Create new opportunity
  - `PUT /api/opportunities/:id` - Update opportunity
  - `DELETE /api/opportunities/:id` - Delete opportunity

- **Organizations**
  - `GET /api/organizations` - Get all organizations
  - `GET /api/organizations/:id` - Get organization by ID
  - `POST /api/organizations` - Create new organization
  - `PUT /api/organizations/:id` - Update organization
  - `DELETE /api/organizations/:id` - Delete organization

- **Donations**
  - `GET /api/donations` - Get all donations
  - `POST /api/donations` - Create new donation

**Note:** Ensure that the backend server is running and the API base URL is correctly set in your `.env` file.

---

## Contributing

We welcome contributions from the community! To contribute to this project, follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeatureName
   ```
   
## Contact

If you have any questions, suggestions, or issues, feel free to reach out:

- **Email:** [alinabeeha44@gmail.com(mailto:alinabeeha44@gmail.com)
- **LinkedIn:** [Nabeeha Ali](https://www.linkedin.com/in/nabeeha-ali-15111a19b/)

---

## Acknowledgments

- **[React.js](https://reactjs.org/):** For providing a robust framework for building the user interface.
- **[Tailwind CSS](https://tailwindcss.com/):** For utility-first CSS styling.
- **[Axios](https://axios-http.com/):** For simplifying HTTP requests.
---

*Thank you for checking out the Volunteer Network frontend project! If you find this project helpful or interesting, please give it a star ⭐ and consider contributing.*

---
