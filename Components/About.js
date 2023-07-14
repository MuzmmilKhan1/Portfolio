import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={`container ${styles.About}`}
    id='about'
    >
        {/* Section About Me */}
    <div className='row'
    >
        {/* Image */}
        <Image
        className=' col-md-6'
        style={{
            borderRadius: "20%"
        }}
        width={500}
        height={350}
        src="/coffee-relax_1388-75.avif"
        ></Image>
        {/* Text */}
        <div 
        className='text-center col-md-6'
        // style={{
        //     width: "35%"
        // }}
        >
            <h5
            style={{
                color: "#0070f3",
                fontWeight: "bolder"
            }}
            >About me</h5>
            <h4>Versatile MERN Developer</h4>
            <p>
            As a versatile MERN developer, I bring a diverse
            skill set to the table. Proficient in MySQL, I
            have experience in working with databases to create
            efficient and robust web applications. Additionally,
            my basic Photoshop and Illustrator skills allow me 
            to design and customize visual elements for a polished
            user interface. Furthermore, Currently, I am venturing into 
            Next.js, a powerful React framework, to build 
            performant and scalable web applications. With 
            a blend of technical expertise and creative flair,
            I strive to deliver exceptional solutions that 
            seamlessly blend functionality and aesthetics.
            </p>
        </div>
    </div>
    </div>
  )
}

export default About