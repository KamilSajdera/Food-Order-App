import classes from './OtherItems.module.css';

import hotdogImg from '../../assets/other/hotdog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HotdogItem = () => {
    return (
        <div className={classes['other-item']}>
                <img src={hotdogImg} alt="hotdog" />
                <h3>HotDog</h3>
                <div className={classes['fries-option']}>
                    <div>Small (200g)</div>
                    <div className={classes.price}>$2.30</div>
                    <div className={classes.friesAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>

                <div className={classes['fries-option']}>
                    <div>Mid (300g)</div>
                    <div className={classes.price}>$4.50</div>
                    <div className={classes.friesAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>

                <div className={classes['fries-option']}>
                    <div>Small (400g)</div>
                    <div className={classes.price}>$6.20</div>
                    <div className={classes.friesAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
            </div>
    )
};

export default HotdogItem;