/*React imports */
import { useState } from "react"
/*Custom imports */
import Card from "../UI/card/Card"
import Radio from "../UI/radio/Radio"
/*CSS imports */
import global from '../../sass/_global.module.scss'
import classes from './Calculator.module.scss'
import UnitInput from "../unitInput/UnitInput"
/*Assets imports */

const Calculator = () => {
    const [selectedUnit, setSelectedUnit] = useState('metric');
    const units =[
         {
            name:"Metric",
            value:"metric",
            category:"unit"
         },
         {
            name:"Imperial",
            value:"imperial",
            category:"unit"
         }
    ]

    const handleRadioChange = (event) => {
        console.log(event.target.value)
        setSelectedUnit(event.target.value);
    };

    return(
        <div className={classes.calculatorContainer}>
            <Card>
                <div className={classes.calclator}>
                    <div className={`${classes.heading} ${global.headingText} ${global.m}`}>
                        Enter your details below
                    </div>
                    <div className={classes.units}>
                        {units.map((unit)=>(
                            <Radio 
                                key = {unit.category}
                                for={unit.category} 
                                value={unit.value} 
                                text={unit.name}
                                checked={selectedUnit === unit.value} 
                                onChange={handleRadioChange} 
                            />
                        ))}
                    </div>
                    <div className={classes.inputs}>
                        {selectedUnit === "metric" && 
                        <>
                            <UnitInput metric="Height" unit={selectedUnit}/>
                            <UnitInput metric="Weight" unit={selectedUnit}/>
                        </>
                        }
                        {selectedUnit === "imperial" && 
                            <>
                                <UnitInput metric="Height" unit={selectedUnit}/>
                                <UnitInput metric="Weight" unit={selectedUnit}/>
                            </>
                        }

                    </div>
                    <div className="results"></div>

                    </div>
            </Card>        

        </div>
    )
}


export default Calculator