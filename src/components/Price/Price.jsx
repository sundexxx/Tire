import React from "react";
import PriceArray from "./PriceArray/PriceArray";
import styles from "./Price.module.css";

const Price = (props) => {
  const itemsArray = [
    {
      id: 1,
      priceRemovingWheels: "120₽ ",
      priceDismantlingWheels: "125₽ ",
      priceBalanceWheels: "105₽ ",
      priceRubberValve: "200₽ ",
      priceMetalValve: "32₽ ",
      priceOneSensor: "33₽ ",
      priceCleaning: "121₽ ",
      priceCameraRepair: "444₽ ",
      priceSideCut: "311₽ ",
      priceDisposalTire: "122₽ ",
      priceDayNightHelp: "500₽ ",
      radius: "R13-R15",
    },
  ];

  return (
    <div className={styles.price_wrapper}>
      {itemsArray.map((item) => (
        <PriceArray itemsElement={item} key={item.id} />
      ))}
    </div>
  );
};
export default Price;
