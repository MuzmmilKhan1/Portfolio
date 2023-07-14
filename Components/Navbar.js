import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Navbar.module.css'
import { SiCodefactor } from 'react-icons/si';
import "bootstrap/dist/css/bootstrap.css";

function Navbarr(
  { activeSection }
  ) {
  return (
    <>
    {/* <Navbar expand="lg" 
    fixed='top'
    className={`bg-body-tertiary navbar-shadow container-fluid ${styles.navbar}`}>

        <Navbar.Brand href="#home" 
        className={`${styles.navbrand}`}
        >
        <h3 className={`${styles.navbrand}`}
        >
          Muzamil.dev
        </h3>
        </Navbar.Brand>

        <div className={`${styles.RowReverse}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" 
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}
        >
          <SiCodefactor 
          style={{
            color: "black",
          }}
          ></SiCodefactor>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href="#home"
            className={`${styles.li} ${activeSection === 'home' ? styles.active : ''}`}
            >Home</Nav.Link>
            <Nav.Link href="#about"
            className={`${styles.li} ${activeSection === 'about' ? styles.active : ''}`}
            >About</Nav.Link>
            <Nav.Link href="#techstack"
            className={`${styles.li} ${activeSection === 'techstack' ? styles.active : ''}`}
            >Tech Stack</Nav.Link>
            <Nav.Link href="#project"
            className={`${styles.li} ${activeSection === 'project' ? styles.active : ''}`}
            >Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            </div>
    </Navbar> */}
    <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary ${styles.navbar}`}
    style={{
      width: "100%"
    }}
    >
      <Container>
      <Navbar.Brand href="#home" 
        className={`${styles.navbrand}`}
        >
        <h3 className={`${styles.navbrand}`}
        >
          Muzamil.dev
        </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" 
        style={{
          border: "none",
          outline: "none",
          boxShadow: "none"
        }}>
        <SiCodefactor 
          style={{
            color: "black",
          }}
          ></SiCodefactor>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="#home"
            className={`${styles.li} ${activeSection === 'home' ? styles.active : ''}`}
            >Home</Nav.Link>
            <Nav.Link href="#about"
            className={`${styles.li} ${activeSection === 'about' ? styles.active : ''}`}
            >About</Nav.Link>
            <Nav.Link href="#techstack"
            className={`${styles.li} ${activeSection === 'techstack' ? styles.active : ''}`}
            >Tech Stack</Nav.Link>
            <Nav.Link href="#project"
            className={`${styles.li} ${activeSection === 'project' ? styles.active : ''}`}
            >Projects</Nav.Link>
            <Nav.Link href="#contact"
            className={`${styles.li} ${activeSection === 'contact' ? styles.active : ''}`}
            >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  );
}

export default Navbarr;


