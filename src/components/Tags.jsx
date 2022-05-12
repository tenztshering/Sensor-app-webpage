import React from 'react';
import Marquee from "react-easy-marquee";

import Sun from '../assets/sun.png';
import C02 from '../assets/co2.png';
import Temperature from '../assets/hot-temperature.png';
import Fire from '../assets/bonfire.png';
import Humidity from '../assets/humidity.png';
import Thermal from '../assets/thermal.png';
import WindEnergy from '../assets/wind-energy.png';
import Wind from '../assets/wind.png';
import Motion from '../assets/motion.png';


function Tags() {

const label = {
    height:'150px',
    backgroundColor:'#005',
    overflowY:'show',
    display:'flex',
    justifyContent:'space-around',
    alignItems: 'center',
}

  return (
    <div style={label}>
       <Marquee duration={100000}height="100px" reverse="false" pauseOnHover={true}>
        <img src={Sun} width={100}/>
        <img src={C02} width={100}/>
        <img src={Temperature} width={100}/>
        <img src={Fire} width={100}/>
        <img src={Humidity} width={100}/>
        <img src={Thermal} width={100}/>
        <img src={WindEnergy} width={100}/>
        <img src={Wind} width={100}/>
        <img src={Motion} width={100}/>
       </Marquee>
    </div>
  )
}

export default Tags