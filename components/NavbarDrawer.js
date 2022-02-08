import styles from "@styles/NavbarDrawer.module.scss";
import { useState } from "react";
import { navLinks } from "../data/navLinks";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.hamburger} onClick={toggleDrawer}>
        <img src="/assets/icons/hamburger.svg"></img>
      </button>
      <div
        className={
          isOpen
            ? `${styles.drawerContainer} ${styles.drawerActive}`
            : `${styles.drawerContainer} ${styles.drawerInactive}`
        }
      >
        <div className={styles.topBar}>
          <div>logo</div>
          <button
            onClick={toggleDrawer}
            style={!isOpen ? { display: "none" } : {}}
          >
            <img src="/assets/icons/close.svg"></img>
          </button>
        </div>
        <div className={styles.linksContainer}>
          {navLinks.map((link, index) => {
            return (
              <a key={index} href={link.link}>
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavbarDrawer;
