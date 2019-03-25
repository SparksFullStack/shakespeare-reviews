import React from 'react';
import { render } from 'enzyme';
import ReviewsContainer from '../ReviewsContainer';

describe('the reviews container section', () => {
    let wrapper;
    beforeEach(() => wrapper = render(<ReviewsContainer />));

    it('renders the secondary header', () => expect(wrapper.find('h2').length).toEqual(1));
    it('renders a div with the container class', () => expect(wrapper.find('.container').length).toEqual(1));
    it('renders the reviews', () => expect(wrapper.find('.reviews-container--main').length).toEqual(1));
});