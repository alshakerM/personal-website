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
                Hi, I'm Marwan Alshaker, a JavaScript engineer and Front-end
                developer. Currently working on improving myself.
              </p>
              <p className="about-text-2">Based in Cologne, Germany.</p>

              <button className="contact-button" onClick={() => setShow(!show)}>
                Contact Me
              </button>
              <div
                className="contact-section"
                style={show ? {} : { opacity: 0, transform: 'scaleY(0)' }}
              >
                <p className="contact-email">Email: marwan@alshaker.dev</p>
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
                <img src="my small suit pic.jpg" alt="" className="pc-pic" />
              </div>
              <h2 className="setup-head-text">My Setup</h2>
              <ul className="software-list">
                <li className="setup-list-title">Software :</li>
                <li className="setup-text">Visual Studio Code</li>
                <li className="setup-text">Git Bash</li>
                <li className="setup-text">Google Chrome</li>
                <li className="setup-text">GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
