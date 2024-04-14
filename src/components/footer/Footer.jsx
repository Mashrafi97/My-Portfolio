import React from 'react'
import "./footer.css"
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div id="main_footer">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="footer_top"></div>
          </Col>
          <Col lg={3}>
            <div className="footer_one">
              <h4 className='logo'>Mashrafi</h4>
            </div>
          </Col>
          <Col lg={3} xs={4}>
            <div className="footer_two">
              <h4>QUICK LINK</h4>
              <ul>
                <li><a href="#main_about">About</a></li>
                <li><a href="#main_service">Service</a></li>
                <li><a href="#main_blog">Blog</a></li>
                <li><a href="#main_portfolio">Portfolio</a></li>    
                <li><a href="#main_pricing">Pricing</a></li>
                <li><a href="#main_contact">Contact</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3}  xs={4}>
            <div className="footer_two">
              <h4>RESOURCES</h4>
              <ul>
                <li><a href="#">Authentication</a></li>
                <li><a href="#">System Status</a></li>
                <li><a href="#">API Reference</a></li>    
                <li><a href="#">Support</a></li>
                <li><a href="#">Open Source</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} xs={4}>
            <div className="footer_two">
              <h4>DEVELOPERS</h4>
              <ul>
                <li><a href="#">Flexiblity</a></li>
                <li><a href="#">Revision</a></li>
                <li><a href="#">Terms of Service</a></li>    
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Over Right</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={12}>
            <div className="copyright_part">
              <h6>© 2024. All rights reserved by Mashrafi Khan</h6>
            </div>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Footer