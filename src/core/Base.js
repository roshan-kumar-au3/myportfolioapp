import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Base.css';

const Base = ({
        className="container-fluid",
        children,
    }) => {

    const history = useHistory();

    const currentTab = (history, path) => {
        if (history.location.pathname === path) {
            return {
                color: "#fad390"
            };
        } else {
            return {
                color: "#eeeeee"
            };
        }
    }

    return (
        <React.Fragment>
            <header className="container-fluid">
                    <nav className="navbar navbar-expand-md">
                        <NavLink className="navbar-brand" to="/" style={currentTab(history, "/")}>
                            <img src={require("../assets/img/logo.svg")} width="30" height="30" alt="" loading="lazy" />
                            <span className="text-white ml-2">Roshan Kumar</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <img src={require("../assets/img/arrow-left.svg")} alt="logo" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-around" style={{ width: "100%" }}>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" style={currentTab(history, "/")}>Home</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/resume" style={currentTab(history, "/resume")}>Resume</NavLink>
                                </li> */}
                                <li className="nav-item">
                                <NavLink className="nav-link" style={currentTab(history, "/project")} to="project">Project</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" style={currentTab(history, "/about")} to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={currentTab(history, "/contact")}>Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/roshan-kumar-b0b48117a/">
                                    <i className="fa fa-linkedin text-white"></i>
                                </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="https://github.com/roshan-kumar-au3">
                                    <i className="fa fa-github text-white"> </i>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </header>
            <div className={className}>
                {children}
            </div>
            <footer className="container mb-3">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-12 col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 text-white">Get connected with me on social networks!</h6>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 text-center text-md-right">
                            <a className = "fb-ic ml-0" href="https://www.linkedin.com/in/roshan-kumar-b0b48117a/">
                                <i className="fa fa-linkedin text-white mr-4"> </i>
                            </a>
                            <a className="tw-ic" href="/">
                                <i className="fa fa-twitter text-white mr-4"> </i>
                            </a>
                            <a className="li-ic" href="https://github.com/roshan-kumar-au3" >
                                <i className="fa fa-github text-white mr-4"> </i>
                            </a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-around" id="footer">
                            <p>
                                <i className="fa fa-home"></i> Bangalore, KA 560078, IND</p>
                            <p>
                                <i className="fa fa-envelope example"></i> roshankunaguero09@gmail.com</p>
                            <p>
                                <i className="fa fa-phone"></i> + 91 8217700165</p>
                            <p>
                                <i className="fa fa-phone"></i> + 91 7259122315</p>
                        </div>
                    </div>
                <div className="text-center">© 2020 Copyright:
                    <a href="/" className="text-warning"> Roshan Kumar</a>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Base;
