import React, { useState } from "react";
import { MDBCardImage, MDBIcon, MDBTypography } from "mdb-react-ui-kit";

export default function CartItem(props) {
  const { price, updateIncPrice, updateDecPrice } = props;
  const [items, setItems] = useState(1);
  const [incrementalPrice, setIncrementalPrice] = useState(price);
  
  const IncrementItem = () => {
    const newItemCount = items + 1;
    setItems(newItemCount);
    setIncrementalPrice(price * newItemCount);
    updateIncPrice(price);
  };

  const DecrementItem = () => {
    if (items > 1) {
      const newItemCount = items - 1;
      setItems(newItemCount);
      setIncrementalPrice(price * newItemCount);
      updateDecPrice(price);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <div className="flex-shrink-0">
          <MDBCardImage
            src={props.imageurl}
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
            {props.name}
          </MDBTypography>
          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
          Rated {props.rated}.0/5
          </MDBTypography>

          <div className="d-flex align-items-center">
            <p className="fw-bold mb-0 me-5 pe-3">Rs. {incrementalPrice}</p>

            <div className="def-number-input number-input safari_only">
              <button
                className="minus"
                onClick={DecrementItem}
                disabled={items === 1}
              >
                -
              </button>
              <span className="px-5">{items}</span>
              <button className="plus" onClick={IncrementItem}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
