import { useState } from 'react';

import classes from './AccessionsAmount.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import salat from '../../assets/salat.png';
import cheese from '../../assets/cheese.png';
import pickleSlices from '../../assets/pickleSlices.png';


const AccessionsAmount = props => {

    const [ACCESSIONS, setACCESSIONS] = useState([
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
        ]);


    const handleAmountMoreClick = (accession) => {
        const updatedAccessions = [...ACCESSIONS];
        const index = updatedAccessions.findIndex(item => item.id === accession.id)

        updatedAccessions[index].quantity++;
        setACCESSIONS(updatedAccessions);

        const totalCost = updatedAccessions.reduce((acc, accession) => {
            return acc + accession.quantity * accession.price;
        }, 0);

        props.onChangeSurcharge(totalCost)
        
    }

    const handleAmountLessClick = (accession) => {
        const updatedAccessions = [...ACCESSIONS];
        const index = updatedAccessions.findIndex(item => item.id === accession.id)

        if(updatedAccessions[index].quantity < 1)
            return 
        else
            updatedAccessions[index].quantity--;

        setACCESSIONS(updatedAccessions);

        const totalCost = updatedAccessions.reduce((acc, accession) => {
            return acc + accession.quantity * accession.price;
        }, 0);

        props.onChangeSurcharge(totalCost)
    }

    return (
        <ul className={classes.accessions} >
            {
                ACCESSIONS.map((accession) => 
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
    )
};

export default AccessionsAmount;