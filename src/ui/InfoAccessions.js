import classes from './InfoAccessions.module.css';

const InfoAccessions = props => 
{
    return (
        <div className={classes.infoWrapper}>
            { props.message }
        </div>
    )
}

export default InfoAccessions;