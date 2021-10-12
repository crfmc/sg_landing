import React, {useState} from 'react';

import * as styles from '../styles/navigation.module.css';

import logo from '../images/icons/icon.svg';
import instagram from '../images/icons/Instagram.svg';
import facebook from '../images/icons/Facebook.svg';
import twitter from '../images/icons/Twitter.svg'
import login from '../images/icons/Rectangle 33.svg';

import { routes, isCurrentRoute } from '../routes.js';


const renderRoutes = () => {
  return (
    <div className={styles.nav__routes}>
      {routes.map((route, i) => {
        return (
          <a
            // Make route link bold if it is the current route.
            className={
              `
              ${styles.nav__route} 
              ${ isCurrentRoute(route) && styles.nav__route_selected}
              `}
            
            href={route.url}
            key={i}>
            {route.name}
          </a>
        )
      })}
    </div>
  )
}

const renderSocials = () => {
  return (
    <div className={styles.nav__socials}>
      {
        [instagram, facebook, twitter].map((url, i) => {
          return(
            <img src={url} key={i} className = { styles.nav__social } />
            )
        })
      }
    </div>
  )
}

export default function Navigation() {

  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__logo}>
        <img src={logo} alt="logo"/>
      </div>
      <nav className={styles.nav__block}>
        <div className={styles.nav__links}>
          { renderSocials() }
          <div className={styles.nav__login}>
            <a href="/">Log in</a>
            <img src={login} alt="log in" />
          </div>

        </div>
        {renderRoutes()}
      </nav>
    </div>
  )
}
