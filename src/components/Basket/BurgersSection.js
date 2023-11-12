import classes from './BurgersSection.module.css';

import CartItem from '../../ui/CartItem';

const BurgersSection = props => {
    const { items } = props;
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        { items.map(item => {

            const shreddedLettuceIndex = item.activeAccessions.findIndex(acc => acc.name==="Shredded Lettuce")
            const pickleSlicesIndex = item.activeAccessions.findIndex(acc => acc.name==="Pickle Slices")
            const cheeseIndex = item.activeAccessions.findIndex(acc => acc.name==="Cheese")

            return (
                <CartItem price={item.price} amount={item.amount} extraPay={item.extraPay} removePos={'40%'}>
                <div className={classes['burger-left']}>
                    <img src={item.img} alt={item.name} /> 
                    <h5>{item.name}</h5>   
                </div>
                <div className={classes['burger-right']}>
                    <div className={classes.extraAccessions}>
                    <p>
                        <li>Shredded Lettuce {shreddedLettuceIndex !== -1 ? `(${item.activeAccessions[shreddedLettuceIndex].quantity+1}x)` : "(1x)"}</li>
                        <li>Pickle Slices {pickleSlicesIndex !== -1 ? `(${item.activeAccessions[pickleSlicesIndex].quantity+1}x)` : "(1x)"}</li>
                        <li>Cheese {cheeseIndex !== -1 ? `(${item.activeAccessions[cheeseIndex].quantity+1}x)` : "(1x)"}</li>
                    </p>
                    </div>
                </div>
            </CartItem>
            )
        } 
        )} 
        </div>
    )
};

export default BurgersSection;