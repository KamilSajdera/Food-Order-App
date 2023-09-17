import { useEffect, useRef } from 'react';
import classes from './AccessionData.module.css';

import AccessionsAmount from './AccessionAmount'

const AccessionData = () => {

    const sizeRef = useRef();
    const bignessRef = useRef();

    useEffect(() => {
        const sizeItems = sizeRef.current.querySelectorAll(`.${classes['pizza-option']}`);
        const bignessItems = bignessRef.current.querySelectorAll(`.${classes['pizza-option']}`);

        sizeItems.forEach(sizeItem => {
          sizeItem.addEventListener('click', () => changeSizeHandler(sizeItem.textContent))  
        });

        bignessItems.forEach(bigItem => {
            bigItem.addEventListener('click', () => changeBignessHandler(bigItem.textContent))  
          });

        return () => {
            sizeItems.forEach(sizeItem => {
                sizeItem.removeEventListener('click', null)  
              });  

            bignessItems.forEach(bigItem => {
                bigItem.removeEventListener('click', null)  
              });  
        }
    }, [])

    const changeSizeHandler = (value) => {
        const sizeItems = sizeRef.current.querySelectorAll(`.${classes['pizza-option']}`); 

        sizeItems.forEach((item) => {
            item.classList.remove(classes.active)
            if(item.textContent === value) {
                item.classList.add(classes.active)
                console.log(item.textContent)
            }
        })
    }

    const changeBignessHandler = (value) => {
        const bignessItems = bignessRef.current.querySelectorAll(`.${classes['pizza-option']}`); 

        bignessItems.forEach((item) => {
            item.classList.remove(classes.active)
            if(item.textContent === value) {
                item.classList.add(classes.active)
                console.log(item.textContent)
            }
        })
    }

    return (
        <div className={classes.accessionsDetails}>
            <div className={classes.pizzaOptions} ref={sizeRef}>
                <h4>Size</h4>
                <div className={`${classes['pizza-option']} ${classes.active}`}>25cm</div>
                <div className={classes['pizza-option']}>35cm</div>
                <div className={classes['pizza-option']}>40cm</div>
            </div>
            <div className={classes.pizzaOptions} ref={bignessRef}>
                <h4>Type of dough</h4>
                <div className={`${classes['pizza-option']} ${classes.active}`} style={{width: '48%'}}>Traditional</div>
                <div className={classes['pizza-option']} style={{width: '48%'}}>Thin</div>
            </div>
            <AccessionsAmount />
        </div>
    )
};

export default AccessionData