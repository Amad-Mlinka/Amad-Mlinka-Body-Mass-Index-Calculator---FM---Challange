/*React imports */

/*Custom imports */

/*CSS imports */
import global from '../../../sass/_global.module.scss'
import classes from './Radio.module.scss'
/*Assets imports */
const Radio = (props) => {
    return(
        <div className={classes.radio}>
            <input 
                type="radio" 
                id={props.value} 
                name={props.for} 
                value={props.value} 
                checked={props.checked} 
                onChange={props.onChange} 
            />
            <span className={classes.design}></span>
            <label className={`${classes.radioText} ${global.bodyText} ${global.mBold}`} htmlFor={props.for}>{props.text}</label>
        </div>        
    )
}


export default Radio