import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvider';
import { Link, Navigate } from "react-router-dom";
import {getBasketTotal} from './reducer'


function Subtotal() {
  const [{basket},dispatch]= useStateValue();
  // let getBasketTotal = (basket) => 
  // basket?.reduce((amount, item) => item.price + amount, 0);
  
  return (
    <div className="subtotal">
      
      <CurrencyFormat
        
        renderText={(value) => (
          <>
            <p>
            Subtotal [{basket.length} items]: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Link to={'/payment'}>
      <button className="btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;


