import React from 'react';

// Importing stylesheet
import * as styles from '../styles/sideNav.module.css'

/**
 * sideNav is a component for the side navigation of the site.
 * Note:
 *  - Only displayed for smaller screens
 */
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
