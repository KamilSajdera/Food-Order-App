import classes from './CartItem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = props => {

    const removePosition = props.removePos === undefined ? '10px' : props.removePos

    return (
        <div className={classes['summary-item']} style={props.style}>
            <div className={classes.amount}>{props.amount}x</div>
            <div className={classes.remove} style={{left: removePosition}}><FontAwesomeIcon icon={faMinus} /></div>
            { props.children }
            <div className={classes.price}>
                    ${((parseFloat(props.price)+parseFloat(props.extraPay))*props.amount).toFixed(2)}
            </div>
        </div>
    )
};

export default CartItem;