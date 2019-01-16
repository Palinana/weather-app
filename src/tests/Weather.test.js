import React from 'react';
import Weather from '../components/Weather';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Weather component', function() {
    let wrapper;
    beforeAll(() => {
        const tempProps = {
            description: 'Fog',
            location: 'Maimi',
            unit: 'imperial',
            temperature: 75
        }
        wrapper = shallow(<Weather {...tempProps}/>)
    })

    it('Weather component renders current location', () => {
        expect(wrapper.find('span').at(0).text()).toEqual('Maimi')
    })

    it('Weather component renders current location', () => {
        expect(wrapper.find('span').at(1).text()).toEqual('Fog')
    })

    it('Weather component renders current temperature', () => {
        expect(wrapper.find('span').at(2).text()).toEqual('75° F')
    })

    it('Weather component renders current image', () => {
        expect(wrapper.find('img').prop("src")).toEqual('/images/Fog.png')
    })

});