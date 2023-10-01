import AccessionsWrapper from "../../ui/AccessionsWrapper";
import Button from "../../ui/Button";

const KebabAccession = props => {

    const { currentKebab } = props;

    const sendOrderHandler = () => {
       /// send order soon...
    }

    return (
        <AccessionsWrapper onCloseAccessions={ () => props.onCloseAccessions()}>
            <img src={currentKebab.img} alt={currentKebab.name} />
            <h1>{currentKebab.name}</h1>
            <span>{`$${currentKebab.price1.toFixed(2)}`}</span>
            <Button onClick={sendOrderHandler}>Add to Order</Button>
        </AccessionsWrapper>  
    )
};

export default KebabAccession;