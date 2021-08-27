import React from 'react'
import Services from "./services";

const Banner = () => {
    return (
        <header className="header"> 
            <div className="container">
                <div className="row" style={{marginTop:"150px"}}>
                    <div className="col-6">
                    <div className="header-content">
                        <div className="header-section">
                            
                            <h1>I am Joyeta Saha</h1>
                            <p>
                                Engineering Student specializing in Computer Science with an
                                amazing academic track record along with good programming skills
                                in today's leading programming languages. Seeking for opportunities
                                to prove my abilities and to learn new things from the oragnization 
                                for continuous growth.
                            </p>
                            <div className="header-button">
                                <a href="" className="btn">
                                   Download My Resume
                                </a>
                            </div>
                        </div>
                        </div>   
                    </div>
                    <div className="col-6">
                        <div className="banner-img">
                            <img src="/images/pic.jpg" alt="photo" width="350px"/>
                        </div>
                    </div>
                </div>
                <Services/>
            </div>
        </header>
    )
}

export default Banner

//rafce 