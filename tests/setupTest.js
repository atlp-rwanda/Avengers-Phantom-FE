import Enzyme from 'enzyme'
import { EnzymeAdapter } from 'enzyme'

Enzyme.configure({adapter:new EnzymeAdapter() })

global.shallow = shallow;
global.render = render;