import React from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons'
import { motion } from "framer-motion";
import styles from '../styles/Hero.module.css'

export const Hero = () => {

  const IconStyle = {
    color: "black"
  }

  return (
    // Main Div
    <div 
    id='home'
    className={`${styles.Home}`}
    >
        {/* Div For Text and Explannation */}
        <div
        className={`${styles.desc}`}
        id='home'
        >
            <h2 
            className={`${styles.text}`}
            >
                Full-Stack <br></br> Developer
            </h2>
            <p>I'm Muzamil Khan, a passionate MERN stack developer from Pakistan.
               Let's create exceptional web experiences together!</p>
            {/* Social Icons */}
            <div className={`${styles.homeIcons}`}>
              <a
              href='https://github.com/MuzmmilKhan1' 
              target='_blank'
              style={IconStyle}
              >
              <Github
              size={35} 
              className='mx-2'
              ></Github>
              </a>
              <a 
              href='https://linkedin.com/in/muzamil-khan-developer'
              target='_blank'>
              <Linkedin 
              size={35} 
              className='mx-2'
              style={IconStyle}
              ></Linkedin>
              </a>
            </div>
        </div>
        {/* Image div */}
        <div 
        className={`${styles.ImageDiv}`}
        >
        <motion.img
        src='/ForUpwork.png'
    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
      className={`${styles.homeImage}`}
      animate={{
        scale: [1, 2, 2],
        rotate: [0, 0, 360],
        borderRadius: ["20%", "20%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
    >
    </motion.img>
        </div>
        {/* <div className={`${styles.ImageDiv}`}>
      <img
        src="/ForUpwork.png"
        className={`${styles.homeImage} ${styles.animateImage}`}
      />
    </div> */}
    </div>
  )
}
