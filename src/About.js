import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="About-card">
                    <h1>About</h1>
                    <p>
                        This shopping site was created using React.js and requests data 
                        from the FakeStore API. Using React Router, each item will take 
                        you to another page where you can view more additional details.
                    </p>
                </div> 
            </div>
        )
    }
}

export default About;