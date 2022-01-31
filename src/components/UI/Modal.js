import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import reactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};
const overlay = document.querySelector("#overlay");
const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<BackDrop onClose={props.onClose} />, overlay)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};

export default Modal;
