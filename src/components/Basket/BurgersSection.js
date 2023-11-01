import classes from './BurgersSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const BurgersSection = props => {
    const { items } = props;
    
    return (
        <>
        { items.map(item => {

            const shreddedLettuceIndex = item.activeAccessions.findIndex(acc => acc.name==="Shredded Lettuce")
            const pickleSlicesIndex = item.activeAccessions.findIndex(acc => acc.name==="Pickle Slices")
            const cheeseIndex = item.activeAccessions.findIndex(acc => acc.name==="Cheese")

            return (
                <div className={classes['summary-item']}>
                <div className={classes['burger-left']}>
                    <img src={item.img} alt={item.name} /> 
                    <h5>{item.name}</h5>   
                </div>
                <div className={classes['burger-right']}>
                    <div className={classes.amount}>{item.amount}x</div>
                    <div className={classes.remove}><FontAwesomeIcon icon={faMinus} /></div>
                    <div className={classes.extraAccessions}>
                    <p>
                        <li>Shredded Lettuce {shreddedLettuceIndex !== -1 ? `(${item.activeAccessions[shreddedLettuceIndex].quantity+1}x)` : "(1x)"}</li>
                        <li>Pickle Slices {pickleSlicesIndex !== -1 ? `(${item.activeAccessions[pickleSlicesIndex].quantity+1}x)` : "(1x)"}</li>
                        <li>Cheese {cheeseIndex !== -1 ? `(${item.activeAccessions[cheeseIndex].quantity+1}x)` : "(1x)"}</li>
                    </p>
                    </div>
                </div>
                <div className={classes.price}>
                    ${((parseFloat(item.price)+parseFloat(item.extraPay))*item.amount).toFixed(2)}
                </div>
            </div>
            )
        } 
        )} 
        </>
    )
};

export default BurgersSection;