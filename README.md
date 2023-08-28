# Project Management System (PMS)

Welcome to the Project Management System (PMS) project! This is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to provide a platform for students to register, log in, and manage their projects. Additionally, there is an admin panel with login credentials to manage and oversee the projects and users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Introduction

The PMS is a system that aims to streamline the project management process for college students and faculty members. It provides a user-friendly interface for students to register and log in, create, manage, and collaborate on projects. The admin panel allows administrators to oversee the projects, users, and overall system.

## Features

- **User Authentication:**
  - Students can register and log in securely.
  - Admin has a separate login portal.

- **Student Dashboard:**
  - View and manage personal profile.
  - Create new projects and update existing ones.

- **Project Management:**
  - Create, edit, and delete projects.
  - Assign tasks within projects.
  - Track project progress and milestones.

- **Admin Panel:**
  - Admin can log in and manage users and projects.
  - Monitor overall system activity and statistics.

## Installation

1. Clone this repository to your local machine.
   ```
   git clone https://github.com/your-username/college-portal-pms.git
   ```

2. Navigate to the project directory.
   ```
   cd pms
   ```

3. Install server dependencies.
   ```
   cd Api
   npm install
   ```

4. Install client dependencies.
   ```
   cd UI
   npm install
   ```

## Usage

1. Start the server.
   ```
   cd ../API
   npm run dev app.js
   ```

2. Start the client.
   ```
   cd ../UI
   npm start
   ```

3. Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- **Frontend:**
  - React.js for building user interfaces.
  - React Router for handling navigation.

- **Backend:**
  - Node.js and Express.js for building the server.
  - MongoDB for the database.
