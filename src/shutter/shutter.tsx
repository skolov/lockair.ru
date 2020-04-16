import React from 'react';
import style from './shutter.module.scss';
import TextInput from '../formElements/textInput';
import Premovie from './premovie/premovie';
import Footer from './footer/footer';
import Membrane from './membrane/membrane';

export default class Shutter extends React.Component<any, any>  {



  refElement: any = React.createRef();
  state = {
    values:{
      email:''
    },
    emailValid: false,
    sleepMode: true,
    timeoutSleepModeActivation: 0
  }



  handlerEventOnChange = (event: any): void => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const type = target.name;
    this.setState({
      values: Object.assign({}, this.state.values, {
        [type]: value
      })
    }, this.checkValid)

  }



  getMouseKeyboardMovement = (): void => {

    this.refElement.current
      .querySelector("input")
      .focus();

    clearTimeout(this.state.timeoutSleepModeActivation);
    this.setState({
      timeoutSleepModeActivation: setTimeout(() => {
        this.setState({
          sleepMode: true,
          displayMembrane: true
        })
      }, 20000),
      sleepMode: false,
    })

  }



  onJoinClick = async () => {
    
    let url = 'http://lockair.ru/darkside/mailer.php',
        response = await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({email: this.state.values.email})
        });

    if (response.ok) {
    } else {
      // Обработка 
    }
     
  } 



  checkValid = (): void => {
    // eslint-disable-next-line
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailValid: this.state.values.email.match(regExp) ? true : false
    })

  }



  toggleMappingInput = (): number => {
    return this.state.sleepMode ? 0 : 1;
  }



  getStyleForMembrane = (): object => {
    let visible = {zIndex: 3, opacity: 1},
        hidden = {zIndex: 0, opacity: 0};
    return this.state.sleepMode ? visible : hidden;
  }



  componentDidMount(){
    window.onkeydown = this.getMouseKeyboardMovement;
  }



  componentWillUnmount(){
    window.onkeydown = null;
  }



  public render() {
    return (
      <div className={style.shutter}>

          <div className={style.body}>
            <div className={style.centerHolder}>
              <div className={style.label}>
                <h1>lockair.ru</h1>
                <span>ultimate</span>
              </div>
              <div className={style.inputHolder} style={{opacity: this.toggleMappingInput()}} ref={this.refElement}>
                <TextInput
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  handlerEventOnChange={this.handlerEventOnChange}
                  data={{
                    value: this.state.values.email,
                    error: ''
                  }}
                />
                { this.state.emailValid && 
                  <div 
                    className={style.join} 
                    onClick={this.onJoinClick}
                  >join</div> 
                }
              </div>
              <div className={style.promo}>
                <div className={style.center}>
                  <Premovie/>
                </div>
              </div>
            </div>
          </div>

          <div className={style.footer}>
            <div className={style.centerHolder}>
              <Footer/>
            </div>
          </div>

          <Membrane 
            getMouseKeyboardMovement={this.getMouseKeyboardMovement} 
            styleCurrent={this.getStyleForMembrane()}
          />
        
      </div>
    );
  }
}