# Hello, World! -- Building responsive web apps 

This demo covers a common case of frontend that reads a user input and display the result according to it in real time. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Code

The user-defined code is only in `src/App.js` and `src/HelloWorld.js`. 

The `src/HelloWorld.js` function defines a function that maps a number to an HTML string that contains information processed from the number  

```js
// HelloWorld.js
import React from 'react';

const HelloWorld = ({ number }) => {
  return <h1>Hello, World! The number is: {number - 1}</h1>;
};

export default HelloWorld;
```

Then `src/App.js` defines a standard web app in React. The `App()` function calls `HelloWorld()`, providing its `number` arugment with the value of the variable `inputNumber`, which was initialized using the hook in the first line in the body of the function `App()`. For more on hooks, please [read this.](https://legacy.reactjs.org/docs/hooks-overview.html)
 
```js
// App.js
import React, { useState } from 'react';
import HelloWorld from './HelloWorld';

function App() {
  const [inputNumber, setInputNumber] = useState(0);

  const handleChange = (event) => {
    setInputNumber(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <div>
        <label>
          Enter a number:
          <input type="number" value={inputNumber} onChange={handleChange} />
        </label>
      </div>
      <HelloWorld number={inputNumber} />
    </div>
  );
}

export default App;

```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
