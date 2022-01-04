import React from 'react'

import * as styles from '../styles/screen2.module.css';


// Import components used in this
import Pin from '../components/Pin.js';

// import icons and images included in the component
import bottle from '../images/icons/bottle.svg';
import gears from '../images/icons/Group 6.svg';
import bin from '../images/icons/Layer 1.svg';
import champagne from '../images/shutterstock_1106346314 1.png';

// import text and data from JSON
import { screen2, pins } from '../data/text.json';

// Renders the pins in the component
const renderPins = () => {
  const srcs = [bottle, bin, gears];

  return (
    pins.map((pin, i) => {
      return (
        <Pin
          src={srcs[i]}
          alt="decorative icon"
          header={pin.header}
          subtext={pin.subtext}
          key={i}
        />
      )
    })
  )
}

/**
 * Component for the second screen (visible directly after the first) of the 
 * page
 * 
 * Note:
 *  - [panel] grows to take up entire screen for smaller widths
 *  - Switched orientation for smaller screens
 */
export default function Screen2() {
  return (
    <div className={styles.screen2__container}>
      <div className={styles.screen2__panel}>
        <div className={styles.screen2__panel_container}>
          <div className={styles.screen2__sticker}></div>
          <img
            className={styles.screen2__panel_img}
            src={champagne}
            alt="group of workers celebrating with champagne"
          />
          <div className={styles.screen2__panel_text}>
            <h1>{screen2.header}</h1>
            <p>{screen2.subtext}</p>
          </div>
        </div>
        <div className={styles.screen2__pins}>
          { renderPins() }
        </div>
      </div>
    </div>
  )
}
