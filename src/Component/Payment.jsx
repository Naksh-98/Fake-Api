import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
} from "mdb-react-ui-kit";
import './css/Payment.css';

import { decreaseItemQuantity, increaseItemQuantity, removeItem, getCartTotal } from '../features/counter/counterSlice';
import { useSelector, useDispatch } from "react-redux";

const Payment = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
    const dispatch = useDispatch()

    dispatch(getCartTotal());


    return (
        <>
            <section className="h-100 gradient-custom">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center my-4">
                        <MDBCol md="8">
                            <MDBCard className="mb-4" style={{ maxWidth: '60rem' }}>
                                <MDBCardHeader className="py-3">
                                    <MDBTypography tag="h5" className="mb-0">
                                        Cart {cart.length}
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    {cart?.map((item) =>
                                        <MDBRow key={item.id}>
                                            <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                                                <MDBRipple rippleTag="div" rippleColor="light"
                                                    className="bg-image rounded hover-zoom hover-overlay">
                                                    <img
                                                        alt="xyz"
                                                        src={item.image}
                                                        className="w-100" />
                                                    <a href="#!">
                                                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                                                        </div>
                                                    </a>
                                                </MDBRipple>
                                            </MDBCol>

                                            <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                                                <p>
                                                    <strong>{item.title}</strong>
                                                </p>
                                                <p>Size: M</p>
                                                <div onClick={() => dispatch(removeItem(item.id))} >
                                                    <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                        title="Remove item">
                                                        <MDBIcon fas icon="trash" />
                                                    </MDBTooltip>
                                                </div>

                                                
                                            </MDBCol>
                                            <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                                                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                    <div onClick={() => dispatch(decreaseItemQuantity(item.id))} >
                                                        <MDBBtn className="px-3 me-2">
                                                            <MDBIcon fas icon="minus" />
                                                        </MDBBtn>

                                                    </div>
                                                    <MDBCol className="h-10 w-40 p-2 " style={{background:"rgb(235, 237, 239)", borderRadius:"10px"}}><strong>Quantity</strong></MDBCol> 
                                                    <div onClick={() => dispatch(increaseItemQuantity(item.id))} >
                                                        <MDBBtn className="px-3 ms-2">
                                                            <MDBIcon fas icon="plus" />
                                                        </MDBBtn>
                                                    </div>


                                                </div>

                                                <p className="text-start text-md-center">
                                                    <strong>{item.price}</strong>
                                                </p>
                                            </MDBCol>
                                        </MDBRow>)
                                    }
                                </MDBCardBody>
                            </MDBCard>
                            {/* ---------------------------------------------------------------------------------------- */}


                            <MDBCard className="mb-4 mb-lg-0" style={{ maxWidth: '60rem' }}>
                                <MDBCardBody>
                                    <p>
                                        <strong>We accept</strong>
                                    </p>
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <MDBCardImage className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                        alt="PayPal acceptance mark" />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol  md="4 ">
                            <MDBCard className="mb-4 ">
                                <MDBCardHeader>
                                    <MDBTypography tag="h5" className="mb-0">
                                        Summary
                                    </MDBTypography>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBListGroup flush>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Products
                                            <span>{totalQuantity}</span>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                            className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(including VAT)</p>
                                                </strong>
                                            </div>
                                            <span>
                                                <strong>{totalPrice}</strong>
                                            </span>
                                        </MDBListGroupItem>
                                    </MDBListGroup>

                                    <MDBBtn block size="lg">
                                        Go to checkout
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}
export default Payment;

