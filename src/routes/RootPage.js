import { Outlet } from "react-router-dom";

import classes from './RootPage.module.css';

import Sidebar from "../components/Sidebar/Sidebar";

function RootPage() 
{
    return (
        <div style={ { display: 'flex' }}>
            <Sidebar />
            <main className={classes.contentContainer}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootPage;