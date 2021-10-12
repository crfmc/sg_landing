import React from 'react';

import * as styles from '../styles/banner.module.css';


// import the images in the banner
import stock from '../images/image-a 1.png'


const renderedBannerImgs = () => {
  <img src={stock} className={styles.banner__img} alt="stocking shelves" />
}

export default function Banner() {
  return (
    <div className={styles.banner__container}>
      {renderedBannerImgs()}
    </div>
  )
}
