import React from "react";
import img from "../../assets/images/image2.jpg";
import styles from "./HeaderImage.module.css";

const HeaderImage = () => {
  return (
    <>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default HeaderImage;
