import React from 'react';

import * as styles from '../styles/pin.module.css';

import arrow from '../images/icons/Rectangle 33.svg';

export default function Pin(props) {
  return (
    <div className={styles.pin__container}>
      <div className={styles.pin__icon}>
        
      </div>
      <div className={ styles.pin__text }>
        <div className={styles.pin__header}>{props.header}</div>
        <div className={styles.pin__subtext_container}>
          <div className={styles.pin__subtext}>{ props.subtext }</div>
          <img className={styles.pin__arrow } src={ arrow } />
        </div>
      </div>
    </div>
  )
}
