import React from 'react'
import './css/Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    return (
        <>

            <div className='cart_main'>
                <h1>Welcome to the Cart</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsum nam quod fuga commodi est vel accusantium culpa, reprehenderit aliquid.</p>


                <Link to="/CartStore">
                    <div className='btn1' >Continue Shopping</div>
                </Link>
            </div>
            <div className='div2'></div>
        </>
    )
}

export default Cart;
