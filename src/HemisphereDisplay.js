import React from 'react';
import nPic from './logo192.png';
import sPic from './logo512.png';
import './Hemisphere.css'

const hemisphereConfig={
    Nothern:{
        text:'nothern',
        picture:nPic
    },
    Southern:{
        text:'southern',
        picture:sPic
    }
}

const HemisphereDisplay =({latitude})=> {
    const hemisphere=latitude>0?'Nothern':'Southern';
    const {text, picture}= hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
        <div className='ui inverted segment'>
            <div className='image'>
                <img src={picture} alt=""/>
            </div>
            <div className='ui horizontal inverted divider'>
            {text}
            </div>
        </div>
            
           
        </div>)
}
export default HemisphereDisplay;