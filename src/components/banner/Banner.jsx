import React from 'react'
import "./banner.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="main_banner">
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="banner_left">
                        <h4>Welcome to My Portfolio</h4>
                        <h1>Hi, I'm <span>Mashrafi</span></h1>
                        <h2>a Professional <span>Web Developer.</span></h2>
                        <p>"Welcome to my portfolio! Here, creativity meets functionality, and innovation intersects with design. I invite you to explore a showcase of my passion, dedication, and expertise. From captivating graphics to seamless user experiences, each project reflects my commitment to excellence. Let's embark on a journey through imagination and ingenuity. Together, we'll shape the future, one pixel at a time."</p>
                        <div className="find_me">
                            <span>find with me</span>
                            <div className="icons">
                            <a href="https://www.facebook.com/profile.php?id=100079130611646&mibextid=ZbWKwL"><FaFacebook /></a>
                            <a href="https://www.instagram.com/mkb_s2002?igsh=MWEwY3ZueXRqbmU4ag=="><FaInstagram /></a>
                            <a href="https://www.linkedin.com/in/mashrafi-khan-aa16662b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a> 
                            </div>  
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="banner_right">
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner