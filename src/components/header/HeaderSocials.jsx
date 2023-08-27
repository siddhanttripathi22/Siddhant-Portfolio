import React from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/siddhant-tripathi-48b4a61b8/" target="_blank"><AiFillLinkedin size="18"/></a>
      <a href="https://github.com/siddhanttripathi22" target="_blank"><AiFillGithub size="18"/></a>
      <a href="https://twitter.com/Siddhan97115645" target="_blank"> <IoLogoTwitter  size="18"/></a>

    </div>
  )
}

export default HeaderSocials