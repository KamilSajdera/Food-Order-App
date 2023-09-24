import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import isEqual from 'lodash/isEqual';

import AccessionData from './AccessionData';
import classes from '../AccessionStyles.module.css';

const PizzaAccessions = props => {

    const { pizzaData } = props;
    const [ pizzaSummary, setPizzaSummary ] = useState({
        name: pizzaData.name,
        price: pizzaData.price,
        size: pizzaData.size,
        dough: 'Traditional',
        activeAccessions: [],
        extraPay: 0
    })  
    
    const closeAccessionsHandler = () => {
        props.onCloseAccessions();
    }

    const pizzaDetailsHandler = pizzaItem => 
    {
        if (!isEqual(pizzaItem, pizzaSummary)) {
            setPizzaSummary((prev) => ({
                ...prev,
                ...pizzaItem,
            }))

            if(pizzaItem.size === 25) {
                setPizzaSummary((prev) => ({
                    ...prev,
                    price: pizzaData.price
                }))
            }
            if(pizzaItem.size === 35) {
                setPizzaSummary((prev) => ({
                    ...prev,
                    price: pizzaData.price + 7
                }))
            }
            if(pizzaItem.size === 40) {
                setPizzaSummary((prev) => ({
                    ...prev,
                    price: pizzaData.price + 12
                }))
            }
        }
    }

    const sendOrderPizza = () => {  
       /// Logic of adding an order to the cart soon...
    }

    return (
        <section className={classes.accessionWrapper}>
            <div className={classes.accessionContainer}>
                <FontAwesomeIcon icon={faWindowClose} className={classes.close} onClick={closeAccessionsHandler}/>
                <div className={classes.itemDetails}>
                <img src={pizzaData.img} alt={pizzaData.name} />
                    <h1>{pizzaData.name}</h1>
                    <span className={classes.price}>{`$${pizzaSummary.price.toFixed(2)} ($${pizzaSummary.extraPay})`}</span>
                </div>
                <AccessionData onSendPizzaDetails={pizzaDetailsHandler} />
                <button className={classes.addToOrderBtn} onClick={sendOrderPizza}>Add to Order</button>
            </div>
        </section>
    )
};

export default PizzaAccessions;