import { useSelector } from 'react-redux'

import MainWrapper from '../../ui/MainWrapper';

import logo from '../../assets/cart/cartImg.png';

const CartWrapper = () => {

    const cartData = useSelector(store => store.cart.items)
    const cartItems = cartData.map(item => { 
        return {...item.itemData, amount: item.amount}
    }) /// extraction single item in all cart data and connect it's data and amount

    let burgers = cartItems.filter(item => item.id === 'burger');
    let pizzas = cartItems.filter(item => item.id === 'pizza');
    let kebabs = cartItems.filter(item => item.id === 'kebab');
    let others = cartItems.filter(item => item.id === 'other');
    let drinks = cartItems.filter(item => item.id === 'drinks');

    return (
        <MainWrapper title="Basket" logoImg={logo}>
            { } 
        </MainWrapper>
    )
}

export default CartWrapper;