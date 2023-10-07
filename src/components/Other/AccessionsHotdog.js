import { useReducer, useState } from "react";
import AccessionsWrapper from "../../ui/AccessionsWrapper";
import Button from '../../ui/Button';

import classes from './OtherItems.module.css';
import logo from '../../assets/other/hotdog.png';

const initialData = {
    size: null,
    bread: null,
    sauce: null,
};

const reducer = (state, action) => {
    if(action.type === "setSize")
    {
        return {
            ...state,
            size: action.value
        }
    }

    if(action.type === "setBread")
    {
        return {
            ...state,
            bread: action.value
        }
    }

    if(action.type === "setSauce")
    {
        return {
            ...state,
            sauce: action.value
        }
    }
    return initialData;
}

const AccessionsHotdog = props => {

    const [hotdogData, dispatch] = useReducer(reducer, initialData);
    const [error, setError] = useState(false)

    const setHotdogData = (type, value) => dispatch({type, value})

    const sendOrderHandler = () => {
        for(let key in hotdogData) {
            if(hotdogData[key] === null) {
                setError(true)
                return;
            } else 
                setError(false)
        }

        /// soon...
    }

    const classesOptionSize = value => {
        return `${classes['option-item']} ${ hotdogData.size === value ? classes.active : ''}`;
    }

    const classesOptionBread = value => {
        return `${classes['option-item']} ${ hotdogData.bread === value ? classes.active : ''}`;
    }

    const classesOptionSauce = value => {
        return `${classes['option-item']} ${ hotdogData.sauce === value ? classes.active : ''}`;
    }

    return (
        <AccessionsWrapper onCloseAccessions={() => props.onCloseAccessions()}>
            <img src={logo} alt="hotdog" style={{'borderRadius': '50%', 'aspectRatio': '1', 'objectFit': 'cover'}}/>
            <h1>Hotdog</h1>
            <div className={classes.optionItems}>
                <h4>Size</h4>
                <div className={classesOptionSize("small")} onClick={() => setHotdogData("setSize", "small")}>small</div>
                <div className={classesOptionSize("mid")} onClick={() => setHotdogData("setSize", "mid")}>mid</div>
                <div className={classesOptionSize("big")} onClick={() => setHotdogData("setSize", "big")}>big</div>

                <h4>Bread</h4>
                <div className={classesOptionBread("light")} onClick={() => setHotdogData("setBread", "light")} style={{width: '48%'}}>Light</div>
                <div className={classesOptionBread("dark")} onClick={() => setHotdogData("setBread", "dark")} style={{width: '48%'}}>Dark</div>

                <h4>Sauce</h4>
                <div className={classesOptionSauce("garlic")} onClick={() => setHotdogData("setSauce", "garlic")}>garlic</div>
                <div className={classesOptionSauce("ketchup")} onClick={() => setHotdogData("setSauce", "ketchup")}>ketchup</div>
                <div className={classesOptionSauce("mexican")} onClick={() => setHotdogData("setSauce", "mexican")}>mexican</div>
                <div className={classesOptionSauce("american")} onClick={() => setHotdogData("setSauce", "american")}>american</div>        
                <div className={classesOptionSauce("belgian")} onClick={() => setHotdogData("setSauce", "belgian")}>belgian</div>        
                <div className={classesOptionSauce("BBQ")} onClick={() => setHotdogData("setSauce", "BBQ")}>BBQ</div>        
            </div>
            <Button onClick={sendOrderHandler}>Add to Order</Button>
        </AccessionsWrapper>
    )
};

export default AccessionsHotdog;