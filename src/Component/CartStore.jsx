import React, { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
}
from 'mdb-react-ui-kit';
import './css/CartStore.css';
import data from './Data/Data';
import Aside from './Component_Store/Aside';
import Products from './Component_Store/Products';
import Filter from './Component_Store/Filter';

function CartStore() {

  

    const [Data, setData] = useState([])

    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => setData(json))

        setData(data)
    }, [])

    return (
        <>
            <div className='Card_main'>
                <Products />
                <Filter />
                <div className='aside_main'>
                    <Aside />
                    <div className='card_container'>
                        {Data.map((item) =>
                            <MDBCard key={item.id} className='card '>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src={item.image} alt='xyz' className='img' />
                                </MDBRipple>
                                <MDBCardBody className="card_body">
                                    <MDBCardTitle style={{ fontSize: '0.8rem', margin: '-10px', padding: '13px' }}>{item.title}</MDBCardTitle>
                                    <MDBCardText style={{ fontSize: '0.7rem', marginTop: '2px', padding: '10px' }}> Sign in or create an account to see pricing </MDBCardText>
                                    {/* <MDBFooter style={{ fontSize: '0.8rem', margin: '-10x', padding: '13px' }}>Price:{" "}{item.price}</MDBFooter> */}
                                    {/* <MDBBtn onClick={() => Dispatch(addToCart({ ...item, quantity: 1 }))}>Add To Cart</MDBBtn> */}
                                </MDBCardBody>
                            </MDBCard>
                        )}

                    </div>
                </div>
            </div>

        </>
    );
}
export default CartStore;