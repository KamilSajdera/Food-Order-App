import { useRef, useEffect, useState } from 'react';

import classes from './BurgersItems.module.css'

import cheeseBurgerImg from '../../assets/cheeseburger.png';
import chickenBurgerImg from '../../assets/chickenDeluxe.png';
import hamburgerImg from '../../assets/hamburger.png';
import bigjohnImg from '../../assets/bigjohn-burger.png';
import spicyChickenImg from '../../assets/spicychicken.avif';
import superstarImg from '../../assets/superstar.png';

import BurgerAccession from './BurgerAccession';

const BURGERS = [
    {
        id: 1,
        name: "Cheeseburger",
        price: 3.50,
        weight: "150g",
        img: cheeseBurgerImg
    },
    {
        id: 2,
        name: "Chicken-Deluxe",
        price: 4.25,
        weight: "240g",
        img: chickenBurgerImg
    },
    {
        id: 3,
        name: "Hamburger",
        price: 4.50,
        weight: "320g",
        img: hamburgerImg
    },
    {
        id: 4,
        name: "Big John",
        price: 6.00,
        weight: "650g",
        img:bigjohnImg
    },
    {
        id: 5,
        name: "Spicy Chicken",
        price: 5.50,
        weight: "340g",
        img: spicyChickenImg
    },
    {
        id: 6,
        name: "Superstars",
        price: 3.50,
        weight: "250g",
        img: superstarImg
    }
]

const BurgersItems = () => 
{
    const itemsRef = useRef(null);
    const [showAccession, setShowAccession] = useState(false);
    const [currentBurger, setCurrentBurger] = useState(null);

   

    useEffect(() => {
        const burgerItems = itemsRef.current.querySelectorAll(`.${classes['burger-item']}`);
        burgerItems.forEach(burgerItem => 
            burgerItem.addEventListener('click', () => { 
                showAccessionWrapper(burgerItem.querySelector('h1').textContent)
                animateItem(burgerItem)
            })    
        )

        return () => {
            burgerItems.forEach(burgerItem => {
                burgerItem.removeEventListener('click', null)
            })
        }
    }, [])

    const animateItem = (e) => {
        e.classList.add(classes.clickAnimation);

        setTimeout(() => {
            e.classList.remove(classes.clickAnimation); 
        }, 300);
    }

    const showAccessionWrapper = (title) => {
        const burgerObject = BURGERS.find(burger => burger.name === title);
        setCurrentBurger(burgerObject);
        setShowAccession(true);
    }

    const closeAccessionsHandler = () => {
        setShowAccession(false);
    }

    
    return (
        <section className={classes.burgersItemsWrapper} ref={itemsRef}>
            {
                BURGERS.map((burger) => 
                <div className={classes['burger-item']} key={burger.id}>
                            <div className={classes.burgerImg}>
                                <img src={burger.img} alt={burger.name} />
                                <span className={classes.itemBottomShadow} />
                            </div>
                            <h1>{burger.name}</h1>
                            <p>{burger.weight}</p>
                            <span className={classes.price}>
                                {`$${burger.price.toFixed(2)}`}
                            </span>
                        </div>
                )
            }
            { showAccession && <BurgerAccession currentBurger={currentBurger} onCloseAccessions={closeAccessionsHandler}/> }
        </section>
    )
}

export default BurgersItems;