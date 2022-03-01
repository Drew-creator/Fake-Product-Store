import React, { Component } from 'react';
import Footer from './Footer';
import './Cart.css';
import {Link} from 'react-router-dom'

let storage = window.localStorage;  


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {promo: "", discount: false};
        this.handleRemove = this.handleRemove.bind(this);
        this.handlePromoCode = this.handlePromoCode.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleRemove(imgArr, titleArr, priceArr, itemIndex) {  
        imgArr.splice(itemIndex, 1);
        titleArr.splice(itemIndex, 1);
        priceArr.splice(itemIndex, 1);

        storage.setItem("images", JSON.stringify(imgArr));
        storage.setItem("titles", JSON.stringify(titleArr));
        storage.setItem("prices", JSON.stringify(priceArr));

        this.setState({});
    }

    calculatePrice(priceArr) {
        let subtotal = 0;

        for(let price of priceArr) {
            subtotal += parseInt(price);
        }

        subtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
        return subtotal;
    }
    
    calculateTax(subtotal) {
        let taxPercent = 0.0725;
        let tax = subtotal * taxPercent;
        tax = (Math.round(tax * 100) / 100).toFixed(2);
        return tax;
    }

    calculateTotal(subtotal, tax) {
        let total = parseFloat(subtotal) + parseFloat(tax);
        total = (Math.round(total * 100) / 100).toFixed(2);
        return total;
    }

    handlePromoCode(priceArr) {
        if(this.state.promo == "CPP2021" && !storage.getItem("discount")) {
            const discountedPrices = priceArr.map((price) => {
                let savings = price * 0.50;
                price -= savings;
                price = (Math.round(price * 100) / 100).toFixed(2);
                return price;
            });

            console.log(discountedPrices)

            storage.setItem("prices", JSON.stringify(discountedPrices));
            storage.setItem("discount", JSON.stringify(true));
            this.setState({ });
            // alter array values and set storage
            // set discount to true causing re-render
        }
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {

        let imgs = [];
        let titles = [];
        let prices = [];
        let cartLoop = [];
        let subtotal = [];
        let tax = [];
        let total = [];


        if(JSON.parse(storage.getItem("loaded"))) {
            imgs = JSON.parse(storage.getItem("images"));
            titles = JSON.parse(storage.getItem("titles"));
            prices = JSON.parse(storage.getItem("prices"));
            
            cartLoop = imgs.map((item, index) => {
                return (
                    <div className="Cart-items">
                        <div id="Cart-item-detail">
                            <img src={imgs[index]} className="Cart-image"></img>
                            <h3 className="Cart-item-title">{titles[index]}</h3>
                            <p className="Cart-price">${prices[index]}</p>
                        </div>
                        <i className="fas fa-times" onClick={ () => this.handleRemove(imgs, titles, prices, index) }></i>
                        {/* use arrow function to be able to pass function arguements asynchronously */}
                    </div>    
                )
            });
            
            subtotal = this.calculatePrice(prices);
            tax = this.calculateTax(subtotal);
            total = this.calculateTotal(subtotal, tax);   
        }

        return (
            <div className="Cart">
                <div id="Cart-flex">
                    <div className="Cart-format">
                        <h1>Cart</h1>
                        <div className="Cart-Content">
                            <h1 className="Cart-title">Shopping Cart</h1>
                            <div className="Cart-headers">
                                <div>
                                    <p>Shop > Shopping Cart</p>
                                </div>
                                <div className="Cart-num-items">
                                    <p>{imgs.length} items in the bag</p>
                                </div>
                            </div>
                            {cartLoop}
                        </div>
                        <div id="Cart-subtotal">
                            <div id="Cart-promo-container">
                                <label htmlFor="Cart-input">Have A Promo Code?</label>
                                <input 
                                    id="Cart-input" 
                                    type="text"
                                    onChange={this.handleChange}
                                    name="promo"
                                >
                                </input>
                                <button 
                                    id="Cart-promo-button"
                                    type="button" 
                                    onClick={ () => this.handlePromoCode(prices) }
                                >></button>
                                <div id="Cart-subtotal-price-container">
                                    <p>Subtotal: <span>${subtotal}</span></p>
                                    <p>Tax: <span>${tax}</span></p>
                                    <p>Total: <span>${total}</span></p>
                                </div>
                                <h4 className={(storage.getItem("discount") ? "Cart-applied" : "Cart-hidden")}>Promo Code Applied!</h4>
                                <Link to="/checkout">
                                    <button id="Cart-checkout">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Cart-footer-container">
                    <Footer /> 
                </div> 
            </div>
            
        )
    }
}


export default Cart;


// in shop, whenever user clicks add to cart, push the item to an array
// array will get passed to here and we can loop and populate cart-items 
// with divs containing items
// have api call still, but save it to localstorage after first load, in-case api call is slow?