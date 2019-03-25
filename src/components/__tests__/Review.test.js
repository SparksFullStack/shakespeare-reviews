import React from 'react';
import { render } from 'enzyme';
import Review from '../Review';

const reviewState = {
    "rating": 0.8,
    "publish_date": "2016-09-05T23:25:47.642350Z",
    "id": "9783221620868",
    "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "Kaley Schiller"
}

describe('the review card', () => {
    let wrapper;
    beforeEach(() => wrapper = render(<Review reviewState />));
    it('should render a title for the card', () => console.log(wrapper.find('.card').length));
});