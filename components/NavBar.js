import { useState } from "react";
import dynamic from "next/dynamic";

import styles from "@styles/header.module.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className={styles.header}>
      <div className={styles[`logo-nav`]}>
        <div className={styles[`logo-container`]}>
          <a href="#">
            {/* <Logo className="logo" /> */}
            logo
          </a>
        </div>
        <ul
          className={
            click
              ? `${styles[`nav-options`]} ${styles.active}`
              : `${styles[`nav-options`]}`
          }
        >
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">About</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">Contact</a>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <a href="#">Products</a>
          </li>
          <li
            className={`${styles.option} ${styles[`mobile-option`]}`}
            onClick={closeMobileMenu}
          >
            <a href="#">SIGN-IN</a>
          </li>
          <li
            className={`${styles.option} ${styles[`mobile-option`]}`}
            onClick={closeMobileMenu}
          >
            <a href="" className={styles[`sign-up`]}>
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className={styles[`signin-up`]}>
        <li className={styles[`sign-in`]} onClick={closeMobileMenu}>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className={styles[`signup-btn`]}>
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className={styles[`mobile-menu`]} onClick={handleClick}>
        {click ? (
          //   <CloseMenu className="menu-icon" />
          <img src="/assets/icons/x.svg" className={styles[`menu-icon`]} />
        ) : (
          <img src="/assets/icons/menu.svg" className={styles[`menu-icon`]} />
          //   <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavBar;
