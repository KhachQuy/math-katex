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
                <h1 className = "heading">Digital Mathematics Notes</h1>
                <h1 className = "h-description" >We are using <a1>LaTeX</a1>, a typesetting system to render simple <a2>TEXT_</a2> into <a3>mathematics notations</a3>.</h1>
                <Link to ='/editor' className='btn-link' >
                  <Button variant = 'btn-header'>
                    Get Start
                  </Button>

                </Link>
              </div>
              <div className = "line"></div>
              <div className = "footer">
                <h1 className = "footing">Type Your Notes_</h1>
                <div className = "f-line"></div>
                <h1 className = "f-description" > We offers user the ability to write and edit mathematics notes. Unlikes other editors which required multiple steps to insert 
                  a mathematics symbol or equation. Our system automatic render LaTeX syntaxes into your desired outcome without lifting your hands off the keyboard.
                </h1>
              </div>
          </div>
        </>
    )
}

export default Home