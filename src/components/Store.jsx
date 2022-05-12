import React from 'react';
import '../App.css';

import GoogleApp from '../assets/ButtonGoogle.png';
import AppStore from '../assets/ButtonApp.png';

function Store() {

    const style ={
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        height:'50vh',
    }
   
  return (
    <div style={style}>
    <h1 style={{color:'#C0BCBC'}}>Get it now</h1>
    <div>
      <a href="#"><img className='appStore' src={GoogleApp} width="200em"/></a>
      <a href="#"><img className='appStore' src={AppStore} width="200em"/></a>
    </div>
    </div>
  )
}

export default Store