import React from 'react'
import './Home.css'
import Product from './product'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/May/Hero/Deals-Unrec-FST-3000-PC._CB590313084_.jpg" alt="banner" id='head'/>
      </div>

      <div className="home_row first_row">
        <Product title={'Atomic Habits: #1 bestseller'} price={499.00} image={'https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg'} rating={4}/>
        <Product title={'Half Girlfriend - Chetan Bhagat'} price={599.00} image={'https://m.media-amazon.com/images/I/712HEn9SNwL.jpg'} rating={5}/>
  
      </div>

      <div className="home_row sec_row">
      <Product title={'boAt Rockerz Pro (Aqua Blue)'} price={1798.00} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8-3j612h8ImRN2H8mdZZr4JtY3Kj2EuaFA&usqp=CAU'} rating={4}/>
      <Product title={'boAt Airpods 190 Earbuds'} price={2499.00} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3d5_D2VvI5CipMtMRdxaY2tB8YDE-HvUYADbSL2_asNMvm_w4n8q7VVcUwGgs1SK8CU&usqp=CAU'} rating={5}/>
      <Product title={'boAt Rockerz 333'} price={1499.00} image={'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333.png?v=1671194172'} rating={3} />

      </div>

      <div className="home_row">
      <Product title={'MacBook Air M1- Gold'} price={96000.00} image={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1664472289059'} rating={5}/>
      </div>
      
      <Link to={'https://clone-ed385.web.app/'}><button className='back_to_top'><span>Back to top</span></button>
      </Link>
      <div className="footer">
      
        <div className="contact">
          
          <h2>Get in touch!</h2>
          <div className="social">
            <div>
              <Link to={'https://www.instagram.com/dhanush_b_700/'} className='linking'><i className="fa-brands fa-instagram fa-lg insta"  style={{ color: '#ffff' }}></i>
              <p>Instagram</p>
              </Link>
            </div>
            <div>
            <Link to={'https://www.linkedin.com/in/dhanush-b-469306249/'} className='linking'>
              <i class="fa-brands fa-linkedin linkedin fa-lg" style={{ color: '#ffff' }}></i>
              <p>LinkedIn</p>
              </Link>
            </div>
            <div>
            <Link to={'https://github.com/Dhanush-4554 '} className='linking'>
              <i className="fa-brands fa-github fa-lg linkedin" style={{ color: '#ffff' }}></i>
              <p>GitHub</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="last">
          <h2>Built with ❤️ by Dhanush</h2>
        </div>
      </div>
    </div>
  )
}

export default Home