import React from 'react';
import style from '../shutter.module.scss';

const Footer = () => {

  let items = [];
  
  for (let i = 0; i <= 9; i++) {
    items.push(
      <div className={style.promoItem} key={i}>
        <video autoPlay muted loop width='300px'>
          <source src={'./shutter/premovie/pre_' + i + '.mp4'} type="video/mp4"></source>
        </video>
      </div>
    )
  }

  return (
    <div>
      {items}
    </div>
  );
}

export default Footer;
  