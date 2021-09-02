import React, { Component } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return(
            <nav>
                <h3>Logo</h3>
                <div className="nav-links">
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/">
                        <a>Shop</a>
                    </Link>
                </div>
                <i className="fas fa-shopping-bag"></i>  
            </nav>
        )
    }
}

export default Nav;