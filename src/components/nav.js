import React from 'react'
import Toggle from './toggle'

const Nav = () => {

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <img src="/images/logo.jpg" alt="logo" width="245px"/>
                        </div>
                    </ul>
                    <ul className="navbar_right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                </div>
            </div>
            <Toggle/>
        </nav>
    )
}

export default Nav
