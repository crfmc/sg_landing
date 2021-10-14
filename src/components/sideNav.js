import React from 'react';

import * as styles from '../styles/sideNav.module.css'

export default function sideNav(props) {
  return (
    <div className={styles.sideNav__container}>
      <div className={styles.sideNav__content}>
        <div className={styles.sideNav__close}>
          <span onClick={() => props.close(false)}>X</span>
        </div>
        <div className={styles.sideNav__logo}>
          <img src={props.logo} alt="logo" />
        </div>

        <div className={styles.sideNav__routes}>
          {props.routes()}
        </div>
        <div className={styles.sideNav__socials}>
          {props.socials()}
        </div>
    </div>
      
    </div>
  )
}
