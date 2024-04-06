import React from 'react'
import "./menu.css"
import { Nav, Navbar, Container } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';


function Menu() {
  return (
    <div id="main">
      {[false, 'sm', 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="main_nav">
          <Container>
            <Navbar.Brand href="#"><h4 className='logo'>Mashrafi</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#main_banner">Home</Nav.Link>
            <Nav.Link href="#main_about">About</Nav.Link>
            <Nav.Link href="#main_service">Service</Nav.Link>
            <Nav.Link href="#main_service">Blog</Nav.Link>
            <Nav.Link href="#main_portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#main_pricing">Pricing</Nav.Link>
            <Nav.Link href="#main_contact">Contact</Nav.Link>
                  <div className='button'>
            <a href="#main_pricing">Buy Now</a>
        </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
  );
}

export default Menu