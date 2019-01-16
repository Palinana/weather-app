import React from 'react';
import Welcome from '../components/Welcome';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Welcome component', function() {
    const wrapper = shallow(<Welcome />);

    it('renders welcome message', function() {
      const welcome = <h3 className='col-md-6 mx-auto main-text'>Check the real-time weather forecast.</h3>;
      expect(wrapper.contains(welcome)).toEqual(true);
    });
});
  