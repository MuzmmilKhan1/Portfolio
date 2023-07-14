import React from 'react'
import  styles from '../styles/Contact.module.css' 
import { SiMinutemailer } from 'react-icons/si'
import { Linkedin } from 'react-bootstrap-icons'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

export const Contact = () => {
  return (
    <div 
    className={`${styles.contact_div} container`}
    style={{
        paddingTop: '15vh'
    }}
    id='contact'
    >
        <p
        style={{
            fontWeight: "bolder",
            fontSize: "2rem",
            color: "#0070f3",
          }}
        >
            Contact
        </p>
        <h3 style={{
            fontWeight: "bolder"
        }}>Feel Free to Contact me</h3>
        <div 
        className={`${styles.contact_info_combined}`}
        >
            <div 
            className={`${styles.contact_info_icon}`}
            >
                    <SiMinutemailer 
                    className={`${styles.contact_icons}`}
                    href="mailto:muzmmil.khan16@gmail.com"
                    style={{
                        fontSize: "4.5rem"
                    }}
                    ></SiMinutemailer>
                <div 
                className={`${styles.contact_info}`}>
                    <h5>Mail</h5>
                    <a 
                    className={`${styles.aForContact}`}
                    href="mailto:muzmmil.khan16@gmail.com"
                    >muzmmil.khan16@gmail.com</a>
                </div>
            </div>
            <div 
            className={`${styles.contact_info_icon}`}
            >
                    <TiSocialLinkedinCircular 
                    className={`${styles.contact_icons}`}
                    style={{
                        fontSize: "4.5rem"
                    }}
                    href="https://linkedin.com/in/muzamil-khan-developer"
                    >
                    </TiSocialLinkedinCircular>
                <div 
                className={`${styles.contact_info}`}
                >
                    <h5>Linkedin</h5>
                    <a 
                    className={`${styles.aForContact}`}
                     href="https://linkedin.com/in/muzamil-khan-developer"
                     >Muzamil Khan</a>
                </div>
            </div>
        </div>
    </div>
  )
}
