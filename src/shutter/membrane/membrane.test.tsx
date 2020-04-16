import * as React from 'react';
import { shallow } from 'enzyme';
import Membrane from './membrane';

describe('<Membrane />', () => {
  test('renders', () => {
    const wrapper = shallow(<Membrane />);
    expect(wrapper).toMatchSnapshot();
  });
});
  