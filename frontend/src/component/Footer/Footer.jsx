import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white '>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-2' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox' role='button'>
          <MDBIcon fas icon="envelope" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='https://www.linkedin.com/in/tisha-grover-7200141b3/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-2' href='https://github.com/tisha-grover?tab=repositories' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white m-1' href='https://mdbootstrap.com/'>
           Tisha Grover, Palak Walia, Jasmine Kaur
        </a>
      </div>
    </MDBFooter>
  );
}