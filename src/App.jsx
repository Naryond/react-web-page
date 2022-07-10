import React from 'react';
import './App.css';

function App() {
  document.title = 'Giuseppe Valeriani';
  return (
    <div>
      <header className="header">
        <h1>You THINK it,</h1>
        <h1>I DEVELOP it.</h1>
        <h5>It&apos;s easy! I&apos;m a Front End developer.</h5>
      </header>
      <div className="article">
        <h3>Here some of my projects</h3>
        <div className="projects">
          <a href="https://random-quotes-generator-xi.vercel.app/">
            <img
              className="pic-size"
              src="https://i.ibb.co/tmj6D1X/random-Quote.jpg"
              alt="quote_generator"
            />
            <h3>Random Quotes Generator</h3>
          </a>
          <div>
            <a href="https://clearscore-tech-test.vercel.app/">
              <img
                className="pic-size"
                src="https://i.ibb.co/3fnc6fm/idea-Board.jpg"
                alt="idea_board"
              />
              <h3>Idea Board (Clearscore challenge)</h3>
            </a>
          </div>
          <div>
            <a href="https://firebase-authentication-five.vercel.app/login/">
              <img
                className="pic-size"
                src="https://i.ibb.co/HTp02cN/auth.png"
                alt="login"
              />
              <h3>Authentication with Firebase</h3>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>
          I am <strong>Giuseppe Valeriani</strong> and I am based in London
          (U.K.)
        </p>
      </div>
      <div>
        <div>
          <img
            className="pic-size"
            src="https://live.staticflickr.com/65535/52012232147_c8a96a5300_b.jpg"
            alt="profile"
          />
        </div>
        <div>
          <p>
            Born in Italy in 1985, I lived withing the country until 30 y/o when
            I decided to change my live starting to study to become a Casino
            Dealer. Having had 10 years of experience in the Gambling Industry
            that was an easy step to make, and in 6 months I succesfully
            completed my course and moved in the United Kingdom where I
            immediately started to work.<br></br>
            After 6 years I realize I needed a new professional challenge and
            decided to focus more on what I love. Therefore I started to learn
            how to code.
            <br></br>
          </p>
        </div>
      </div>
      <footer>
        <a href="giuggey85@gmail.com" target="_blank">
          E-mail
        </a>
        <a href="https://github.com/Naryond">Git Hub</a>
        <a href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
