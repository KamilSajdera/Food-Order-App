import { useEffect, useRef } from "react";
import useProductsItems from "../../hooks/ProductsItems";

import PizzaAccessions from "./PizzaAccessions";
import InfoAction from "../../ui/InfoAction";

import classes from "./PizzaItems.module.css";

import pizzaSalami from "../../assets/pizza/salami.png";
import pizzaProsciutto from "../../assets/pizza/prosciutto.png";
import pizzaSarcous from "../../assets/pizza/sarcous.png";
import pizzaChickenBBQ from "../../assets/pizza/chickenBBQ.png";
import pizzaMargherita from "../../assets/pizza/margherita.png";
import pizzaMexico from "../../assets/pizza/mexico.png";
import pizzaFlamenco from "../../assets/pizza/flamenco.png";
import pizzaHawaiian from "../../assets/pizza/hawaiian.png";
import pizzaTuna from "../../assets/pizza/tuna.png";

const PIZZAS = [
    {
      id: 1,
      name: "Salami",
      desc: `yeast dough, tomato sauce, salami, mozzarella`,
      img: pizzaSalami,
      price: 10.5,
    },
    {
      id: 2,
      name: "Prosciutto",
      desc: "tomato sauce, mozzarella, ham",
      img: pizzaProsciutto,
      price: 11.5,
    },
    {
      id: 3,
      name: "Sarcous",
      desc: "tomato sauce, mozzarella, bacon, salami, sausage",
      img: pizzaSarcous,
      price: 13.0,
    },
    {
      id: 4,
      name: "Chicken BBQ",
      desc: "tomato sauce, mozzarella, bacon, breaded chicken, onion, hot pepper, BBQ sauce",
      img: pizzaChickenBBQ,
      price: 12.0,
    },
    {
      id: 5,
      name: "Margherita",
      desc: "tomato sauce, mozzarella",
      img: pizzaMargherita,
      price: 10.0,
    },
    {
      id: 6,
      name: "Mexico",
      desc: "tomato sauce, mozzarella, chorizo, jalapeno, pepper, corn, onion, salsa sauce",
      img: pizzaMexico,
      price: 13.5,
    },
    {
      id: 7,
      name: "Flamenco",
      desc: "tomato sauce, mozzarella, cherry tomato, white mozzarella, garlic, basil",
      img: pizzaFlamenco,
      price: 12.0,
    },
    {
      id: 8,
      name: "Hawaiian",
      desc: "tomato sauce, mozzarella, ham, pineapple",
      img: pizzaHawaiian,
      price: 11.5,
    },
    {
      id: 9,
      name: "Tuna",
      desc: "tomato sauce, mozzarella, tuna, black olives, onion, corn, garlic sauce on top",
      img: pizzaTuna,
      price: 12.5,
    },
  ];

const PizzaItems = () => {
  const pizzaItemsRef = useRef();

  const {
    currentProcut,
    isShowAccession,
    isShowProductAdded,
    placedProductName,
    closeAccessions,
    infoItemHandler,
    addListeners,
    removeListeners,
  } = useProductsItems(PIZZAS);

  useEffect(() => {
    const items = pizzaItemsRef.current.querySelectorAll(
      `.${classes["pizzaItem"]}`
    );
    addListeners(items);

    return () => {
      removeListeners(items);
    };
  }, [addListeners, removeListeners]);

  return (
    <section className={classes.pizzaItemsWrapper} ref={pizzaItemsRef}>
      {isShowProductAdded && (
        <InfoAction name={placedProductName} action="add" />
      )}
      {PIZZAS.map((pizza) => (
        <div className={classes.pizzaItem} key={pizza.id}>
          <img src={pizza.img} alt={pizza.name} />
          <h3>{pizza.name}</h3>
          <p>{pizza.desc}</p>
          <div className={classes.price}>${pizza.price.toFixed(2)}</div>
        </div>
      ))}
      {isShowAccession && (
        <PizzaAccessions
          pizzaData={currentProcut}
          onCloseAccessions={closeAccessions}
          showInfoMessage={infoItemHandler}
        />
      )}
    </section>
  );
};

export default PizzaItems;
