import classes from './OtherSection.module.css';
import CartItem from '../../ui/CartItem';

const Hotdogs = ({items}) => {
    return (
    <>
    { items.map(item => 
        <CartItem item={item} removePos={'40%'} key={Math.floor(Math.random() * 999)}>
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