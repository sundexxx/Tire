import React from "react";
import styles from "../MobileTire/MobileTire.module.css";
import mobtire from "../../Accets/icons/tiremobile.svg";
const MobileTire = () => {
  return (
    <div className={styles.mobileTire_wrapper}>
      <div className={styles.mobileTire_title_wrap}>
        <h1 className={styles.mobileTire_title}>
          Преимущества мобильного шиномонтажа
        </h1>
      </div>
      <div className={styles.mobileTire_services}>
        <div className={styles.subtitle_wrap}>
          <p className={styles.mobileTire_subtitle}>Онлайн запись</p>
          <p className={styles.mobileTire_subtitle}>
            Бесконтактное обслуживание
          </p>
          <p className={styles.mobileTire_subtitle}>
            Сертифицированное оборудование и мастера
          </p>
          <p className={styles.mobileTire_subtitle}>
            Гарантия на все виды работ 365 дней
          </p>
        </div>
        <img className={styles.mobileTire_img} src={mobtire} alt="mobtire" />
        <div className={styles.subtitle_wrap}>
          <p className={styles.mobileTire_subtitle}>Все типы оплат</p>
          <p className={styles.mobileTire_subtitle}>Без очередей</p>
          <p className={styles.mobileTire_subtitle}>Быстро и надежно</p>
          <p className={styles.mobileTire_subtitle}>В удобном месте</p>
        </div>
      </div>
    </div>
  );
};
export default MobileTire;
