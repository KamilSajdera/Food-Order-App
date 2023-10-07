import { useState } from 'react';
import AccessionsHotdog from './AccessionsHotdog';

import classes from './OtherItems.module.css';
import hotdogImg from '../../assets/other/hotdog.png';

const HotdogItem = () => {

    const [showAccessions, setShowAccessions] = useState(false);
    const closeAccessionsHandler = () => setShowAccessions(false)

    return (
        <>
        <div className={classes['other-item']} onClick={() => {setShowAccessions(true)}}>
                <img src={hotdogImg} alt="hotdog" />
                <h3>HotDog</h3>
                <p className={classes.description}>A wide selection of ingredients so your hotdog will taste really good.</p>
        
        </div>
        { showAccessions && <AccessionsHotdog onCloseAccessions={closeAccessionsHandler} />}
        </>
    )
};

export default HotdogItem;