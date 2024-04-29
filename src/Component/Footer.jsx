import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between  border-bottom' style={{ margin: '40px 50px', padding: '10px 20px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div className='mx-auto mb-4'>
                        <h5>Be the first to know</h5>
                        <p>Sign up for updates from mettā muse.</p>
                        <form>
                            <label htmlFor="email">Enter your e-mail...</label>
                            <br />
                            <input type="email" id="email" name="email" placeholder="Your email address" required />
                            <br />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className='mx-auto mb-4'>
                        <div>
                            <h5>CONTACT US</h5>
                            <p>+44 221 133 5360</p>
                            <p><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></p>
                        </div>

                        <div>
                            <h5>Currency</h5>
                            <p>USD</p>
                            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='' style={{ margin: '20px 0', padding: '0 20px' }}>
                <MDBContainer style={{ margin: '20px 10px', padding: '0px 20px' }}>
                    <MDBRow>
                        <MDBCol >

                            <ol style={{ listStyleType: 'none', padding: 0 }}>
                                <h5>mettā muse</h5>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/stories">Stories</a></li>
                                <li><a href="/artisans">Artisans</a></li>
                                <li><a href="/boutiques">Boutiques</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/eu-compliances-docs">EU Compliances Docs</a></li>
                            </ol>

                        </MDBCol>

                        <MDBCol >
                            <h5>Quick Links</h5>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li><a href="/orders-shipping">Orders & Shipping</a></li>
                                <li><a href="/join-login-seller">Join/Login as a Seller</a></li>
                                <li><a href="/payment-pricing">Payment & Pricing</a></li>
                                <li><a href="/return-refunds">Return & Refunds</a></li>
                                <li><a href="/faqs">FAQs</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/terms-conditions">Terms & Conditions</a></li>
                            </ul>
                        </MDBCol>

                        <MDBCol >
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <h5>Follow Us</h5>
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                                        <li><a href="https://www.facebook.com/mettamuse" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                        <li><a href="https://twitter.com/mettamuse" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                        <li><a href="https://www.instagram.com/mettamuse/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                                    </ul>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h5>mettā muse Accepts</h5>
                                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
                                        <li style={{ width: '100px', height: '100px' }}>
                                            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png" alt="" style={{ width: '100%', height: 'auto' }} />
                                        </li>
                                        <li style={{ width: '100px', height: '100px' }}>
                                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-color-icon.png" alt="" style={{ width: '100%', height: 'auto' }} />
                                        </li>
                                        <li style={{ width: '100px', height: '100px' }}>
                                            <img src="https://banner2.cleanpng.com/20190724/cyo/kisspng-apple-pay-iphone-5-apple-wallet-ios-przez-apple-pay-zapacisz-ju-rachunki-za-prd-5d3872341f42e9.1130964415639803401281.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
                                        </li>
                                        <li style={{ width: '100px', height: '100px' }}>
                                            <img src="https://seeklogo.com/images/G/google-pay-logo-9B9D88A7FB-seeklogo.com.png" alt="" style={{ width: '100%', height: 'auto' }} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>


            <div className='text-center p-2' style={{ fontSize: '15px' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://mettamuse.com/'>
                    mettamuse.com
                </a>
            </div>
        </MDBFooter>

    );
}
export default Footer;