import React from 'react';
import Form from '../components/Form';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Welcome component', function() {
    const wrapper = shallow(<Form />);

    it('renders a button to a submit the form', function() {  
        expect(wrapper.find('button').at(0).props().children).toEqual('Submit')
    });
});