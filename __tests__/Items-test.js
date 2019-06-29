import React from 'react';
import Items from '../src/components/Items';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Items', () => {
    it('News Items renders correctly', () => {
      const wrapper = shallow(<Items />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
  });