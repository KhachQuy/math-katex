import React, { useRef } from 'react';
import fire from '../../../fire';
import './Data';
import Login from './Login.js';
const Hero = ({handleLogout}) =>{
    return (
        <section className= "hero">
            <nav>
    <h2> Welcome {fire.useRef}</h2>
                <button onClick = {handleLogout}>Logout</button>
            </nav>
        </section>
    );
};
export default Hero