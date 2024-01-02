import classes from "./DeliveryPlaceWrapper.module.css";

const DeliveryPlaceWrapper = props => {
  return (
    <div className={classes.deliveryPlaceWrapper}>
      <div className={classes.deliveryPlaceContent}>
        <div className={classes.topBar}>Complete the data below</div>
        <form className={classes.orderForm}>
          <div className={classes.input}>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" required/>
          </div>
          <div className={classes.input}>
            <label htmlFor="user_locality">Locality</label>
            <input type="text" id="user_locality" required/>
          </div>
          <div className={classes.input}>
            <label htmlFor="user_streetnumber">Street number</label>
            <input type="text" id="user_streetnumber" required/>
          </div>
          <div className={classes.input}>
            <label htmlFor="user_flatnumber">Flat number</label>
            <input type="text" id="user_flatnumber" />
          </div>
          <div className={classes.input}>
            <label htmlFor="user_postcode">Postcode</label>
            <input type="text" id="user_postcode" required/>
          </div>
          <div className={classes.input}>
            <label htmlFor="user_phonenumber">Phone number</label>
            <input type="number" id="user_phonenumber" required/>
          </div>
        </form>
        <div className={classes.btnActions}>
          <button className={classes.btnCancel} onClick={() => props.onCloseDeliveryWrapper()}>Cancel</button>
          <button className={classes.btnOrder} type="submit">Order</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPlaceWrapper;
