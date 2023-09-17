import classes from '../AccessionStyles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import AccessionsAmount from './AccessionsAmount';
import { useState } from 'react';

const BurgerAccession = props => {

    const closeAccessionsWrapper = () => {
        props.onCloseAccessions()
    }

    const { currentBurger } = props;
    const [surchargeAccessions, setSurchargeAccesions] = useState(0);


    const changeSurchargeHandler = value =>
    {
        setSurchargeAccesions(value);
    }

    return (
        <section className={classes.accessionWrapper}>
            <div className={classes.accessionContainer}>
                <FontAwesomeIcon icon={faWindowClose} className={classes.close} onClick={closeAccessionsWrapper}/> 
                <div className={classes.itemDetails}>
                    <img src={currentBurger.img} alt={currentBurger.name} />
                    <h1>{currentBurger.name}</h1>
                    <p>{currentBurger.weight}</p>
                    <span className={classes.price}>{`$${currentBurger.price.toFixed(2)} ($${surchargeAccessions.toFixed(2)})`}</span>
                </div>
                <AccessionsAmount onChangeSurcharge={changeSurchargeHandler} />
                <button className={classes.addToOrderBtn}>Add to Order</button>
            </div>
        </section>
    )
};

export default BurgerAccession;