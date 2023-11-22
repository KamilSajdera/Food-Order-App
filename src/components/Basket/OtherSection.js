import FriesCasseroles from "./FriesCaseroles";
import Hotdogs from "./Hotdogs";


const OtherSection = (props) => {

    const { items } = props;
    const firesAndCasseroles = items.filter(item => item.name === "Fries" || item.name === "Casserole")
    const hotdogs = items.filter(item => item.name === "Hotdog")

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
            { firesAndCasseroles.length > 0 && <FriesCasseroles items={firesAndCasseroles} onSendRemoveInfo={props.onSendRemoveInfo}/> }
            { hotdogs.length > 0 && <Hotdogs items={hotdogs} onSendRemoveInfo={props.onSendRemoveInfo}/> }
        </div>
    )
}

export default OtherSection;