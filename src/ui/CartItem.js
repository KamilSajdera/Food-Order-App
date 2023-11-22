import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { cartActions } from '../store/cart-slice';

const CartItem = props => {

    const { item } = props;
    const removePosition = props.removePos === undefined ? '10px' : props.removePos
    const extraPay = item.extraPay === undefined ? 0 : item.extraPay;

    const dispatch = useDispatch();

    const removeItemHandler = () => {
        const { amount, ...itemWithoutAmount } = item;
        dispatch(cartActions.removeItemFromCart(itemWithoutAmount))
    }

    return (
        <div className={`${classes['summary-item']} ${props.customClass === undefined ? '' : props.customClass}`} style={props.style}>
            <div className={classes.amount}>{item.amount}x</div>
            <div className={classes.remove} style={{left: removePosition}} onClick={() => {removeItemHandler()}}><FontAwesomeIcon icon={faMinus} /></div>
            { props.children }
            <div className={classes.price}>
                    ${((parseFloat(item.price)+parseFloat(extraPay))*item.amount).toFixed(2)}
            </div>
        </div>
    )
};

export default CartItem;