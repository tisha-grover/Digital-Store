import React, {useState, useEffect} from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Cart(){
  const val = 799;
  const[price, setPrice] = useState(val);
  const [items, setItems] = useState(1); 

  useEffect(() => {
    setPrice(val * items);
}, [items]);

  const IncrementItem = () =>{
      setItems(items + 1);
  };
  const DecrementItem = () =>{
    setItems(items - 1);
};
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
      <MDBRow className='mb-5'>
        <h1 className='text-center'>E-Store
        <MDBIcon fas icon="store" />
        </h1>
      </MDBRow>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase">
                      Your products
                    </MDBTypography>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                          Samsung Galaxy M11 64GB
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Color: white
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">Rs. {price}</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus" onClick={DecrementItem}>-</button>
                            <span
                            className="px-5"
                            >
                              {items}
                              </span>
                            <button className="plus" onClick={IncrementItem}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                          Headphones Bose 35 II
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Color: red
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">Rs.639</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus" onClick={DecrementItem}>-</button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={1}
                              type="number"
                            />
                            <button className="plus" onClick={IncrementItem}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                          iPad 9.7 6-gen WiFi 32GB
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Color: rose pink
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">Rs.659</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={2}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">Rs.95</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Rs.2261
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Delivery Address
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Name"
                        type="text"
                        size="lg"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Full Address"
                        type="text"
                        size="lg"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="PinCode"
                            type="text"
                            size="lg"
                            minLength="6"
                            maxLength="6"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Locality"
                            type="text"
                            size="lg"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="State"
                            type="text"
                            size="lg"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="City/District/Town"
                            type="text"
                            size="lg"
                          />
                        </MDBCol>
                      </MDBRow>


                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="#!">
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
export default Cart;