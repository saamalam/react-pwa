import React from 'react';
import Home from '../src/components/Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Home', () => {
    it('Homepage renders correctly', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });