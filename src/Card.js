// Card.jsx

import React from 'react';
import './Card.css';


const Card = () => {
  return (
    <div className="card">
      <div className="section">
        <p className='para'>Supplier</p>
        <h1 className='card-item'>East Coast Friuts & Vegetables</h1>
      </div>
      <div className="section">
      <p className='para'>Shipping date</p>
        <h1 className='card-item'>Thu, Feb 10</h1>
      </div>
      <div className="section">
      <p className='para'>Total</p>
        <h1 className='card-item'>$15,023.8</h1>
      </div>
      <div className="section">
      <p className='para'>Category</p>
        <h1 className='card-item'>East Coast Friuts & Vegetables</h1>
      </div>
      <div className="section">
      <p className='para'>Department</p>
        <h1 className='card-item'>300-444-678</h1>
      </div>
      <div className="section">
      <p className='para'>Status</p>
        <h1 className='card-item'>Awaiting for approval</h1>
      </div>
    </div>
  );
};

export default Card;
