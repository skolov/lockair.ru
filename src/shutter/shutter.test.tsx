import React from 'react';
import ReactDOM from 'react-dom';
import Shutter from './shutter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Shutter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
