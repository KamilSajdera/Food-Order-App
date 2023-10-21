import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import classes from './SidebarMenu.module.css';
import classes2 from './SidebarList.module.css';

const SidebarMenu = () => {

    const totalCartAmount = useSelector(state => state.cart.totalItems);

    const [basketAmountClasses, setBasketAmountClasses] = useState(classes.amountBasket)

    useEffect(() => {
        setBasketAmountClasses(`${classes.amountBasket} ${classes.animationJump}`);

        setTimeout(() => {
            setBasketAmountClasses(classes.amountBasket);
        }, 300)
    }, [totalCartAmount])

    return (
        <ul  className={classes.sidebarNavi}>
            <li>
                <NavLink to='/' className={ ({isActive}) =>  isActive ? classes2.active : undefined }>
                    <FontAwesomeIcon icon={faHome} /> 
                    <span className={classes.naviTitle}>Home</span>
                </NavLink> 
            </li>
            <li>
                <NavLink to='/basket' className={ ({isActive}) =>  isActive ? classes2.active : undefined }>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className={classes.naviTitle}>Basket</span>
                </NavLink> 
                <div className={basketAmountClasses}>{totalCartAmount}</div>
            </li>
        </ul>
    )
}

export default SidebarMenu;