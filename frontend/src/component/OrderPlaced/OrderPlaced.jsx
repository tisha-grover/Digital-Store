import React from 'react';

function OrderPlaced(props) {
  const { totalBillAmount } = props;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Order Placed</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Your order has been placed successfully!</h5>
          <p className="card-text">Total Bill Amount: Rs. {totalBillAmount}</p>
          <p className="card-text">Payment Mode: Cash</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
