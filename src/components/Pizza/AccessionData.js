import { useRef, useState } from 'react';
import classes from './AccessionData.module.css';

import AccessionsAmount from './AccessionAmount';

const AccessionData = (props) => {

    const pizzaDataRef = useRef({
        size: 25,
        dough: 'Traditional',
        activeAccessions: [],
        extraPay: 0,
    });

    const [activeSize, setActiveSize] = useState(25);
    const [activeThickness, setActiveThickness] = useState("Traditional");

  
    const changeAccessionsData = (accData) => {
        pizzaDataRef.current = {
        ...pizzaDataRef.current,
        activeAccessions: accData.activeAccessions,
        extraPay: accData.extraPay,
        };

        setTimeout(() => {
            props.onSendPizzaDetails(pizzaDataRef.current);
        }, 50)
    };

    const handleSize = (value) => {
        setActiveSize(value)
        pizzaDataRef.current = {
            ...pizzaDataRef.current,
            size: value
        };
        props.onSendPizzaDetails(pizzaDataRef.current);
    }

    const handleThickness = (value) => {
        setActiveThickness(value)

        pizzaDataRef.current = {
            ...pizzaDataRef.current,
            dough: value
        };

        props.onSendPizzaDetails(pizzaDataRef.current);
    }
    
    const classNameOptionSize = (value) => {
        return `${classes['pizza-option']} ${activeSize === value ? classes.active : ''}`   
    }
    
    const classNameOptionThickness = (value) => {
        return `${classes['pizza-option']} ${activeThickness === value ? classes.active : ''}`   
    }

    return (
        <div className={classes.accessionsDetails}>
        <div className={classes.pizzaOptions}>
            <h4>Size</h4>
            <div 
                className={classNameOptionSize(25)}
                onClick={() => handleSize(25) }>25cm</div>
            <div 
                className={classNameOptionSize(35)} 
                onClick={() => handleSize(35) }>35cm</div>
            <div 
                className={classNameOptionSize(40)} 
                onClick={() => handleSize(40) }>40cm</div>
        </div>
        <div className={classes.pizzaOptions}>
            <h4>Type of dough</h4>
            <div 
                className={classNameOptionThickness("Traditional")} 
                style={{ width: '48%' }}
                onClick={() => handleThickness("Traditional")}>Traditional</div>
            <div 
                className={classNameOptionThickness("Thin")}
                style={{ width: '48%' }}
                onClick={() => handleThickness("Thin")}>Thin</div>
        </div>
        <AccessionsAmount onSendAccessionsData={changeAccessionsData} />
        </div>
    );
};

export default AccessionData;