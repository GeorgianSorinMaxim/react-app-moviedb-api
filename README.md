# The App
The React app contains:
- A UI for querying for movies from MovieDb (https://themoviedb.org/).
- A UI for rendering the latest movies from MovieDb. The list can be filtered.

# Structure
The app is divided into 4 directories:
    - components - contains the React components
    - css - contains the styling of the React components (both presentation and container components)
    - services - contains the services fetching data from MovieDb
    - tests - contains the unit tests

# Dependencies
The following dependecnies have been used in the solution.
    $ npm install --save axios
    $ npm install --save react-search-input
    $ npm install eslint --save-dev
    $ npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer babel-polyfill react-scripts

# Run the app
Navigate to the project root in the terminal. Run the app with the following command.
    $ npm start

# Unit testing
The unit tests are included in the /src/tests/App.test.js. The testing was done with Jest.
Navigate to the project root in the terminal. Run the test with the following command:
    $ npm test

# Linting
TODO
