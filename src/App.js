import React, { useState } from 'react';
import  './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  
  return (
    <div className='typewriter'>
      <h1 className="heading"> WELCOME,HUMAN.. EMBRACE THE POSSIBILITIES THAT LIE AHEAD, FOR HERE, THE CONVERGENCE OF HUMAN INGENUITY AND ARTIFICIAL INTELLIGENCE </h1>
      <p className='heading'>HT! TYPE'DEMO' FOR SHOWCASING MY CAPABILITIES!</p>
      <input className='input' type="text" value={inputText} onChange={handleChange} />
      <p className='heading'> Your input matters: {inputText}</p>
    </div>
  );
}

export default App;