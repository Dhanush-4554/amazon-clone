import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";



function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  


    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h4>Delivery Address</h4>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>#08, NH4 Nelamangala</p>
                        <p>Bangalore, Karnataka - 562123</p>
                    </div>
                </div>
                {/* review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h4>Review items and delivery</h4>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment method */}
                <div className="payment__title pay_it">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe magic will go */}

                    <form>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={'₹'} 
                            />
                        </div>
                        <Link to={'/alert'}>
                        <button className='btn2'>
                                <span>"Buy Now"</span>
                        </button>
                        </Link>
                        
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Payment
