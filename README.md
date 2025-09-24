User Management Dashboard
Project Overview

The User Management Dashboard is a responsive web application built with React.js that allows users to view, add, edit, and delete user data. It interacts with a public mock API (JSONPlaceholder
) to simulate backend operations. The project focuses on frontend development, state management, and responsive UI design.

Key Features:

Display a paginated list of users.

Add new users through a dynamic form.

Edit existing user details.

Delete users with confirmation.

Search, filter, and sort users.

Responsive design for desktop, tablet, and mobile.

Modern UI with gradients, hover effects, and clean layout.

Setup Instructions

Clone the repository

git clone https://github.com/your-username/user-management-dashboard.git


Navigate to the project folder

cd user-management-dashboard


Install dependencies

npm install


Start the development server

npm start


Open in browser

The app will run at: http://localhost:3000

Run Instructions

Start the project in development mode:

npm start


Build the project for production:

npm run build

Folder Structure
user-management-dashboard/
│
├─ public/
│
├─ src/
│  ├─ api/
│  │   └─ userService.js
│  ├─ components/
│  │   ├─ UserForm/
│  │   │   ├─ UserForm.jsx
│  │   │   └─ UserForm.css
│  │   ├─ UserList/
│  │   │   ├─ UserList.jsx
│  │   │   └─ UserList.css
│  │   ├─ Pagination/
│  │   │   ├─ Pagination.jsx
│  │   │   └─ Pagination.css
│  │   └─ SearchFilter/
│  │       ├─ SearchFilter.jsx
│  │       └─ SearchFilter.css
│  ├─ pages/
│  │   ├─ Dashboard.jsx
│  │   └─ Dashboard.css
│  ├─ App.js
│  └─ index.js
│
├─ package.json
└─ README.md

Reflections
Challenges Faced

Handling mock API behavior: JSONPlaceholder does not persist data, so I had to manage local state to simulate add/edit/delete operations.

Responsive design: Ensuring tables, forms, and buttons look good on mobile and desktop was challenging.

State management: Coordinating between user form, table, search, and pagination required careful state updates.

Improvements

Implementing a real backend with database to persist user data.

Adding form validations and toast notifications for better UX.

Enhancing UI/UX: animated transitions, mobile-first design, and better color themes.

Adding sorting and advanced filtering options.

Deployed Link

[Your Deployed App Link Here]
