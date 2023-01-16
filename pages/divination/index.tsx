import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Bar from '../../components/Bar'

import WindowWrapper from '../../components/WindowWrapper'
import Contents from '../../components/Divination/SideText/Contents'

import QuizRender from '../../components/Quiz/QuizRender'
import { quizDataSet } from '../../components/Quiz/QuizData'
import DivinationViewer from '../../components/Divination/DivinationViewer'

const MainPage:NextPage = () => {
  const [editable,setEditable] = useState(false)
  const [disabled,setDisabled] = useState(false)

  const handleButtonClick = () => {
    
  }

  return(
    <div>
      <Head>
        <title>{"Create Quiz"}</title>
        <meta name="description" content="占いページ"/>
      </Head>
        <Bar/>
        <div className="flex flex-col justify-center alingn-center w-auto h-auto m-auto bg-white">
          <Typography variant="h6" className="mt-4 h-10 font-bold text-center text-gray-500 mr-10">
            おみくじ
          </Typography>
          <Button
              className="absolute top-24 right-24"
              variant="outlined"
              onClick={() => setEditable(!editable)}
              disabled={editable}
            >
              {editable?'編集中':'編集'}
            </Button>
          <Box className='flex justify-center text-center m-4'>
            <DivinationViewer/>
            {editable&&
            <div className="m-4 ">
              <WindowWrapper>
                <Contents />
              </WindowWrapper>
            </div>
            }
          </Box>
          
        </div>
    </div>
  )
}

export default MainPage