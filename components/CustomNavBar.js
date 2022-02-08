import styles from "@styles/customNavbar.module.scss";
import NavbarDrawer from "./NavbarDrawer";
import { navLinks } from "../data/navLinks";

const CustomNavBar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.leftNavItems}>
            <h5>Logo</h5>
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
