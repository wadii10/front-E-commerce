import React from 'react';
import "./Product.css";

export default function Product() {
    return (
    <div className="product">
        <div className="product__info">
            <p>the learn startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
              <p></p>
              <p></p>
              <p></p> 
            </div>
        </div>
    </div>
    ); 
}
