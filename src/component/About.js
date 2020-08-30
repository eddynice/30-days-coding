import React from 'react';
import Slideshow from './Slideshow';
import Box from './Box';

//import './Styles.css';
export default function About(){
    return(
        <>
        <Box color="#e5e5e5" bgColor="#421567" title="Carlos Magno" colum>
            <div className="bio-text">
                <p id="bio">
                    Introvert Greek web developer.Horde player and cs student <br/> and know as <span className="italic">Rayma</span>
his hobbed are watching animation                </p><br/>
<p>osareniyeosazee@gmail.com</p>
<p>pray@yahoo.com</p>

            </div>
        </Box>
        <Box title="Gallery">
            <Slideshow/>
        </Box>
        </>
    )
}