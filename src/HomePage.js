import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function Game() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setPosition({ x: event.clientX - 250, y: event.clientY - 250 });
    });
    return () => {
      //   clearTimeout(timeout);
    };
  }, []);
  return (
    <div
      className="ball"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    ></div>
  );
}

export function HomePage() {
  return (
    <div className="website-container">
      <div className="content-container">
        <p className="intro-text">
          <h2 className="name">Marwan Alshaker 👋</h2>
          <p className="tagline">
            I'm a self-taught JavaScript engineer with two years of experience.
            I learn through building products and solving problems. I can now
            build high-grade, production-ready React apps. I'm also starting to
            be an OSS contributor to WordPress.
          </p>
        </p>
        <div className="button-container">
          <Link
            className="home-page-button about-button"
            to="/about"
            style={{
              textDecoration: 'none',
            }}
          >
            About me
          </Link>
          <button
            className="home-page-button follow-button"
            style={{
              textDecoration: 'none',
            }}
            onClick={() => window.open('https://twitter.com/m_alshaker/')}
          >
            Follow me on Twitter
          </button>
        </div>
      </div>
      <div className="projects-container">
        <div className="other">
          <p className="other-projects-title">Projects</p>
          <p className="other-projects-text">
            I have done some project, my favorites:
          </p>
          <div className="card-container">
            <ul>
              <li>
                <Card
                  variant="outlined"
                  style={{
                    margin: '10px 0',
                    backgroundColor: 'rgba(151, 151, 153, 0.1)',
                    padding: 15,
                  }}
                  className="card"
                >
                  <CardContent>
                    <div className="description">
                      <div className="app-info">
                        <h3 className="title">Imitategram</h3>
                        <p className="card-text">An instagram replica</p>
                        <div className="tech">
                          <img
                            src="/React-icon.svg.png"
                            alt="React icon"
                            width="45"
                            height="40"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="65"
                            height="45"
                            viewBox="0 0 66 40"
                            preserveAspectRatio="xMinYMin meet"
                          >
                            <path
                              fill="#89D96D"
                              d="M35.259 14.782a2.591 2.591 0 0 1 3.891-2.243c2.348-.862 4.963-1.313 7.682-1.313 7.281 0 13.526 3.252 15.637 7.932-.018 1.108-1.592 1.624-2.22.944-1.731-3.759-7.199-6.465-13.417-6.465-2.26 0-4.429.345-6.393 1.004a2.592 2.592 0 1 1-5.18.141zm29.113 9.644a2.592 2.592 0 1 0-4.626 1.605c-.828 1.273-2.115 2.426-3.764 3.352-2.547 1.428-5.796 2.215-9.151 2.215-2.905 0-5.694-.575-8.068-1.665-1.604-.737-2.938-1.667-3.935-2.738-.661-.385-2.189.843-1.635 1.779 2.994 3.114 8.072 5.036 13.638 5.036 3.761 0 7.43-.896 10.331-2.524 2.126-1.193 3.776-2.738 4.814-4.476a2.594 2.594 0 0 0 2.396-2.584z"
                            />
                            <path
                              fill="#999"
                              d="M14.435 29.29c-2.364-3.065-3.703-7.39-3.703-12.06 0-4.25 1.121-8.261 3.156-11.295C16.021 2.752 18.907 1 22.013 1c2.831 0 5.53 1.492 7.601 4.2 1.955 2.558 3.227 6.047 3.58 9.826a24.983 24.983 0 0 0-2.591-1.243C29.6 7.776 26.064 3.411 22.013 3.411c-2.277 0-4.452 1.373-6.124 3.867-1.771 2.641-2.747 6.176-2.747 9.953 0 4.152 1.227 8.094 3.31 10.724a2.592 2.592 0 1 1-2.017 1.335zm18.443-12.781c-4.232-2.444-8.954-3.414-12.862-2.732a2.592 2.592 0 1 0 .733 2.317c3.289-.486 7.282.4 10.923 2.503 4.447 2.567 7.592 6.552 8.207 10.247.767.32 1.604.594 2.51.807-.236-4.8-3.919-9.915-9.511-13.142zm.639 19.98c-2.334.297-4.982-.074-7.586-1.048-.748.578-1.54 1.12-2.372 1.621 2.766 1.27 5.664 1.937 8.352 1.937.651 0 1.291-.039 1.912-.118 3.219-.409 5.77-1.861 7.237-4.105a22.276 22.276 0 0 1-2.45-.745c-1.129 1.317-2.898 2.179-5.093 2.458zm-2.581-9.472a2.592 2.592 0 1 0-2.151-1.105c-.493 1.186-1.216 2.373-2.138 3.504-1.426 1.748-3.301 3.32-5.422 4.545-2.961 1.711-6.15 2.629-9.083 2.628-.306 0-.61-.01-.91-.03-2.996-.201-5.272-1.398-6.411-3.369-2.018-3.496-.006-8.754 4.686-12.621a24.79 24.79 0 0 1-.21-2.594l-.133-.185c-3.056 2.197-5.406 5.033-6.619 7.983-1.285 3.126-1.218 6.188.188 8.622 1.553 2.689 4.514 4.313 8.337 4.57.351.023.706.035 1.064.035 3.355 0 6.97-1.03 10.296-2.951 3.965-2.288 7.009-5.556 8.506-9.032z"
                            />
                          </svg>

                          <svg
                            height="30pt"
                            viewBox=".5 -.2 1023 1024.1"
                            width="30pt"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                            <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
                          </svg>
                        </div>

                        <p className="blog-text">
                          For more details please visit the blog{' '}
                          <a
                            className="blog"
                            href="https://dev.to/alshakerm/building-an-instagram-replica-from-scratch-39fb"
                            target="_blank"
                            rel="noreferrer"
                          >
                            here
                          </a>
                        </p>
                      </div>
                      <div className="links">
                        <a
                          className="repo"
                          href="https://github.com/alshakerM/my-imitategram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub Repository
                        </a>
                      </div>
                    </div>
                  </CardContent>
                  <div className="link-container">
                    <Button
                      id="try"
                      href="https://imitategram.vercel.app/"
                      target="_blank"
                    >
                      Try it
                    </Button>
                    <a
                      className="blog-link"
                      href="https://dev.to/alshakerm/building-an-instagram-replica-from-scratch-39fb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out blog{' '}
                    </a>
                  </div>
                </Card>
              </li>
              <li>
                <Card
                  style={{
                    margin: '10px 0',
                    backgroundColor: 'rgba(151, 151, 153, 0.1)',
                    padding: 15,
                  }}
                  className="card"
                >
                  <CardContent>
                    <div className="description">
                      <div className="app-info">
                        <h3 className="title">Mente</h3>
                        <p className="card-text">Meditation app</p>
                        <div className="tech">
                          <img
                            src="/React-icon.svg.png"
                            alt="React icon"
                            width="45"
                            height="40"
                          />
                          <svg
                            height="40"
                            viewBox="0 0 640 640"
                            width="40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m0 0h640v640h-640z" fill="#017acb" />
                            <path
                              d="m307.3 237h30.7v53h-83v235.8l-2.2.6c-3 .8-42.5.8-51-.1l-6.8-.6v-235.7h-83v-53l26.3-.3c14.4-.2 51.4-.2 82.2 0s69.8.3 86.8.3zm234.3 263.8c-12.2 12.9-25.3 20.1-47.1 26-9.5 2.6-11.1 2.7-32.5 2.6s-23.1-.1-33.5-2.8c-26.9-6.9-48.6-20.4-63.4-39.5-4.2-5.4-11.1-16.6-11.1-18 0-.4 1-1.3 2.3-1.9s4-2.3 6.2-3.6 6.2-3.7 8.9-5.1 10.5-6 17.3-10.1 13-7.4 13.7-7.4 2 1.4 3 3.1c6 10.1 20 23 29.9 27.4 6.1 2.6 19.6 5.5 26.1 5.5 6 0 17-2.6 22.9-5.3 6.3-2.9 9.5-5.8 13.3-11.6 2.6-4.1 2.9-5.2 2.8-13 0-7.2-.4-9.2-2.4-12.5-5.6-9.2-13.2-14-44-27.6-31.8-14.1-46.1-22.5-57.7-33.8-8.6-8.4-10.3-10.7-15.7-21.2-7-13.5-7.9-17.9-8-38-.1-14.1.2-18.7 1.7-23.5 2.1-7.2 8.9-21.1 12-24.6 6.4-7.5 8.7-9.8 13.2-13.5 13.6-11.2 34.8-18.6 55.1-19.3 2.3 0 9.9.4 17 .9 20.4 1.7 34.3 6.7 47.7 17.4 10.1 8 25.4 26.8 23.9 29.3-1 1.5-40.9 28.1-43.5 28.9-1.6.5-2.7-.1-4.9-2.7-13.6-16.3-19.1-19.8-32.3-20.6-9.4-.6-14.4.5-20.7 4.7-6.6 4.4-9.8 11.1-9.8 20.4.1 13.6 5.3 20 24.5 29.5 12.4 6.1 23 11.1 23.8 11.1 1.2 0 26.9 12.8 33.6 16.8 31.2 18.3 43.9 37.1 47.2 69.5 2.4 24.4-4.5 46.7-19.5 62.5z"
                              fill="#fff"
                            />
                          </svg>

                          <svg
                            height="30pt"
                            viewBox=".5 -.2 1023 1024.1"
                            width="30pt"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
                            <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
                          </svg>
                        </div>
                      </div>
                      <div className="links">
                        <a
                          className="repo"
                          href="https://github.com/alshakerM/Mente"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub Repository
                        </a>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="try"
                      href="http://mente.vercel.app/"
                      target="_blank"
                    >
                      Try it
                    </Button>
                  </CardActions>
                </Card>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Game />
    </div>
  );
}
