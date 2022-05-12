import React from 'react';
import { GithubOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

import Logo from '../assets/TitleLight 1.png';
import '../App.css';

function Footer() {
    const footer = {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#003',
    }

    const icon = {
      translateY: '-10em',
      cursor: 'pointer',
    }

    const current = new Date();
    const date = current.getFullYear();

  return (
    <div style={footer}>
        <div>
            <img src={Logo} alt="logo" width={200}/>
        </div>
        <div>
        <p>All Rights Reserved Copyright @ {date}</p>
        </div>
        <div style={footer}>
        <GithubOutlined className='icon' style={{ fontSize: '3em', color: '#08c', }} />
        <InstagramOutlined className='icon' style={{ fontSize: '3em', color: '#08c',  }}/>
        <FacebookOutlined className='icon' style={{ fontSize: '3em', color: '#08c', }}/>  
        </div>
    </div>
  )
}

export default Footer