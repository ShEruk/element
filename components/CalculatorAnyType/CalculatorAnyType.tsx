import React,{ useState } from 'react'
import CalcDisplay from './CalcDisplay'
import CalcValueButton from './CalcValueButton'

const BUTTON_FUNCS = [
  "/","x","-","+"
] as const
const CHANGED_BUTTON_FUNCS = [
  "P","U","S","H"
]

const initialContext = [{value:"0",func:""}]

const getCalculatedValue = (lastValue:number,newValue:number,func:string) => {
  let calculatedValue = 0
  switch(func){
    case "/":
      calculatedValue = (lastValue===0?1:lastValue) / newValue
      break;
    case "x":
      calculatedValue =  (lastValue===0?1:lastValue) * newValue
      break;
    case "-":
      calculatedValue = lastValue - newValue
      break;
    case "+":
      calculatedValue = lastValue + newValue
      break;
    case "":
      break;
  }
  return calculatedValue
}
const changedCalculatedValue = (lastValue:number,newValue:number) => {
  return Number(`${lastValue.toString()}${newValue.toString()}${newValue.toString()}`)
  
}
interface CalculatorAnyTypeProps{
  dataSet:Array<any>
  isFunctionChange:boolean
}
const CalculatorAnyType:React.FC<CalculatorAnyTypeProps> = ({dataSet,isFunctionChange}) => {
  const [display,setDisplay] = useState("0")
  const [context,setContext] = useState(initialContext)
  const [rowCount,setRowCount] = useState(0)
  const handleButtonClick = (v:string|number) => {
    const prev = context[context.length-1]?.value===display?"":display
    const newValue = prev + v.toString()
    setDisplay(newValue)
  }
  const handleFuncButtonClick = (functionalString:string) => {
    let lastValue = 0
    let contextFunc = functionalString
    if(!(rowCount===0&&context[0].value!=="0")){
      lastValue = Number(context[rowCount].value)
    }
    const newValue = Number(display)
    let calculatedValue = 0
    if(functionalString === "="){
      calculatedValue = getCalculatedValue(lastValue,newValue,context[rowCount].func)
      setContext([{value:calculatedValue.toString(),func:contextFunc}])
      setRowCount(0)
    }else{
      calculatedValue = isFunctionChange?changedCalculatedValue(lastValue,newValue):getCalculatedValue(lastValue,newValue,contextFunc)
      setContext([...context,{value:calculatedValue.toString(),func:contextFunc}])
      setRowCount(rowCount+1)
    }
    setDisplay(calculatedValue.toString())
  }
  const handleClearAll = (initValue:string) => {
    setDisplay("0")
    setContext([{value:initValue,func:""}])
    setRowCount(0)
  }

  return(
    <div className="w-[400px] h-[420px] drop-shadow-md">
      <div className="grid bg-white grid-cols-4 gap-2 p-4 rounded border border-gray-400">
        <div className="col-span-4">
          <CalcDisplay value={display}/>
        </div>
        <div className="col-start-4">
        <CalcValueButton value={"AC"} onClick={() => handleClearAll("0")}/>
        </div>
        {dataSet.map((v,i) => {
          let funcButton = null
          if(i!==0 && (i+1)%3 === 0){
            funcButton = (
              <div key={`fb-${i}`} className="col-span-1 row-span-1">
                <CalcValueButton value={isFunctionChange?CHANGED_BUTTON_FUNCS[(i+1)/3-1]:BUTTON_FUNCS[(i+1)/3-1]} onClick={handleFuncButtonClick}/>
              </div>
            )
          }
          return(
          <>
            <div key={`b-${i}`} className="col-span-1 row-span-1">
              <CalcValueButton 
                value={v} 
                onClick={handleButtonClick}
                err={!(Number(v)>=0)}
              />
            </div>
            {funcButton}
          </>
          )
        })}   
        <div className="col-start-3 col-span-1 row-span-1">
          <CalcValueButton value={"="} onClick={handleFuncButtonClick}/>
        </div>
        <div className="col-span-1 row-span-1">
          <CalcValueButton value={isFunctionChange?CHANGED_BUTTON_FUNCS[3]:BUTTON_FUNCS [3]} onClick={handleFuncButtonClick}/>
        </div>
      </div>
    </div>
  )
}

export default CalculatorAnyType