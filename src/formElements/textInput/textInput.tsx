import React from 'react';
import style from './textInput.module.scss'

export default class TextInput extends React.Component<any, any>  {
  public render() {

    const {value, error} = this.props.data;

    return (
      <div className={style.textInput}>
        <input
          autoComplete='off'
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={value}
          onChange={this.props.handlerEventOnChange}
        />
        {error && <div className={style.error}>{error}</div>}
      </div>
    );
  }
}
  