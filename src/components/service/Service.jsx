import React from 'react'
import "./service.css"
import { Container, Row, Col } from 'react-bootstrap'
import { BsBook } from "react-icons/bs";
import { BsBodyText } from "react-icons/bs";
import { BsBoxFill } from "react-icons/bs";
import { BsExplicitFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsFillMapFill } from "react-icons/bs";

const Service = () => {
  return (
    <div className="service">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="service_top">
                        <h5>FEATURES</h5>
                        <h2>What I Do</h2>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsBodyText />
                    <h6>Responsive Web App</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsExplicitFill />
                    <h6>E-commerce Website</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsBoxFill />
                    <h6>Figma to HTML</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsFillGrid3X3GapFill />
                    <h6>Web Design</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsBook />
                    <h6>Fast Loading Website</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsFillMapFill />
                    <h6>Web Customization</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis incidunt perspiciatis pariatur ducimus id cumque facilis cum modi blanditiis inventore eos natus facere in maiores nisi, exercitationem aperiam dolorem!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Service