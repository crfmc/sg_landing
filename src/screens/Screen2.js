import React from 'react'

import * as styles from '../styles/screen2.module.css';
import Pin from '../components/Pin.js';


import { screen2, pins } from '../text.json'

import champagne from '../images/shutterstock_1106346314 1.png';

const renderPins = () => {
  return (
    pins.map((pin, i) => {
      return (
        <Pin header={pin.header} subtext={pin.subtext} key={i} />
      )
    })
  )
}

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
