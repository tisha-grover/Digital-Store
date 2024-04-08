import React from 'react';
// import {Link} from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {LinkContainer} from 'react-router-bootstrap'


function Login() {
  return (
    <MDBContainer fluid className=" my-5">
      <MDBRow className='my-5'>
        <h1 className='text-center'>E-Store
        <MDBIcon fas icon="store" />
        </h1>
      </MDBRow>
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <LinkContainer to="/home">
          <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
          </LinkContainer>
          <div className="d-flex justify-content-center mx-4 mb-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <LinkContainer to="/register">
          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
          Sign Up
          </MDBBtn>
</LinkContainer>


        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;