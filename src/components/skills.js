import React from 'react'
import {FaGithub} from 'react-icons/fa';
import About from './about'

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div className="skills-header">
                    <h3 className="heading">SKILLS</h3>
                    <h1 className="mainHeader">My Skills</h1>
                    <p className="mainContent">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </div>
            <br/><br/><hr align="center"/>
            
            <div className="row" >
                <div className="col-4" >
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Web Development</div>
                        <div className="skills-box-content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Web Development</div>
                        <div className="skills-box-content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="skills-box">
                        <FaGithub className="github"/>
                        <div className="skills-box-header"> Web Development</div>
                        <div className="skills-box-content">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </div>
                    </div>
                    
                </div>
            </div>
            <About/>
        </div>
    )
}

export default Skills
