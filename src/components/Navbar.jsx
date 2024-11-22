import React from 'react'
import logo from '../assets/rajkumarLogo.webp'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a  href='/' aria-label='Home'>
                <img src={logo} className='mx-2' width={50} height={30} alt='logo'/>
            </a>

        </div>
        <div className='m-8 flex  items-center justify-center gap-4 text-2xl'>
          <a href='www.linkedin.com/in/rajkumar-d-74b09a192'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
            <FaLinkedin/>
          </a>
          <a href='www.linkedin.com/in/rajkumar-d-74b09a192'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'>
            <FaGithub/>
          </a>
          <a href='www.linkedin.com/in/rajkumar-d-74b09a192'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'>
            <FaSquareXTwitter/>
          </a>
        </div>

    </nav>

  )
}

export default Navbar
