import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/rabia-kahya/" target="_blank"> <BsLinkedin /> </a>
            <a href="https://github.com/ladycodeer?tab=overview&from=2023-02-01&to=2023-02-28" target="_blank"> <FaGithub /> </a>
            <a href="https://medium.com/" target="_blank"> <SiMedium /> </a>
        </div>
    )
}

export default HeaderSocials