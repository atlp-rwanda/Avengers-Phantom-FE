import Enzyme from 'enzyme'
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow,configure} from 'enzyme';

Enzyme.configure({adapter:new Adapter() })
