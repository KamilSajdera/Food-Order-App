import classes from './AccessionsWrapper.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const AccessionsWrapper = props => {

    return (
        <section className={classes.accessionWrapper}>
            <div className={classes.accessionContainer}>
                <FontAwesomeIcon icon={faWindowClose} className={classes.close} onClick={() => props.onCloseAccessions()}/>
                <FontAwesomeIcon icon={faCircleInfo} className={classes.info} onClick={() => props.onShowInfo()} />
                <div className={classes.itemDetails}>
                    { props.children }
                </div>
            </div>
        </section>
    )
}

export default AccessionsWrapper;