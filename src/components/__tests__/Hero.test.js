import React from 'react';
import Hero from '../Hero';
import { render } from 'enzyme';


describe('the hero text box', () => {
    let wrapper;
    beforeEach(() => wrapper = render(<Hero />));

    it('renders the site\'s main header', () => expect(wrapper.find('h1').length).toEqual(1));
    it('renders the sites subheader', () => expect(wrapper.find('.h5').length).toEqual(1));
    it('renders a button that links to the reviews', () => expect(wrapper.find('.hero--button').length).toEqual(1));
});