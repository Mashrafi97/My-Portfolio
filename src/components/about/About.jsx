import React from 'react'
import "./about.css"
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div className="main_about">
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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed culpa et dolorem doloribus in quia, delectus sapiente quod. Harum voluptate necessitatibus voluptates, labore nobis dignissimos rerum. Ipsam aliquam itaque dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odio iste! Alias quia voluptas tempore, asperiores sequi ut esse, nihil necessitatibus, fugiat voluptatum eius accusamus voluptatibus corrupti repudiandae quos illo.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde iste necessitatibus odit id, laudantium, consequuntur sed in at, vero blanditiis doloremque ipsam officiis sit suscipit ad minus. Repudiandae, officiis at?</p>
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