import MainWrapper from '../../ui/MainWrapper';
import PizzaItems from './PizzaItems';

import logo from '../../assets/pizza-page-header.jpg';

const Pizzas = () => {
    return (
       <MainWrapper title="Pizzas" logoImg={logo}>
            <PizzaItems />
        </MainWrapper>
    )
}

export default Pizzas