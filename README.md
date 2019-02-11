# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `client/package.json`.

## Using this project

Clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/philnash/react-express-starter.git
cd DummyAppWithExpress
npm install
```

Create a `.env` file for environment variables in your server.

You can start the server on its own with the command:

```bash
cd server
npm start
```

Run the React application on its own with the command:

```bash
cd client
npm start
```

Run both applications together with the command:

```bash
npm start
```

The React application will run on port 3000 and the server port 5000.