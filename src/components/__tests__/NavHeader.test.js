import React from 'react';
import { mount } from 'enzyme';

import NavHeader from '../NavHeader'

let wrapper;

beforeEach(() => wrapper = mount(<NavHeader />));
afterEach(() => wrapper.unmount());


describe.only('the top navigation bar', () => {
    it('renders the navbar brand', () => expect(wrapper.find('.navbar-brand').length).toEqual(1));
    it ('renders a navbar toggle button', () => expect(wrapper.find('.navbar-toggler').length).toEqual(1));
    it('renders a div that wraps the nav buttons', () => expect(wrapper.find('.navbar-collapse').length).toEqual(1));
    it('renders two navigation items', () => expect(wrapper.find('.nav-item').length).toEqual(2));
})