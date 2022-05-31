import "./App.css";
import './ideaBoard.jpg'

function App() {
  return (
    <div>
      <header className="header" id="title">
        <h1 className="h1">Giuseppe Valeriani</h1>
        <nav className="list">
          <a className="links" href="#title">
            Home
          </a>
          <a className="links" href="#background">
            Background
          </a>
          <a className="links" href="#portfolio">
            Portfolio
          </a>
          <a className="links" href="#contacts">
            Contacts
          </a>
        </nav>
      </header>
      <main id="home">
        <div className="leveling">
          <p className="p" id="info">
            I am a Front End Developer based in London (U.K.)
            <br />
            Here some informations regarding myself and my career.{" "}
          </p>
        </div>
        <div className="aside">
          <div className="block1" id="img-div">
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
        <article id="portfolio">
          <h2 className="h2">Some of my projects</h2>
          <div className="block3">
            <div>
              <a href="https://random-quotes-generator-xi.vercel.app/">
                <img
                  className="screenshot"
                  src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png"
                  alt="quote_generator"
                />
                <h3>random quotes generator</h3>
              </a>
            </div>
            <div>
              <a href="https://clearscore-tech-test.vercel.app/">
                <img
                  className="screenshot"
                  src='ideaBoard.jpg'
                  alt="idea_board"
                />
                <h3>idea board (clearscore challenge)</h3>
              </a>
            </div>
          </div>
        </article>
        <div className="block4"></div>
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
