import React from 'react'
import "./contact.css"
import { Container, Row, Col } from 'react-bootstrap'
import deal from "../../assets/deal.jpg"

const Contact = () => {
  return (
    <div id="main_contact">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="contact_top">
                        <h6>CONTACT</h6>
                        <h2>Contact With Me</h2>
                    </div>
                </Col>
            <Col lg={4}>
                <div className="contact_left">
                    <img src={deal} alt="deal" />
                    <h3>Mashrafi Khan</h3>
                    <p>I am available for freelance work Remote On-field both. Connect with me via and call in to my account</p>
                    <span>Phone :</span> <a href="tel:+8801600233854"> +8801600233854</a> <br />
                    <span>Email :</span> <a href="mailto:mashrafikhan1000@gmail.com"> mashrafikhan1000@gmail.com</a>
                </div>
            </Col>
            <Col lg={8}>
                <div className="contact_right">
                    <form action="" method="get">
                        <Row>
                            <Col lg={6}>
                            <label htmlFor="name" className='name'>Your Name</label>
                            <input className='input_name' type="text" id='name' />
                            </Col>
                            <Col lg={6}>
                            <label className='name' htmlFor="number">Phone Number</label>
                            <input className='input_name' name="number" id="number" />
                            </Col>
                        </Row>
                        <label className='name' htmlFor="email">Email</label>
                        <input className='input_name' type="email" name="email" id="email" />
                        <label className='name' htmlFor="subject">Subject</label>
                        <input className='input_name' type="text" name="subject" id="subject" />
                        <label className='name' htmlFor="message">YOUR MESSAGE</label>
                        <textarea className='message_box' name="" id="message" cols="30" rows="10"></textarea>
                        <div className="submit_btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact