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

