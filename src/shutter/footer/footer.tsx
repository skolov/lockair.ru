import React from 'react';
import style from '../shutter.module.scss';


import logo from '../../logo.svg';
import instagram from './icons_svg/insta_ico.svg';
import youtube from './icons_svg/youtube_ico.svg';
import vk from './icons_svg/vk_ico.svg'


const Footer = () => {
  return (
    <div>
      <div className={style.referenceHolder}>
        <div className={style.textHead}>lockair.ru</div>
        <div className={style.refLink}>
          <span>
            <img src={instagram} alt=""/>
          </span>
          <span>
            <img src={youtube} alt=""/>
          </span>
          <span>
            <img src={vk} alt=""/>
          </span>
        </div>
        <div className={style.copyright}>Copyright © 2015 - 2019 lockair | internet technologies. All rights reserved.</div>
      </div>

      <div className={style.menuHolder}>
        <ul>
          <li>contacts</li>
          <li>about</li>
          <li>performance</li>
        </ul>
      </div>

      <div className={style.textHolder}>
        <div className={style.container}>
          In order to avoid administrative punishments, we strongly recommend digitally hiding your personal data such as car numbers, persons and any other elements that identify you. We guarantee you anonymity within the network, but we cannot hide information about the fact of your participation in the project. Lockair.ru is not responsible for the offences committed by you, as well as for their consequences. All actions you perform at your own risk And be careful.
        </div>
      </div>

      <div className={style.tradeMarkHolder}>
        <img src={logo} alt=""/>
      </div>
    </div>
  );
}

export default Footer;
  