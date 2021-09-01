import React from 'react'
import {FaGithub} from 'react-icons/fa';
import About from './about'

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="skills-header">
                    <h3 className="heading">SKILLS</h3>
                    <h1 className="mainHeader">My Skills</h1>
                    <p className="mainContent">
                        Below I have mentioned my all technical skills :-
                    </p>
                </div>
            </div>
            <br/><br/><hr align="center"/>
            
            <div className="row" >
                <div className="col-4" >
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Programming Languages </div>
                        <div className="skills-box-content">
                        <ul>
                            <li>C++</li>
                            <li>C</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>

                        </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Development Skills</div>
                        <div className="skills-box-content">
                            <div className="row">
                                <div className="col-6">
                                    <h3>FRONTEND</h3>
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>HTML5, CSS</li>
                                        <li>Bootstrap</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <h3>BACKEND</h3>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>ExpressJS</li>
                                        <li>NodeJS</li>
                                        <li/><li/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Programming Tools </div>
                        <div className="skills-box-content">
                        <ul>
                            <li>Code Blocks</li>
                            <li>VS Code</li>
                            <li>Github</li>
                        </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <About/>
        </div>
    )
}

export default Skills
