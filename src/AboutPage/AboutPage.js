import './AboutPage.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import React from 'react';

export function AboutPage() {
  const [show, setShow] = React.useState(false);
  return (
    <div className="body">
      <div className="about-container">
        <div className="about-sec-container">
          <div className="back-arrow">
            <Link to="/" style={{ color: 'white', opacity: '0.9' }}>
              <ArrowBackIcon fontSize="large" className="back-arrow-icon" />
            </Link>
          </div>
          <div className="about-content">
            <div className="text-area">
              <p className="about-text-1">
                Hi, i'm Marwan Al Shaker, a beginner Javascript engineer and
                frontend developer, and currently working on improving myself
              </p>
              <p className="about-text-2">
                Born in Baghdad, Iraq then i moved to Latakia, Syria in May of
                2006 spent almost 10 years there the moved again to Colonge,
                Germany in November 2015 and currently still there
              </p>
              <p className="about-text-3">
                I have loved computers since i was a kid and was always
                fascinated by how they work although i didn't discover my
                passion into coding until recently. always loved Gaming, and im
                a huge fan of cars.
              </p>
              <button className="contact-button" onClick={() => setShow(!show)}>
                Contact Me
              </button>
              <div
                className="contact-section"
                style={show ? {} : { opacity: 0, transform: 'scaleY(0)' }}
              >
                <p className="contact-email">Email: 7kami12@gmail.com</p>
                <p className="contact-twitter">
                  Tweet at me:
                  <a
                    className="contact-twitter-link"
                    href="https://twitter.com/m_alshaker"
                    target="_blank"
                  >
                    @m_alshaker
                  </a>
                </p>
              </div>
            </div>
            <div className="setup-section">
              <div className="pc">
                <img
                  src="https://pbs.twimg.com/profile_banners/1450213732748042243/1634593546/1500x500"
                  alt=""
                  className="pc-pic"
                />
              </div>
              <p className="pc-text">
                this is my pc that i built myself and designed this website on
                just thought it's cool to keep the meomory
              </p>
              <h2 className="setup-head-text">My Setup</h2>
              <ul className="softwear-list">
                <li className="setup-list-title">Softwear</li>
                <li className="setup-text">Visual Studio Code</li>
                <li className="setup-text">Git bash</li>
                <li className="setup-text">Browser: Chrome</li>
                <li className="setup-text">Github</li>
              </ul>
              <ul className="hardwear-list">
                <li className="setup-list-title">Hardwear</li>
                <li className="setup-text">intel core i7 10700KF</li>
                <li className="setup-text">32gb Trident Z Ram</li>
                <li className="setup-text">Gigabyte RTX 3080</li>
                <li className="setup-text">Moniter: LG 27GL850</li>
                <li className="setup-text">Mouse: HyperX Pulesfire Pro</li>
                <li className="setup-text">keyboard: Roccat Vulcan TKL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
