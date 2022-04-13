import React from 'react';
import { shallow } from "enzyme";
import  App  from "./App";

describe('Test App Entry point', function () {
    it('should render app',()=>{
        shallow(<App/>);
    })
    it('should have a header tag with Avengers phantom',  ()=> {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("h1").text()).toEqual("Avengers phantom");
    });
});