# Your Diet Goals Website Application

With this responsive website application, users can set and manage thier diet goals on the move via their mobile smart devices.
This web app uses the essential concepts for React App with TypeScript.

## The concepts covered

This website application uses TypeScript (TS) and React.js essentials concepts such as:

- Define Component Props Types
- Store Props Types as a Custom Type or Interface
- Define Component Props Types
- Store Props types as a Custom Type or Interface
- Define a Type for Props with "children"
- Component Props and The Special "key" Prop
- Another Way Of Typing Components
- Use useState() and TypeScript
- Work with State and Outputting State-based Values
- Pass Funtions as Values - In A Type-Safe Way
- Handling and Typing Events
- Work with Generic Event Types
- Use useRef() with TypeScript
- Handle User Input In A Type-Safe Way

### The tech stack

Vite - a build tool to provide a faster and leaner development experience for modern web projects.
Node.js - runtime environment that executes JavaScript on the server side.
CSS - Cascading Style Sheets
TypeScript - serves as a superset of JavaScript, offering optional static type-checking along with the latest ECMAScript features.
React.js - to build high-performing Single-Page Applications (SPA) using maintainable components.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting started

- `git clone` the repository
- Navigate to the directory
- Run `npm i` to install dependencies
- Run
- `npm start` to start the Express server. Open browser and in the URL type: http://localhost:3000/
- `npm run dev` to automatically reload the Ex??? server when files change

## Structure

```
src
  └── App.tsx                  # Application logic
  └── assets                   # Static files like CSS, JS and fonts
        └── goals.jpg          # small full colour compress image
  └── components               # independent and reusable bits of code
        └── CourseGoal.tsx     # React component with TypeScript
  └── index.css                # Common utilities like logging
  └── main.tsx                 # Templates for the app user interface
  └── vite-env.d.ts            # Sample data for tests
index.html                     # App entry point

package.json                   # Azure DevOps build pipeline
public                         # Project dependencies
  └── goals.jpg                # Integrations tests
README.md                      # Project README
tsconfig.json                  # Express server
tsconfig.node.json
vite.config.ts
```

## Dependencies

| Package                                                                  | Description                                           |
| ------------------------------------------------------------------------ | ----------------------------------------------------- |
| [applicationinsights](https://www.npmjs.com/package/applicationinsights) | Microsoft Application Insights module for Node.js     |
| [axios](https://www.npmjs.com/package/axios)                             | Promise based HTTP client for the browser and node.js |
| [cookie-parser](https://www.npmjs.com/package/cookie-parser)             | Parse HTTP request cookies                            |
| [date-fns](https://www.npmjs.com/package/date-fns)                       | Modern JavaScript date utility library                |
| [dotenv](https://www.npmjs.com/package/dotenv)                           | Loads environment variables from .env file            |
| [express](https://www.npmjs.com/package/express)                         | Fast, unopinionated, minimalist web framework         |

## Development dependencies

| Package                                                  | Description                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------- |
| [chai](https://www.npmjs.com/package/chai)               | BDD/TDD assertion library for Node.js and the browser                |
| [chai-http](https://www.npmjs.com/package/chai-http)     | Extend Chai assertion library with tests for HTTP APIs               |
| [mocha](https://www.npmjs.com/package/mocha)             | Mocha is a feature-rich JavaScript test framework running on Node.js |
| [mochawesome](https://www.npmjs.com/package/mochawesome) | Generate HTML/CSS reports to visualize test results                  |
| [nodemon](https://www.npmjs.com/package/nodemon)         | Simple monitor script for use during development of a node.js app.   |
