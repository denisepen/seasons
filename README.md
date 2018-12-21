The purpose of this project was to learn to use geolocation with javascript.

When the root component loads the user's location is determined using:

window.navigator.geolocation.getCurrentPosition().

Based on this location the user's latitude is found and the season is determined.  If the season is summer, sun icons appear with the text "Let's hit the beach". If it's winter snowflakes appear with the text "Brr It is cold."



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
