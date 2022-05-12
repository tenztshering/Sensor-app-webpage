import React from 'react';
import TypeAnimation from 'react-type-animation';
import { Parallax } from 'react-scroll-parallax';

import './Dust';

import Screen from '../assets/Launch Screen1.png';

function Hero() {


  return (
    <div className='hero'>
      <canvas style={{ position: "absolute", zIndex: 900 }} id="canvas" />
      <h1 style={{color:'#000'}}>TIME TO</h1>
        <TypeAnimation
            cursor={false}
            sequence={['SENSE THE WORLD', 1000, '']}
            wrapper="h1"
            repeat={Infinity}
        />
         
      <Parallax
            speed={10}
            translateY={['50', '-200']}
            translateX={['0px', '0px']}
            scaleY={[1, 9.8]}
            scaleX={[1, 9.8]}
            opacity={[2, 0]}
            easing="easeInQuad"
      >
            <img src={Screen} alt="Launch Screen" width={200}/>
      </Parallax>
    </div>
  )
}

export default Hero;