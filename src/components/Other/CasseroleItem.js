import classes from './OtherItems.module.css';

import casseroleImg from '../../assets/other/zapiekanki.png';

const CasseroleItem = () => {
    return (
        <div className={classes['other-item']}>
                <img src={casseroleImg} alt="Casserole" />
                <h3>Casserole</h3>
                <h2 className={classes.price} style={{fontSize: "1.45rem"}}>$4.00</h2>
                <p className={classes.description}>Thanks to fresh ingredients and their high quality, the taste of our casserole is amazing!</p>
        </div>
    )
};

export default CasseroleItem;