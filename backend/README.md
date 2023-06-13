## About

Backend - Technical Assignment for VybeNetwork

## Note 
 1. Need to Run the backend application first
 2. Dev Backend environment runs on 3000 port and production runs on 8081
 3. The Url for the Backend API is declared in the src/configs/constants.ts file of Frontend Project 
 4. Need to disable CORS in browser to avoid API blocking from CORS policy

## Available Scripts


### `npm i`

Install the dependencies.

### `npm run dev`

Run the server in development mode.

### `npm test`

Run all unit-tests with hot-reloading.

### `npm test -- --testFile="name of test file" (i.e. --testFile=Vybe).`

Run a single unit-test.

### `npm run test:no-reloading`

Run all unit-tests without hot-reloading.

### `npm run lint`

Check for linting errors.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).

### `npm start -- --env="name of env file" (default is production).`

Run production build with a different env file.


## Additional Notes

- If `npm run dev` gives you issues with bcrypt on MacOS you may need to run: `npm rebuild bcrypt --build-from-source`. 
