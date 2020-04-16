import React from 'react';
import style from '../shutter.module.scss';

type membraneProps = {
  styleCurrent: object,
  getMouseKeyboardMovement: any
}

const Membrane = ({styleCurrent, getMouseKeyboardMovement}: membraneProps) => {
  return (
    <div style={styleCurrent} className={style.shutterWall} onMouseMoveCapture={getMouseKeyboardMovement}>
      <div className={style.blackMembrane}></div>
    </div>
  );
}

export default Membrane;
  