import { Container, Image, Row } from "react-bootstrap"
import "./About.css"

function AboutUs() {
    return (
      <Container>
      <Row>
      {/* <Col xs={12} md={8}> */}
          <div>
            <Image rounded id="img" src="https://i.pinimg.com/474x/5c/f9/6d/5cf96d18f1cc8cfc4608e423225ca7c2.jpg"/>
          </div>
          {/* </Col> */}
        <h1>Our Vision</h1>
        
        <p>
          <b>Faithful Connections</b> was designed with intentinal romantic based fellowship in mind. 
          We developed a balance where you can both meet a lot of people in a short amount of time and
          maintain the quality time aspect to get to know them. o grow in connection with faith based
          people. We know that relationships take risks but when you put God first, He will direct you.
          Our goal is to open up the possibilities of something great.
        </p>
        </Row>
    </Container>
    )
  }
  
  export default AboutUs