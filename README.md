# VetAi


## Technologies Used  

Your project uses a **modern full-stack JavaScript/TypeScript** stack along with external services. The key technologies include:

- **Node.js** – A cross-platform, open-source JavaScript runtime for building the backend server and APIs.  
- **Express.js** – A minimal, flexible Node.js web framework used to define routes and middleware for the backend.  
- **MongoDB** – A scalable, document-oriented NoSQL database for storing application data in flexible JSON-like documents.  
- **Mongoose** – A Node.js Object Data Modeling (ODM) library that provides a schema-based solution for modeling and validating MongoDB data.  
- **React** – A front-end JavaScript library for building user interfaces; it renders UI components and handles view updates.  
- **TypeScript** – A strongly-typed superset of JavaScript used throughout (both back-end and front-end) to catch errors early and improve tooling.  
- **Vite** – A fast build/development tool (bundler) used to serve and compile the front-end React app (e.g. `App.tsx`) with hot-reload.  
- **JSON Web Tokens (JWT)** – A standard for stateless authentication. After a user logs in, a signed JWT (secured with the `JWT_SECRET`) is issued and sent with each request to authenticate the user.  
- **Resend API** – An email-sending service. Your backend uses Resend (via its Node.js SDK) to send transactional emails (e.g. for verification) using the `RESEND_API_KEY` stored in `.env`.  
- **Google Gemini API** – A generative AI model provided by Google (accessed via the `@google/genai` SDK or REST) for AI-powered functionality (e.g. text generation, chat). An API key (`GEMINI_API_KEY`) is set in `.env` to authenticate requests to Gemini.  

Each of these tools serves a distinct role: the **backend** (Node.js/Express/Mongoose/MongoDB) handles data storage and API logic, the **frontend** (React + Vite + TypeScript) handles the user interface, and third-party services (Resend, Google Gemini) provide email and AI capabilities. JWT provides security for user sessions, and TypeScript ensures code quality across the stack.

| Technology           | Purpose/Use                                                          | Version (example)  | Docs/Reference                                           |
|----------------------|----------------------------------------------------------------------|--------------------|----------------------------------------------------------|
| **Node.js**          | JavaScript runtime for the backend server                            | v24.x LTS (Current) | [nodejs.org](https://nodejs.org/)           |
| **Express.js**       | Web framework for building REST APIs                                  | v5.x (current)     | [expressjs.com](https://expressjs.com/)    |
| **MongoDB**          | NoSQL document database for storing application data                 | v6.x               | [mongodb.com](https://www.mongodb.com/)     |
| **Mongoose**         | ODM library for MongoDB (schema enforcement, validation, data modeling) | v9.9.2             | [mongoosejs.com](https://mongoosejs.com/)   |
| **React**            | Front-end library for building UI components                         | v19.2              | [react.dev](https://react.dev/)             |
| **TypeScript**       | Typed superset of JavaScript for improved developer tooling          | v5.x–7.x           | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Vite**             | Development/build tool (bundler) for the React app                   | v4.x               | [vite.dev](https://vite.dev/)               |
| **JWT (JSON Web Token)** | Standard for stateless auth (tokens for user sessions)             | –                  | [jwt.io](https://jwt.io/introduction)       |
| **Resend API**       | Email-sending service (uses `RESEND_API_KEY`)                        | –                  | [resend.com](https://resend.com/docs/create-an-api-key) |
| **Google Gemini API**| Generative AI model (text, image, etc.; requires `GEMINI_API_KEY`)    | –                  | [Google Gemini Docs](https://ai.google.dev/gemini-api/docs/get-started) |

Each technology’s official documentation (linked above) provides detailed info on usage. For example, Express.js is “a fast, minimal and flexible Node.js web application framework”, and MongoDB “is a document-oriented database” where data is stored in JSON-like documents.

**Summary:** In this project, Node.js + Express form the back-end API server, MongoDB (with Mongoose) handles data storage, React + Vite form the front-end, TypeScript adds static typing, JWT secures user authentication, and third-party APIs (Resend for email, Google Gemini for AI features) extend functionality. Each plays a clear role in the application’s architecture.

