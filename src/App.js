// * TODO
// Change font weight for headers (possibly changes fonts period)
// Add better loading icon/text for reviews
// Add hover animation for the menu items
// Add testing for the requests in ReviewsContainer.test.js

// * OPTIONAL
// Get/make a logo for the navbar brand
// Make the footer more interesting
// add conditional testing for when the data hasn't loaded yet (check that the loading icon is there and that there aren't any cards)

import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import Hero from './components/Hero';
import ReviewsContainer from './components/ReviewsContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <NavHeader />
          <Hero />
        </header>

        <section id="reviews" className="reviews">
          <ReviewsContainer />
        </section>

        <footer id="main-footer" className="py-3 text-white bg-dark">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
