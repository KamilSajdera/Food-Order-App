import classes from "./PizzaSection.module.css";

import CartItem from "../../ui/CartItem";

const PizzaSection = props => {

    const { items } = props;

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
        {
            items.map(item => 
                <CartItem item={item} key={Math.floor(Math.random() * 999)}
                style={{display: 'block', textAlign: 'center'}}> 
                    <img src={item.img} alt={item.name} />
                    <h5 className={classes.h5}>{item.name}</h5>
                    <p className={classes.p}>{item.dough} dough</p>
                    <p className={classes.p}>Size: {item.size}cm</p>
                    <span className={classes.extraAccessions}>
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
                </CartItem>    
            )
        } 
        </div>
    )
}

export default PizzaSection;