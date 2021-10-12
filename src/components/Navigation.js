import React, {useState} from 'react';

import * as styles from '../styles/navigation.module.css';

import logo from '../images/icons/icon.svg';
import instagram from '../images/icons/Instagram.svg';
import facebook from '../images/icons/Facebook.svg';
import twitter from '../images/icons/Twitter.svg'

import { routes } from '../routes.js';

export default function Navigation() {
  // Indicate the current route using the window pathname 
  // (if "/" then the user is on the homepage)
  const currentRoute =
    window.location.pathname === "/" ?
      "home" : window.location.pathname.substring(1);
  
  console.log(currentRoute);

  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__logo}>
        <img src={logo} alt="logo"/>
      </div>
      <nav className={styles.nav__block}>
        <div className={styles.nav__links}>
          <div className={styles.nav__socials}>
            {
              [instagram, facebook, twitter].map((url, i) => {
                return(
                  <img src={url} key={i} className = { styles.nav__social } />
                  )
              })
            }
          </div>
          <div className={styles.nav__login}>
            <a href="/">Log in</a>
          </div>

        </div>
        <div className={styles.nav__routes}>
          {routes.map((route, i) => {
            return (
              <a
                // Make route link bold if it is the current route.
                className={
                  currentRoute === route.name.toLowerCase() ?
                    styles.nav__route_selected : styles.nav__route
                }
                href={route.url}
                key={i}>
                {route.name}
              </a>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
