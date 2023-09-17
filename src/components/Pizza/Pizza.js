import stylesPage from '../PageStyles.module.css';
import PizzaItems from './PizzaItems';

import logo from '../../assets/pizza-page-header.jpg';

const Pizzas = () => {
    return (
        <section className={stylesPage.mainWrapper}>
            <header>
                <h1>Pizzas</h1>
                <img src={logo} alt='pizza' />
            </header>
            <PizzaItems />
        </section>
    )
}

export default Pizzas