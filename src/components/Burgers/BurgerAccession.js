import { useState } from 'react';
import classes from '../AccessionStyles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import AccessionsAmount from './AccessionsAmount';

const BurgerAccession = props => {

    const [ displayExtraPay, setDisplayExtraPay ] = useState(0)
    const { currentBurger } = props;

    const closeAccessionsWrapper = () => {
        props.onCloseAccessions()
    }

    const changeExtraPayHandler = value => {
        setDisplayExtraPay(value)
    }

    return (
        <section className={classes.accessionWrapper}>
            <div className={classes.accessionContainer}>
                <FontAwesomeIcon icon={faWindowClose} className={classes.close} onClick={closeAccessionsWrapper}/> 
                <div className={classes.itemDetails}>
                    <img src={currentBurger.img} alt={currentBurger.name} />
                    <h1>{currentBurger.name}</h1>
                    <p>{currentBurger.weight}</p>
                    <span className={classes.price}>{`$${currentBurger.price.toFixed(2)} ($${displayExtraPay.toFixed(2)})`}</span>
                </div>
                <AccessionsAmount currentBurger={currentBurger} onChangeExtraPay={changeExtraPayHandler} />
            </div>
        </section>
    )
};

export default BurgerAccession;