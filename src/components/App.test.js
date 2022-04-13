import React from 'react';
import { shallow } from "enzyme";
import  App  from "./App";
import toJson from 'enzyme-to-json'

describe('Test App Entry point', function () {
    it('should render app',()=>{
        shallow(<App/>);
    })
    it('should have a header tag with Avengers phantom',  ()=> {
        const wrapper = shallow(<App/>);
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});