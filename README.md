# Unnamed Group Project

This is a placeholder README for a group project for the MSU edX Coding Bootcamp

![Node.js](https://img.shields.io/badge/Nodejs-16.18.0-blue.svg)
![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue.svg)
![React.js Version](https://img.shields.io/badge/React-17.0.2-blue.svg)
![Normalize.css](https://img.shields.io/badge/Normalize.css-8.0.1-blue.svg)

## Usage Instructions

Hopefully, this should be sufficient:
* clone the repository
* find the spot in the `.env` file where the API key goes, and put it there (NOTE: we have not implimented this yet)
* run the command `npm i`
* run the command `npm start`

If you have errors complaining abour "redux" or "react-redux", you might fix them by running the command `npm install react-redux redux`.

If you have other errors, you might fix them by downgrading `react` and `react-dom` to 17.0.2 inside of the `package.json` file.

If that still doesn't work, refer to the How to Re-create the Project from Scratch section

(NOTE: Apparently `npm run build`, `npm test`, and `npm run eject` are also available, but idk what those do. We will inevitably break them as we work on the project, which is fine.)

## User Story (Work in Progress)

In many parts of America's sublime wilderness, wireless internet connectivity is spotty and unreliable.

AS A CAMPER, 

WHEN I want to get information about the national park I'm camping at

THEN I need to get while the gettin's good

## Grading Requirements

- Use React for the front end.
- Use GraphQL with a Node.js and Express.js server.
- Use MongoDB and the Mongoose ODM for the database.
- Use queries and mutations for retrieving, adding, updating, and deleting data.
- Be deployed using Heroku (with data).
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Include authentication (JWT).
- Protect sensitive API key information on the server.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, and so on).
- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## How to Re-create the Project from Scratch

1. In the command line, navigate to the parent directory of where your group project is.

2. Run the command `npx create-react-app project-three`.

3. `create-react-app` now automatically uses the latest release of React, version 18. Due to several conflicting packages with React version 18, follow the steps below to ensure that all activities work as intended.

* Remove the `package-lock.json` file and the `node_modules` folder from the directory.
* In addition, delete the `README.md` file and the `src` folder from the directory.
* Modify the `package.json` file to downgrade `react` to version 17.0.2.
* Update the `package.json` file to lower the version of `react-dom` to 17.0.2.
* Adjust the `package.json` file to downgrade `@testing-library/react` to version ^11.1.0.
* Likewise, downgrade `@testing-library/jest-dom` to version ^5.16.4.
* Your `package.json` file should look like the following:

        ```js
        "dependencies": {
            "@testing-library/jest-dom": "^5.16.4",
            "@testing-library/react": "^11.1.0",
            "@testing-library/user-event": "^13.5.0",
            "react": "17.0.2",
            "react-dom": "17.0.2",
            "react-scripts": "5.0.1",
            "web-vitals": "^2.1.4"
        },
        ```
* Run `npm install` to ensure that your project is now running React version 17.

4. After `create-react-app` has completed (which can take a few minutes), run the command `npm i bootstrap dotenv axios --save` to add dependencies that we will need in later activities.

5. Copy `22-State/01-Activities/28-Stu_Mini-Project/Main/src/` from `02-Stu_Create-React-App` and paste it into the directory. (It should now be in the same folder as `node_modules` and `public`)

6. Run the command `npm install react-redux redux`

7. Run `npm start` and it should start running in your default browser window, on `http://localhost:3000/