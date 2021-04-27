import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GrNotes } from 'react-icons/gr';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../button/Button'
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] =useState(true);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
            
        }else{
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);
    return (
        <>
        <div className="navbar">
            <div className = "navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    {/* <GrNotes className="navbar-icon" /> */}
                    EzMathDoc
                </Link>
                <div className ="menu-icon" onClick = {handleClick}>
                    {  click ? <FaTimes /> : <FaBars /> }
                    
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to= '/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to= '/signup' className='nav-links' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>

                    <li className='nav-btn'>
                        {button ? (
                            <Link to ='/editor' className='btn-link' >
                                <Button buttonStyle = 'btn--outline'> New Project
                                </Button>
                            </Link>

                        ): (
                            <Link to ='/editor' className='btn-link'onClick={closeMobileMenu}>
                                <Button buttonStyle ='btn--outline'>
                                    New Project
                                </Button>
                            </Link>
                        )}                     


                    </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default Navbar
