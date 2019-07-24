import React, {useState} from 'react';
import './App.css';
import {peoples} from './data'
import Form from './Form'



function App() {

  const [formState, setFormState] = useState([peoples])
  
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
