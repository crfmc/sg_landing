import React from 'react';

// Importing stylesheet
import * as styles from '../styles/screen1.module.css';

// Imports the text from a JSON object
import { banner } from '../data/text.json';

// import the images in the banner
import stock from '../images/image-a 1.png';
import lift from '../images/image-b 1.png';
import crest from '../images/icons/Group 32.svg';


// Renders the set of images on the right side of the banner
const renderBannerRight = () => {
  return (
    <div className={styles.banner__panel_right}>
      <img src={stock}
        className={`${styles.banner__img} ${styles.banner__img_stock}`}
        alt="stocking shelves"
      />
      <div className={styles.banner__sticker}></div>
      <img src={lift}
        className={`${styles.banner__img} ${styles.banner__img_lift}`}
        alt="maneuvering a lift"
      />
    </div>
  )
}

/**
 * Component for the first screen (aka banner) of the site
 * 
 * Note:
 *  - It is divided into two sections, [panel_left] and [panel_right].
 *    For smaller screens, the orientation flips (via flex-direction),
 *    with [panel_right] on top.
 */
export default function Screen1() {
  return (
    <div>
      <div className={styles.banner__container}>
        <div className={styles.banner__panel_left}>
          <h1 className={styles.banner__text_header}>{banner.header}</h1>
          <p className={styles.banner__text_subtext}>{banner.subtext}</p>
          <button className={styles.banner__button}>PORTFOLIO</button>
        </div>
        {renderBannerRight()}
        
        <img
          src={crest}
          className={styles.banner__crest}
          alt="company crest"
        />
      </div>
      <div className={styles.banner__overlay}></div>
    </div>
  )
}
