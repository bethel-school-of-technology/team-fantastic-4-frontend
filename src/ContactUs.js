import React from "react";
import Footer from "./Footer";
import { Row, Col, Container} from "react-bootstrap"


function ContactUs() {
  return (
    <Container>
      <Row classname="mb-5 mt-3">
        <Col lg='8'>
          <h1 className="display-4 mb-4">Contact Us</h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg='5' className="mb-5">
          <h3 className="color_sec py_4">Would you like to reach us?</h3>
          <address>
            <strong>Email: contact@faithfulconnections.com</strong>
            <br></br>
            
            <p>
              <strong>Phone: 530-777-6262</strong>
            </p>
          </address>
          <p>Hi! We look forward to hearing from you!</p>
        </Col>
        <Col lg='7' className="d-flex align-items-center">
          <form className="contact_form w-100">
            <Row>
              <Col lg='6' className="form-group">
                <input className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                />
              </Col>
              <Col lg='6' className="form-group">
                <input className="form-control rounded-0"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                />
              </Col>
            </Row>
            <textarea className="form-control rounded-0" 
                      id="message"
                      name="message"
                      placeholder="Tell us what's on your mind!"
                      rows='5'>
            </textarea>
            <br />
            <Row>
              <Col lg='12' className="form-group">
                <button className="btn ac_btn" type="submit">Send</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>

      <Footer></Footer>
    </Container>
  );
}

export default ContactUs;