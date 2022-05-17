import React from 'react'
import { Twitter, Instagram,Facebook, LinkedIn } from '@mui/icons-material'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <Twitter />
        <Instagram />
        <Facebook />
        <LinkedIn />
      </div>
        <p>&copy; {new Date().getFullYear()} Indianfood.com </p>
    </div>
  )
}

export default Footer