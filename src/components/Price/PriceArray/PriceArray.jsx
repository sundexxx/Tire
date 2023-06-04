import React from "react";
import styles from "../Price.module.css";

const PriceArray = ({ itemsElement }) => {
  return (
    <div className={styles.price_container}>
      <div className={styles.price_title_wrap}>
        <h1 className={styles.price_title}>ЦЕНЫ НА МОБИЛЬНЫЙ ШИНОМОНТАЖ</h1>
        <div className={styles.price_allPrice_wrap}>
          <div className={styles.price_allPrice_text}>
            Снятие и установка колеса: <p>{itemsElement.priceRemovingWheels}</p>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Демонтаж/монтаж шины: <p>{itemsElement.priceDismantlingWheels}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Балансировка колеса с учетом грузиков:
              <p>{itemsElement.priceBalanceWheels}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Установка клапана резинового:
              <p>{itemsElement.priceRubberValve}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Установка клапана металлического:
              <p>{itemsElement.priceMetalValve}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Установка одного датчика давления:
              <p>{itemsElement.priceOneSensor}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Очистка и смазка ступицы, шпилек/болтов:
              <p>{itemsElement.priceCleaning}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Ремонт камеры (одно повреждение):
              <p>{itemsElement.priceCameraRepair}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Ремонт бокового пореза шины: <p>{itemsElement.priceSideCut}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Утилизация шины: <p>{itemsElement.priceDisposalTire}</p>
            </div>
          </div>
          <div className={styles.price_allPrice_wrap}>
            <div className={styles.price_allPrice_text}>
              Выезд шиномонтажа (день/ночь):
              <p>{itemsElement.priceDayNightHelp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceArray;
