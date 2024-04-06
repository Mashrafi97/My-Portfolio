import React from 'react'
import "./about.css"
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div id="main_about">
        <Container>
            <Row>
                <Col lg={5}>
                    <div className="about_left">
                
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="about_right">
                        <h6>Visit my portfolio & Hire me</h6>
                        <h2>About Me</h2>
                        <p>Hello there! I'm Mashrafi, a passionate Front-End Web Developer with a love for beautiful and functional digital experiences. With a keen eye for design and a knack for coding, I specialize in translating creative concepts into responsive and user-friendly websites.</p>
                        <p>I hold a diploma in Front-End Web Development, where I honed my skills in HTML5, CSS3, Bootstrap3, JavaScript, React.JS, Tailwind.CSS, NEXT.JS, etc. Over the years, I've gained valuable experience working on a variety of projects, from small business websites to large-scale web applications.</p>
                        <div className="about_button">
                            <a href="#">Download My CV</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About