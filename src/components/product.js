import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
  // console.log("this is basket >>>",basket);

  const addToBasket = ()=>{
    //dispatch to basket
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
      
    });
  };

  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price"><small>₹</small>
        <strong>{price}</strong></p>
      </div>
      <div className="product_rating">
        {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
        ))}
      </div>
      <img src={image} alt="image of book" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product
