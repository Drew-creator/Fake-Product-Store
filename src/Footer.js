import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="footer1">
                    <div id="footer-firstChild">
                        <div id="footer-column1">
                            <h3>COMPANY</h3>
                            <p><a href="">About Us</a></p>
                            <p><a href="">Affiliates</a></p>
                            <p><a href="">Pro Deal</a></p>
                            <p><a href="">Personalize</a></p>
                            <p><a href="">Careers</a></p>
                        </div>
                        <div id="footer-column1">
                            <h3>SUPPORT</h3>
                            <p><a href="">FAQ</a></p>
                            <p><a href="">Cancellation Policy</a></p>
                            <p><a href="">Contact</a></p>
                            <p><a href="">Refund Policy</a></p>
                            <p><a href="">Guarantees</a></p>  
                        </div>
                        <div className="hide" id="footer-column1">
                            <h3>LEARN MORE</h3>
                            <p><a href="">Refer A Friend</a></p>
                            <p><a href="">Brands</a></p>
                            <p><a href="">Location</a></p>
                            <p><a href="">Coupons</a></p>
                        </div>
                        <div className="hide" id="footer-column1">
                            <h3>SHOP</h3>
                            <p><a href="">Donations</a></p>
                            <p><a href="">New Arrivals</a></p>
                            <p><a href="">Partners</a></p>
                            <p><a href="">Road Map</a></p>
                        </div>
                    </div>
                    <div id="news">
                        <h1>Stay in touch!</h1>
                        <p>
                            Sign up for our newsletter by entering your email. 
                            You will be notified about new apparel releases, 
                            coupons, and more!
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email to stay in touch"
                        ></input>
                        <div id="social-media">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-pinterest-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
