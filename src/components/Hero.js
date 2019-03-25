import React, { Component } from 'react';
import '../styles/Hero.css';
import { Button } from 'reactstrap';

class Hero extends Component {
    render() {
        return (
            <div className="hero--text">
                <h1 className="h1">Shakespeare Reviews</h1>
                <p className="h5 hero--text--subheader">Fair and Unbiased Reviews for the Plays of William Shakespeare</p>
                <Button className="hero--button" color='danger' outline><i className="fas fa-arrow-right"></i> <a className="hero--button-link" href="#reviews">Reviews</a></Button>
            </div>
        )
    }
}

export default Hero;