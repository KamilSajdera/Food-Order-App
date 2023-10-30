import { useState } from 'react';
import { useDispatch } from 'react-redux';
import isEqual from 'lodash/isEqual';

import AccessionData from './AccessionData';

import AccessionsWrapper from '../../ui/AccessionsWrapper';
import Button from '../../ui/Button';
import InfoAccessions from '../../ui/InfoAccessions';

import { cartActions } from '../../store/cart-slice';

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

    const pizzaPriceMap = {
        25: 0,
        35: 7,
        40: 12
    }

    const dispatch = useDispatch()

    const [isShowInfo, setIsShowInfo] = useState(false);
    const infoMessage = `Some of the accessions are included in the pizza and aren't included in the quantity here. 
                         To find out which ones, read pizza's description and look its photo.`
    
    const pizzaDetailsHandler = pizzaItem => 
    {
        if (!isEqual(pizzaItem, pizzaSummary)) {
            setPizzaSummary((prev) => ({
                ...prev,
                ...pizzaItem,
                price: pizzaData.price + pizzaPriceMap[pizzaItem.size],
                img: pizzaData.img,
                id: "pizza"
            }))
        }
    }

    const showInfoHandler = () => setIsShowInfo(!isShowInfo)  

    const sendOrderPizza = () => {  
       dispatch(cartActions.addItemToCart(pizzaSummary))
    }

    return (
        <AccessionsWrapper onCloseAccessions={() => props.onCloseAccessions()} onShowInfo={showInfoHandler}>
            { isShowInfo && <InfoAccessions message={infoMessage} />}
            <img src={pizzaData.img} alt={pizzaData.name} />
            <h1>{pizzaData.name}</h1>
            <span>{`$${pizzaSummary.price.toFixed(2)} ($${pizzaSummary.extraPay})`}</span>
            <AccessionData onSendPizzaDetails={pizzaDetailsHandler} />
            <Button onClick={sendOrderPizza}>Add to Order</Button>
        </AccessionsWrapper>   
    )
};

export default PizzaAccessions;