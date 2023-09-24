import { useState } from 'react';

function useAccessionQuantity(initialAccessions) {
    const [accessions, setAccessions] = useState(initialAccessions);

    const updateQuantity = (accessionId, amout) => {
        const updatedAccessions = [...accessions]
        const index = updatedAccessions.findIndex(item => item.id === accessionId);

        updatedAccessions[index].quantity = amout;
        setAccessions(updatedAccessions)
    }

    const extraPay = accessions.reduce((acc, current) => {
        return acc + current.quantity * current.price;
    }, 0)

    return { accessions, updateQuantity, extraPay }

} 

export default useAccessionQuantity;