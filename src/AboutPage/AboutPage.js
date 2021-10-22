import "./AboutPage.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="body">
      <div className="about-containor">
        <div className="about-sec-containor">
          <div className="back-arrow"><Link to="/" style={{color:"white", opacity:"0.7"}}>
          <ArrowBackIcon fontSize="large" /></Link></div>
          <div className="content1">
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
                I have loved computers since i was a kid and was always fascinated by how they work although i didn't discover my passion into coding until recently.
                always loved Gaming, and im a huge fan of cars. 
              </p>
            </div>
            <div className="setup-sec">
              <div className="pc">
                <img src="https://pbs.twimg.com/profile_banners/1450213732748042243/1634593546/1500x500" alt="" className="pc-pic" />
              </div>
              <p className="pc-text">this is my pc that i built myself and designed this website on just thought it's cool to keep the meomory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
