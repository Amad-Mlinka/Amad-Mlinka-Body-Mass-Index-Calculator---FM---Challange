/*React imports */
/*Custom imports */
/*CSS imports */
import classes from './InputWithoutLabel.module.scss'
/*Assets imports */

const InputWithoutLabel = (props) => {
    const {type,placeholder,unit} = props;
    return(
        <>
            <div className={classes.inputContainer}>
                <div className={classes.inputWrapper}>
                    <input type={type} placeholder={placeholder}>                    
                    </input>
                    {unit &&
                        <div className={classes.unit}>
                            {unit}
                        </div>                
                    }
                </div>
            </div>                

        </>        
    )
}


export default InputWithoutLabel