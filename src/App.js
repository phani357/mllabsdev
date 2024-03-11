import React from 'react';
//import ReactDOM from 'react-dom';
import  { useState } from 'react';
import  './App.css';

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
      <span className='heading'> WELCOME,HUMAN.. EMBRACE THE POSSIBILITIES THAT LIE AHEAD, FOR HERE, THE CONVERGENCE OF HUMAN INGENUITY  
      <br />                                                                                                                            </span>

            <input className='input' type="text" placeholder="Type Demo to show my skills" value={inputValue} onChange={handleInputChange} />
      
      {/* Display result based on input */}
      <p className='input'>    {getOutput()}</p>
     <img className='topRightImage' src='/src/girl.png' alt='1'/>
    </div>
  );
}

export default UserInputValidation;
