import { useSelector } from 'react-redux'

import MainWrapper from '../../ui/MainWrapper';
import BurgersSection from './BurgersSection';

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

    return (
        <MainWrapper title="Basket" logoImg={logo}>
            <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                { burgers.length > 0 && <BurgersSection items={burgers} /> }
            </section> 
        </MainWrapper>
    )
}

export default CartWrapper;