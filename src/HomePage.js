import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export function HomePage() {
  return (
    <div className="website-container">
      <div className="content-container">
        <p className="intro-text">
          <h2>Marwan Al Shaker 👋</h2>Beginner programmer based in Cologne,
          Germany.
        </p>
        <div className="button-container">
          <Link
            className="home-page-button about-button"
            to="/about"
            style={{
              textDecoration: "none",
            }}
          >
            About me
          </Link>
          <button
            className="home-page-button follow-button"
            style={{
              textDecoration: "none",
            }}
            onClick={() => window.open("https://twitter.com/m_alshaker/")}
          >
            Follow me on Twitter
          </button>
        </div>
      </div>
      <div className="projects-container">
        <div className="other">
          <p className="other-projects-title">Projects</p>
          <p className="other-projects-text">
            I have done some simple project, few examples:
          </p>
          <div className="card-container">
            <ul>
              <li>
                <Card
                  variant="outlined"
                  sx={{ width: 200 }}
                  style={{
                    margin: "10px 0",
                    backgroundColor: "rgba(151, 151, 153, 0.1)",
                  }}
                  className="card"
                  onClick={() => window.open("https://trjwu.csb.app/")}
                >
                  <CardContent>
                    <h3 className="title">Todo List App</h3>

                    <p className="card-text">
                      A simple app that allows you to store actions list (todos)
                      on a cloud.
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="try"
                      href="https://trjwu.csb.app/"
                      target="_blank"
                    >
                      Try it
                    </Button>
                  </CardActions>
                </Card>
              </li>
              <li>
                <Card
                  sx={{ width: 200 }}
                  style={{
                    margin: "10px 0",
                    backgroundColor: "rgba(151, 151, 153, 0.1)",
                  }}
                  className="card"
                  onClick={() => window.open("https://6d0vu.csb.app/")}
                >
                  <CardContent>
                    <h3 className="title">Movie Engine</h3>

                    <p className="card-text">
                      A search engine app that allows you to seach for movie
                      information from the huge database at imdb.com.
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="try"
                      href="https://6d0vu.csb.app/"
                      target="_blank"
                    >
                      Try it
                    </Button>
                  </CardActions>
                </Card>
              </li>
              <li>
                <Card
                  sx={{ width: 200 }}
                  style={{
                    margin: "10px 0",
                    backgroundColor: "rgba(151, 151, 153, 0.1)",
                  }}
                  className="card"
                  onClick={() =>
                    window.open(
                      "https://codesandbox.io/s/exciting-frost-f1grn?file=/src/LinkedList/LinkedList.js&fbclid=IwAR3CAYi0OXDSoyftIeTL_DapM91UR2Kx5sdEDtrT1uLSD9vVRHqLn0w40zY"
                    )
                  }
                >
                  <CardContent>
                    <h3 className="title">Data Structures</h3>

                    <p className="card-text">
                      A simple app that shows how Javascript data structures
                      work.
                    </p>
                  </CardContent>
                  <CardActions>
                    <Button
                      id="try"
                      href="https://codesandbox.io/s/exciting-frost-f1grn?file=/src/LinkedList/LinkedList.js&fbclid=IwAR3CAYi0OXDSoyftIeTL_DapM91UR2Kx5sdEDtrT1uLSD9vVRHqLn0w40zY"
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
    </div>
  );
}
