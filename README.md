EmployWise React Application

# Project Overview
This is a React-based application that integrates with the Reqres API to perform basic user management functions. The application includes authentication, user listing, and functionalities to edit and delete users.

## Features

Level 1: Authentication Screen

Users can log in using the credentials:

Email: eve.holt@reqres.in

Password: cityslicka

On successful login, a token is stored and the user is redirected to the Users List Page.

Level 2: List All Users

Fetches and displays a paginated list of users using GET /api/users?page=1.

Users are shown in a card/table format.

Implements pagination for navigating through different pages.

Level 3: Edit, Delete, and Update Users

Edit Users: Opens a form with pre-filled user data and allows updating of First Name, Last Name, and Email.

Delete Users: Removes a user from the list using DELETE /api/users/{id}.

Displays success/error messages based on API responses.

### Tech Stack

Frontend: React.js

State Management: useState, useEffect

API Calls: Axios

Styling: CSS Modules

Routing: React Router

### Installation & Setup

1. Clone the repository: git clone https://github.com/AbhisekhRR/GlobalTASK01.git
2. Navigate to the project folder: cd employwise-app
3. Install dependencies: npm install
4. Start the development server: npm start

####  Project Structure

/employwise-app
│── src
│   │── components
│   │   │── Login.js
│   │   │── UsersList.js
│   │   │── EditUser.js
│   │   │── Login.css
│   │   │── UsersList.css
│   │   │── EditUser.css
│   │── App.js
│   │── index.js
│── package.json
│── README.md

###### Assumptions & Considerations

The application assumes a valid response from the Reqres API.

Error handling has been implemented for API failures.

The UI is designed to be simple and responsive.


 


