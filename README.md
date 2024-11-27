# Project README

## Overview
This project is built using **React** and includes the **React DOM Router** library for managing navigation within the application. The application provides the following main features:

## Features

### 1. **Login Page**
- Provides secure user authentication.
- Integrates with React Router to redirect users upon successful login.
- Ensures unauthorized users cannot access the dashboard.

### 2. **Dashboard**
- Displays key information and user-specific data.
- Accessible only to authenticated users.
- Serves as the main navigation point for additional app features.

### 3. **Navigation Management**
- Utilizes React DOM Router to handle seamless page transitions.
- Implements a custom `useNavigation` hook to:
  - Abstract navigation logic.
  - Improve code readability and maintainability.
  - Provide programmatic navigation within the app.

### 4. **Navigation Features**
- Includes links and routes to ensure intuitive user flow.
- Adds global navigation support to connect all pages.
- Ensures route security and fallback handling.

## Project Structure
```
src/
├── components/
│   ├── Login.js
│   ├── Dashboard.js
├── App.js
└── index.js
```

- **components/**: Contains reusable components like Login, Dashboard, and Navigation.
- **App.js**: The main application file.
- **index.js**: Entry point for the React app.

## Usage

### Adding New Pages
1. Create a new component in the `components/` directory.
2. Add a corresponding route in `App.js`.

### Updating Navigation
- Use the `useNavigation` hook for programmatic navigation:
  ```javascript
  const navigate = useNavigation();
  navigate('/path');


