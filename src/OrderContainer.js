// OrderContainer.jsx

import React from 'react';
import './OrderContainer.css';

const OrderContainer = () => {
  return (
    <div className="shadow order-container">
      <div className="order-info">
        <p className='sub-heading'>Orders  <span className='span'>Order 32457ABC</span></p>
        <h1 className='main-heading'>Order 32457ABC</h1>
      </div>
      <div className="order-actions">
        <button className="back-button">Back</button>
        <button className="approve-button">Approved Order</button>
      </div>
    </div>
  );
};

export default OrderContainer;
