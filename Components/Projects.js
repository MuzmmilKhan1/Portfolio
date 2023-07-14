import React from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

export const Projects = () => {
  return (
    <div id='project'>
        <h3 className='text-center my-3'
        style={{
            fontWeight: "bolder",
            color: "#0070f3",
          }}
        >Projects</h3>

        {/* Project Card for Dabhaag */}
        <ProjectCard
        Title={"Dabhaag E-commerce Platform"}
        Description={"Dabhaag is a feature-rich e-commerce platform built using React, Node.js, Express, and MySQL. It offers a seamless shopping experience with server-side rendering (SSR) and CRUD abilities. Users can browse products, manage orders, and update their account details. The website leverages React, JavaScript, HTML, and CSS for an interactive UI."}
        ImageUrl={'/dabhaag.png'}
        stylesIsRequired={true}
        Url={"https://ecommerce-frontend-966da.web.app/"}
        githubLink={"/Sorry"}
        techUsed={["React", "Node.js", "Express", "MySQL"]}
        isRight={true}
      />
      {/* Ecommerce Sample App */}
        <ProjectCard
        Title={"E-commerce App Demo"}
        Description={"This E-commerce app demo is built using React, Firebase, and Redux. It allows users to add and manage products easily. The app utilizes React for the frontend, Firebase for authentication and database management, and Redux for state management. It serves as a simple example of an e-commerce app where anyone can showcase and add their products."}
        ImageUrl={'/Shopping-App.png'}
        stylesIsRequired={false}
        Url={"https://muzmmilkhan1.github.io/ecommerce-sample/"}
        githubLink={"https://github.com/MuzmmilKhan1/ecommerce-sample"}
        techUsed={["React", "Firebase", "Redux"]}
      />

      {/* Youtube Sample App */}
        <ProjectCard
        Title={"YouTube Clone"}
        Description={"This YouTube clone is a web application built using React and Google Cloud APIs. It provides users with the ability to search for and watch videos. The app utilizes React for the frontend and leverages Google Cloud APIs for video search and playback functionalities. Users can easily search for any video they desire, making it a convenient platform for video content consumption."}
        ImageUrl={'/youtube-clone.png'}
        stylesIsRequired={true}
        Url={"https://muzmmilkhan1.github.io/Youtube-clone/"}
        githubLink={"https://github.com/MuzmmilKhan1/Youtube-clone"}
        techUsed={["React", "Google Cloud APIs"]}
        isRight={true}
      />
      {/* Simon Game */}
        <ProjectCard
        Title={"Simon Game"}
        Description={"Simon Game is a captivating memory and pattern matching game built with React, CSS, and Bootstrap. It challenges players to replicate a sequence of colors and sounds by clicking on corresponding buttons."}
        ImageUrl={'/simon-game.png'}
        stylesIsRequired={false}
        Url={"https://muzmmilkhan1.github.io/Simon-Game/"}
        githubLink={"https://github.com/MuzmmilKhan1/Simon-Game"}
        techUsed={["React", "CSS", "Bootstrap"]}        
        ></ProjectCard>
    </div>
  )
}
