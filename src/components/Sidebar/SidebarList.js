import { NavLink } from 'react-router-dom';

import classes from './SidebarList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, 
            faCheese, 
            faPizzaSlice, 
            faHotdog, 
            faCocktail } 
        from '@fortawesome/free-solid-svg-icons'


const SidebarList = () => {
    return (
        <ul className={classes.sidebarList}>
            
            <li>
                <NavLink to='/burger' className={ ({isActive}) => isActive ? classes.active : undefined}>
                    <FontAwesomeIcon icon={faBurger} className={classes.fontIcon}/> 
                    <div className={classes.listTitle}>Burger</div>   
                </NavLink>
            </li>
            

            <li>
                <NavLink to='/pizza' className={ ({isActive}) => isActive ? classes.active : undefined}>
                    <FontAwesomeIcon icon={faPizzaSlice} className={classes.fontIcon}/> 
                    <div className={classes.listTitle}>Pizza</div>
                </NavLink>
            </li>

            <li>
                <NavLink to='/kebab' className={ ({isActive}) => isActive ? classes.active : undefined}>
                    <FontAwesomeIcon icon={faCheese} className={classes.fontIcon}/> 
                    <div className={classes.listTitle}>Kebab</div>
                </NavLink>
           </li>

            <li>
                <NavLink to='/other' className={ ({isActive}) => isActive ? classes.active : undefined}>
                    <FontAwesomeIcon icon={faHotdog} className={classes.fontIcon}/> 
                    <div className={classes.listTitle}>Other</div>
                </NavLink>
            </li>

            <li>
                <NavLink to='/drinks' className={ ({isActive}) => isActive ? classes.active : undefined}>
                    <FontAwesomeIcon icon={faCocktail} className={classes.fontIcon}/> 
                    <div className={classes.listTitle}>Beverage</div>
                </NavLink>
            </li>
        </ul>
        
    )
};

export default SidebarList;