import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] =useState(true);

    const handleClick = () => setClick (!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1300) {
            setButton(false)
            
        }else{
            setButton(true)
        }
    };
    window.addEventListener('resize', showButton);
    return (
        <>
        <div className="navbar">
                
            <div className="navbar-logo">

                <div className = "sub-text1">
                    Editor
                </div>
                    EzMathDoc
                <div className = "sub-text2">
                    LaTeX
                </div>
            </div>
        </div>
        <div className = "menu-container">
            <div className ="menu-icon" onClick = {handleClick}>
                {  click ? <FaTimes /> : <FaBars /> }
                
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to= '/about' className='nav-links' onClick={closeMenu}>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to= '/signup' className='nav-links' onClick={closeMenu}>
                        Sign Up
                    </Link>
                </li>

                <li className='nav-btn'>
                    {button ? (
                        <Link to ='/editor' className='btn-link' >
                            <Button className = "nav-btn" size="lg"> LogIn
                            </Button>
                        </Link>

                    ): (
                        <Link to ='/editor' className='btn-link'onClick={closeMenu}>
                            <Button className = "nav-btn" size="lg">
                                New Project
                            </Button>
                        </Link>
                    )}                     
                </li>
            </ul>
        </div>                    
            
        </>
    )
}

export default Navbar
