# Netflix Clone App

This is a Netflix clone app built using ReactJS and Firebase as the backend, styled using Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

The Netflix Clone App is a web application that emulates the user interface and functionality of Netflix.

The app is built using ReactJS, a popular JavaScript library for building user interfaces, and Firebase, a cloud-based backend service. Tailwind CSS is used for styling the application, providing a responsive and visually appealing design.

## Features

- User authentication: Users can create accounts, log in, and log out. Firebase Authentication is used to handle user authentication.
- Content browsing: Users can browse through a catalog of movies and TV shows, view details about each item, and watch trailers.
- Content streaming: Users can stream movies and TV shows directly within the app.
- Search functionality: Users can search for specific movies and TV shows based on titles or genres.
- Responsive design: The app is designed to work seamlessly on various devices and screen sizes.

## Prerequisites

To run the Netflix Clone App, you need to have the following prerequisites installed on your system:

- Node.js and npm (Node Package Manager)
- Firebase account and project
- API key and configuration details for Firebase

## Installation

1. Clone the repository to your local machine:

   ```
   https://github.com/shravan-das/Netflix-clone.git
   ```

2. Navigate to the project directory:

   ```
   cd netflix-clone
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a Firebase project and obtain the API key and configuration details.

5. Create a `.env` file in the root of the project directory and add the Firebase configuration details:

   ```
   REACT_APP_API_KEY=<your-api-key>
   REACT_APP_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_PROJECT_ID=<your-project-id>
   REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   REACT_APP_APP_ID=<your-app-id>
   ```

6. Run the application:

   ```
   npm start
   ```

7. Open your browser and visit `http://localhost:3000` to access the Netflix Clone App.

## Usage

- Register a new account or log in with your existing account.
- To save a favourite movie or TV show, click the heart button to save it for later.

## Contributing

Contributions to the Netflix Clone App are welcome! If you encounter any bugs, have feature requests, or want to contribute improvements, please submit an issue or a pull request to the GitHub repository.

