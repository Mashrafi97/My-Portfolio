import React from 'react'
import "./pricing.css"
import { Container, Row, Col } from 'react-bootstrap'
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Pricing = () => {
  return (
    <div id="main_pricing">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="pricing_top"></div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <div className="pricing_left">
                        <h6>PRICING</h6>
                        <h2>Our Pricing</h2>
                        <p>Use the free templates with your whole team or choose a premium. ith your whole team or choose a premium.</p>
                        <p>Get the bundle and get lifetime support and one year updates.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="pricing_middle">
                        <h6>STARTER</h6>
                        <h5>TRY AND DECIDE.</h5>
                        <h4>$0</h4>
                        <ul>
                                <li><IoCheckmarkSharp /><span>1 Page with Elementor</span></li>
                                <li><IoCheckmarkSharp /><span>Raw Coding</span></li>
                                <li><IoCheckmarkSharp /><span>Responsive Design</span></li>
                                <li style={{opacity:"0.4"}}><RxCross2 /><span>Design Customization</span></li>
                                <li style={{opacity:"0.4"}}><RxCross2 /><span>React Project</span></li>
                                <li style={{opacity:"0.4"}}><RxCross2 /><span>Design Customization</span></li>
                        </ul>
                        <div className="btn">
                            <a href="#">BUY NOW</a>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="pricing_middle">
                        <h6>STARTER</h6>
                        <h5>TRY AND DECIDE.</h5>
                        <h4>$60</h4>
                        <ul>
                                <li><IoCheckmarkSharp /><span>10 Page with Elementor</span></li>
                                <li><IoCheckmarkSharp /><span>Raw Coding</span></li>
                                <li><IoCheckmarkSharp /><span>Responsive Design</span></li>
                                <li><IoCheckmarkSharp /><span>Design Customization</span></li>
                                <li><IoCheckmarkSharp /><span>React Project</span></li>
                                <li><IoCheckmarkSharp /><span>Design Customization</span></li>
                        </ul>
                        <div className="btn">
                            <a href="#">BUY NOW</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Pricing