import React from 'react'
import Education from './education';

const About = () => {
    const [state] = React.useState({
        subHeader: "About Me",
        text1: "Engineering Student specializing in Computer Science with an amazing academic track record along with good programming skills in today's leading programming languages. Seeking for opportunities to prove my abilities and to learn new things from the oragnization for continuous growth.",
        text2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    });

    return (
        <div className="about">
            <div className="container">
                    <h1 className="mainHeader">{state.subHeader}</h1>
                    <p className="mainContent">
                    {state.text1}
                    </p>
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
