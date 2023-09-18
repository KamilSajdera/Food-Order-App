import { useState } from 'react';

import classes from './AccessionAmount.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import corn from '../../assets/pizza/corn.png';
import basil from '../../assets/pizza/basil.png';
import oregano from '../../assets/pizza/oregano.png';
import pepper from '../../assets/pizza/pepper.png';
import champignons from '../../assets/pizza/champignons.png';
import olives from '../../assets/pizza/olives.png';


const AccessionsAmount = props => {

    const [ACCESSIONS, setACCESSIONS] = useState([
        { 
            id: 1,
            img: corn, 
            name: "Corn",
            price: 0.25,
            quantity: 0
        },
        { 
            id: 2,
            img: basil, 
            name: "Basil",
            price: 0.10,
            quantity: 0
        },
        {
            id: 3, 
            img: oregano, 
            name: "Oregano",
            price: 0.10,
            quantity: 0
        },
        {
            id: 4, 
            img: pepper, 
            name: "Pepper",
            price: 0.20,
            quantity: 0
        },
        {
            id: 5, 
            img: champignons, 
            name: "Chempignos",
            price: 0.25,
            quantity: 0
        },
        {
            id: 6, 
            img: olives, 
            name: "Olives",
            price: 0.15,
            quantity: 0
        }
    ]);


    const handleAmountLessClick = accession => 
    {
        let updatedAccessions = [...ACCESSIONS]
        const index = ACCESSIONS.findIndex((acc) => acc.id === accession.id);

        if(updatedAccessions[index].quantity > 0)
            updatedAccessions[index].quantity--;

        setACCESSIONS(updatedAccessions);

        const totalCost = updatedAccessions.reduce((acc, accession) => {
            return acc + accession.quantity * accession.price;
          }, 0);

          props.onChangeSurcharge(totalCost)
    }

    const handleAmountMoreClick = accession => 
    {
        let updatedAccessions = [...ACCESSIONS]
        const index = ACCESSIONS.findIndex((acc) => acc.id === accession.id);

        updatedAccessions[index].quantity++;

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
                            <div className={classes.amount}>{`${accession.quantity}x`}</div>
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