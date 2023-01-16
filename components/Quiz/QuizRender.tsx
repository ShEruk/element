import React, { ReactElement, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Right from '@mui/icons-material/TaskAlt'
import Wrong from '@mui/icons-material/Cancel'

import type { QuizDataSet } from './QuizData'

const css = {
  quiz:'text-gray-500',
  choices:'grid w-[600px] m-6 grid-cols-2 gap-3',
  choice: 'bg-blue-100',
  choiceSelected: 'bg-blue-400'
}

const choices = ["aaa","bbb","ccc","ddd"]

const quizDataSet:QuizDataSet = {
  question:"",
  choices:{a:""},
  answer:""
}

const QuizRender:React.FC = () => {
  const [selected,setSelected] = useState(-1)
  const [answer, setAnswer] = useState<string>("")

  const handleButtonClick = (selected:number) => {
    setSelected(selected)
    setAnswer(numToAlpha(selected))
  }
  
  return(
    <QuizWrapper isRight={undefined}>
      <Typography className={css.quiz} variant={'h6'}>Q:</Typography>
      <Box className={''}>
        <Button className={css.choice} variant={"outlined"}  onClick={()=>null} >
          選択肢
        </Button>
      </Box>
    </QuizWrapper>
  )
}

export default QuizRender




interface QuizWrapperProps{
  children:React.ReactNode,
  isRight?:boolean
}
const QuizWrapper:React.FC<QuizWrapperProps> = ({children,isRight}) => {

  const setBackgroudColor = (isCorrect:boolean|undefined)=> {
    if(isCorrect){
      return 'bg-green-100'
    }else if(isCorrect === false){
      return 'bg-red-100'
    }else{
      return ''
    }
  }
  return(
    <Box className={`relative p-3 bg-white rounded border-gray-400 m-4 ${setBackgroudColor(isRight)} drop-shadow`}>
      {isRight === true&&
        <Right className={`absolute left-5 top-2 text-5xl text-green-400 text-opacity-60`}/>
      }
      {isRight === false&&
         <Wrong className={`absolute left-5 top-2 text-5xl text-red-300`}/>
      }
      {children}
    </Box>
  )
}


const QuizRenderAnswer:React.FC = () => {
  const [selected,setSelected] = useState(-1)
  const [answer, setAnswer] = useState<string>("")

  const numToAlpha = (num:number) => {
    const value = 10 as const
    return (num+value).toString(36)
  }

  const handleButtonClick = (selected:number) => {
    setSelected(selected)
    setAnswer(numToAlpha(selected))
  }
  
  return(
    <QuizWrapper isRight={undefined}>
      <Typography className={css.quiz} variant={'h6'}>Q: {quizDataSet.question}</Typography>
      <Box className={css.choices}>
        {choices.map((element,index) => (
          <Button className={selected===index?css.choiceSelected:css.choice} variant={"outlined"}  onClick={()=>handleButtonClick(index)}>
            {numToAlpha(index).toUpperCase()}: {element}
          </Button>
        ))}
      </Box>
    </QuizWrapper>
  )
}


//数字から英字にする関数
const numToAlpha = (num:number) => {
  const value = 10 as const
  return (num+value).toString(36)
}
