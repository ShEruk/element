import React,{useState,useRef} from 'react'
interface CalculatorButtonInputProps{
  defaultValue:string;
  onBlur:(value:string) => void;
  pattern?:boolean
}
const CalculatorButtonInput:React.FC<CalculatorButtonInputProps> = ({defaultValue,onBlur,pattern}) => {
  const [value,setValue] = useState(defaultValue)
  const input = useRef<HTMLInputElement>(null)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    input.current?.blur()
  }
  return(
    <input 
      ref={input}
      type="text" 
      className='w-5 bg-blue-100 mt-3 mx-auto focus:outline-none'
      value={value}
      onChange={(e) => {
        pattern?
        setValue(e.target.value.replace(/\D/g, "").toString())
        :
        setValue(e.target.value.toString())
      }}
      onBlur={() => {
        onBlur(value)
      }}
      onKeyDown={handleKeyDown}
      pattern={pattern?"^-?[0-9]\d*\.?\d*$":""}
    />
  )
}

export default CalculatorButtonInput