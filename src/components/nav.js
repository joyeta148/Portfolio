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
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    
                </div>
            </div>
            <Toggle/>
        </nav>
    )
}

export default Nav
