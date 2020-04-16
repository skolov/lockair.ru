import * as React from 'react';
import { shallow } from 'enzyme';
import TextInput from './textInput';

describe('<TextInput />', () => {
  test('renders', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
  