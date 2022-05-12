import React from 'react'
import logo from '../assets/TitleLight 1.png';
import { Parallax } from 'react-scroll-parallax';

function Section() {

    const flexDisplay = {
        display:'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        margin:'5%',
    }

    const image = {
        width:'40rem',
        height: '40rem',
        // backgroundColor: '#001',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const para = {
        width: '40em',
        height: '40em',
        // backgroundColor: '#001',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX:'hidden'
    }

  return (
    <div style={flexDisplay}>
        <div style={image}>
        <Parallax
        speed={10}
        opacity={[0.2, 2]}
        >
            <img src={logo} alt='logo'width={300}height={150} />
        </Parallax>
        </div>
        <div style={para}>
        <Parallax
            speed={10}
            translateX={['100', '-50']}
            translateY={['0px', '0px']}
            opacity={[0.2, 2]}
            easing="easeInQuad"
            >
            <h1> <span style={{color: '#fff'}}>A citizen science app</span> <br/> <span style={{color:'#7C7C7C'}}>to improve the world through sensor data </span></h1>
        </Parallax>
        </div>
    </div>
  )
}

export default Section;