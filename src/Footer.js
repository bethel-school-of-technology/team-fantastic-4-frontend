import React from 'react';
import "./Footer.css"
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} Faithful Connections | Owned and designed by Fantastic 4
                        <AppleIcon className='apple' icon={AppleIcon}></AppleIcon>
                        <FacebookIcon className='facebook' icon={FacebookIcon}></FacebookIcon>
                        <InstagramIcon className='instagram' icon={InstagramIcon}></InstagramIcon>
                        <MailOutlineIcon className='mailoutline' icon={MailOutlineIcon}></MailOutlineIcon>
                        
                    </p>
                    
                </div>
               
            </div>
        </div>
    )
}

export default Footer;