import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-content">
            <ul className="footer-ul">
                <li>
                    <FaFacebookF />
                </li>
                <li>
                    <a href="https://github.com/joyeta148" target="_blank"><FaGithub /></a>
                </li>
                <li>
                    <a href="https://in.linkedin.com/in/joyetasaha" target="_blank"><FaLinkedinIn /></a>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>
        </div>
    )
}

export default Footer
