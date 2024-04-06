import React from 'react'
import "./skills.css"
import { Container, Row, Col } from 'react-bootstrap'
import skills_one from "../../assets/html.png"
import skills_two from "../../assets/css.png"
import skills_three from "../../assets/bootstrap.png"
import skills_four from "../../assets/javascript.png"
import skills_five from "../../assets/react.png"
import skills_six from "../../assets/tailwind.png"
import skills_seven from "../../assets/figma.png"
import skills_eight from "../../assets/next.png"

const Skills = () => {
  return (
    <div className="skills">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="skills_top">
                        <h5>VISIT MY SKILL & HIRE ME</h5>
                        <h2>My Skill</h2>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_one} alt="html5"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_two} alt="css3"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}l>
                        <div className="skills_bootstrap">
                        <a href="#"><img src={skills_three} alt="bootstrap"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_four} alt="javascript"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_five} alt="react"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_six} alt="tailwind"/></a>
                    </div>
                </Col>
                <Col lg={3} xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_seven} alt="tailwind"/></a>
                    </div>
                </Col>
                <Col lg={3} Col xs={6}>
                        <div className="skills_one">
                        <a href="#"><img src={skills_eight} alt="nextjs"/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Skills