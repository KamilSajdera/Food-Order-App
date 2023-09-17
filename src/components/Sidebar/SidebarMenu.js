import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import classes from './SidebarMenu.module.css';
import classes2 from './SidebarList.module.css';

const SidebarMenu = () => {

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
            </li>
        </ul>
    )
}

export default SidebarMenu;