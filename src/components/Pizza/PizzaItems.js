import { useEffect, useRef, useState } from 'react';


import PizzaAccessions from './PizzaAccessions';

import classes from './PizzaItems.module.css';

import pizzaSalami from '../../assets/pizza/salami.png';
import pizzaProsciutto from '../../assets/pizza/prosciutto.png';
import pizzaSarcous from '../../assets/pizza/sarcous.png';
import pizzaChickenBBQ from '../../assets/pizza/chickenBBQ.png';
import pizzaMargherita from '../../assets/pizza/margherita.png';
import pizzaMexico from '../../assets/pizza/mexico.png';
import pizzaFlamenco from '../../assets/pizza/flamenco.png';
import pizzaHawaiian from '../../assets/pizza/hawaiian.png';
import pizzaTuna from '../../assets/pizza/tuna.png';


const PIZZAS = [
    { 
        id: 1,
        name: "Salami",
        desc: `yeast dough, tomato sauce, salami, mozzarella`,
        img: pizzaSalami,
        price: 10.50
    },
    { 
        id: 2,
        name: "Prosciutto",
        desc: "tomato sauce, mozzarella, ham",
        img: pizzaProsciutto,
        price: 11.50
    },
    { 
        id: 3,
        name: "Sarcous",
        desc: "tomato sauce, mozzarella, bacon, salami, sausage",
        img: pizzaSarcous,
        price: 13.00
    },
    { 
        id: 4,
        name: "Chicken BBQ",
        desc: "tomato sauce, mozzarella, bacon, breaded chicken, onion, hot pepper, BBQ sauce",
        img: pizzaChickenBBQ,
        price: 12.00
    },
    { 
        id: 5,
        name: "Margherita",
        desc: "tomato sauce, mozzarella",
        img: pizzaMargherita,
        price: 10.00
    },
    { 
        id: 6,
        name: "Mexico",
        desc: "tomato sauce, mozzarella, chorizo, jalapeno, pepper, corn, onion, salsa sauce",
        img: pizzaMexico,
        price: 13.50
    },
    { 
        id: 7,
        name: "Flamenco",
        desc: "tomato sauce, mozzarella, cherry tomato, white mozzarella, garlic, basil",
        img: pizzaFlamenco,
        price: 12.00
    },
    { 
        id: 8,
        name: "Hawaiian",
        desc: "tomato sauce, mozzarella, ham, pineapple",
        img: pizzaHawaiian,
        price: 11.50
    },
    { 
        id: 9,
        name: "Tuna",
        desc: "tomato sauce, mozzarella, tuna, black olives, onion, corn, garlic sauce on top",
        img: pizzaTuna,
        price: 12.50
    }
]

const PizzaItems = () => {

    const [showAccessions, setShowAccessions] = useState(false);
    const [pizzaObject, setPizzaObject] = useState({});
    const pizzaItemsRef = useRef();

    useEffect(() => {
        const pizzaItems = pizzaItemsRef.current.querySelectorAll(`.${classes.pizzaItem}`);

        pizzaItems.forEach((pizzaItem) => {
            pizzaItem.addEventListener('click', () => { 
                const pizzaName = pizzaItem.querySelector('h1').textContent;
                showAccessionHandler(pizzaName)
             });
        })
    
        return () => {
            pizzaItems.forEach((pizzaItem) => {
                pizzaItem.removeEventListener('click', null);
            })
        }
    }, [])

    const showAccessionHandler = (name) => 
    {
        let pizzaObject = PIZZAS.find((item) => item.name === name);

        setShowAccessions(true);
        setPizzaObject(pizzaObject)
    }

    const closeAccessionsHandler = () => 
    {
        setShowAccessions(false);
    }

    return (
        <section className={classes.pizzaItemsWrapper} ref={pizzaItemsRef}>
            {
                PIZZAS.map((pizza) => 
                    <div className={classes.pizzaItem} key={pizza.id}>
                        <img src={pizza.img} alt={pizza.name} />
                        <h1>{pizza.name}</h1>
                        <p>{pizza.desc}</p>
                        <div className={classes.price}>${pizza.price.toFixed(2)}</div>
                    </div>  
                )
            }
            { showAccessions && <PizzaAccessions pizzaData={pizzaObject} onCloseAccessions={closeAccessionsHandler} />}
        </section>
    )
}

export default PizzaItems;