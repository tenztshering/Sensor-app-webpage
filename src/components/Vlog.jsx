import React from 'react';
import Phone from '../assets/Layout_Group.png';
import { Parallax } from 'react-scroll-parallax';
import mockup from '../assets/layOut.png'

function Vlog() {

    const wrapper = {
        margin:'5%',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
    }

    const image = {
        // backgroundColor: '#003',
        height:'80vh',
        width:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        overflowY:'hidden'
        
    }

    const usp = {
        width:'50rem',
        // backgroundColor: '#003',
        overflowX:'hidden',
     
    }
    const sensors = {
        // backgroundColor: '#003',
        height:'40em',
        width:'30em',
    }

    const para2 = {
        backgroundColor: '#7C3399',
        padding: '2%',
        borderRadius: '10px',
        margin: '5%',
    }
    
  return (
    <>
    <div style={wrapper}>
        <div style={image}>
            <Parallax 
            speed={20}
            translateX={['0px', '0px']}
            scale={[0.2, 1]}
            rotate={[-120, 180]}
            easing="easeInQuad"
            >
                <img src={Phone} alt='logo'width={350} />
            </Parallax>
        </div>
        <div style={usp}>
            <Parallax
                speed={10}
                translateX={['100', '-100']}
                translateY={['0px', '0px']}
                opacity={[0.5, 2]}
                easing="easeInQuad"
            >
                <p style={para2}>A citizen science app to improve the world through sensor data</p>
                <p style={para2}>Sensor from all over the world in one App</p>
                <p style={para2}>Combining sensor data from analysis</p>
            </Parallax>
        </div>
    </div>
    <div style={wrapper}>
        <div style={sensors}>
            <p style={para2}>Compatible with LoRa Sensor</p>
            <p style={para2}>Display Variety of Sensors</p>
            <p style={para2}>Overall combined data</p>
            <p style={para2}>Display Variety of Sensors</p>
            <p style={para2}>Compatible with LoRa Sensor</p>
            <p style={para2}>Preferred  Unit measurement</p>
            <p style={para2}>Customised Dasboard</p>
            <p style={para2}>Overall combined data</p>
        </div>
    <div style={image}>
        <Parallax
            speed={20}
            translateY={['200', '-200']}
            translateX={['0px', '0px']}
        >
            <img src={mockup} alt='logo'width={500} />
        </Parallax>
        </div>
    </div>
    </>
  )
}
    
export default Vlog;