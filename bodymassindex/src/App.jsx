/*React imports */
/*Custom imports */
import Header from './components/header/Header';
/*CSS imports */
import classes from './App.scss';
/*Assets imports */

const App = () => {
  return (
    <div className={classes.appContainer}>
      <Header/>
      <div className="intro"></div>
      <div className="points"></div>
      <div className="limitations"></div>
    </div>
  );
}

export default App;
