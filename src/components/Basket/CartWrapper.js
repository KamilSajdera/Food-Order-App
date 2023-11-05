import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

import MainWrapper from '../../ui/MainWrapper';
import BurgersSection from './BurgersSection';
import PizzaSection from './PizzaSection';
import KebabSection from './KebabSection';
import OtherSection from './OtherSection';

import logo from '../../assets/cart/cartImg.png';

const CartWrapper = () => {

    const cartData = useSelector(store => store.cart.items)
    const cartItems = cartData.map(item => { 
        return {...item.itemData, amount: item.amount}
    }) /// extraction single item in all cart data and connect it's data and amount

    const burgers = cartItems.filter(item => item.id === 'burger');
    const pizzas = cartItems.filter(item => item.id === 'pizza');
    const kebabs = cartItems.filter(item => item.id === 'kebab');
    const others = cartItems.filter(item => item.id === 'other');
    const drinks = cartItems.filter(item => item.id === 'drink');

    const isNotEmpty = value => {
        return value.length > 0;
    }

    return (
        <MainWrapper title="Basket" logoImg={logo}>
            <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                { cartData.length === 0 && 
                    <p style={{fontSize: "1.3rem", width: "80%", fontStyle: "italic",
                            paddingTop: "50px", margin: "auto", textAlign: "center"
                    }}>
                        No items in cart yet. Maybe want a bite to eat? 
                        <FontAwesomeIcon icon={faCookieBite} style={{color: "#764f48", paddingLeft: "10px"}}/>
                    </p>
                }
                { isNotEmpty(burgers) && <BurgersSection items={burgers} /> }
                { isNotEmpty(pizzas) && <PizzaSection items={pizzas} /> }
                { isNotEmpty(kebabs) && <KebabSection items={kebabs} /> }
                { isNotEmpty(others) && <OtherSection items={others} /> }
            </section> 
        </MainWrapper>
    )
}

export default CartWrapper;