import React from "react";
import styles from "./CardsItems/CardsItems.module.css";
import CardsItems from "./CardsItems/CardsItems";
import sedan from "../../Accets/icons/001-sedan.svg";
import jeep from "../../Accets/icons/002-jeep 1.svg";
import truck from "../../Accets/icons/003-truck.svg";

const Cards = () => {
  const arrayItems = [
    {
      id: 1,
      car: "Легковые Авто",
      price: "от 199₽",
      img: <img src={sedan} alt="sedan" />,
    },
    {
      id: 2,
      car: "Кроссоверы, джипы, минивены",
      price: "от 299₽ ",
      img: <img src={jeep} alt="sedan" />,
    },
    {
      id: 3,
      car: "Коммерческий транспорт",
      price: "от 399₽ ",
      img: <img src={truck} alt="sedan" />,
    },
  ];
  return (
    <div className={styles.cards_wrapper}>
      {arrayItems.map((item) => (
        <CardsItems card={item} key={item.id} />
      ))}
    </div>
  );
};

export default Cards;
