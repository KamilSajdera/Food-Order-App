import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


import classes from "./PizzaSection.module.css";

const PizzaSection = props => {

    const { items } = props;

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {
            items.map(item => 
                <div className={classes['summary-item']}>
                    <div className={classes.remove}><FontAwesomeIcon icon={faMinus} /></div>
                    <div className={classes.amount}>{item.amount}x</div>
                    <img src={item.img} alt={item.name} />
                    <h5>{item.name}</h5>
                    <p>{item.dough} dough</p>
                    <p>Size: {item.size}cm</p>
                    <span>
                    Extra accessions: 
                    {
                        item.activeAccessions.length > 0 ? 
                        item.activeAccessions.map((acc, index) => (
                            index === item.activeAccessions.length - 1 ? 
                            ` ${acc.name} (${acc.quantity}x)` :
                            ` ${acc.name} (${acc.quantity}x), `
                        )) :
                        <p>None</p>
                    }
                    </span>
                    <div className={classes.price}>${((parseFloat(item.price)+parseFloat(item.extraPay))*item.amount).toFixed(2)}</div>
                </div>    
            )
        } 
        </div>
    )
}

export default PizzaSection;