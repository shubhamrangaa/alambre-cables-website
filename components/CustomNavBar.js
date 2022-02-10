import styles from "@styles/customNavbar.module.scss";
import NavbarDrawer from "./NavbarDrawer";
import * as navInfo from "../data/navLinks";
import Link from "next/link";

const CustomNavBar = () => {
  const { navLinks } = navInfo;
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.leftNavItems}>
            <Link href="/">
              <a>
                <img src="/assets/images/alambreLogo.png"></img>
              </a>
            </Link>
          </div>
          <div className={styles.rightNavItems}>
            {navLinks.map((link, index) => {
              return (
                <a key={index} href={link.link}>
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className={styles.drawer}>
            <NavbarDrawer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavBar;
