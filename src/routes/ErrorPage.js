import { useLocation, useNavigate } from 'react-router-dom';

import classes from './ErrorPage.module.css';
import logo from '../assets/main-logo.png';

const ErrorPage = () => {

    const url  = useLocation().pathname;
    const backBtn = useNavigate();  

    return (
        <>
            <div className={classes.errorContainer}>
                <img src={logo} alt='logo' />
                <h1>Error!</h1>
                <p>Page <i>{url}</i> doesn't exist.</p>
                <button onClick={() => backBtn(-1)}>Back</button> 
            </div>
        </>
    )
}

export default ErrorPage;