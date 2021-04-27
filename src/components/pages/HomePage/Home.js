import React from 'react'
import HeroSection from '../../herosection/HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree} from './Data';
import './Home.css';
function Home() {
    return (
        <>
          <HeroSection {...homeObjOne}/>
          <HeroSection {...homeObjTwo}/>
          <HeroSection {...homeObjThree}/>
        </>
    )
}

export default Home
