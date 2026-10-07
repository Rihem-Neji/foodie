import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <Container>

        <div className="hero-content">

          <span className="hero-badge">
            🍴 FRESH • TASTY • DELICIOUS
          </span>

          <h1>
            Good food,
            <span> good mood.</span>
          </h1>

          <p>
            Discover delicious meals made for every mood.
            Choose your favorite dish and enjoy the experience.
          </p>

          <a
            href="#menu"
            className="hero-button"
          >
            Explore Menu
          </a>

        </div>

      </Container>

    </section>
  );
}

export default Hero;