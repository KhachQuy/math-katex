import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
function Home() {
    return (
        <>
          <Navbar/>
          <div className = "home-page">
              <div className = "header">
                Digital Mathematics Notes 
                We are using <a1>LaTeX</a1>, a typesetting system to render simple <a2>TEXT_</a2> into <a3>mathematics notations</a3>.
                <Link to ='/editor' className='btn-link' >
                  <Button variant = 'btn-header'>
                    Get Start
                  </Button>

                </Link>
              </div>
              <div className = "line"></div>
              <div className = "footer">
                Type Your Notes_
                We offers user the ability to write and edit mathematics notes. Unlikes other editors which required multiple steps to insert 
                a mathematics symbol or equation. Our system automatic render LaTeX syntaxes into your desired outcome without lifting your hands off the keyboard.
              </div>
          </div>
        </>
    )
}

export default Home