/*React imports */

/*Custom imports */
import Calculator from '../calculator/Calculator'

/*CSS imports */
import global from '../../sass/_global.module.scss'
import classes from './Header.module.scss'
/*Assets imports */
import logo from '../../assets/images/logo.svg'
const Header = () => {
    return(
        <div className={classes.headerContainer}>
            <div className={classes.heading}>
                <img className={classes.logo} src={logo} alt="" />
                <div className={`${classes.text} ${global.headingText} ${global.xl}`}>
                Body Mass <br/>
                Index Calculator
                </div>
                <div className={`${classes.subText} ${global.bodyText} ${global.m}`}>
                Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
                </div>
            </div>
            <div className="calculator">
                <Calculator/>
            </div>
        </div>        
    )
}


export default Header