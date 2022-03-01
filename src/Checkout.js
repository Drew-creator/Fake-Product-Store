import React, { Component } from 'react'
import Footer from'./Footer';
import './Checkout.css'


class Checkout extends Component {
    render() {
        return(
            <div className="Checkout">
                <h1>.</h1>
                <h1 id="Checkout-title">Checkout</h1>
                <form id="Checkout-Form">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name"/>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="email"/>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email"/>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address"/>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city"/>
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state"/>
                    <button id="Checkout-submit">Confirm</button>
                </form>
                <Footer />
            </div>
        )
    }
}

export default Checkout;