import React from 'react';
import './App.css';
import ReactLogo from './logo.svg';

function App() {
  const imgSrc = `http://localhost:5002${ReactLogo}`
  return (
    <div className="App">
      <img src={imgSrc} className="App-logo" alt="react logo" />
      <h3>Hi from React Micro Front End App</h3>
    </div>
  );
}

export default App;
