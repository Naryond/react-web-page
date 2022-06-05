import "./App.css";

function App() {
  return (
    <div>
      <header className="header" id="title">
        <h1 className="h1">
          You THINK it,
          <br />I DEVELOP it.
        </h1>
        <h5 className="subtext">It's easy! I'm a front end developer.</h5>
      </header>
      <main id="home">
        <article id="portfolio">
          <h3 className="h3">Some of my projects</h3>
          <div className="projects">
            <div style={{ marginRight: 10 }}>
              <a href="https://random-quotes-generator-xi.vercel.app/">
                <img
                  className="screenshot"
                  src="https://i.ibb.co/tmj6D1X/random-Quote.jpg"
                  alt="quote_generator"
                />
                <h3>Random Quotes Generator</h3>
              </a>
            </div>
            <div>
              <a href="https://clearscore-tech-test.vercel.app/">
                <img
                  className="screenshot"
                  src="https://i.ibb.co/3fnc6fm/idea-Board.jpg"
                  alt="idea_board"
                />
                <h3>Idea Board (clearscore challenge)</h3>
              </a>
            </div>
          </div>
        </article>
        <div className="leveling">
          <p className="p" id="info">
            I am <strong>Giuseppe Valeriani</strong> and I am based in London
            (U.K.)
          </p>
        </div>
        <div className="aside">
          <div className="personal" id="img-div">
            <img
              className="profilePic"
              src="https://live.staticflickr.com/65535/52012232147_c8a96a5300_b.jpg"
              alt="profile"
            />
          </div>
          <article>
            <div className="leveling">
              <div className="block2">
                <p className="history" id="background">
                  Born in Italy in 1985, I lived withing the country until 30
                  y/o when I decided to change my live starting to study to
                  become a Casino Dealer. Having had 10 years of experience in
                  the Gambling Industry that was an easy step to make, and in 6
                  months I succesfully completed my course and moved in the
                  United Kingdom where I immediately started to work./<br></br>{" "}
                  After 6 years I realize I needed a new professional challenge
                  and decided to focus more on what I love. Therefore I started
                  to learn how to code.
                  <br></br>
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <footer className="footer" id="contacts">
        <a className="links" href="giuggey85@gmail.com" target="_blank">
          E-mail
        </a>
        <a className="links" href="https://github.com/Naryond">
          Git Hub
        </a>
        <a
          className="links"
          href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
