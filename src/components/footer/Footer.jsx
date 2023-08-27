import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Siddhant</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://github.com/siddhanttripathi22"><AiFillGithub/></a>
        <a href="https://twitter.com/Siddhan97115645"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/siddhant-tripathi-48b4a61b8/"><AiFillLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Siddhant Portfolio. All rights reserved 2023</small>
      </div>
    </footer>
  )
}

export default Footer