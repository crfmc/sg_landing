import React, {useState} from 'react';

// Components included in this (only displayed for smaller screens)
import SideNav from '../components/sideNav.js';

// Importing stylesheet
import * as styles from '../styles/navigation.module.css';

// Importing images for the component
import logo from '../images/icons/icon.svg';
import instagram from '../images/icons/Instagram.svg';
import facebook from '../images/icons/Facebook.svg';
import twitter from '../images/icons/Twitter.svg'
import login from '../images/icons/Rectangle 33.svg';

// Data for this component and a function for identifying the current route
import { routes, isCurrentRoute } from '../data/routes.js';


// Renders the list of links to the routes of the site
const renderRoutes = () => {
  return (
      routes.map((route, i) => {
        return (
          <a
            // Make route link bold if it is the current route.
            className={
              `
              ${styles.nav__route} 
              ${ isCurrentRoute(route) ? styles.nav__route_selected : styles.nav__route_hover}
              `}
            
            href={route.url}
            key={i}>
            {route.name}
          </a>
        )
      })
  )
}

// Renders the links to social media
const renderSocials = () => {
  return (
    
        [instagram, facebook, twitter].map((url, i) => {
          return(
            <img src={url} key={i} className = { styles.nav__social } />
            )
        })
  )
}

/**
 * A component for navigating through the routes of the site
 * 
 * Note:
 *  - For smaller screen widths, the navigation becomes hidden
 *    and opened by the hamburger icon on the upper left.
 */
export default function Navigation() {

  // Triggers the sideNav on small screens
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className={styles.nav__container}>

      {/* Elements for the side navigation, hidden by default */}
      {
        sideNav &&
        <SideNav logo={logo}
          close={setSideNav}
          routes={renderRoutes}
          socials={renderSocials}
        />
      }
      <div
          className={styles.burger}
          onClick={sideNav ? () => setSideNav(false) : () => setSideNav(true)}
        >
          |||
      </div> 
      {/* end elements for side navigation */}

      <div className={styles.nav__logo}>
        <img src={logo} alt="logo"/>
      </div>
      <nav className={styles.nav__block}>
        <div className={styles.nav__links}>
          <div className={styles.nav__socials}>
            { renderSocials() }
          </div>
          <div className={styles.nav__login}>
            <a href="/">Log in</a>
            <img src={login} alt="log in" />
          </div>

        </div>
        <div className={styles.nav__routes}>
          {renderRoutes()}
        </div>
      </nav>
    </div>
  )
}
