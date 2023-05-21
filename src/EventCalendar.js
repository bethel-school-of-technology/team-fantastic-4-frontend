import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Home from "./Home";
import { Avatar, AvatarGroup } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import { Button} from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import { Card } from 'react-bootstrap';

function EventCalendar() {
    const [date, setDate] = useState(new Date());
    return (
        <Container>
         <Home></Home> <br></br>
        <div className='text-center'>
         <LinkContainer to="/event-create">
            <Button variant="info" size='lg'>Host Event</Button>
        </LinkContainer>
        </div>
      <div className='app'>
        <h1 className='text-center'>Event Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
          </p>  <br></br>

      <Card className="text-center">
      <Card.Header>Events</Card.Header>
      <Card.Img src="https://media.istockphoto.com/vectors/70s-disco-dance-vector-id856787668" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>70s Throwback Disco Party </Card.Title>
        <Card.Text>
        June 2nd 2023 @ 7pm pst. See datails.
        </Card.Text>
        <LinkContainer to="/details">
            <Button variant="primary">DETAILS</Button>
        </LinkContainer>
        {/* <Button variant="primary">DETAILS</Button> */}
      </Card.Body>
      <Card.Footer className="text-danger">2 days ago</Card.Footer>
      </Card.ImgOverlay>
    </Card> <br></br>

    <Card className="text-center">
    <Card className='bold'></Card>
      <Card.Header>Events</Card.Header>
      <Card.Img src="https://i.pinimg.com/originals/a8/91/4b/a8914b7bf8984b4a398ff9afea1fd213.jpg" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Body> 
        <Card.Title>Black Tie Event </Card.Title>
        <Card.Text>
        June 16th 2023 @ 7pm pst. See datails.
        </Card.Text>
        <LinkContainer to="/details">
            <Button variant="primary">DETAILS</Button>
        </LinkContainer>
        {/* <Button variant="primary">DETAILS</Button> */}
      </Card.Body>
      <Card.Footer className="text-light">1 days ago</Card.Footer>
      </Card.ImgOverlay>
    </Card> <br></br>

    <Card className="text-center">
    <Card className='bold'></Card>
      <Card.Header>Events</Card.Header>
      <Card.Img src="https://gracieinprogresscom.files.wordpress.com/2017/12/img_9326.jpeg?w=663" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Body> 
        <Card.Title>Night in Paris Event </Card.Title>
        <Card.Text>
        June 30th 2023 @ 7pm pst. See datails.
        </Card.Text>
        <LinkContainer to="/details">
            <Button variant="primary">DETAILS</Button>
        </LinkContainer>
        {/* <Button variant="primary">DETAILS</Button> */}
      </Card.Body>
      <Card.Footer className="text-light">1 days ago</Card.Footer>
      </Card.ImgOverlay>
    </Card> <br></br>
        
        {/* <img src="https://th.bing.com/th/id/OIP.FY-RiJPLp3MFiw0YEjqLRAHaCf?pid=ImgDet&rs=1" alt="" />
        <p className='text-center'>
            <span className='bold'>70s Throwback Disco Party </span>
            June 2nd 2023 @ 7pm pst. <br></br>
            <LinkContainer to="/details">
            <Button variant="primary">DETAILS</Button>
            </LinkContainer> */}
        {/* </p> */}
        {/* <p className='text-center'>
            <span className='bold'>Black Tie Event </span>
            June 16th 2023 @ 7pm pst. <br></br>
            <LinkContainer to="/details">
            <Button variant="primary">DETAILS</Button>
            </LinkContainer>
        </p> */}
        <AvatarGroup total={24}>
         <Avatar alt="Sandy Sharp" src="https://blogs-images.forbes.com/deniserestauri/files/2017/04/The-Limited-LeadingLooksLike-Bea-Arthur.jpg?width=640&height=434" />
         <Avatar alt="Travis Howard" src="https://image-prod.iol.co.za/resize/650x366/Loyiso-Macdonald-Pictture-Instagram?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/fd163cb2-3e27-5bed-90ff-4a9ed51a8fee&operation=CROP&offset=0x0&resize=1080x608/2.jpg" />
         <Avatar alt="Anna Walker" src="https://th.bing.com/th/id/R.f9eb2c455f829e2d51bec8e9586a31a5?rik=w%2biF47NAiZa7UQ&riu=http%3a%2f%2fasianmailorderbride.net%2fwp-content%2fuploads%2f2020%2f02%2fPanamanian-Brides.jpeg&ehk=u7ktMxMpbdUWhsuKpMqr5hzmaD1mHmrKTsVwdLQXBdM%3d&risl=&pid=ImgRaw&r=0" />
        <Avatar alt="Trevor Henderson" src="https://cityswoon.com/ca/images/singleMan.png" />
    </AvatarGroup>
      </div>
       </Container>
    );
  }
  export default EventCalendar;