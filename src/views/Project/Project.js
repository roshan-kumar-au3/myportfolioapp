import React from 'react';
import Base from '../../core/Base';
import MusifyProject from '../../assets/img/musify.png';
import ServiciumProject from '../../assets/img/servicium.png';
import SearchEngine from '../../assets/img/searchEngine.png';
import Vidjot from '../../assets/img/vidjot.png';
import MemoryGame from '../../assets/img/memory.png';
import CovidProject from '../../assets/img/coviddashboard.png';
import SianProject from '../../assets/img/Sian.png';
import MysiteProject from '../../assets/img/mysite.png';
import MachinehackProject from '../../assets/img/machinehack.png';
import { Link } from 'react-router-dom';


const Project = () => {
    return (
        <Base>
            <section id="examples" className="text-center container mt-5 text-white">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={MusifyProject} className="img-fluid" alt="Musify" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Musify</h4>
                        <a className="btn btn-outline-warning btn-lg" 
                        href="http://music-app-roshan.herokuapp.com/">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={SearchEngine} className="img-fluid" 
                            alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Search Engine</h4>
                        <a className="btn btn-outline-warning btn-lg" 
                        href="https://amazing-jennings-1698b3.netlify.app/">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={ServiciumProject} className="img-fluid"
                            alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Servicium</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://github.com/attainu/servicium-au3">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={Vidjot} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Vidjot</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://github.com/roshan-kumar-au3/vidjot">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={CovidProject} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Covid19 Dashboard</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://happy-fermi-eab52d.netlify.app">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={MemoryGame} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Memory Game</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://unruffled-roentgen-a06ecc.netlify.app">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={SianProject} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">S.i & a.n Data Labs</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://siandatalabs.netlify.app/">Go to Project</a>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={MysiteProject} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">Portfolio</h4>
                        <Link className="btn btn-outline-warning btn-lg" to="/">Go to Project</Link>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="view overlay z-depth-1-half">
                            <img src={MachinehackProject} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-4 font-weight-bold">MachineHack.com</h4>
                        <a className="btn btn-outline-warning btn-lg" href="https://unruffled-wescoff-341557.netlify.app/">Go to Project</a>
                    </div>
                </div>
            </section>
        </Base>
    )
}

export default Project;
