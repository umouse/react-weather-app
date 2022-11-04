import React from 'react';
import './App.css';
import Weather from './Weather';

 export default function App() {
  return (
    <div className="App">
      <h1>Weather React App</h1>
      <Weather defaultCity="Berlin" />
      <footer>
        <p>This project was coded by Yuliia Ishchenko and it's open-sourced <a href='https://github.com/umouse/react-weather-app' target="_blank" rel="noreferrer"> on GitHub</a> </p>
      </footer>
    </div>
  );
}

