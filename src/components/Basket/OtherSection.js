import FriesCasseroles from "./FriesCaseroles";
import Hotdogs from "./Hotdogs";


const OtherSection = ({items}) => {

    const firesAndCasseroles = items.filter(item => item.name === "Fries" || item.name === "Casserole")
    const hotdogs = items.filter(item => item.name === "Hotdog")

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'}}>
            { firesAndCasseroles.length > 0 && <FriesCasseroles items={firesAndCasseroles} /> }
            { hotdogs.length > 0 && <Hotdogs items={hotdogs} /> }
        </div>
    )
}

export default OtherSection;