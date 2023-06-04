import React from "react";
import styles from "../MapTire/MapTire.module.css";
import mapBg from "../../Accets/img/mapTire.jpg";
import krug from "../../Accets/icons/krug.svg";

const MapTire = () => {
  return (
    <div className={styles.mapTire_wrapper}>
      <div className={styles.mapTire_info_wrap}>
        <div className={styles.mapTire_title_and_subtitle_wrap}>
          <h1 className={styles.mapTire_info_title}>
            Карта покрытия мобильного шиномонтажа
          </h1>
          <div className={styles.mapTire_info_subtitle_wrap}>
            <img src={krug} alt="krug" />
            <p className={styles.mapTire_info_subtitle}>Зона покрытия</p>
          </div>
        </div>
      </div>
      <div className={styles.mapTire_img_wrap}>
        <img className={styles.mapTire_img} src={mapBg} alt="mapBg" />
      </div>
    </div>
  );
};
export default MapTire;
