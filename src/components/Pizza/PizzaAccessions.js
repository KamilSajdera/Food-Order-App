import { useState } from 'react';
import isEqual from 'lodash/isEqual';

import AccessionData from './AccessionData';

import AccessionsWrapper from '../../ui/AccessionsWrapper';
import Button from '../../ui/Button';

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
        <AccessionsWrapper onCloseAccessions={() => props.onCloseAccessions()}>
            <img src={pizzaData.img} alt={pizzaData.name} />
            <h1>{pizzaData.name}</h1>
            <span>{`$${pizzaSummary.price.toFixed(2)} ($${pizzaSummary.extraPay})`}</span>
            <AccessionData onSendPizzaDetails={pizzaDetailsHandler} />
            <Button onClick={sendOrderPizza}>Add to Order</Button>
        </AccessionsWrapper>   
    )
};

export default PizzaAccessions;