import classes from './MainWrapper.module.css';

const MainWrapper = props => {
    return (
        <section className={classes.mainWrapper}>
            <header>
                <h1>{props.title}</h1>
                <img src={props.logoImg} alt={props.title} />
            </header>
            { props.children }
        </section>
    )
}

export default MainWrapper