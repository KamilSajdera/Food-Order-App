import { useRef, useEffect, useState } from 'react'
import KebabAccession from './KebabAccession';

import classes from './KebabItems.module.css';

import kebabBatter from '../../assets/kebab/kebabButter.png';
import kebabRoll from '../../assets/kebab/kebabRoll.png';
import kebabFries from '../../assets/kebab/kebabFries.png';
import kebabBurger from '../../assets/kebab/kebabBurger.png';

 const KEBABS = [
        {
            id: 1,
            name: "Kebab in batter",
            img: kebabBatter,
            price1: 5.50,
            price2: 8.50,
            price3: 10.50
        },
        {
            id: 2,
            name: "Kebab on a roll",
            img: kebabRoll,
            price1: 6.00,
            price2: 9.00,
            price3: 11.50
        },
        {
            id: 3,
            name: "Kebab on fries",
            img: kebabFries,
            price1: 6.50,
            price2: 10.00,
            price3: 12.00
        },
        {
            id: 4,
            name: "Kebab-Burger",
            img: kebabBurger,
            price1: 5.00,
            price2: 7.00,
            price3: 8.50
        },
    ]

const KebabItems = () => {

    const itemsRef = useRef(null);
    const [showAccession, setShowAccession] = useState(false);
    const [currentKebab, setCurrentKebab] = useState(null);

    useEffect(() => {
        const kebabsItems = itemsRef.current.querySelectorAll(`.${classes['kebab-item']}`);
        kebabsItems.forEach(item => 
            item.addEventListener('click', () => { 
                showAccessionWrapper(item.querySelector('h3').textContent)
                animateItem(item)
            })   
        )
        
        return () => {
            kebabsItems.forEach(item => {
                item.removeEventListener('click', null)
            })
        }
    }, [])

    const animateItem = (e) => {
        e.classList.add(classes.clickAnimation);

        setTimeout(() => {
            e.classList.remove(classes.clickAnimation); 
        }, 350);
    }

    const showAccessionWrapper = (title) => {
        const kebabObject = KEBABS.find(kebab => kebab.name === title);
        setCurrentKebab(kebabObject);
        setShowAccession(true);
    }

    const closeAccessionsHandler = () => {
        setShowAccession(false);
    }

    return (
        <section className={classes.kebabWrapper} ref={itemsRef}>
            {
                KEBABS.map(kebabItem => (
                    <div className={classes['kebab-item']} key={kebabItem.id}>
                        <img src={kebabItem.img} alt={kebabItem.name} />
                        <h3>{kebabItem.name}</h3>
                        <div className={classes.priceItem}>
                            <div className={classes.price}>${kebabItem.price1.toFixed(2)}</div>
                            <div className={classes.size}>normal</div>
                        </div>
                        <div className={classes.priceItem}>
                            <div className={classes.price}>${kebabItem.price2.toFixed(2)}</div>
                            <div className={classes.size}>big</div>
                        </div>
                        <div className={classes.priceItem}>
                            <div className={classes.price}>${kebabItem.price3.toFixed(2)}</div>
                            <div className={classes.size}>extra</div>
                        </div>
                    </div>
                ))
            }
            { showAccession && <KebabAccession currentKebab={currentKebab} onCloseAccessions={closeAccessionsHandler}/> }
        </section>
    )
};

export default KebabItems;