import React from 'react';
import Contact from "./contact";

const Education = () => {
    return (
        <div className="educations" id="education">
            <div className="container">
                <div className="mainHeader" style={{fontSize:"35px"}}><strong>Education</strong></div>
                <div className="row">
                    <div className="col-4" style={{marginTop:"50px"}}>
                        <div className="education-box">
                            <div className="educationHeading">Bachelor of Technology (CSE)</div>
                            <div className="name">Delhi Technical Campus affiliated to GGSIPU</div><hr/>
                            <ul type="none">
                                <li>Batch 2018 - 2022</li>
                                <li>1st year - 80.48%</li>
                                <li>2nd year - 85.54%</li>
                                <li>Sem - 5: 90.42%</li>
                                <li>Overall: 84.39% or 8.9 CGPA</li>
                            </ul>      
                        </div>
                    </div>
                    <div className="col-4" style={{marginTop:"50px"}}>
                        <div className="education-box">
                            <div className="educationHeading">Intermediate, Science Stream (PCM)</div>
                            <div className="name">Dewan Public School</div><hr/>
                            <ul type="none">
                                <li>2017-2018 (CBSE board)</li>
                                <li>Percentage - 83%</li>
                            </ul>      
                        </div>
                    </div>
                    <div className="col-4" style={{marginTop:"50px"}}>
                        <div className="education-box">
                            <div className="educationHeading">High School </div>
                            <div className="name">S.D.A. Sr. Sec. Mission School</div><hr/>
                            <ul type="none">
                                <li>2015 -2016 (ICSE board)</li>
                                <li>Percentage - 86.5%</li>
                            </ul>      
                        </div>
                    </div>
                </div>
                <Contact/>
            </div>
        </div>
    )
}

export default Education
