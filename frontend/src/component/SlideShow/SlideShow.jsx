import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
export default function SlideShow() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1} style={{height: '700px'}}>
        <img src="https://i.postimg.cc/KjDJsKHg/Slide1.jpg" className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2} style={{height: '700px'}}>
        <img src='https://i.postimg.cc/5tmtDt0S/slide2.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3} style={{height: '700px'}}>
        <img src='https://i.postimg.cc/1z6Fmkr9/slide3.webp' className='d-block w-100 border 0' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
