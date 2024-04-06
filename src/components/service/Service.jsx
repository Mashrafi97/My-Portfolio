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
    <div id="main_service">
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
                    <p>Responsive web apps adapt layout and functionality to fit different devices and screen sizes, ensuring optimal performance and user experience across desktops, smartphones, and tablets through fluid layouts and media.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsExplicitFill />
                    <h6>E-commerce Website</h6>
                    <p>An e-commerce website enables online buying and selling of goods or services. It typically includes features like product listings, shopping carts, secure payment gateways, and order management systems for seamless transactions.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsBoxFill />
                    <h6>Figma to HTML</h6>
                    <p>Figma to HTML involves converting designs created in Figma, a web design tool, into HTML code for web development. This process ensures that designs are translated accurately into functional web pages.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsFillGrid3X3GapFill />
                    <h6>Web Design</h6>
                    <p>Web design encompasses the creation and arrangement of visual elements, layout, and user interface to craft engaging and functional websites. It integrates aesthetics with usability to deliver effective online experiences.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsBook />
                    <h6>Fast Loading Website</h6>
                    <p>A fast-loading website built with React utilizes efficient coding practices and optimization techniques to ensure quick page rendering and seamless user experiences, enhancing performance and engagement for visitors.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="card_one">
                    <BsFillMapFill />
                    <h6>Web Customization</h6>
                    <p>Web customization in front-end web development involves tailoring website appearance and functionality to meet specific client needs through HTML, CSS, and JavaScript, ensuring unique and personalized user experiences.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Service