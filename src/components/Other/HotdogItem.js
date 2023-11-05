import { useState } from 'react';
import AccessionsHotdog from './AccessionsHotdog';

import classes from './OtherItems.module.css';
import hotdogImg from '../../assets/other/hotdog.png';

import InfoAction from '../../ui/InfoAction';

const HotdogItem = () => {

    const [showAccessions, setShowAccessions] = useState(false);
    const [infoAddedCart, setInfoAddedCart] = useState(false);
    const closeAccessionsHandler = () => setShowAccessions(false);

    const infoItemHandler = () =>
    {
        setInfoAddedCart(true);
        setTimeout(() => {
            setInfoAddedCart(false);
        }, 2000);
    }

    return (
        <>
        <div className={classes['other-item']} style={{cursor: "pointer"}} onClick={() => {setShowAccessions(true)}}>
        { infoAddedCart && <InfoAction name="Hotdog" action="add" /> }
            <img src={hotdogImg} alt="hotdog" />
            <h3>HotDog</h3>
            <div className={classes.priceItems}>
                <div className={classes['price-item']}>Normal <span className={classes.price}>$2.00</span></div>
                <div className={classes['price-item']}>Big <span className={classes.price}>$3.50</span></div>
            </div>
            <p className={classes.description}>A wide selection of ingredients so your hotdog will taste really good.</p>
        </div>
        { showAccessions && <AccessionsHotdog onCloseAccessions={closeAccessionsHandler} showInfoMessage={infoItemHandler} />}
        </>
    )
};

export default HotdogItem;