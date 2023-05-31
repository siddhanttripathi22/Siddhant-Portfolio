import React from 'react'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/kamlesh-patel-605633252/" target="_blank"><AiFillLinkedin size="18"/></a>
      <a href="https://github.com/kcarniwall50" target="_blank"><AiFillGithub size="18"/></a>
      <a href="https://twitter.com/Kamlesh28941022?t=vrmJUWopGErpUMztC9iOSw&s=35" target="_blank"> <IoLogoTwitter  size="18"/></a>

    </div>
  )
}

export default HeaderSocials