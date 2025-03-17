import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.instagram.com/v_jordao00/' target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                <a href='https://www.facebook.com/victor.jordao.735' target="_blank" rel="noopener noreferrer"><FacebookIcon/></a>
                <a href='https://www.linkedin.com/in/victor-jordão-b53a68244/' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
            </div>
            <p>&copy; 2025 Victorjota-web.com</p>
        </div>
    )
}

export default Footer