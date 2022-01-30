import React from "react";
import { MdFastfood } from "react-icons/md";
import HeaderImage from "./HeaderImage";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          Foodeli
          <span className={styles["food-icon"]}>
            <MdFastfood />
          </span>
        </div>
        <div className={styles["cart-button"]}>
          <HeaderCartButton />
        </div>
      </header>
      <div>
        <HeaderImage />
      </div>
    </>
  );
};

export default Header;
