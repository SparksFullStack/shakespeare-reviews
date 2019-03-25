import React, { Component } from 'react';
import '../styles/ReviewsContainer.css';
import {
    Spinner,
    Button,
    Alert
} from 'reactstrap';
import axios from 'axios';

import Review from './Review';

class ReviewsContainer extends Component {
   state = {
       reviewGroups: {},
       reviewsFetched: false,
       reviewsSorted: false,
       currentGroup: 1,
       largestGroup: 2,
       requestLimitExceeded: false,
       alertOpen: false,
   }

   componentDidMount() {
        axios.get('https://shakespeare.podium.com/api/reviews', { headers: { 'x-api-key': 'H3TM28wjL8R4#HTnqk?c' }})
            .then(res => {
                console.log(res.data);
                this.handleSortReviews(res.data);
            })
            .catch(err => {
                console.log(err);
                this.setState({ requestLimitExceeded: true });
            });
        // this.handleSortReviews(this.state.testReviews);
   }

   handleSortReviews = (reviews) => {
       let currentGroup = 1;
       let largestGroup = 1;
       let iterator = 1;
       const reviewGroups = {};
       reviews.forEach(review => {
           if (reviewGroups[currentGroup]) {
               reviewGroups[currentGroup].push(review);
           } else {
               reviewGroups[currentGroup] = [review];
           }

           if (iterator === 6) {
               currentGroup++;
               largestGroup++;
               iterator = 1;
           } else iterator++;
       });

       this.setState({ reviewGroups, largestGroup, reviewsSorted: true, reviewsFetched: true });
   }

   handleRenderReviews = () => {
       if (this.state.reviewsFetched && this.state.currentGroup <= this.state.largestGroup && this.state.reviewsSorted){
            return this.state.reviewGroups[this.state.currentGroup].map(review => <Review key={review.id} reviewState={review} />)
       } else {
           return (
                <div className="mt-3 ml-auto mr-auto text-center">
                    <p className="h4">Reviews loading</p>
                    <Spinner size="md" type="grow" color="secondary" />
                </div>
            )
       }
   }

   handleChangeReviewGroup = (type) => {
       let newCurrentGroup = this.state.currentGroup;
       if (type === 'increment' && this.state.currentGroup < this.state.largestGroup){
           newCurrentGroup++;
       } else if (type === 'decrement' && this.state.currentGroup > 1){
           newCurrentGroup--;
       }

       this.setState({ currentGroup: newCurrentGroup });
   }

   handleDismissAlert = () => {
       this.setState({ alertOpen: false });
   }

    render() {
        return (
            <div className="reviews-container">
                <h2 className="h1 reviews--header">Reviews</h2>

                <Alert isOpen={this.state.alertOpen} color="danger">
                    The maximum number of requests to the database has been exceeded--please try again tomorrow.
                </Alert>

                <div className="container reviews-container--main mt-4">
                    <div className="row">
                        {this.handleRenderReviews()}
                    </div>
                </div>

                {this.state.reviewsFetched ? 
                    <div className="pagination-buttons--container">
                        <Button onClick={() => this.handleChangeReviewGroup('decrement')} outline color="danger" className="pagination-buttons">Previous</Button>
                        <Button onClick={() => this.handleChangeReviewGroup('increment')} outline color="danger" className="pagination-buttons">Next</Button>     
                    </div>
                    :
                    <span></span>
                }
            </div>
        )
    }
}

export default ReviewsContainer;