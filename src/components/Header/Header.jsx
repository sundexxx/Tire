import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../Header/Header.module.css";
import logo from "../../Accets/icons/Logo.svg";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={styles.nav_bar}>
        <Link className={styles.nav_link} to="/">
          Услуги
        </Link>
        <Link className={styles.nav_link} to="/">
          Преимущества
        </Link>
        <Link className={styles.nav_link} to="/">
          Работы
        </Link>
        <Link className={styles.nav_link} to="/">
          Цены
        </Link>
        <div className={styles.nav_number_wrap}>
          <p className={styles.nav_number}>+375(29)-11-11-11(МТС)</p>
          <p className={styles.nav_number}>+375(44)-22-22-22(A1)</p>
        </div>
      </div>
      <div className={styles.nav_btn_wrap}>
        <button className={styles.nav_btn}>Заказать Звонок</button>
      </div>
    </header>
  );
};
export default Header;
