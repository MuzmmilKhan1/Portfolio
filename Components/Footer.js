import React from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  const IconStyle = {
    color: "white"
  }
  return (
    <div className={`${styles.Footer}`}>
        <p>Copyright © 2023. All rights are reserved</p>
        <div className={`${styles.footer_icons}`}>
        <div>
              <a
              href='https://github.com/MuzmmilKhan1' 
              target='_blank'
              style={IconStyle}
              >
              <Github size={35} className={`mx-2 ${styles.footerIcons}`}></Github>
              </a>
              <a 
              href='https://linkedin.com/in/muzamil-khan-developer'
              target='_blank'
              style={IconStyle}
              >
              <Linkedin size={35} className={`mx-2 ${styles.footerIcons}`}></Linkedin>
              </a>
            </div>
        </div>
    </div>
  )
}
