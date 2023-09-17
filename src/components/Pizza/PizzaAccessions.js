import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import AccessionData from './AccessionData';
import classes from '../AccessionStyles.module.css';

const PizzaAccessions = props => {

    const { pizzaData } = props;

    const closeAccessionsHandler = () => {
        props.onCloseAccessions();
    }

    return (
        <section className={classes.accessionWrapper}>
            <div className={classes.accessionContainer}>
                <FontAwesomeIcon icon={faWindowClose} className={classes.close} onClick={closeAccessionsHandler}/>
                <div className={classes.itemDetails}>
                <img src={pizzaData.img} alt={pizzaData.name} />
                    <h1>{pizzaData.name}</h1>
                    <span className={classes.price}>{`$${pizzaData.price.toFixed(2)}`}</span>
                </div>
                <AccessionData />
                <button className={classes.addToOrderBtn}>Add to Order</button>
            </div>
        </section>
    )
};

export default PizzaAccessions;