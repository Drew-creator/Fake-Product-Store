import React, { Component } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        const contentArr = [this.props.itemImage, this.props.itemTitle, this.props.itemPrice]
        return(
            <nav>
                <div className="nav-links">
                    <Link to="/about">
                        <a className="nav-link">About</a>
                    </Link>
                    <Link to="/">
                        <a className="nav-link">Shop</a>
                    </Link>
                </div>
                <Link 
                    to={{
                        pathname: "/cart"
                      }}
                >
                    <i className="fas fa-shopping-bag"></i>  
                </Link>
            </nav>
        )
    }
}

export default Nav;