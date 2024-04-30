import React from 'react';
import { useNavigate } from "react-router-dom";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import './AddCart.css';

export default function AddCart() {
  const navigate = useNavigate();

  return (
    <div className="position-fixed bottom-0 end-0">
      <div className="cart-icon-container">
        <MDBBtn className="icon-background" onClick={() => navigate('/cart')}>
          <MDBIcon fas icon="cart-plus" style={{ fontSize: '2.5rem', color: '#1D3861', marginRight: '0rem', marginBottom: '0rem' }} />
        </MDBBtn>
        <div className="cart-tooltip">Cart</div>
      </div>
    </div>
  );
}
