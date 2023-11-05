import { useReducer, useState } from "react";
import { useDispatch } from 'react-redux';

import AccessionsWrapper from "../../ui/AccessionsWrapper";
import Button from '../../ui/Button';
import InfoAccessions from '../../ui/InfoAccessions';

import classes from './OtherItems.module.css';
import logo from '../../assets/other/hotdog.png';

import { cartActions } from "../../store/cart-slice";

const initialData = {
    size: "normal",
    bread: null,
    sauce: null,
    img: logo
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

    const [hotdogData, dispatchData] = useReducer(reducer, initialData);
    const [error, setError] = useState(false);
    const [isShowInfo, setIsShowInfo] = useState(false);

    const dispatch = useDispatch();

    const setHotdogData = (type, value) => dispatchData({type, value})

    const infoMessage = 'To complete order and add to cart, you have to choose all the bellow options!';

    const sendOrderHandler = () => {
        for(let key in hotdogData) {
            if(hotdogData[key] === null) {
                setError(true)
                return;
            } else 
                setError(false)
        }

        const hotdogSummary = {
            name: "Hotdog", 
            id: "other",
            price: hotdogData.size === "normal" ? 2.00 : 3.50,
            bread: hotdogData.bread,
            ...hotdogData
        }

        dispatch(cartActions.addItemToCart(hotdogSummary));
        props.showInfoMessage();
        props.onCloseAccessions()
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

    const showInfoHandler = () => setIsShowInfo(!isShowInfo)  

    return (
        <AccessionsWrapper onCloseAccessions={() => props.onCloseAccessions()} onShowInfo={showInfoHandler}>
            { isShowInfo && <InfoAccessions message={infoMessage} /> }
            <img src={logo} alt="hotdog" style={{'borderRadius': '50%', 'aspectRatio': '1', 'objectFit': 'cover'}}/>
            <h1>Hotdog</h1>
            <h1 className={classes.price} style={{paddingTop: "20px"}}>
                { hotdogData.size === "normal" ? "$2.00" : "$3.50"}
            </h1>
            <div className={classes.optionItems}>
                <h4>Size</h4>
                <div className={classesOptionSize("normal")} onClick={() => setHotdogData("setSize", "normal")} style={{width: '48%'}}>normal</div>
                <div className={classesOptionSize("big")} onClick={() => setHotdogData("setSize", "big")} style={{width: '48%'}}>big</div>

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
            { error && <div style={{
                width: "80%",
                padding: "10px 20px",
                background: "red",
                color: "#fff",
                textAlign: "center",
                borderRadius: "10px",
                filter: "drop-shadow(0px 4px 5px black)"
            }}>Complete all data!</div>}
            <Button onClick={sendOrderHandler}>Add to Order</Button>
        </AccessionsWrapper>
    )
};

export default AccessionsHotdog;