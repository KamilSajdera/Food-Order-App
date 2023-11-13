import classes from './OtherSection.module.css';
import CartItem from '../../ui/CartItem';

const FriesCasseroles = ({items}) => {

    const isSmallScreen = window.innerWidth <= 600;

    const cartItemExtraStyles = {
        width: isSmallScreen ? "43%" : "22%",
        display: 'block', 
        textAlign: 'center'
    }

    return (
    <>
    { items.map(item => 
        <CartItem 
            price={item.price} amount={item.amount} extraPay={item.extraPay} 
            style={cartItemExtraStyles}> 
        <img src={item.img} alt={item.name} className={classes.img}/>
        <h3 style={{paddingTop: "15px"}}>{item.name}</h3>
        <p>{item.size}</p>
        </CartItem>
    )}
    </>
    )
}

export default FriesCasseroles;