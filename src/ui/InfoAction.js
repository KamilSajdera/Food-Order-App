import classes from './InfoAction.module.css';

const InfoAction = props => {

    const barBackground = props.action === 'add' ? "#1e9138" : "#b93636"
    const message = props.action === 'add' ? "was successfully added to cart!" : "ded"

    return (
        <div className={classes.infoBar} style={{background: barBackground}}>
            <i><b>{props.name}</b></i> {message}
        </div>
    )
};


export default InfoAction;