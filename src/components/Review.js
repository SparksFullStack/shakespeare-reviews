import React, { Component } from 'react';
import "../styles/Review.css";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
    CardFooter,
    Col
} from 'reactstrap';

import StarRating from './StarRating';

class Review extends Component {
    handleFormatDate = () => {
        let tIndex = this.props.reviewState.publish_date.indexOf('T');
        let newDate = this.props.reviewState.publish_date.split("").splice(0, tIndex).join("");
        return newDate;
    }

    render() {
        const { rating, body, author } = this.props.reviewState;
        return (
            <Col className="review-card--col" md="4" sm="6" xs="12">
                <Card className="review-card">
                    <CardHeader className="review-card--header">
                        <CardTitle className="review-card--title">Review By {author}</CardTitle>
                    </CardHeader>
                    <CardBody className="review-card--body">
                        <CardText>"{body}"</CardText>
                        <div className="review-card--date">
                            <small className="text-muted">Review left on: {this.handleFormatDate()}</small>
                        </div>
                        
                    </CardBody>
                    <CardFooter>
                        <div className="starRating">
                            <StarRating rating={rating} />
                        </div>
                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

export default Review;