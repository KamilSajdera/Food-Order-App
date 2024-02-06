import { useRef, useEffect } from "react";
import useProductsItems from "../../hooks/ProductsItems";

import classes from "./BurgersItems.module.css";

import cheeseBurgerImg from "../../assets/burger/cheeseburger.png";
import chickenBurgerImg from "../../assets/burger/chickenDeluxe.png";
import hamburgerImg from "../../assets/burger/hamburger.png";
import bigjohnImg from "../../assets/burger/bigjohn-burger.png";
import spicyChickenImg from "../../assets/burger/spicychicken.avif";
import superstarImg from "../../assets/burger/superstar.png";

import BurgerAccession from "./BurgerAccession";
import InfoAction from "../../ui/InfoAction";

const BURGERS = [
  {
    id: 1,
    name: "Cheeseburger",
    price: 3.5,
    weight: "150g",
    img: cheeseBurgerImg,
  },
  {
    id: 2,
    name: "Chicken-Deluxe",
    price: 4.25,
    weight: "240g",
    img: chickenBurgerImg,
  },
  {
    id: 3,
    name: "Hamburger",
    price: 4.5,
    weight: "320g",
    img: hamburgerImg,
  },
  {
    id: 4,
    name: "Big John",
    price: 6.0,
    weight: "650g",
    img: bigjohnImg,
  },
  {
    id: 5,
    name: "Spicy Chicken",
    price: 5.5,
    weight: "340g",
    img: spicyChickenImg,
  },
  {
    id: 6,
    name: "Superstars",
    price: 3.5,
    weight: "250g",
    img: superstarImg,
  },
];

const BurgersItems = () => {
  const burgersItemsRef = useRef(null);

  const {
    currentProcut,
    isShowAccession,
    isShowProductAdded,
    placedProductName,
    closeAccessions,
    infoItemHandler,
    addListeners,
    removeListeners,
  } = useProductsItems(BURGERS);

  useEffect(() => {
    const items = burgersItemsRef.current.querySelectorAll(
      `.${classes["burger-item"]}`
    );
    addListeners(items);

    return () => {
      removeListeners(items);
    };
  }, [addListeners, removeListeners]);

  return (
    <section className={classes.burgersItemsWrapper} ref={burgersItemsRef}>
      {isShowProductAdded && (
        <InfoAction name={placedProductName} action="add" />
      )}
      {BURGERS.map((burger) => (
        <div className={classes["burger-item"]} key={burger.id}>
          <div className={classes.burgerImg}>
            <img src={burger.img} alt={burger.name} />
            <span className={classes.itemBottomShadow} />
          </div>
          <h3>{burger.name}</h3>
          <p>{burger.weight}</p>
          <span className={classes.price}>{`$${burger.price.toFixed(2)}`}</span>
        </div>
      ))}
      {isShowAccession && (
        <BurgerAccession
          currentBurger={currentProcut}
          onCloseAccessions={closeAccessions}
          showInfoMessage={infoItemHandler}
        />
      )}
    </section>
  );
};

export default BurgersItems;
