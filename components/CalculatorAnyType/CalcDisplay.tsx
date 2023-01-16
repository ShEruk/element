import React,{useState} from 'react'

interface Display{
  value:string
}
const CalcDisplay:React.FC<Display> = (prop) => {
  const {value} = prop
  return(
    <div className="bg-white w-auto h-14 text-right text-xl font-bold  border-2 rounded border-black">
      <p className="m-3">
        {value}
      </p>
    </div>
  )
}

export default CalcDisplay