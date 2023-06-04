import React from "react";
import styles from "./CardsItems.module.css";

const CardsItems = ({ card }) => {
  return (
    <div
      className={
        card.id === 1
          ? styles.card_yellow
          : card.id === 2
          ? styles.card_black
          : styles.card_green
      }
    >
      <div className={styles.card_info}>
        <p
          className={
            card.id === 1
              ? styles.card_prices_yellow
              : card.id === 2
              ? styles.card_prices_black
              : styles.card_prices_green
          }
        >
          {card.price}
        </p>
        <p
          className={
            card.id === 1
              ? styles.card_title_yellow
              : card.id === 2
              ? styles.card_title_black
              : styles.card_title_green
          }
        >
          {card.car}
        </p>
      </div>
      <div className={styles.card_image_wrap}>{card.img}</div>
    </div>
  );
};

export default CardsItems;
