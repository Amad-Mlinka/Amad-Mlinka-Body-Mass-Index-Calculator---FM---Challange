/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './InputWithLabel.module.scss'
/*Assets imports */

const InputWithLabel = (props) => {
    const {label,type,placeholder,unit} = props;
    return(
        <>
            <div className={classes.inputContainer}>
                <label htmlFor={label}>{label}</label>
                <input type={type} id={label} placeholder={placeholder}>                    
                </input>
                {unit &&
                    <div className={classes.unit}>
                        {unit}
                    </div>                
                }
            </div>                

        </>        
    )
}


export default InputWithLabel