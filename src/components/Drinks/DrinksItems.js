import { useDispatch } from 'react-redux';

import classes from './DrinksItems.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import pepsiImg from '../../assets/drinks/pepsi.png';
import colaImg from '../../assets/drinks/cocacola.png';
import sevenUpImg from '../../assets/drinks/7up.png';
import fantaImg from '../../assets/drinks/fanta.png';
import spriteImg from '../../assets/drinks/sprite.png';
import mirindaImg from '../../assets/drinks/mirinda.png';

import { cartActions }from '../../store/cart-slice';

const DRINKS = [
    {
        id: 1,
        name: "Pepsi",
        img: pepsiImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
    {
        id: 2,
        name: "Coca Cola",
        img: colaImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
    {
        id: 3,
        name: "7UP",
        img: sevenUpImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
    {
        id: 4,
        name: "Fanta",
        img: fantaImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
    {
        id: 5,
        name: "Sprite",
        img: spriteImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
    {
        id: 6,
        name: "Mirinda",
        img: mirindaImg,
        price1: 0.5,
        price2: 1.2,
        price3: 2
    },
]

const DrinksItems = () => {

    const dispatch = useDispatch();

    const addToCart = (img, name, capacity, price) => 
    {
        dispatch(cartActions.addItemToCart({
            name,
            img,
            capacity,
            price
        }))
    }

    return (
        <section className={classes.drinksWrapper}>
        {
            DRINKS.map(item => 
                <div className={classes['drink-item']} key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <div className={classes.capacityContainer}>
                        <div className={classes['capacity-item']}>
                            <div className={classes.capacity}>0.5l</div>
                            <div className={classes.price}>${item.price1}</div>
                            <div className={classes.add} onClick={() => addToCart(item.img, item.name, "0.5l", item.price1)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                        <div className={classes['capacity-item']}>
                            <div className={classes.capacity}>1l</div>
                            <div className={classes.price}>${item.price2}</div>
                            <div className={classes.add} onClick={() => addToCart(item.img, item.name, "1l", item.price2)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                        <div className={classes['capacity-item']}>
                            <div className={classes.capacity}>2l</div>
                            <div className={classes.price}>${item.price3}</div>
                            <div className={classes.add} onClick={() => addToCart(item.img, item.name, "2l", item.price3)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </section>
    )
}

export default DrinksItems;