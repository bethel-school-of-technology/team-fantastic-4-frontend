import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="rounded id w-40"
          src="https://satyhajzlu.net/jzqwb/C6_N4hYTLWACSaQax_JxfAHaFj.jpg"
          alt="First slide"
        />
         
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded id w-40"
          src="https://www.bing.com/th?id=OSK.b141a4f1e382da19c6902471c7dd4e46&w=320&h=459&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="rounded id w-48"
          src="https://www.bing.com/th?id=OSK.HERO8Zaix8v20UR__bZ5A8_hmTCW6h04TbP5LLUZcepypjw&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;