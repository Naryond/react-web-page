import "./App.css";

function App() {
  return (
    <div>
      <header className="header" id="title">
        <h1 className="h1">Giuseppe Valeriani</h1>
        <nav className="nav">
          <div className="list">
            <a className="a" href="#title">
              Home
            </a>
            <a className="a" href="#background">
              Background
            </a>
            <a className="a" href="#portfolio">
              Portfolio
            </a>
            <a className="a" href="#contacts">
              Contacts
            </a>
          </div>
        </nav>
      </header>
      <main>
        <article id="home">
          <div className="leveling">
            <p className="p" id="info">
              I am a Front End Developer based in London (U.K.)
              <br />
              Here some informations regarding myself and my career.{" "}
            </p>
            <div className="block1" id="img-div">
              <img
                className="pic1"
                src="https://live.staticflickr.com/65535/52012232147_c8a96a5300_b.jpg"
                alt="profile"
              />
            </div>
          </div>
        </article>
        <article>
          <div className="leveling">
            <div className="block2">
              <img
                className="pic2"
                src="https://tipsmake.com/data0/mimages/How-to-Make-an-Online-Casino-App-for-Free.jpg"
                alt="slot"
              />
              <p className="p" id="background">
                Born in Italy in 1985, I lived withing the country until 30 y/o
                when I decided to change my live starting to study to become a
                Casino Dealer. Having had 10 years of experience in the Gambling
                Industry that was an easy step to make, and in 6 months I
                succesfully completed my course and moved in the United Kingdom
                where I immediately started to work./<br></br> After 6 years I
                realize I needed a new professional challenge and decided to
                focus more on what I love. Therefore I started to learn how to
                code.
                <br></br>
              </p>
            </div>
          </div>
        </article>
        <article id="portfolio">
          <h2 className="h2">Some of my projects</h2>
          <div className="block3">
            <div>
              <a href="https://random-quotes-generator-xi.vercel.app/">
                <img
                  src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png"
                  alt="quote_generator"
                />
                <h3>random quotes generator</h3>
              </a>
            </div>
            <div>
            <a href="https://clearscore-tech-test.vercel.app/">
              <img
                src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png"
                alt="quote_generator"
              />
              <h3>idea board (clearscore challenge)</h3>
              </a>
            </div>
          </div>
        </article>
        <div className="block4"></div>
      </main>
      <footer className="footer" id="contacts">
        <a className="a" href="giuggey85@gmail.com" target="_blank">
          E-mail
        </a>
        <a className="a" href="https://github.com/Naryond">
          Git Hub
        </a>
        <a
          className="a"
          href="https://www.linkedin.com/in/giuseppe-valeriani-4b9995115/"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}

export default App;
