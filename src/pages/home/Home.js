import React from 'react'
import HeroSection from './herosection/HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree} from './Home_Components';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
function Home() {
    return (
        <>
          <Navbar/>
          <HeroSection {...homeObjOne}/>
          <HeroSection {...homeObjTwo}/>
          <HeroSection {...homeObjThree}/>
        </>
    )
}

export default Home