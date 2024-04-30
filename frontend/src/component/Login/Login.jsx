import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsernameContext from '../Utils/UsernameContext';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { LinkContainer } from "react-router-bootstrap";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loggedInUsername, setLoggedInUsername } = useContext(UsernameContext);
  // const { loggedInUsername } = useContext(UsernameContext);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("loggedInUsername:", loggedInUsername);
  }, [loggedInUsername]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("inside handlesubmit");
      try {
          const response = await fetch('http://localhost:3001/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
          console.log(data);
          if (response.ok) {
            console.log("Login successful")
              // Login successful
              setAlert({ type: 'success', message: data.message });
              setLoggedInUsername(username);
              console.log("logged in" + loggedInUsername);
              setTimeout(function(){
                // Redirect to home page
              navigate('/home');
            }, 2000);
              
          } else {
            console.log("Login failed");

              // Login failed
              setAlert({ type: 'danger', message: data.message });
          }
      } catch (error) {
          console.error('Error:', error);
          setAlert({ type: 'danger', message: 'An error occurred. Please try again later.' });
      }
  };


  return (
    <MDBContainer fluid className=" my-5">
      <MDBRow className="my-5">
        <h1 className="text-center">
          E-Store
          <MDBIcon fas icon="store" />
        </h1>
      </MDBRow>
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="formControlLg"
            type="name"
            size="lg"
            onChange={(e) => setUsername(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.message}
                </div>
            )}
          <MDBBtn className="mb-4 w-100" size="lg" onClick={handleSubmit}>
            Sign in
          </MDBBtn>
          <div className="d-flex justify-content-center mx-4 mb-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <LinkContainer to="/register">
            <MDBBtn
              className="mb-4 w-100"
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              Sign Up
            </MDBBtn>
          </LinkContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
