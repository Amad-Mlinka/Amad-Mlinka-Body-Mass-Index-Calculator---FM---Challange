/*React imports */
/*Custom imports */
import InputWithoutLabel from '../UI/input/inputWithoutLabel/InputWithoutLabel';
/*CSS imports */
import global from '../../sass/_global.module.scss'
import classes from './UnitInput.module.scss'
/*Assets imports */

const UnitInput = (props) => {
    const {unit,metric} = props
    return(
        <div className={classes.unitInput}>
            <div className={`${classes.unitLabel} ${global.bodyText} ${global.s}`}>
                {metric}
            </div>
        {/* Metric system */}
            {unit.toLowerCase() === "metric" && metric.toLowerCase() === "height" &&
            <>
                <InputWithoutLabel  type="number" placeholder="0" unit="cm"/>
            </>
            }
            {unit.toLowerCase() === "metric" && metric.toLowerCase() === "weight" &&
            <>
                <InputWithoutLabel  type="number" placeholder="0" unit="kg"/>
            </>
            }
        {/* Imperial system */}

            {unit.toLowerCase() === "imperial" && metric.toLowerCase() === "height" &&
            <>
                <InputWithoutLabel type="number" placeholder="0" unit="ft"/>
                <InputWithoutLabel type="number" placeholder="0" unit="in"/>

            </>
            }
            {unit.toLowerCase() === "imperial" && metric.toLowerCase() === "weight" &&
            <>
                <InputWithoutLabel type="number" placeholder="0" unit="st"/>
                <InputWithoutLabel type="number" placeholder="0" unit="lbs"/>

            </>
            }
        </div>        
    )
}


export default UnitInput