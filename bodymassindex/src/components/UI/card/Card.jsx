/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './Card.module.scss'
/*Assets imports */

const Card = (props) => {
    return(
        <div className={classes.card}>
            {props.children}
        </div>        
    )
}


export default Card