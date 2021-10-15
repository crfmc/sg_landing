import React from 'react';

import * as styles from '../styles/pin.module.css';

import arrowBullet from '../images/icons/Rectangle 43.svg';

export default function Pin(props) {
  return (
    <div className={styles.pin__container}>
      <div className={styles.pin__icon}>
        <img
          className={styles.pin__icon_img}
          src={props.src}
          alt={props.alt}
        />
      </div>
      <div className={ styles.pin__text }>
        <div className={styles.pin__header}>{props.header}</div>
        <div className={styles.pin__subtext_container}>
          <div className={styles.pin__subtext}>{ props.subtext }</div>
          <img className={styles.pin__arrow } src={ arrowBullet } />
        </div>
      </div>
    </div>
  )
}
