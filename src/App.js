import React from 'react';
import './App.css';

//JSX
function App() {
  return (
    <div className="App">
      <h1>Those who strive in our way, we will guide them.</h1>
      <Person />
    </div>
  );
}

function Person() {
  return (
    <div>
      <h1>This is a strange person.</h1>
    </div>
  )
}

export default App;
