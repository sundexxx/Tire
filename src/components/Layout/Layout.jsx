import React from "react";
import styles from "../Layout/Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className={styles.wrapper_layaout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
