import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Hero } from '../Components/Hero';
import About from '../Components/About';
import { TechStack } from '../Components/TechStack';
import { Projects } from '../Components/Projects';
import { Contact } from '../Components/Contact';
import { Footer } from '../Components/Footer';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div');
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Head>
      <title>Muzamil Khan</title>
    </Head>
    <div className='App'
    style={{
      margin: "0",
      padding: "0",
      width: "100%"
    }}
    >
      <Navbar 
      activeSection={activeSection}
      ></Navbar>
      <Hero
      style={{
        height: '100vh'
      }}
      ></Hero>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
      </>
  )
}

