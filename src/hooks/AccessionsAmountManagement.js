import { useState } from 'react';

function useAccessionQuantity(initialAccessions) {
    const [accessions, setAccessions] = useState(initialAccessions);

    const updateQuantity = (accessionId, amount) => {
        setAccessions(prevAcc => {
            return prevAcc.map(acc => {
                if(acc.id === accessionId)
                    return {...acc, quantity: amount}
                return acc
            })
        })
    };

    const extraPay = accessions.reduce((acc, current) => {
        return acc + current.quantity * current.price;
    }, 0)

    return { accessions, updateQuantity, extraPay }

} 

export default useAccessionQuantity;
