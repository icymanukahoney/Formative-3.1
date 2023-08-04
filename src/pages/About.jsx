import React, { useState, useEffect } from 'react';
import axios from 'axios';
import myPhoto from '../img/IMG_0089.png';
import Jokes from '../components/Jokes';




const About = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.data.length);
        setQuote(response.data[randomIndex].text);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  };

  return (
  <div className="container-about">
    <div className="info-about-me">
        <div className="my-photo">
           <img src={myPhoto} alt="My Photo" />
        </div>
      <h4>Maria Stromova</h4>
      <p>I'm thrilled to welcome you to our About page and share a bit about myself and the journey that led me here.</p>
      <p> I'm a passionate and determined student, specializing in UX Design and Web Development. The path that brought me here — it was unexpectedly adventurous.</p>
      <p> I've had the incredible opportunity to travel extensively, living in various countries and cities, experiencing diverse cultures, and embracing the beauty of this world. </p>
      <p> My thirst for knowledge and self-improvement led me to complete not one, not two, but three university degrees.</p>
      <p> I've always been a curious soul, trying out different roles and professions to explore my true calling. And then, like a puzzle falling into place, I discovered my passion for UX Design and Web Development.</p>
      <p> I find inspiration in art, fashion, traveling, and, most importantly, people. </p>
      <p> But what truly fuels my dedication and motivates me on this exciting journey are my family members—my loving son, who is my source of strength and inspiration, and my incredible mom, whose unwavering support has been the backbone of my pursuit.</p>
      <p> Oh, and did I mention my love for humor? Laughter is a powerful force that keeps me going, even during the most challenging moments.</p>
      <p> I couldn't be happier with where I am and what I'm doing now. Every step on this journey has been a lesson, a blessing, and an opportunity to grow. </p>
      
      <blockquote>
        {quote}
      </blockquote>
      <button className="quote-button" onClick={fetchRandomQuote}>GET ANOTHER QUOTE</button> 
    </div>

    <div className="info-project">
        <h4>About the project</h4>
        <p>Now, let me share a bit about this incredible project I've been working on—a news website designed exclusively for our college community.</p>
        <p>With a blend of functionality and creativity, the website offers various exciting features, including weather updates from different cities worldwide, a collection of international news in multiple languages, and an assortment of inspiring quotes and jokes to brighten your day.</p>
        
      
        <Jokes /> 
        

    </div>

  </div>
  );
};

export default About
