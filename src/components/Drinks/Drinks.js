import MainWrapper from '../../ui/MainWrapper';
import DrinksItems from './DrinksItems';

import logo from '../../assets/drinks/drinks-page-header.png';

const Beverages = () => {
    return (
        <MainWrapper title="Beverages" logoImg={logo}>
            <DrinksItems />
        </MainWrapper>
    )
}

export default Beverages;