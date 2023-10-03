import { useEffect, useReducer } from 'react';

import classes from './AccessionData.module.css';

const initialKebabData = {
    size: "normal",
    meat: null,
    sauce: null,
    doubleMeat: null
}

const reducer = (state, action) => 
{
    if(action.type === "setSize") {
        return {
            ...state,
            size: action.value
        }
    }

    if(action.type === "setMeat") {
        return {
            ...state,
            meat: action.value
        }
    }

    if(action.type === "setSauce") {
        return {
            ...state,
            sauce: action.value
        }
    }

    if(action.type === "set2Meat") {
        return {
            ...state,
            doubleMeat: action.value
        }
    }

    return initialKebabData
}

const AccessionData = props => {
    const [state, dispatch] = useReducer(reducer, initialKebabData)

    const setKebabData = (type, value) => {
       dispatch({type, value})
    }

    const classNameSize = active => {
        return `${classes['burger-option']} ${active===state.size ? classes.active : ""}`
    }

    const classNameMeat = active => {
        return `${classes['burger-option']} ${active===state.meat ? classes.active : ""}`
    }

    const classNameSauce = active => {
        return `${classes['burger-option']} ${active===state.sauce ? classes.active : ""}`
    }

    const className2Meat = active => {
        return `${classes['burger-option']} ${active===state.doubleMeat ? classes.active : ""}`
    }

    useEffect(() => {
        props.onKebabData(state)
    }, [state, props])

    return (
        <div className={classes.burgerOptions}>
            <h4>Size</h4>
            <div className={classNameSize("normal")} onClick={() => setKebabData("setSize", "normal")}>normal</div>
            <div className={classNameSize("big")} onClick={() => setKebabData("setSize", "big")}>big </div>
            <div className={classNameSize("extra")} onClick={() => setKebabData("setSize", "extra")}>extra </div>

            <h4>Meat</h4>
            <div className={classNameMeat("chicken")} onClick={() => setKebabData("setMeat", "chicken")}>chicken</div>
            <div className={classNameMeat("beef")} onClick={() => setKebabData("setMeat", "beef")}>beef</div>
            <div className={classNameMeat("mutton")} onClick={() => setKebabData("setMeat", "mutton")}>mutton</div>

            <h4>Sauce</h4>
            <div className={classNameSauce("mild")} onClick={() => setKebabData("setSauce", "mild")}>mild</div>
            <div className={classNameSauce("mixed")} onClick={() => setKebabData("setSauce", "mixed")}>mixed</div>
            <div className={classNameSauce("spicy")} onClick={() => setKebabData("setSauce", "spicy")}>spicy</div>
            
            <h4>Double meat</h4>
            <div className={className2Meat("yes")} 
                style={{width: '48%'}} 
                onClick={() => setKebabData("set2Meat", "yes")}> yes</div>
            <div className={className2Meat("no")} 
                style={{width: '48%'}} 
                onClick={() => setKebabData("set2Meat", "no")}> no</div>
        </div>
    )
}

export default AccessionData;