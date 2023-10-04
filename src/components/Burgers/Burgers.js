import MainWrapper from '../../ui/MainWrapper';
import BurgersItems from './BurgersItems';

import logo from '../../assets/burger/burger-page-header.png';

const Burgers = () => {
    return (
        <MainWrapper title="Burgers" logoImg={logo}>
            <BurgersItems />
        </MainWrapper>
    )
}

export default Burgers;