import React from 'react'
import "./menu.css"
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import ScrollspyNav from "react-scrollspy-nav";
import Offcanvas from 'react-bootstrap/Offcanvas';


function Menu() {
  return (
    <>
      {[false, 'sm', 'md', 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="main_nav">
          <Container>
            <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
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
                <ScrollspyNav scrollTargetIds={["main_banner", "main_about", "main_service", "main_portfolio", "main_pricing", "main_contact"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="50"
                    headerBackground="true">
            <ul>   
            <li><Nav.Link href="#main_banner">Home</Nav.Link></li>
            <li><Nav.Link href="#main_about">About</Nav.Link></li>
            <li><Nav.Link href="#main_service">Service</Nav.Link></li>
            <li><Nav.Link href="#main_portfolio">Portfolio</Nav.Link></li>
            <li><Nav.Link href="#main_pricing">Pricing</Nav.Link></li>
            <li><Nav.Link href="#main_contact">Contact</Nav.Link></li>
            </ul>
            </ScrollspyNav>
                  <div className='button'>
            <a href="#main_pricing">Buy Now</a>
        </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Menu