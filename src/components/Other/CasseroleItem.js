import classes from './OtherItems.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import casseroleImg from '../../assets/other/zapiekanki.png';

const CasseroleItem = () => {

    const addToCart = () => {
        /// soon..
    }
    
    return (
        <div className={classes['other-item']}>
                <img src={casseroleImg} alt="Casserole" />
                <FontAwesomeIcon icon={faPlus} className={classes.casseroleAdd} onClick={addToCart}/>
                <h3>Casserole</h3>
                <h2 className={classes.price} style={{fontSize: "1.45rem"}}>$4.00</h2>
                <p className={classes.description}>Thanks to fresh ingredients and their high quality, the taste of our casserole is amazing!</p>
        </div>
    )
};

export default CasseroleItem;