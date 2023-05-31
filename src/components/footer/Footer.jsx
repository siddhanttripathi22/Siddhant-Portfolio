import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Kamlesh</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://github.com/kcarniwall50"><AiFillGithub/></a>
        <a href="https://twitter.com/Kamlesh28941022?t=vrmJUWopGErpUMztC9iOSw&s=35"><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/kamlesh-patel-605633252/"><AiFillLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Kamlesh Portfolio. All rights reserviced 2023</small>
      </div>
    </footer>
  )
}

export default Footer