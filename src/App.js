import "./scss/styles.css";
import {useDispatch, useSelector} from "react-redux";
import {addCalc, resetCalc, selectCalcExp, updateCalc} from "./features/calcExpSlice";
import {calcTotal, selectTotal} from "./features/totalSlice";

const App = () => {

  const dispatch = useDispatch();
  let selectCalc = useSelector(selectCalcExp);
  let displayTotal = useSelector(selectTotal);  

  const calculations = ["*", "/", "-", "+"];

  const handleNumberClick = (e) => {
   
    const lastClick = selectCalc[selectCalc.length-1];
    const expButton = calculations.find(exp => exp === e.target.value)
    const prevExpButton = calculations.find(exp => exp === lastClick)

    if(expButton && selectCalc.length === 0){
      dispatch(addCalc(0));  
    }else if(expButton && selectCalc.length > 0 && prevExpButton){
      dispatch(updateCalc(e.target.value))  
      return;
    }   

    dispatch(addCalc(e.target.value));

  }

  const handleClick = () => {
    let totalString = selectCalc.join('')
    let total = eval(totalString); 
        total = total.toString().substring(0,10);
   
    dispatch(calcTotal(total))   
  }

  const handleReset = () => {  
    dispatch(resetCalc());   
    dispatch(calcTotal(0))   
  }

  return (
    <div className="container">       
      <div id="screenRow">
        <div id="expression">{selectCalc}</div>
        <div id="totalLabel">{displayTotal}</div>
      </div>      
      <div id="calcOptions"> 
        {calculations.map(calc => {
          return <input key={calc} type="button" className="calcButtons" onClick={handleNumberClick} value={calc} />
        })}       
        <input type="button" className="resetButton" onClick={handleReset} value="C"/>            
      </div>
      <input type="button" className="numberButton" onClick={handleNumberClick} value="7" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="8" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="9" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="4" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="5" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="6" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="1" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="2" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="3" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="0" />
      <input type="button" className="numberButton" onClick={handleNumberClick} value="." />
      <input type="button" id="equalsButton" onClick={handleClick} value="=" />                    
    </div>
  );
}

export default App;