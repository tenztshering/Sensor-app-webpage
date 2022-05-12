import React from 'react';
import Heading from './components/Heading';
import Hero from './components/Hero';
import Section from './components/Section';
import Tags from './components/Tags';
import Vlog from './components/Vlog';
import Footer from './components/Footer';
import Store from './components/Store';

import AnimatedCursor from "react-animated-cursor"

import './App.css';

function App() {
  return (
    <div className='wrapper'>
       <AnimatedCursor 
        innerSize={20}
        outerSize={20}
        color='255,255,0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'h1',
          'button',
          '.icon'
        ]}
       />
        <Heading />
        <Hero />
        <Section />
        <Tags />
        <Vlog />
        <Store />
        <Footer />
    </div>
  )
}

export default App;