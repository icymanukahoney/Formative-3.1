import React, { useState } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  const fetchRandomJoke = () => {
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        setJoke(`${response.data.setup} ${response.data.punchline}`);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  };

  return (
    <div className="jokes-container">
       <p>{joke}</p>
      <button onClick={fetchRandomJoke}>GET JOKE</button> 
    </div>
  );
};

export default Jokes
