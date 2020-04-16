import React from 'react';
import ReactDOM from 'react-dom';
import Premovie from './premovie';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Premovie />, div);
  ReactDOM.unmountComponentAtNode(div);
});
