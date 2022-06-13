import React from 'react';
import logo from '../assets/TitleLight 1.png';

import '../App.css';

const Heading = () => {

  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100px',
  }
  
  return (
    <div className='headings' style={style}>
        <div>
          <img src={logo} alt='logo' width={150}/>
    </div>
        
    
    <div>
          <h3 style={{color:'#ccc'}}>By DSP App development</h3>
    </div>
    </div>
  )
}

export default Heading;