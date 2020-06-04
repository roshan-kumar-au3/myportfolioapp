import React from 'react';
import Base from '../../core/Base';
import Laptop from '../../assets/img/matebook.png';
//import ResumeFile from '../../assets/img/RoshanKumar-Resume.pdf';

const About = (props) => {
    // const goToProject = () => {
    //     props.history.push("/project");
    // }
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
                        {/* <div className="cta">
                            <a type="button"
                            href={ResumeFile}
                            className="btn cta-select"
                            download>Download CV</a>
                            <button className="cta-add" onClick={goToProject}>Project</button>
                        </div> */}
                    </div>
                    <div className="cover">
                        <img src={Laptop} alt="matebook" />
                    </div>
            </section>
        </Base>
    )
}

export default About;
