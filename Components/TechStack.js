import React from 'react'
import  styles  from "../styles/techstack.module.css"
import { IoLogoJavascript } from 'react-icons/io'
import { SiNextdotjs, SiExpress } from 'react-icons/si'
import { LiaNode } from 'react-icons/lia'

export const TechStack = () => {
  return (
    <div className={`${styles.techStackDiv}`}
    id='techstack'
    >
      <h3 className={`${styles.techstackh3} text-center`}>
          Tech Stack
      </h3>
    <div className={`${styles.techStackFlexDiv}`}
    >
        {/* Front End */}
        <div className={`${styles.card}`}
        >
            <div id='techstack'>
            <h4
            className='text-center'
            >
            <img width="50" height="50" 
            src="https://img.icons8.com/plasticine/100/web-design.png" 
            alt="web-design"/>
             Frontend </h4>
            </div>

             {/* Front End Skills */}
             <div className='container-fluid row mx-auto my-2'>
                <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                {/* HTML */}
                <img width="60" height="60" 
                src="https://img.icons8.com/plasticine/100/html-5.png"
                alt="html-5"/>
                {/* CSS */}
                <img width="60" height="60"
                 src="https://img.icons8.com/plasticine/100/css3.png"
                 alt="css3"/>
                 {/* JS */}
                 <img width="60" height="60"
                  src="https://img.icons8.com/color/48/javascript--v1.png"
                  alt="javascript--v1"/>
                </div>
                  
                    <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                  {/* SASS */}
                  <img width="60" height="60"
                   src="https://img.icons8.com/color/100/sass.png"
                   alt="sass"/>
                    {/* BootStrap */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/color/96/bootstrap.png"
                     alt="bootstrap"/>
                    {/* React */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/color/96/react-native.png"
                     alt="react-native"/>
                   </div>
                     
                     
                     <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                      {/* Next JS */}
                      <SiNextdotjs
                      style={{
                          width: '50',
                          height: '50'
                        }}
                        ></SiNextdotjs>
                        {/* Redux */}
                        <img width="60" height="60"
                         src="https://img.icons8.com/color/96/redux.png"
                         alt="redux"/>
                        </div>
             </div>
        </div>
        {/* Backend */}


        <div className={`${styles.card}`}
        >
            <h4
            className='text-center'
            >
            <img width="50" height="50"
            src="https://img.icons8.com/plasticine/100/database-options.png" 
            alt="database-options"/> Backend </h4>
        {/* Back End Skills */}
            <div className='container-fluid row mx-auto my-auto'>
                <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                {/* Node Js */}
                <LiaNode
                className='mx-2' 
                style={{
                    width: "60",
                    height: "60",
                    color: "green"
                }}>
                </LiaNode>
                {/* Express */}
                <SiExpress
                className='mx-2' 
                style={{
                    width: "60",
                    height: "60",
                }}
                >
                </SiExpress>
                 {/* MongoDB */}
                 <img width="60" height="60" className='mx-2' 
                 src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"
                 alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo"/>
                </div>
                  
                    <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                  {/* Firebase */}
                  <img width="60" height="60" className='mx-2' 
                   src="https://img.icons8.com/color/100/firebase.png"
                    alt="firebase"/>
                    {/* My SQL */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/color/48/mysql-logo.png"
                      alt="mysql-logo"/>
                    {/* Next */}
                    <SiNextdotjs
                    className='mx-2' 
                      style={{
                          width: '50',
                          height: '50',
                          color: "black"
                        }}
                        ></SiNextdotjs>
                   </div>

                   <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                        {/* NPM */}
                        <img width="60" height="60"
                         src="https://img.icons8.com/color/48/npm.png"
                         alt="npm"/>
                    </div>
                     
             </div>
        </div>


        {/* Tools */}
        <div className={`${styles.card}`}
        >
            <h4
            className='text-center'
            >
            <img width="50" height="50" 
            src="https://img.icons8.com/plasticine/100/administrative-tools.png" 
            alt="administrative-tools"/>
             Tools</h4>
                     {/* Other Skills */}
            <div className='container-fluid row mx-auto my-auto'>
                <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                    {/* Git */}
                    <img width="60" height="60" 
                    src="https://img.icons8.com/ios-filled/50/git.png" 
                    alt="git"/>
                    {/* Github */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/fluency/48/github.png"
                     alt="github"/>
                     {/* Heroku */}
                     <img width="60" height="60"
                      src="https://img.icons8.com/color/48/heroku.png"
                      alt="heroku"/>
                </div>

                <div className='d-flex flex-direction-row justify-content-center align-items-center my-2'>
                    {/* Photoshop */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/doodle/48/adobe-photoshop.png"
                     alt="adobe-photoshop"/>
                    {/* Illustrator */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
                     alt="adobe-illustrator--v1"/>
                    {/* Figma */}
                    <img width="60" height="60"
                     src="https://img.icons8.com/color/48/figma--v1.png"
                     alt="figma--v1"/>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
