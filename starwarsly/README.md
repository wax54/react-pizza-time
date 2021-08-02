# Journey into the world of Star Wars 
## But this time the path is yours to choose!

This app uses React, Redux, Redux-Persist, Bootstrap, React-Router, Axios and the StarWars API.

## Getting Started

To get the app running, simply download the code and run `npm i` within the project directory, this downloads the dependencies. Once all the dependencies are downloaded, run `npm start` to view the App in your browser.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Notable Features
This app uses Redux-Persist to persist the memory of your adventures between browser reloads. Configurations about how the persisted memory is merged into the initial state can be found in src/store.js. If you would like to set a different Loading display while the persisted store is being loaded into Redux, simply set the 'loading' prop in the PersistGate Component in src/index.js to the desired display component. 

## App Architecture
- **Index**
  - **App**
    - **Navbar**
    - **Routes**
      - **Homepage**
      - **FilmList** (uses Redux to get list of seen Films)
        - **ItemList**
      - **PersonList**(uses Redux to get list of known charaters)
        - **ItemList**
      - **PlanetList**(uses Redux to get list of visited Planets)
        - **ItemList**
      - **Film** (uses url Params to get ID, Planets/People from Redux)
        - **SubList** (Planets passed in as props)
        - **SubList** (People passed in as props)
      - **Planet** (uses url Params to get ID, Films/People from Redux)
        - **SubList** (Films passed in as props)
        - **SubList** (People passed in as props)
      - **Person** (uses url Params to get ID, Films/HomeWorld Name from Redux)
        - **SubList** (Films passed in as props)
