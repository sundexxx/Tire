import React from "react";
import styles from "./Home.module.css";
import shina from "..//../Accets/icons/shina.svg";
import Cards from "../Cards/Cards";
import Order from "../Order/Order";
import MobileTire from "../MobileTire/MobileTire";
import ExtraWork from "../ExtraWork/ExtraWork";
import MapTire from "../MapTire/MapTire";
import Price from "../Price/Price";

const Home = () => {
  return (
    <div className={styles.home_wrap}>
      <div className={styles.home_container}>
        <h1 className={styles.home_title}>Мобильный ШИНОМОНТАЖ №1</h1>
        <p className={styles.home_sub_title}>
          В интернет-магазине шин Шины Мигом вы можете купить шины известных
          брендов. Подбор осуществляется как по типоразмеру, так и по марке авто
        </p>
        <div className={styles.home_btn_wrap}>
          <button className={styles.home_btn}>
            <p className={styles.home_btn_text}>Вызвать шиномонтаж </p>
            <img src={shina} alt="shina" />
          </button>
        </div>
      </div>
      <Cards />
      <Order />
      <MobileTire />
      <ExtraWork />
      <MapTire />
      <Price />
    </div>
  );
};

export default Home;
