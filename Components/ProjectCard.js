import React from 'react'
import ScrollingImage from './ScrollingImage'
import { Github, Linkedin } from 'react-bootstrap-icons'
import styles from '../styles/ProjectCard.module.css'

export default function ProjectCard({ ImageUrl, Title, Description, githubLink, Url, techUsed, isRight, stylesIsRequired }) {

  if(isRight == true){
    return (
      <>
      <div className={`card col-md-8 container ${styles.card}`} id='project' 
      style={{
        boxShadow: "4px 4px 5px rgba(0,0,0,0.1)",
        margin: '30px auto'
      }}>
        <div className={`${styles.cardChild}`}>
          <div className={`${styles.cardElements} p-4 my-auto`}>
              <ScrollingImage
              stylesIsRequired={stylesIsRequired}
              imageUrl={ImageUrl} 
              />
          </div>
          <div className={`my-auto`}>
            <div className={`card-body mt-4 d-flex flex-column align-items-between flex-wrap`}>
              {/* Title */}
              <h4 className='text-center'>{Title}</h4>
              {/* Details */}
              <p>{Description}</p>
              {/* Tech Stack */}
              <div className='row d-flex mx-auto'>
                {techUsed.map((item, index) => (
                  <p
                  className=''
                  key={index}
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                      width: "max-content",
                      margin: "10px",
                      fontWeight: "bold",
                    }}>
                    {item}
                  </p>
                ))}
              </div>
              {/* Links */}
              <div className='d-flex flex-row justify-content-center align-items-center  w-100'
              >
                <a href={githubLink}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "0px 4px",
                  }}
                  target='_blank'
                  >Code
                  <Github size={35} className='mx-2'></Github>
                </a>
                <a href={Url}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "0px 4px"
                  }}
                  target='_blank'
                  > Live Demo
                  <Linkedin size={35} className='mx-2'></Linkedin>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}else{
 return (
      <>
      <div className={`card col-md-8 container ${styles.card}`} id='project'
      style={{
        boxShadow: "4px 4px 5px rgba(0,0,0,0.1)",
        margin: '30px auto'
      }}
      >
        <div className={`
            ${styles.cardElementReverse}
            `}>
          <div className={`${styles.cardElemnts} my-auto`}>
            <div className={`card-body mt-4 d-flex flex-column align-items-center`}>
              {/* Title */}
              <h4 className='text-center'>{Title}</h4>
              {/* Details */}
              <p>{Description}</p>
              {/* Tech Stack */}
              <div className='row d-flex justify-content-center'>
                {techUsed.map((item, index) => (
                  <p
                  key={index}
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                      width: "max-content",
                      margin: "10px",
                      fontWeight: "bold",
                    }}>
                    {item}
                  </p>
                ))}
              </div>
              {/* Links */}
              <div className='d-flex flex-row justify-content-center align-items-center  w-100'
              >
                <a href={githubLink}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "0px 4px",
                  }}
                  target='_blank'
                  >Code
                  <Github size={35} className='mx-2'></Github>
                </a>
                <a href={Url}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "0px 4px"
                  }}
                  target='_blank'
                  > Live Demo
                  <Linkedin size={35} className='mx-2'></Linkedin>
                </a>
              </div>
            </div>
          </div>
         <div className={`${styles.cardElements} p-4 my-auto`}>
           <ScrollingImage
           stylesIsRequired={stylesIsRequired}
             imageUrl={ImageUrl}
           />
         </div>
        </div>
      </div>
    </>
  ) 
}
}
