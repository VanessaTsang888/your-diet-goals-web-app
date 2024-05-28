# Your Diet Goals Website Application

With this responsive website application, users can set and manage thier diet goals on the move via their mobile smart devices. Once you have added a goal, you can delete it when you have completed that goal.

This web app uses the essential concepts for React App with TypeScript:

- Components, Props and TypeScript
- Handling Events
- Working with State
- Handling Input via Forms and Refs.

## The tech stack

This React App with TypeScript is built with Vite build tool.

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
  └── vite-env.d.ts            # Vite build tool environment - vite build tools
index.html                     # Overall content of the application
package.json                   # Project dependencies
public                         # Directory for static files such as logo files
  └── goals.jpg                # Project logo file
README.md                      # Project README file
tsconfig.json                  # Configure the TS compiler
tsconfig.node.json             # Configure the TS Node compiler
vite.config.ts                 # Vite tool configurations to convert code to JavaScript syntax
```
