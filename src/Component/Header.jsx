import React from 'react';
import { useSelector } from 'react-redux';
// import { MDBNavbar, MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './css/Header.css'



export default function Header() {


    const { cart } = useSelector((state) => state.allCart)


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Header">
            <div className='container_main'>
                <img src="./image/logo-1.png" alt="logo" />
                <Link className='shopper_cart' to='/' >LOGO</Link>
                <div>
                    <img src="./image/search-normal-1.png" alt="search" />
                </div>

            </div>
            <div className="container_main2">

                <Link className='shopper_cart' to='/' >SHOP</Link>
                <Link className='shopper_cart1' to='/CartStore' active aria-current='page' >SKILLS</Link>
                <Link className='shopper_cart1' to='/Payment' >Cart {cart.length}</Link>
                <Link className='shopper_cart1' to='/Payment' >STORIES</Link>
                <Link className='shopper_cart1' to='/Payment' >ABOUT</Link>
                <Link className='shopper_cart1' to='/Payment' >CONTACT US</Link>

            </div>

        </nav>
    );
}
