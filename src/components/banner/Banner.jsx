import React from 'react'
import "./banner.css"
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import ScrollToTop from "react-scroll-to-top";
import img from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <div id="main_banner">
        <div className="banner">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="banner_left">
                    <ScrollToTop
                    smooth/>
                        <h4>Welcome to My Portfolio</h4>
                        <h1>Hi, I'm <span>Mashrafi</span></h1>
                        <div className="righting">
                        <ReactTyped
                        strings={[
                        "<h2> A Proffessional Web Developer. </h2>", 
                        "<h2> Front-End Web Developer. </h2>",
                        "<h2> Full-Stack Web Developer.</h2>"
                        ]}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                        ></ReactTyped>
                        </div>
                        <p>"Here, creativity meets functionality, and innovation intersects with design. I invite you to explore a showcase of my passion, dedication, and expertise. From captivating graphics to seamless user experiences, each project reflects my commitment to excellence. Let's embark on a journey through imagination and ingenuity. Together, we'll shape the future, one pixel at a time."</p>
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
                <Col md={6}>
                    <div className="banner_right">
                        <img src={img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default Banner