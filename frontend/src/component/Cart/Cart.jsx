import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import CartItem from "./CartItem";
import OrderPlaced from "../OrderPlaced/OrderPlaced";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  // Function to update the total price
  const updateItemPrice = () => {
    let totalPrice = -95;
    cartItems.forEach((item) => {
      // Convert item.price and item.itemsquantity to numbers if they are strings
      const price =
        typeof item.price === "string" ? parseFloat(item.price) : item.price;
      const quantity =
        typeof item.itemsquantity === "string"
          ? parseInt(item.quantity)
          : item.quantity;
      console.log("item price" + price + "hjhv" + quantity);
      // Check if price and quantity are valid numbers
      if (!isNaN(price) && !isNaN(quantity)) {
        totalPrice += price * quantity;
      }
    });
    setTotalPrice(totalPrice);
  };

  // Function to update the total price
  const updateIncPrice = (itemPrice) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice);
  };

  const updateDecPrice = (itemPrice) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice - itemPrice);
  };

  useEffect(() => {
    // Fetch cart items from the API
    fetchCartProducts();
  }, []);

  useEffect(() => {
    // Update the total price whenever cartItems changes
    updateItemPrice();
  }, [cartItems]);

  const handleBuyNow = () => {
    // Place order action
    setShowAlert(true);
  };

  const fetchCartProducts = async () => {
    try {
      // Make API call to get cart products
      const response = await fetch(
        "http://localhost:3001/api/product/cartProducts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "admin2" }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const cartProducts = await response.json();
      console.log(cartProducts);
      setCartItems(cartProducts);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="mb-5">
          <h1 className="text-center">
            E-Store
            <MDBIcon fas icon="store" />
          </h1>
        </MDBRow>
        <MDBRow className="justify-content-center align-items-center h-100">
          {showAlert ? (<>
            <OrderPlaced totalBillAmount={totalPrice} />
            <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="/home">
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </a>
                        </MDBTypography>
                        </>
          ) : (
            <MDBCol>
              <MDBCard
                className="shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      {/* Map over the cart items to render CartItem components */}
                      {cartItems.map((item) => (
                        <CartItem
                          key={item.id}
                          imageurl={item.image}
                          price={item.price}
                          rated={4}
                          name={item.name}
                          itemsquantity={item.itemsquantity}
                          updateIncPrice={updateIncPrice}
                          updateDecPrice={updateDecPrice}
                        />
                      ))}

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
                          Rs.{totalPrice}
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

                        <MDBBtn block size="lg" onClick={handleBuyNow}>
                          Buy now
                        </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <a href="/home">
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
          )}
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Cart;
