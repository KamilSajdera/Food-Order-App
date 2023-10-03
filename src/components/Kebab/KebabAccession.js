import { useState } from "react";
import AccessionsWrapper from "../../ui/AccessionsWrapper";
import AccessionData from './AccessionData';
import Button from "../../ui/Button";

const KebabAccession = props => {

    const { currentKebab } = props;
    const [ kebabData, setKebabData ] = useState({
        size: "normal",
        meat: null,
        sauce: null,
        doubleMeat: null
    });

    const [ error, setError ] = useState(false)

    const kebabDataHandler = value => 
    {
        setKebabData(value)
    }

    const sendOrderHandler = () => {
        for(let key in kebabData)
        {
            setError(false)
            if(kebabData[key] === null) {
                setError(true)
                return; 
            }
        }

        const kebabObject = {
            name: currentKebab.name,
            img: currentKebab.img,
            price: displaingPrice(2).toFixed(2),
            ...kebabData,
        }

        /// soon...
    }

    const displaingPrice = () => {
        if(kebabData.size === "normal")
            return currentKebab.price1;
        if(kebabData.size === "big")
            return currentKebab.price2;
        if(kebabData.size === "extra")
            return currentKebab.price3;
    }

    return (
        <AccessionsWrapper onCloseAccessions={ () => props.onCloseAccessions()}>
            <img src={currentKebab.img} alt={currentKebab.name} 
                style={{'borderRadius': '50%', 'aspectRatio': '1', 'objectFit': 'cover'}} />
            <h1>{currentKebab.name}</h1>
            <span>{`$${displaingPrice().toFixed(2)}`}</span>
            <AccessionData onKebabData={kebabDataHandler} />
            { error && <div style={{
                width: "80%",
                padding: "10px 20px",
                background: "red",
                color: "#fff",
                textAlign: "center",
                borderRadius: "10px"
            }}>Complete all data!</div>}
            <Button onClick={sendOrderHandler}>Add to Order</Button>
            
        </AccessionsWrapper>  
    )
};

export default KebabAccession;