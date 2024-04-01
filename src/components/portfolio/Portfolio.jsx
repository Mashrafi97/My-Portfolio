import React from 'react'
import "./portfolio.css"
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import { IoCheckmarkSharp } from "react-icons/io5";
import slider_one_img from "../../assets/slider_one.jpg"
import slider_two_img from "../../assets/slider_two.jpg"
import slider_three_img from "../../assets/slider_three.jpg"
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='next' onClick={onClick}
      ><GrFormNext /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='previous' onClick={onClick}
      ><GrFormPrevious /></div>
    );
  }

const Portfolio = () => {

    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div id="main_portfolio">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="portfolio_top">
                        <h5>LOOK MY PROJECT & JUDGE</h5>
                        <h2>My Best Work</h2>
                    </div>
                </Col>
                <Slider {...settings}>
                <Col lg={12}> 
                    <div className="slider_one">
                        <Row>
                        <Col lg={5}>
                            <div className="slider_one_left">
                                <h4>The services provice for user</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem nihil quo! Harum doloremque, accusantium esse nostrum quae blanditiis consectetur eius debitis quam veniam, expedita cupiditate ea qui, praesentium temporibus!</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Responsive design</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="slider_one_right">
                                <img src={slider_one_img} alt="slider_one" />
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12}> 
                    <div className="slider_one">
                        <Row>
                        <Col lg={5}>
                            <div className="slider_one_left">
                                <h4>The services provice for user</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem nihil quo! Harum doloremque, accusantium esse nostrum quae blanditiis consectetur eius debitis quam veniam, expedita cupiditate ea qui, praesentium temporibus!</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Responsive design</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="slider_one_right">
                                <img src={slider_two_img} alt="slider_two" />
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12}> 
                    <div className="slider_one">
                        <Row>
                        <Col lg={5}>
                            <div className="slider_one_left">
                                <h4>The services provice for user</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quidem nihil quo! Harum doloremque, accusantium esse nostrum quae blanditiis consectetur eius debitis quam veniam, expedita cupiditate ea qui, praesentium temporibus!</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Responsive design</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="slider_one_right">
                                <img src={slider_three_img} alt="slider_three" />
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
                </Slider>
            </Row>
        </Container>
    </div>
  )
}

export default Portfolio