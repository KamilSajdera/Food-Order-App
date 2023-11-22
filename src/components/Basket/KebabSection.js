import classes from './KebabSection.module.css';

import CartItem from '../../ui/CartItem';

const KebabSection = props => {

    const { items } = props;

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        {
            items.map(item => 
            <CartItem item={item} removePos={'40%'} key={Math.floor(Math.random() * 999)} onSendRemoveInfo={props.onSendRemoveInfo}>
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