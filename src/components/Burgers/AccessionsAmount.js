import { useEffect } from 'react';
import useAccessionQuantity from '../../hooks/AccessionsAmountManagement';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './AccessionsAmount.module.css';

import salat from '../../assets/burger/salat.png';
import cheese from '../../assets/burger/cheese.png';
import pickleSlices from '../../assets/burger/pickleSlices.png';

const AccessionsAmount = props => {
    
    const initialAccessions = [
        { 
            id: 1,
            img: salat, 
            name: "Shredded Lettuce",
            price: 0.25,
            quantity: 0
        },
        { 
            id: 2,
            img: cheese, 
            name: "Cheese",
            price: 0.30,
            quantity: 0
        },
        {
            id: 3, 
            img: pickleSlices, 
            name: "Pickle Slices",
            price: 0.10,
            quantity: 0
        }
    ];

    const { accessions, updateQuantity, extraPay } = useAccessionQuantity(initialAccessions);
    const activeAccessions = [...accessions].filter(acc => acc.quantity > 0)

    const { currentBurger } = props

    const handleAmountMoreClick = (accession) => {
        const newQuantity = accession.quantity + 1
        updateQuantity(accession.id, newQuantity)
    }

    const handleAmountLessClick = (accession) => {
        if(accession.quantity > 0)
        {
            const newQuantity = accession.quantity - 1
            updateQuantity(accession.id, newQuantity)
        }
    }

    useEffect(() => {
        const burgerOrderData = { 
            name: currentBurger.name,
            price: currentBurger.price,
            extraPay: extraPay,
            activeAccessions: activeAccessions 
        }  
        
        props.onSendBurgerDetails(burgerOrderData)
    }, [props, activeAccessions, currentBurger, extraPay])
   
    return (
        <>
        <ul className={classes.accessions} >
            {
                accessions.map((accession) => 
                    <li key={accession.id}>
                        <div className={classes.accessionName}>
                            <img src={accession.img} alt={accession.name} />
                            <h3>{accession.name}</h3>
                        </div>
                        <div className={classes.amountContainer}>
                            <button className={classes.amountLess} onClick={() => handleAmountLessClick(accession)}>
                                <FontAwesomeIcon icon={faMinus} /> 
                            </button>
                            <div className={classes.amount}>{`${accession.quantity+1}x`}</div>
                            <button className={classes.amountMore} onClick={() => handleAmountMoreClick(accession)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                        </div>  
                    </li>
                )
            }
        </ul> 
        </>
    )
};

export default AccessionsAmount;