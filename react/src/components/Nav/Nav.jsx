import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Col,
  Stack,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { FaDiscord, FaEnvelope, FaPhone } from "react-icons/fa";
import './Nav.scss';

const NavComponent = () => {
  return (
    <Navbar
      key="lg"
      expand="lg"
      className="nav-bg"
      sticky="top"
    >
      <Container fluid>

      <Col>
        <Navbar.Brand href="/" className="nav-logo-container">
          <img src={logo} alt='KryptoKoin Logo' loading='lazy' className='nav-logo-pic'/>
        </Navbar.Brand>
      </Col>

      <Col className="app__flexCenter nav-right">
        <div>
          <Navbar.Toggle
            className='navbar-dark'
            aria-controls={`offcanvasNavbar-expand-lg`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className="h3">
                KryptoKoin
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='nav-offcanvas-body'>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Stack gap="5" direction="horizontal" className="nav-links" id="offcanvas-links">
                  <Link className= "app__title-small" to={"/"}>Home</Link>
                  <Link className= "app__title-small" to={"/Info"}>Info</Link>
                  <Link className= "app__title-small" to={"/Features"}>Features</Link>
                  <Link className= "app__title-small" to={"/Contact"}>Contact</Link>
                </Stack>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>

        <div className="nav-login-container app__flexCenter">
          <Link to="/" className="nav-login-login app__title-small">Login</Link>
          <div className='nav-login-divider'> | </div>
          <Link to="/" className="nav-login-register">
            <Button className='nav-login-btn'>Register</Button>
          </Link>
        </div>
        
      </Col>

      </Container>
    </Navbar>
  )
}

export default NavComponent