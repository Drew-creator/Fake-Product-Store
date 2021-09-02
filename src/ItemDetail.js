import React, { Component } from 'react';
import axios from 'axios';
import Footer from './Footer';
import './ItemDetail.css';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            loaded: false
        }
    }
    async componentDidMount() {
        const PRODUCT_ID = this.props.match.params.id;
        const product = await axios.get(
            `https://fakestoreapi.com/products/${PRODUCT_ID}`
        )
        console.log(product.data)
        this.setState({ product: product.data , loaded: true})
    }
    render() {
        let photo = "";

        if(this.state.product.category === "jewelery") photo = "jewelery";
        else photo="ItemDetail-photo";

        if(this.state.loaded) {
            return(
                <div>
                    <div className="ItemDetail-flex">
                        <div className="ItemDetail-flex1">
                            <img 
                                src={this.state.product.image}
                                className={photo}
                            />
                        </div>
                        <div className="ItemDetail-flex2">
                            <h2 className="Item-detail-title">
                                {this.state.product.title}
                            </h2>
                            <h2 className="ItemDetail-price">
                                ${this.state.product.price}
                            </h2>
                            <h6>
                                Or 4 interest-free payments of ${(this.state.product.price / 4).toFixed(2)}
                            </h6>
                            <p><b>Category:</b> {this.state.product.category}</p>
                            <label for="color">Color: </label>
                            <br></br>
                            <select id="color">
                                <option select>Please select</option>
                                <option>Blue</option>
                                <option>Black</option>
                                <option>White</option>
                                <option>Tan</option>
                                <option>Green</option>
                            </select>
                            <br></br>
                            <label for="color">Size: </label>
                            <br></br>
                            <select id="color">
                                <option select>Please select</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                            <br></br>
                            <div className="ItemDetail-cart-container">
                                <button className="ItemDetail-cart">
                                    ADD TO CART
                                </button>
                                <i className="fab fa-gratipay"></i>   
                            </div>
                            <div className="ItemDetail-perks">
                                <p><i className="fas fa-truck"></i> Free Delivery</p>
                                <p><i className="fas fa-exchange-alt"></i> Free Returns</p>
                                <p>Ts&Cs apply. <a href="">Learn More</a></p>
                            </div>
                            <div className="ItemDetail-sizing">
                                <h6>SIZING HELP</h6>
                                <p>Still unsure what size to get?</p>
                                <p><a href="">Find your reccomended size.</a></p>
                            </div>
                            <div className="ItemDetail-desc">
                                <p><b>Description:</b> {this.state.product.description}</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
        else {
            return(
                <div className="Spinner-container">
                  <i className="fas fa-spinner fa-pulse"></i>  
                </div>   
            )
        }
    }     
}

export default ItemDetail;