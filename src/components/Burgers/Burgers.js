import stylesPage from '../PageStyles.module.css';
import BurgersItems from './BurgersItems';

import logo from '../../assets/burger-page-header.png';

const Burgers = () => {
    return (
        <section className={stylesPage.mainWrapper}>
            <header>
                <h1>Burgers</h1>
                <img src={logo} alt='burger' />
            </header>
            <BurgersItems />
        </section>
    )
}

export default Burgers