import React from "react";
import styles from "../Order/Order.module.css";
import servimg from "../../Accets/img/servisPhoto.jpg";

const Order = () => {
  return (
    <div className={styles.order_wrapper}>
      <div className={styles.order_title_wrap}>
        <h1 className={styles.order_title}>Для юридических лиц</h1>
        <p className={styles.order_subtitle}>
          <b className={styles.order_subtitle_yellow}>Акция!</b> Первое авто
          бесплатно!
        </p>
      </div>
      <div className={styles.services_wrap}>
        <div>
          <img className={styles.services_img} src={servimg} alt="servimg" />
        </div>
        <div className={styles.services_info}>
          <li>Работа с НДС </li>
          <li>Комплексное обслуживание автопарков</li>
          <li>Заключение договора Оплата после</li>
          <li>Оплата после выполнения работ</li>
          <div className={styles.services_btn_wrap}>
            <button className={styles.services_btn}>Оформить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
