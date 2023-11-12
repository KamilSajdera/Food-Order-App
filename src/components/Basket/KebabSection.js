import classes from './KebabSection.module.css';

import CartItem from '../../ui/CartItem';

const KebabSection = props => {

    const { items } = props;

    console.log(items)

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        {
            items.map(item => 
            <CartItem price={item.price} amount={item.amount} extraPay={item.extraPay} removePos={'40%'}>
                <div className={classes['kebab-left']}>
                    <img src={item.img} alt={item.name} /> 
                    <h5>{item.name}</h5>   
                </div>
                <div className={classes['kebab-right']}>
                    <div className={classes.extraAccessions}>
                    <p>
                        <li>{item.size} size</li>
                        <li>sauce: <b>{item.sauce}</b> </li>
                        <li>meat: <b>{item.meat}</b> </li>
                        <li>double meat: <b>{item.doubleMeat}</b> </li>
                    </p>
                    </div>
                </div>
            </CartItem>
        )}
        </div>
    )
};

export default KebabSection;