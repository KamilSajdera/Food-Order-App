import { useRef, useEffect } from "react";
import useProductsItems from "../../hooks/ProductsItems";

import KebabAccession from "./KebabAccession";
import InfoAction from "../../ui/InfoAction";

import classes from "./KebabItems.module.css";

import kebabBatter from "../../assets/kebab/kebabButter.png";
import kebabRoll from "../../assets/kebab/kebabRoll.png";
import kebabFries from "../../assets/kebab/kebabFries.png";
import kebabBurger from "../../assets/kebab/kebabBurger.png";

const KEBABS = [
    {
      id: 1,
      name: "Kebab in batter",
      img: kebabBatter,
      price1: 5.5,
      price2: 8.5,
      price3: 10.5,
    },
    {
      id: 2,
      name: "Kebab on a roll",
      img: kebabRoll,
      price1: 6.0,
      price2: 9.0,
      price3: 11.5,
    },
    {
      id: 3,
      name: "Kebab on fries",
      img: kebabFries,
      price1: 6.5,
      price2: 10.0,
      price3: 12.0,
    },
    {
      id: 4,
      name: "Kebab-Burger",
      img: kebabBurger,
      price1: 5.0,
      price2: 7.0,
      price3: 8.5,
    },
  ];

const KebabItems = () => {
  const kebabItemsRef = useRef();

  const {
    currentProcut,
    isShowAccession,
    isShowProductAdded,
    placedProductName,
    closeAccessions,
    infoItemHandler,
    addListeners,
    removeListeners,
  } = useProductsItems(KEBABS);

  useEffect(() => {
    const items = kebabItemsRef.current.querySelectorAll(
      `.${classes["kebab-item"]}`
    );
    addListeners(items);

    return () => {
      removeListeners(items);
    };
  }, [addListeners, removeListeners]);

  return (
    <section className={classes.kebabWrapper} ref={kebabItemsRef}>
      {isShowProductAdded && (
        <InfoAction name={placedProductName} action="add" />
      )}
      {KEBABS.map((kebabItem) => (
        <div className={classes["kebab-item"]} key={kebabItem.id}>
          <img src={kebabItem.img} alt={kebabItem.name} />
          <h3>{kebabItem.name}</h3>
          <div className={classes.priceItem}>
            <div className={classes.price}>${kebabItem.price1.toFixed(2)}</div>
            <div className={classes.size}>normal</div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.price}>${kebabItem.price2.toFixed(2)}</div>
            <div className={classes.size}>big</div>
          </div>
          <div className={classes.priceItem}>
            <div className={classes.price}>${kebabItem.price3.toFixed(2)}</div>
            <div className={classes.size}>extra</div>
          </div>
        </div>
      ))}
      {isShowAccession && (
        <KebabAccession
          currentKebab={currentProcut}
          onCloseAccessions={closeAccessions}
          showInfoMessage={infoItemHandler}
        />
      )}
    </section>
  );
};

export default KebabItems;
