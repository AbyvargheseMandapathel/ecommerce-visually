import React from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  return (
    <div className="checkout-form">
      <h2>Checkout Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
