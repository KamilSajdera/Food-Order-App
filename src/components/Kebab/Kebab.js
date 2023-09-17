import classes from './Kebab.module.css';
import logo from '../../assets/kebab-page-header.png';

const Kebabs = () => {
    return (
        <section className={classes.kebabWrapper}>
            <header>
                <h1>Kebabs</h1>
                <img src={logo} alt='kebab' />
            </header>
        </section>
    )
}

export default Kebabs;