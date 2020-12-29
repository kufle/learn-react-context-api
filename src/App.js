import React from 'react'
import Todos from './components/Todos';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hai React</h1>
      <Todos/>
      <Form/>
    </div>
  );
}

export default App;
