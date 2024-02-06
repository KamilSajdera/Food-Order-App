import { useState } from "react";

import classes from "../components/Kebab/KebabItems.module.css";

export default function useProductsItems(productsArray) {
  const [currentProcut, setCurrentProduct] = useState(null);
  const [isShowAccession, setIsShowAccession] = useState(false);
  const [isShowProductAdded, setIsShowProductAdded] = useState(false);
  const [placedProductName, setPlacedProductName] = useState("");

  const addListeners = (itemsHtml) => {
    itemsHtml.forEach((item) =>
      item.addEventListener("click", () => {
        showAccessionWrapper(item.querySelector("h3").textContent);
        animateItem(item);
      })
    );
  };

  const removeListeners = (itemsHtml) => {
    itemsHtml.forEach((item) => {
      item.removeEventListener("click", null);
    });
  };

  const showAccessionWrapper = (title) => {
    const productsData = productsArray.find((kebab) => kebab.name === title);
    setCurrentProduct(productsData);
    setIsShowAccession(true);
  };

  const animateItem = (e) => {
    e.classList.add(classes.clickAnimation);

    setTimeout(() => {
      e.classList.remove(classes.clickAnimation);
    }, 350);
  };

  const closeAccessionsHandler = () => {
    setIsShowAccession(false);
  };

  const infoItemHandler = () => {
    setPlacedProductName(currentProcut.name);
    setIsShowProductAdded(true);
    setTimeout(() => {
      setIsShowProductAdded(false);
    }, 2000);
  };

  return {
    currentProcut,
    isShowAccession,
    isShowProductAdded,
    placedProductName,
    closeAccessions: closeAccessionsHandler,
    infoItemHandler,
    addListeners,
    removeListeners,
  };
}
