import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import './Shop.css';

const API_URL = "https://fakestoreapi.com/products/category/";

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            image: {},
            loaded: false
        }
    }

    async componentDidMount() {
        try {
            const menClothing = await axios.get(`${API_URL}men's clothing`);
            const womenClothing = await axios.get(`${API_URL}women's clothing`);
            const jewelery = await axios.get(`${API_URL}jewelery`);
            const combined = menClothing.data.slice().concat(womenClothing.data).concat(jewelery.data);

            this.setState({ items: combined , loaded: true});
        }
        catch(err) {
            alert("CONNECTION FAILED");
        }
    }

    render() {
        const title = this.state.items.map((item) => {
            return ( 
                <div className="Shop-flex-item">
                    <h4 key={item.id}>
                        <Link to={`/${item.id}`} className="Shop-flex-item-link">
                            {item.title}
                        </Link>
                    </h4>
                    <h4 className="Shop-flex-price">${item.price}</h4>
                    <Link to={`/${item.id}`}>
                        <img src={item.image} id="grow"></img>   
                    </Link>
                </div> 
                    
            )
        })
        if(this.state.loaded) {
            return(
                <div className="Shop-body">
                    <div className="Shop-header">
                        <div className="Shop-header-content">
                            <h1>Hello, Welcome to my Fake Product Store</h1>
                            <h3>Feel free to browse through the products!</h3>  
                        </div>
                    </div>               
                    <div className="Shop-flex-container">
                        {title}
                    </div>
                    <Footer />     
                </div>
            )
        }
        else {
            return (
                <div className="Spinner-container">
                  <i className="fas fa-spinner fa-pulse"></i>  
                </div> 
            )
        }
    }
}

export default Shop;