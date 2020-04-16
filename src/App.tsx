import React from 'react';
import './App.scss';

import Shutter from './shutter/shutter'


export default class App extends React.Component<any, any> {

  public render(){
    return(
      <div className="App">
        <Shutter/>
      </div>
    )
  }
}