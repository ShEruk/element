import React,{useState} from 'react'

interface CalcValueButtonProps{
  value:any,
  onClick:(value:any) => void;
  err?:boolean
}
const CalcValueButton:React.FC<CalcValueButtonProps> = (props) => {
  const {value,onClick,err} = props
  
  return(
    <button 
      className={`${err?'bg-red-100 hover:bg-red-200 border-red-400':'bg-blue-100 hover:bg-blue-200 border-blue-200'} font-bold w-full h-14 rounded border-2 border-blue-200 drop-shadow`}
      onClick={() => onClick(value)}
      disabled={err}
    >
      {value}
      {err&&
      <p className='text-xs text-red-500'>{'Error'}</p>
      }
    </button>
  )
}

export default CalcValueButton