import React from 'react';
import './App.css';
import Greet from "./components/greet";
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
    <Greet></Greet>
    <Welcome></Welcome>
    </div>
  );
}

export default App;
