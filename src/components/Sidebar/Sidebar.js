import SidebarList from './SidebarList';

import logo from '../../assets/main-logo.png';

import classes from './Sidebar.module.css';
import SidebarMenu from './SidebarMenu';

const Sidebar = () => {
    return (
        <>
            <div className={classes.sidebarContainer}>
                <header>
                    <div className={classes.logo}>
                        <img src={logo} alt='logo' />
                    </div>
                    <div className={classes.logoTitle}>
                        Fast<span style={ { color: '#e41c23' }}>Food</span>
                    </div>
                </header>
                <SidebarMenu />
                <SidebarList />
            </div>
            
        </>
    )
}

export default Sidebar;