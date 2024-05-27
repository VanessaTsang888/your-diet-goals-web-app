# Your Diet Goals Website Application

With this responsive website application, users can set and manage thier diet goals on the move via their mobile smart devices. Once you have added a goal, you can delete it when you have completed that goal.

This web app uses the essential concepts for React App with TypeScript:

- Components, Props and TypeScript
- Handling Events
- Working with State
- Handling Input via Forms and Refs.

## The tech stack

Vite - a build tool to provide a faster and leaner development experience for modern web projects.
Node.js - runtime environment that executes JavaScript on the server side.
CSS - Cascading Style Sheets
TypeScript - serves as a superset of JavaScript, offering optional static type-checking along with the latest ECMAScript features.
React.js - to build high-performing Single-Page Applications (SPA) using maintainable components.

# Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting started

- `git clone` the repository
- Navigate to the directory
- Run `npm i` to install node modules
- `npm run dev` to start the development server to run app locally. Open browser and in the URL type: http://localhost:5173/

## Structure

```
src
  └── App.tsx                  # App entry point
  └── assets                   # Static files like CSS, JS and fonts
        └── goals.jpg          # small full colour compress image
  └── components               # independent and reusable bits of code
        └── CourseGoal.tsx     # Application logic - maintainable React components
  └── index.css                # Styles and layout of the application
  └── main.tsx                 # Templates for the app user interface
  └── vite-env.d.ts            # Sample data for tests
index.html                     # Overall content of the application
package.json                   # Project dependencies
public                         # Directory for static files
  └── goals.jpg                # Project logo file
README.md                      # Project README
tsconfig.json                  # Configure the TS compiler
tsconfig.node.json             # Express server
vite.config.ts                 # Vite tool configurations to convert code to JavaScript syntax
```

## Dependencies

| Package                                                                  | Description                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------- |
| [applicationinsights](https://www.npmjs.com/package/applicationinsights) | Microsoft Application Insights module for Node.js |
| [dotenv](https://www.npmjs.com/package/dotenv)                           | Loads environment variables from .env file        |
| [get-stream](https://www.npmjs.com/package/get-stream)                   | Get a stream as a string, buffer, or array        |
| [path](https://www.npmjs.com/package/path)                               | Node.JS path module                               |

## Development dependencies

| Package                                                  | Description                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------- |
| [chai](https://www.npmjs.com/package/chai)               | BDD/TDD assertion library for Node.js and the browser                |
| [chai-http](https://www.npmjs.com/package/chai-http)     | Extend Chai assertion library with tests for HTTP APIs               |
| [mocha](https://www.npmjs.com/package/mocha)             | Mocha is a feature-rich JavaScript test framework running on Node.js |
| [mochawesome](https://www.npmjs.com/package/mochawesome) | Generate HTML/CSS reports to visualize test results                  |
| [nodemon](https://www.npmjs.com/package/nodemon)         | Simple monitor script for use during development of a node.js app.   |
