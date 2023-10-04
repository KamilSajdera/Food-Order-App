import MainWrapper from '../../ui/MainWrapper';
import KebabItems from './KebabItems';

import logo from '../../assets/kebab/kebab-page-header.png';

const Kebabs = () => {
    return (
        <MainWrapper title="Kebabs" logoImg={logo}>
            <KebabItems />
        </MainWrapper>
    )
}

export default Kebabs;