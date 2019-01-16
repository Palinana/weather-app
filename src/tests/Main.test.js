import React from 'react';
import Main from '../components/Main';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main component', function() {
    let wrapper;
    beforeAll(() => {
        wrapper = shallow(<Main />)
        wrapper.setState({ description: 'Fog', location: 'Maimi', temperature: 75, units: 'imperial' })
    })

    it('Main renders without crashing', () => {
        const div = document.createElement('div');
        expect(wrapper.find('div.main').length).toBe(1)
    });

    it('convertUnits function convert units properly', () => {
        expect(Main.prototype.convertUnits('imperial', 75)).toEqual(23.88888888888889)
        expect(Main.prototype.convertUnits('metric', 23)).toEqual(73.4)
    });

});