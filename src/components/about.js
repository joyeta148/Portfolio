import React from 'react'
import Education from './education';

const About = () => {
    const [state] = React.useState({
        subHeader: "About Me",
        text1: "I am Joyeta Saha an Engineering student I have my interest in development. With the development skills I have good programming skills preferable C++.",
        text2: "Beside my technical skills I have indubitably good team working skills gained through the experience of college projects and also worked with the college's group for the hackathon. I have good presentation skills with effective communication. My Hobbies are Singing, Dancing, Sketching and Painting."
    });

    return (
        <div className="about" id="about">
            <div className="container">
                    <h1 className="mainHeader">{state.subHeader}</h1>
                    
                    <br/><br/><hr align="center"/>
                <div className="row" style={{alignItems:"center", marginTop:"100px"}}>
                    <div className="col-6">
                        <div className="about-img">
                            <img src="./images/coding.jpg" alt="about-img" width="540px" height="500px"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about-info">
                            <h1>Hi! There</h1>
                            <div className="about-info-p">
                                {state.text1}
                            </div>
                            <div className="about-info-p">
                                {state.text2}
                            </div>
                            <div className="contacts">
                                <div className="row" style={{textAlign:"left"}}>
                                    <div className="col-6">
                                        <h2 style={{color:"palevioletred", margin:"10px"}}>Name:</h2>
                                        <p style={{ margin:"10px"}}>Joyeta Saha</p>
                                        <h2 style={{color:"palevioletred", margin:"10px"}}>Phone:</h2>
                                        <p style={{ margin:"10px"}}>+91-7983446702</p>
                                        <h2 style={{color:"palevioletred", margin:"10px"}}>Languages known:</h2>
                                        <p style={{ margin:"10px"}}>English, Hindi, Bengali</p>
                                    </div>
                                    <div className="col-6">
                                        <h2 style={{color:"palevioletred", margin:"10px"}}>Email:</h2>
                                        <p style={{ margin:"10px"}}>joyetasaha148@gmail.com</p>
                                        <h2 style={{color:"palevioletred", margin:"10px"}}>LinkedIn:</h2>
                                        <p style={{ margin:"10px"}}>joyetasaha</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <Education/>
        </div>
    )
}

export default About
