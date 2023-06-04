import React from "react";
import styles from "../ExtraWork/ExtraWork.module.css";
import extratire from "../../Accets/img/extratire.jpg";

const ExtraWork = () => {
  return (
    <div className={styles.extraWork_wrapper}>
      <div className={styles.extraWork_title_wrap}>
        <h1 className={styles.extraWork_title}>Дополнительные работы</h1>
      </div>
      <div className={styles.extraWork_info_wrap}>
        <div className={styles.extraWork_img_wrap}>
          <img
            className={styles.extraWork_img}
            src={extratire}
            alt="extratire"
          />
        </div>
        <div className={styles.extraWork_list_wrap}>
          <li>Сезонное хранение шин</li>
          <li>Ремонт шин и дисков</li>
          <li>Снятие секреток</li>
          <li>Ошиповка</li>
          <li>Покраска дисков</li>
          <li>Утилизация шин</li>
          <li>Заправка кондиционеров</li>
          <li>Запуск авто в зимнее время</li>
          <li>Trade in шин</li>
        </div>
      </div>
    </div>
  );
};
export default ExtraWork;
