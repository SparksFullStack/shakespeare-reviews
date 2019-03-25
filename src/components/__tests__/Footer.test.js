import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

let wrapper;

beforeEach(() => wrapper = shallow(<Footer />));

it('renders the footer', () => {
    expect(wrapper.find('.col-md-6').length).toEqual(1);
})