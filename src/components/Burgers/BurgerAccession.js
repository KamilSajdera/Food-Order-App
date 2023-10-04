import { useState } from 'react';
import isEqual from 'lodash/isEqual';

import AccessionsAmount from './AccessionsAmount';
import AccessionsWrapper from '../../ui/AccessionsWrapper';
import Button from '../../ui/Button';
import InfoAccessions from '../../ui/InfoAccessions';

const BurgerAccession = props => {

    const { currentBurger } = props;

    const [ burgerSummary, setBurgerSummary ] = useState({
        activeAccessions: [],
        extraPay: 0,
        name: currentBurger.name,
        price: currentBurger.price
    })

    const [isShowInfo, setIsShowInfo] = useState(false);
    const infoMessage = `Each accession is in the basic version of the burger (1x). 
                     You can choose whether you want something more by clicking the plus button. 
                     Important! You cannot remove the add-on.`

    const changeExtraPayHandler = value => {
        if(!isEqual(value, burgerSummary))
            setBurgerSummary(value)
    }
    
    const showInfoHandler = () => setIsShowInfo(!isShowInfo)      
    
    const sendOrderHandler = () => 
    {               
        /// Logic of adding an order to the cart soon...
    }

    return (
        <AccessionsWrapper onCloseAccessions={ () => props.onCloseAccessions()} onShowInfo={showInfoHandler}>
            { isShowInfo && <InfoAccessions message={infoMessage} /> }
            <img src={currentBurger.img} alt={currentBurger.name} />
            <h1>{currentBurger.name}</h1>
            <p>{currentBurger.weight}</p>
            <span>{`$${currentBurger.price.toFixed(2)} ($${burgerSummary.extraPay.toFixed(2)})`}</span>
            <AccessionsAmount currentBurger={currentBurger} onSendBurgerDetails={changeExtraPayHandler} />
            <Button onClick={sendOrderHandler}>Add to Order</Button>
        </AccessionsWrapper>  
    )
};

export default BurgerAccession;