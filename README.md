# RBAC Dashboard

An interactive Role-Based Access Control (RBAC) Dashboard built with React. This application allows you to manage users, roles, and permissions efficiently through a user-friendly interface.

## Table of Contents
- Features
- Getting Started
- Prerequisites
- Installation
- Running the Application
- Usage
    - User Management
    - Role Management
- Testing
- Design Choices and Assumptions
- Dependencies
- Contributing

## Features
- User Management: Add, edit, search, sort, and delete users.
- Role Management: Create, update, search, sort, and remove roles.
- Permission Assignment: Assign permissions to roles and roles to users.
- Input Validation: Ensures that users provide valid data.
- Error Handling: Graceful error management with user feedback.
- Notifications: Real-time feedback using toast notifications.
- Responsive Design: User-friendly interface on various devices.

## Getting Started
### Prerequisites
- React
- npm or yarn
### Installation
1. Clone the repository:
     ```sh
     git clone https://github.com/yourusername/rbac-dashboard.git
     ```
2. Change to the project directory:
     ```sh
     cd rbac-dashboard
     ```
3. Install dependencies:
   using npm:
     ```sh
     npm install
     ```
     or using yarn
     ```sh
     yarn install
     ```

### Running the Application
Development Mode
To start the application in development mode with hot reloading:

Using npm:
     ```sh
     npm start
     ```
     or Using yarn:
     ```sh
     yarn start
     ```
Open http://localhost:3000 in your browser to view the application.

### Production Build
To create a production build:

Using npm:
     ```
     npm run build
     ```
     or Using yarn:
     ```
     yarn build
     ```
## Usage

### User Management
- Add User: Click the "Add User" button and fill out the form with the user's details.
- Edit User: Click the "Edit" button next to a user to modify their information.
- Delete User: Click the "Delete" button to remove a user.
- Search Users: Use the search bar to filter users by name.
- Sort Users: Click on table headers to sort users based on that column.

### Role Management
- Add Role: Click the "Add Role" button and specify the role name and permissions.
- Edit Role: Click the "Edit" button next to a role to update it.
- Delete Role: Click the "Delete" button to remove a role.
- Search Roles: Use the search bar to filter roles by name.
- Sort Roles: Click on table headers to sort roles based on that column.

## Testing
Currently, there are no unit tests included. To test the application:

- Manual Testing: Interact with the application manually to ensure all features work as expected.
- Error Cases: Try inputting invalid data to test validation and error handling.

## Design Choices and Assumptions
- React Functional Components: Used for simplicity and readability.
- State Management: Utilized React's useState hook for local state.
- Data Persistence: Data is stored in memory; no backend or database is connected.
- Component Structure: Separated concerns by creating distinct components for users and roles.
- Validation: Implemented client-side validation to ensure data integrity.
- Error Handling: Used try...catch blocks and error boundaries for robustness.
- Styling: Used Bootstrap for default styling and responsiveness.
- Notifications: Implemented using react-toastify for user feedback.
## Dependencies
- React: Front-end library for building user interfaces.
- Bootstrap: CSS framework for styling and responsive design.
- React Toastify: For displaying toast notifications.
- Font Awesome: Icons used in the UI.
## Contributing
Contributions are welcome! Please open an issue or submit a pull request to discuss changes.
