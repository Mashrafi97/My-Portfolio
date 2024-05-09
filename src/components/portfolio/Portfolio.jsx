import React from 'react'
import "./portfolio.css"
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import { IoCheckmarkSharp } from "react-icons/io5";
import slider_one_img from "../../assets/finsweet.jpg"
import slider_two_img from "../../assets/emprise.jpg"
import slider_three_img from "../../assets/innovate.jpg"
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
                <Col lg={12} xs={12}> 
                    <div className="slider_one">
                        <Row>
                        <Col lg={5} xs={12}>
                            <div className="slider_one_left">
                                <h4>Finsweet Project</h4>
                                <p>Finsweet Project is buit by HTML, CSS and Bootstrap. It's a multi page Web App.</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Responsive design</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7} xs={12}>
                            <div className="slider_one_right">
                                <a href="https://mashrafi97.github.io/Finsweet-Project/"><img src={slider_one_img} alt="finsweet" /></a>
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12} xs={12}> 
                    <div className="slider_one">
                        <Row>
                        <Col lg={5} xs={12}>
                            <div className="slider_one_left">
                                <h4>Emprise Project</h4>
                                <p>Finsweet Project is buit by HTML, CSS and Bootstrap. It's a single page Web App.</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Non Responsive</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7} xs={12}>
                            <div className="slider_one_right">
                                <a href="https://mashrafi97.github.io/Emprise-project/"><img src={slider_two_img} alt="emprise" /></a>
                            </div>
                        </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={12} xs={12}> 
                    <div className="slider_one">
                        <Row> 
                        <Col lg={5} xs={12}>
                            <div className="slider_one_left">
                                <h4>Innovate Project</h4>
                                <p>Finsweet Project is buit by HTML, CSS and Bootstrap. It's a Landing page Web App.</p>
                                <ul>
                                    <li><IoCheckmarkSharp /><span>Non-Responsive design</span></li>
                                    <li><IoCheckmarkSharp /><span>Quiz builder</span></li>
                                    <li><IoCheckmarkSharp /><span>Fast Loading Website</span></li>
                                    <li><IoCheckmarkSharp /><span>Stats & reports</span></li>
                                    <li><IoCheckmarkSharp /><span>Retina ready</span></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={7} xs={12}>
                            <div className="slider_one_right">
                                <a href="https://mashrafi97.github.io/Innovate/"><img src={slider_three_img} alt="innovate" /></a>
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