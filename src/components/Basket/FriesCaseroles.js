import classes from './OtherSection.module.css';
import CartItem from '../../ui/CartItem';

const FriesCasseroles = ({items}) => {

    return (
    <>
    { items.map(item => 
        <CartItem 
            price={item.price} amount={item.amount} extraPay={item.extraPay} 
            style={{width: '20%', display: 'block', textAlign: 'center'}}> 
        <img src={item.img} alt={item.name} className={classes.img}/>
        <h3 style={{paddingTop: "15px"}}>{item.name}</h3>
        <p>{item.size}</p>
        </CartItem>
    )}
    </>
    )
}

export default FriesCasseroles;