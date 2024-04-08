import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./Card.css";
function Card(props) {
  return (
    <MDBContainer fluid className="my-5 h-100">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage 
                src={props.imgcard}
                fluid
                className="w-100"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark">
                      {props.name}
                    </a>
                  </p>
                  <p className="small text-muted">{props.product}</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark">
                    Rs.{props.Price}
                  </a>
                </p>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
                <MDBBtn stcolor="primary"style={{
                background: 'linear-gradient(45deg, rgba(29, 226, 197, 0.5), rgba(91, 14, 274, 0.5) 100%)',
              }}>Add To Cart</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
    </MDBContainer>
  );
}

export default Card;