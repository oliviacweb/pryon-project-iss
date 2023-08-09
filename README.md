# ISS and Atronauts 🚀

Welcome to the ISS and Astronauts App, a React project designed to display information about astronauts currently in space as well as the current location of the Internationl Space Station!

## Project Overview

The app fetches data from an external API and presents a table with astronaut names and the crafts they are currently aboard. It utilizes Redux for state management, Firebase for authentication, and several other utilities for a seamless user experience.

## Notes
- ignore compile error on start. It's a ts error due to the verson of firebase
- tried to add Facebook login as well but it requires a policy page and an app review of 5 days. There is commented out code for that section

## Images
<img href="https://imgur.com/CDtqb9N"><img src="https://i.imgur.com/CDtqb9N.png" title="source: imgur.com" />
<img href="https://imgur.com/ROmcedo"><img src="https://i.imgur.com/ROmcedo.png" title="source: imgur.com" />
<img href="https://imgur.com/UDlQvcG"><img src="https://i.imgur.com/UDlQvcG.png" title="source: imgur.com" />

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (Version 14 or higher recommended)
- Yarn package manager

### Installation

Clone the repository, install dependencies and start the app.

```bash
git clone ********
yarn install
yarn start
```

## Available Scripts
In the project directory, you can run:

`yarn start`
Launches the app in development mode.
Opens http://localhost:3000 to view it in the browser.

`yarn test`
Launches the test runner in interactive watch mode.

`yarn build`
Builds the app for production to the build folder.

`yarn eject`
Note: This is a one-way operation. Once you eject, you can't go back!
Exposes the configuration and scripts. Use with caution!

## Dependencies
Major dependencies that the project utilizes:

- UI & Styling: sass, tailwindcss
- Icons: react-icons
- State Management: @reduxjs/toolkit
- Routing: react-router-dom
- Authentication: firebase
- Utilities: react-toastify, @react-google-maps/api

## Improvements
- Add more authentication options
- Add more tests
- deploy and add CI/CD
