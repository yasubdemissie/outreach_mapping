import "./home/Homepage.css";
import sch from "../assets/church.jpg";
import snd from "../assets/second.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="bothnav">
        <div className="great">
          <h3 className="title-with-icon">
            <FaGlobe /> Great Commission
          </h3>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/login")}>Login</button>
            </li>
            {/* <li>
              <button onClick={() => navigate('/reg')}>Register</button>
            </li> */}
          </ul>
        </nav>
      </div>

      <div className="center">
        <header className="header">
          <h1>
            Gospel for Nation Spreads
            <br />
            Christ <b>Love</b> and Hope
            <br />
            Globally
          </h1>

          <p>
            Join us in spreading the message of love and <br />
            hope around the world.
          </p>
          <button className="cta-btn">Get Started!</button>
        </header>

        <div className="imagediv">
          <img src={sch} alt="" height={350} width={300} />
          <img
            src={snd}
            alt="Overlay Image"
            className="overlay-image"
            height={140}
            width={140}
          />
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>

      <div className="media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="about">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="box">
          <div className="wrapper">
            <div className="small-box">
              <img src={snd} alt="Overlay Image" height={70} width={70} />
            </div>
            <div className="b1">
              <h3>About</h3>
              <p>
                "Dedicated to sharing Christ's love and
                <br />
                uplifting communities
                <br />
                with compassion and hope"
              </p>
            </div>
          </div>
          {/* ############ */}
          <div className="wrapper">
            <div className="small-box">
              <img src={snd} alt="Overlay Image" height={70} width={70} />
            </div>
            <div className="b2">
              <h3>Mission</h3>
              <p>
                "To inspire and equip believers
                <br />
                to spread the gospel and
                <br />
                serve communities globally."
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div className="small-box">
              <img src={snd} alt="Overlay Image" height={70} width={70} />
            </div>
            <div className="b3">
              <h3>Vision</h3>
              <p>
                "A world where every community
                <br />
                experiences the transformative
                <br />
                power of Christ's love."
              </p>
            </div>
          </div>

          <div className="wrapper">
            <div className="small-box">
              <img src={snd} alt="Overlay Image" height={70} width={70} />
            </div>
            <div className="b4">
              <h3>Value</h3>
              <p>
                "We uphold faith, compassion,
                <br />
                integrity, and unity in all
                <br />
                our outreach and mission efforts."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <h3>Contact Us</h3>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore.
              <a href="#">Learn more</a>
            </p>
          </div>
          <div className="footer-column">
            <h3>NAVIGATION</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="phone-numbers">
            <p>PHONE NUMBER</p>
            <a href="tel:+25190000000">+25190000000</a>
            <br />
            <a href="tel:+25190000000">+25190000000</a>
          </div>
          <hr />
          <p>© 2024 Restaurants. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
