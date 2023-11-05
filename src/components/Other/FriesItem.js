import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './OtherItems.module.css';

import friesImg from '../../assets/other/fries.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { cartActions } from '../../store/cart-slice';

import InfoAction from '../../ui/InfoAction';

const FriesItem = () => {

    const dispatch = useDispatch();
    const [infoAddedCart, setInfoAddedCart] = useState(false);

    const addFriesToCart = (size, price) => {

        const friesSummary = {
            name: "Fries",
            id: 'other',
            size,
            price,
            img: friesImg
        }

        dispatch(cartActions.addItemToCart(friesSummary));
        setInfoAddedCart(true);
        setTimeout(() => {
            setInfoAddedCart(false);
        }, 2000);
    };

    return (
        <div className={classes['other-item']}>
        { infoAddedCart && <InfoAction name="Fries" action="add" /> }
            <img src={friesImg} alt="fries" />
            <h3>Fries</h3>
            <div className={classes['fries-option']}>
                <div>Small (200g)</div>
                <div className={classes.price}>$2.30</div>
                <div className={classes.friesAdd} onClick={() => addFriesToCart('small (200g)', 2.30)}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>

            <div className={classes['fries-option']}>
                <div>Mid (300g)</div>
                <div className={classes.price}>$4.50</div>
                <div className={classes.friesAdd} onClick={() => addFriesToCart('mid (300g)', 4.50)}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>

            <div className={classes['fries-option']}>
                <div>Big (400g)</div>
                <div className={classes.price}>$6.20</div>
                <div className={classes.friesAdd} onClick={() => addFriesToCart('big (400g)', 6.20)}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    )
};

export default FriesItem;