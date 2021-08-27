import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'

const Toggle = () => {

    const [state, setState] = React.useState(true);

    return (
        <div>
            {state ? (" ") :( <ul className="Tnavbar_right">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">Resume</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>) }
            <div className="toggle" onClick={() => setState(!state)}><FaAlignJustify/></div>
        </div>
        
        
    )
}

export default Toggle
