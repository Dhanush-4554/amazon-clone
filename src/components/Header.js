import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import "firebase/compat/auth";
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <>
        <div className='header'>
            {/* logo */}
            <Link to={'/'}><img className='header_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgs8V0bkWXG2RZQILg7yUEBFaHOGyvYIk6SA&usqp=CAU" alt="amazon" />
            </Link>

            {/* search bar */}
            <div className="header_search">
                <input className='header_searchIn' type="Text" placeholder='Try: "boAt Headphones"' />
                <i className="fa-sharp fa-solid fa-magnifying-glass fa-lg" style={{ color: '#ffff' }}></i>
            </div>
            {/* header nav  */}
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className="header_option one">
                        <span className="header_optionLineOne hello">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header_optionLineTwo sign">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to={'/orders'}>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                </Link>
                
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Join
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to={'/checkout'}>
                    <div className="header_optionBasket">
                        <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: '#ffff' }}></i>

                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>


            </div>

        </div>
        <div className="location">
        <i className="fa-solid fa-location-dot fa-xl location-logo" style={{ color: '#ffff' }}></i>
        <h3>Your Location</h3>
        <h3 className='all_cat'>ALL CATEGORIES</h3>
        </div>
        </>
    )
}

export default Header
