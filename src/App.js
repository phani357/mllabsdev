import React, { useState, useEffect } from 'react';
import './App.css';

const WelcomeMessage = () => {
  const message = 'WELCOME,HUMAN.... EMBRACE THE POSSIBILITIES THAT LIE AHEAD, FOR HERE,  THE CONVERGENCE OF HUMAN INGENUITY AND ARTIFICIAL INTELLIGENCE SPARKS A NEW ERA OF DISCOVERY. PREPARE TO UNLOCK THE DOORS OF PERCEPTION AND EMBARK UPON A JOURNEY THAT TRANSCENDS THE LIMITS OF THE TANGIBLE WORLD';
  const delay = 75; // Delay between each character (in milliseconds)

  const [currentCharIndex, setCurrentCharIndex] = useState(-1);
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [animationRunning, setAnimationRunning] = useState(true);

  useEffect(() => {
    let index = currentCharIndex;

    const timer = setTimeout(() => {
      if (index < message.length && animationRunning) {
        setDisplayedMessage((prevState) => prevState + message[index]);
        setCurrentCharIndex(index + 1);
      } else {
        setAnimationRunning(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentCharIndex, animationRunning]);

  return <div>{displayedMessage}</div>;
};

export default WelcomeMessage;