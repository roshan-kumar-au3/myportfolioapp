import React from 'react';
import './App.css';
import Base from './core/Base';
import Laptop from './assets/img/matebook.png';
import ResumeFile from './assets/img/RoshanKumar-Resume.pdf';
import NodeLogo from './assets/img/nodejs.png';
import BootstrapLogo from './assets/img/bootstrap.png';
import MongoLogo from './assets/img/mongo.png';
import GithubLogo from './assets/img/github.png';
import ExpressLogo from './assets/img/express.png';
import PostgreLogo from './assets/img/postgres.png';
import HtmlLogo from './assets/img/htmllogo2.png';
import JqueryLogo from './assets/img/jquerylogo.png';
import CssLogo from './assets/img/csslogo.png';
import SassLogo from './assets/img/sasslogo.png';
import HerokuLogo from './assets/img/herokuLogo.png';



const App = (props) => {

  const goToProject = () => {
    props.history.push("/project");
  }

  return (
    <Base>
      <section className="presentation">
              <div className="introduction">
                  <div className="intro-text">
                      <h1>Hi! I am Roshan Kumar</h1>
                      <p>
                          A Web Developer Based in Bangalore, skilled in javaScript and have more than one year of expierence in building web apps.
                      </p>
                  </div>
                  <div className="cta">
                      <a type="button"
                      href={ResumeFile}
                      className="btn cta-select"
                      download>Download CV</a>
                      <button className="cta-add" onClick={goToProject}>Project</button>
                  </div>
              </div>
              <div className="cover">
                  <img src={Laptop} alt="matebook" />
              </div>
      </section>
      <section className="container jumbotron mt-5">
        <div className="row">
          <div className = "col-2 align-self-center">
              <img className="img-fluid" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={NodeLogo} alt="node" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={ExpressLogo} alt="express" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={BootstrapLogo} alt="bootstrap" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={MongoLogo} alt="Mongodb" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={GithubLogo} alt="git" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={JqueryLogo} alt="jquery" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={PostgreLogo} alt="postgre" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={HtmlLogo} alt="html" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={CssLogo} alt="css" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={HerokuLogo} alt="heroku" />
          </div>
          <div className="col-2 align-self-center">
              <img className="img-fluid" src={SassLogo} alt="Sass" />
          </div>
        </div>
      </section>
    </Base>
  );
}

export default App;
