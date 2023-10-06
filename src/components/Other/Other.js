import MainWrapper from '../../ui/MainWrapper';
import OtherItems from './OtherItems';

import logo from '../../assets/other/otherHeader.png';

const Other = () => {
    return (
        <MainWrapper title="Other" logoImg={logo}>
            <OtherItems />
        </MainWrapper>
    )
}

export default Other