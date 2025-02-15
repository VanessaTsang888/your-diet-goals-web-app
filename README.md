# Your Diet Goals Website Application

With this responsive website application, users can set and manage thier diet goals on the move via their mobile smart devices. Once you have added a goal, you can delete it when you have completed that goal.

This web app uses the essential concepts for React App with TypeScript. Also advanced components Types - Dynamic and flexible Components:

- Components, Props and TypeScript
- Handling Events
- Working with State
- Handling Input via Forms and Refs
- Building a More Dynamic and flexible component
- Building components with Discriminated Unions (TypeScript Pattern).

## The tech stack

This React App with TypeScript (static type checking, catch type-related errors at compile-time) is built with Vite build tool.

Vite - a build tool to provide a faster and leaner development experience for modern web projects.
Node.js - runtime environment that executes JavaScript on the server side.
CSS - Cascading Style Sheets
TypeScript - makes my code more reliable and maintainable.
React.js - to build high-performing Single-Page Applications (SPA) using maintainable components.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting started

- `git clone` # clone down the repository from GitHub.
- Navigate to the directory or project on your local drive.
- Run `npm i` # to install node modules.
- `npm run dev` # to start the development server and run app locally.
- Open a browser window and click on the URL: `http://localhost:5173/` that appears in your terminal.
- `npm run build` # to build the app for deployment and go live.

## Structure

```mdx
src
└── App.tsx # App entry point
└── assets # Static files like CSS, JS and fonts
└── goals.jpg # small full colour compress image
└── components # independent and reusable bits of code
└── CourseGoal.tsx # Application logic - maintainable React components
└── index.css # Styles and layout of the application
└── main.tsx # Templates for the app user interface
└── vite-env.d.ts # Vite build tool environment - vite build tools
index.html # Overall content of the application
package.json # Project dependencies
public # Directory for static files such as logo files
└── goals.jpg # Project logo file
README.md # Project README file
tsconfig.json # Configure the TS compiler
tsconfig.node.json # Configure the TS Node compiler
vite.config.ts # Vite tool configurations to convert code to JavaScript syntax
```

## React Accessibility

1. Used React Fragment tag instead of div element as it is more semanic markup syntax.
2. Used the alt attribute to improve accessibility for assistive technology such as screen readers and keyboard navigation to enable alternative ways of viewing and navigating a page.
3. Used title attribute as a tool tip for logo image can help users with reduced vision problem.
4. Keybord focus feature so that users with disabilities know when a new component renders.

## Cybersecurity - Defensive Programming

To minimise cyber threats to our web application, we can use various tools such as [snyk - find and fix vulnerabilities in 5 minuetes](https://snyk.io/) or [GitHub Dependabot - Automated dependency updates built into GitHub](https://github.com/dependabot).

I am using [GitHub Dependabot - Automated dependency updates built into GitHub](https://github.com/dependabot) on my [Your Diet Goals web application repository](https://github.com/VanessaTsang888/your-diet-goals-web-app) to monitor the dependencies so I get alerted when there are vulnabilities inside them. I have been through the Settings for the 'Code security and analysis' section and have Enabled some of the features.

### Deployed React.js Website

I have completed and deployed this simple, interactive and responsive web application on the World Wide Web or wwww.
Now users can use my [Your Diet Goals website application](https://your-diet-goals.netlify.app/) to set and manage their diet goal on the move which will support them with improving their health and wellbeing.
