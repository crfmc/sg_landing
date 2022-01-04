import React from 'react';

// Importing stylesheet
import * as styles from '../styles/pin.module.css';

// Import icons for the component
import arrowBullet from '../images/icons/Rectangle 43.svg';


/**
 * A component for displaying a service pin
 * 
 * Note:
 *  - Data is passed down through [props] from the parent component,
 *    screen2.
 */
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
