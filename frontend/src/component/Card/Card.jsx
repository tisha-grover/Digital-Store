import React, { useState } from "react";
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
  const [addedToCart, setAddedToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const handleAddToCart = () => {
    console.log(props.id);
    fetch('http://localhost:3001/api/product/addproductToCart', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: props.id,
        username: "admin2", // Replace with actual username
      }),
    })
      .then((response) => {
        

        if (!response.ok) {
          throw new Error("Error adding product to cart");
        }
        setAddedToCart(true);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  const handleRemoveFromCart = () => {
    fetch("http://localhost:3001/api/product/removeFromCart", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: props.id,
        username: "admin2", // Replace with actual username
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error removing product from cart");
        }
        setAddedToCart(false);
      })
      .catch((error) => {
        console.error("Error removing product from cart:", error);
      });
  };

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
              height: "250px",
              objectFit: "cover",
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
                <MDBIcon far icon="star" />
              </div>
              <p className="small text-muted">Rated 4.0/5</p>
            </div>
          </div>
        </MDBCardBody>
        <hr className="my-0" />
        <MDBCardBody className="pb-0">
          <div className="d-flex justify-content-between">
            <p>
              <a href="#!" className="text-dark">
                Rs.{props.Price}
              </a>
            </p>
          </div>
        </MDBCardBody>
        <hr className="my-0" />
        <MDBCardBody className="pb-0">
          <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
            {addedToCart ? (
              <MDBBtn
              color={isHovered ? "danger" : "success"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transition: "background-color 0.3s ease",
              }}
              onClick={handleRemoveFromCart}
            >
              {isHovered ? "Remove from Cart" : "Added"}
            </MDBBtn>
            ) : (
              <MDBBtn
              stcolor="primary" 
              style={{
                transition: "background-color 0.3s ease",
                background: "linear-gradient(45deg, rgba(29, 226, 197, 0.5), rgba(91, 14, 274, 0.5) 100%)",
              }}
                onClick={handleAddToCart}
              >
                Add To Cart
              </MDBBtn>
            )}
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Card;
