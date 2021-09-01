import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'

const Toggle = () => {

    const [state, setState] = React.useState(true);

    return (
        <div>
            {state ? (" ") :( <ul className="Tnavbar_right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>) }
            <div className="toggle" onClick={() => setState(!state)}><FaAlignJustify/></div>
        </div>
        
        
    )
}

export default Toggle
