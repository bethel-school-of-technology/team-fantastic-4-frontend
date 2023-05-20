import React from 'react';
import "./Footer.css"
//import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Faithful Connections | Owned and designed by Fantastic 4
                    </p>
                    
                </div>
               
            </div>
        </div>
    )
}

export default Footer;