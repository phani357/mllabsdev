import React, { useState } from 'react';
import  './App.css';
import './girl.png';


function UserInputValidation() {
  // State to hold user input
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  // Function to determine the output based on input
  const getOutput = () => {
    if (inputValue.toLowerCase() === 'demo') {
      return 'Let me show my skills, here are the list of actions to be performed';
    } else {
      return '';
    }
  };

  return (
    <div className='typewriter'>
      <label className='heading'>
      WELCOME,HUMAN.. EMBRACE THE POSSIBILITIES THAT LIE AHEAD, FOR HERE, THE CONVERGENCE OF HUMAN INGENUITY AND ARTIFICIAL 
      <input className='input' type="text" placeholder="Enter your text here" value={inputValue} onChange={handleInputChange} />
      </label>
      
      {/* Display result based on input */}
      <p className='input'>    {getOutput()}</p>
     <img className='topRightImage' src='/src/girl.png' alt='1'/>
    </div>
  );
}

export default UserInputValidation;
