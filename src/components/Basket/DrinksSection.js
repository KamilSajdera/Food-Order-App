import classes from "./DrinksSection.module.css";
import CartItem from "../../ui/CartItem";

const DrinksSection = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <CartItem item={item} customClass={classes.item} key={Math.floor(Math.random() * 999)} onSendRemoveInfo={props.onSendRemoveInfo}>
          <img src={item.img} alt={item.name} className={classes.img} />
          <h3 style={{ paddingTop: "15px" }}>{item.name}</h3>
          <p className={classes.p}>{item.capacity}</p>
        </CartItem>
      ))}
    </>
  );
};

export default DrinksSection;
