import classes from './OtherItems.module.css';

import FriesItem from './FriesItem';
import HotdogItem from './HotdogItem';
import CasseroleItem from './CasseroleItem';

const OtherItems = () => {
    return (
        <div className={classes.itemsWrapper}>
            <FriesItem />
            <HotdogItem />
            <CasseroleItem />
        </div>
    )
}

export default OtherItems;