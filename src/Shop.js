import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import './Shop.css';
import { motion } from "framer-motion";

const API_URL = "https://fakestoreapi.com/products/category/";
const itemIDArr = [];
let storage = window.localStorage;

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            image: {},
            itemImage: [],
            itemPrice: [],
            itemTitle: [],
            loaded: false
        }
        this.addToCart = this.addToCart.bind(this);
    }

    async componentDidMount() {
        try {
            const menClothing = await axios.get(`${API_URL}men's clothing`);
            const womenClothing = await axios.get(`${API_URL}women's clothing`);
            const jewelery = await axios.get(`${API_URL}jewelery`);
            const combined = menClothing.data.slice().concat(womenClothing.data).concat(jewelery.data);

            this.setState({ items: combined , loaded: true });
        }
        catch(err) {
            alert("Connection failed. Please refresh the page");
        }
    }

    addToCart(itemImg, itemPrice, itemTitle, imgArr, priceArr, titleArr) {
        if(JSON.parse(storage.getItem("discount"))) {
            itemPrice = this.discount(itemPrice);
        }

        imgArr.push(itemImg);
        priceArr.push(itemPrice);
        titleArr.push(itemTitle);

        storage.setItem("images", JSON.stringify(imgArr));
        storage.setItem("titles", JSON.stringify(titleArr));
        storage.setItem("prices", JSON.stringify(priceArr));
        storage.setItem("loaded", true);
        
    }

    discount(itemPrice) {
        let savings = itemPrice * 0.50;
        itemPrice -= savings;
        itemPrice = (Math.round(itemPrice * 100) / 100).toFixed(2);

        return itemPrice;
    }

    render() {
        let IMAGE_URL = [];
        let ITEM_PRICE = [];
        let ITEM_TITLE = [];

        if(JSON.parse(storage.getItem("loaded"))) {
            IMAGE_URL = JSON.parse(storage.getItem("images"));
            ITEM_PRICE = JSON.parse(storage.getItem("prices"));
            ITEM_TITLE = JSON.parse(storage.getItem("titles"));
        } 

        const title = this.state.items.map((item) => {
            return ( 
                <div className="Shop-flex-item">
                    <h4 key={item.id}>
                        <Link to={`/${item.id}`} className="Shop-flex-item-link">
                            <p id="Shop-item-title">{item.title}</p>
                        </Link>
                    </h4>
                    <h4 className="Shop-flex-price">${item.price}</h4>
                    <Link to={`/${item.id}`}>
                        <img src={item.image} id="grow"></img>   
                    </Link>
                    <button className="Shop-btn" onClick={() => this.addToCart(
                        item.image, item.price, item.title, IMAGE_URL, ITEM_PRICE, ITEM_TITLE
                    )}
                    >Add to cart</button>
                </div>        
            )
        });
        if(this.state.loaded) {
            return(
                <motion.div animate={{ opacity: 1 }} initial={{opacity: 0}}>
                    <div className="Shop-body">
                        <div className="Shop-header">
                            <div className="Shop-header-content">
                                <h1>Welcome to the Double AA Clothing Store</h1>
                                <h3>Feel free to browse through the products!</h3>  
                            </div>
                        </div>               
                        <div className="Shop-flex-container">
                            {title}
                        </div>
                        <Footer />     
                    </div>
                </motion.div> 
            )
        } else {
            return (
                <div className="Spinner-container">
                  <i className="fas fa-spinner fa-pulse"></i>  
                </div> 
            )
        }
    }
}

export default Shop;