import React from 'react'
import './Checkout.css';
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
     <Link to={'/'}><img className='checkout_ad' src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Citadel-Launch/400x39-SWM_NP._CB590712400_.jpg" />
     </Link>
         
    <div className='checkout'>
    
      <div className="checkout_left">
     
        <div>
          <h6>
          hello,
          </h6>
          <h6>
             {user?.email}
          </h6>
          <h2 className="checkout_title">
            Your Shopping Cart
          </h2>
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
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
    </>
    
  )
}

export default Checkout
