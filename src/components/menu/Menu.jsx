import React from 'react'
import "./menu.css"
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from "../../assets/logo.png"

const Menu = () => {
  return (
    <Navbar expand="lg" className="main_nav">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='button'>
            <a href="#">Contact</a>
        </div>
      </Container>
    </Navbar>
  )
}

export default Menu