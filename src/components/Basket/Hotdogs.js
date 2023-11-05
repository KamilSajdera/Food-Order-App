import classes from './OtherSection.module.css';
import CartItem from '../../ui/CartItem';

const Hotdogs = ({items}) => {
    return (
    <>
    { items.map(item => 
        <CartItem price={item.price} amount={item.amount} extraPay={item.extraPay} removePos={'40%'}>
        <div className={classes['hotdog-left']}>
            <img src={item.img} alt={item.name} className={classes.img}/> 
            <h5>{item.name}</h5>   
        </div>
        <div className={classes['hotdog-right']}>
            <div className={classes.extraAccessions}>
                <li><b>{item.size}</b> size</li>
                <li><b>{item.bread}</b> bread</li>
                <li><b>{item.sauce}</b> sauce</li>
            </div>
        </div>
    </CartItem>    
    )}
    </>  
    )
}

export default Hotdogs;