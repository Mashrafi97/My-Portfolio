import React from 'react'
import "./footer.css"
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../../assets/logo.png"

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
              <a href="#"><img src={logo} alt="logo" /></a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer_two">
              <h4>QUICK LINK</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Portfolio</a></li>    
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
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
          <Col lg={3}>
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