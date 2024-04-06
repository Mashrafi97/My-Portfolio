import React from 'react'
import "./blog.css"
import { Container, Row, Col } from 'react-bootstrap'
import blog_one from "../../assets/blog_one.jpg"
import blog_two from "../../assets/blog_two.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import blog_three from "../../assets/blog_three.jpg"

const Blog = () => {
  return (   
    <div id="main_blog">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="blog_top">
                        <h5>Look At The Latest Article</h5>
                        <h2>Blog</h2>
                    </div>
                </Col>
                <Col lg={7}>
                    <div className="blog_left">
                        <img src={blog_one} alt="blog_one" />
                        <h6>Why Front-end is important</h6>
                        <p>Front-end is important as it connects two crucial areas: the website design vision, look, feel, personality of the site. It might be design your business, e-commers, portfolio, company, etc website which is play an important role.</p>
                        <p>The main parts of web development are: Client-side scripting JavaScript , HTML , CSS . Which is the major part of Web Design.</p>
                        <p>Web Design Also can be Designed by React , Tailwind , Next.JS etc which is makes a website fast and secured.</p>
                        <p>Figma to html is a figma plugin that helps convert your figma design to code easily without loosing any bit of your design or colors. This is made possible using only the priniciples of good design and guide lines so as to get the so desired result of an exact replica of your design in code form.</p>
                        <a href="https://en.wikipedia.org/wiki/Web_design">Learn More <FaArrowRightLong /></a>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="blog_right">
                        <img src={blog_two} alt="blog_two" />
                        <h6>why React is so popular</h6>
                        <p>React works on components which makes it easy to reuse the components in other builds. React is now the 6th most loved web framework according to the 2022 Stack Overflow Survey survey results, with 68.19% of respondents saying they really like using it.</p>
                        <a href="https://en.wikipedia.org/wiki/Web_design">Learn More <FaArrowRightLong /></a>
                    </div>
                    <div className="blog_right_down">
                        <img src={blog_three} alt="blog_three" />
                        <h6>What is meant by responsive web design</h6>
                        <p>Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones)</p>
                        <a href="https://en.wikipedia.org/wiki/Web_design">Learn More <FaArrowRightLong /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Blog