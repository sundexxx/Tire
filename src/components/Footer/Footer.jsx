import React from "react";
import styles from "../Footer/Footer.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Accets/icons/Logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_bar}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <Link className={styles.footer_link} to="/">
          Услуги
        </Link>
        <Link className={styles.footer_link} to="/">
          Преимущества
        </Link>
        <Link className={styles.footer_link} to="/">
          Работы
        </Link>
        <Link className={styles.footer_link} to="/">
          Цены
        </Link>
      </div>
      <div className={styles.footer_number_wrap}>
        <p className={styles.footer_number}>+375(29)-11-11-11(МТС)</p>
        <p className={styles.footer_number}>+375(44)-22-22-22(A1)</p>
        <div className={styles.footer_btn_wrap}>
          <button className={styles.footer_btn}>
            Написать директору в WhatsApp
          </button>
        </div>
      </div>
      <div className={styles.footer_email}>
        <h1 className={styles.footer_email_text}>email: GeniusTeam@mail.ru</h1>
        <p className={styles.footer_email_text}>@2023 (c) Genius Team</p>
      </div>
    </div>
  );
};
export default Footer;
