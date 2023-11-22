import { useState } from 'react'
import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

import classes from './CartWrapper.module.css';

import MainWrapper from '../../ui/MainWrapper';
import BurgersSection from './BurgersSection';
import PizzaSection from './PizzaSection';
import KebabSection from './KebabSection';
import OtherSection from './OtherSection';
import DrinksSection from './DrinksSection';

import InfoAction from '../../ui/InfoAction';

import logo from '../../assets/cart/cartImg.png';

const CartWrapper = () => {

    const totalCost = useSelector(store => store.cart.totalCost)
    const cartData = useSelector(store => store.cart.items)
    const cartItems = cartData.map(item => { 
        return {...item.itemData, amount: item.amount}
    }) /// extraction single item in all cart data and connect it's data and amount

    const burgers = cartItems.filter(item => item.id === 'burger');
    const pizzas = cartItems.filter(item => item.id === 'pizza');
    const kebabs = cartItems.filter(item => item.id === 'kebab');
    const others = cartItems.filter(item => item.id === 'other');
    const drinks = cartItems.filter(item => item.id === 'drink');

    const [isShowRemoveInfo, setIsShowRemoveInfo] = useState(false)
    const [removedItemName, setRemovedItemName] = useState()

    const isNotEmpty = value => {
        return value.length > 0;
    }

    const sendRemoveInfoHandler = (name) => {
        setRemovedItemName(name);
        setIsShowRemoveInfo(true);
        setTimeout(() => {
            setIsShowRemoveInfo(false)
            setRemovedItemName('')
        }, 2000)
    }
    return (
        <MainWrapper title="Basket" logoImg={logo}>
            { isShowRemoveInfo && <InfoAction name={removedItemName} action="remove" />}
            <div className={classes.totalAmountClass}>Total <p>${totalCost.toFixed(2)}</p> </div>
            <section className={classes.cartWrapper}>
                { cartData.length === 0 && 
                    <p className={classes.emptyCart}>
                        No items in cart yet. Maybe want a bite to eat? 
                        <FontAwesomeIcon icon={faCookieBite} />
                    </p>
                }
                {isNotEmpty(burgers) && <BurgersSection items={burgers} onSendRemoveInfo={sendRemoveInfoHandler} />}
                {isNotEmpty(pizzas) && <PizzaSection items={pizzas} onSendRemoveInfo={sendRemoveInfoHandler} />}
                {isNotEmpty(kebabs) && <KebabSection items={kebabs} onSendRemoveInfo={sendRemoveInfoHandler} />}
                {isNotEmpty(others) && <OtherSection items={others} onSendRemoveInfo={sendRemoveInfoHandler} />}
                {isNotEmpty(drinks) && <DrinksSection items={drinks} onSendRemoveInfo={sendRemoveInfoHandler} />}
            </section> 
        </MainWrapper>
    )
}

export default CartWrapper;