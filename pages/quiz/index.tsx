import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Bar from '../../components/Bar'
import CalculatorAnyType from '../../components/CalculatorAnyType/CalculatorAnyType'
import WindowWrapper from '../../components/WindowWrapper'
import ControlContent from '../../components/CalculatorAnyType/texts/ConrolContents'

import QuizRender from '../../components/Quiz/QuizRender'

const MainPage:NextPage = () => {

  return(
    <div>
      <Head>
        <title>{"Create Quiz"}</title>
        <meta name="description" content="クイズページ"/>
      </Head>
        <Bar/>
        <div className="flex flex-col justify-center alingn-center w-auto h-auto m-auto bg-gray-100">
          <Typography variant="h6" className="mt-4 h-10 font-bold text-center text-gray-500 mr-10">
            Quiz
          </Typography>
          <Box className='flex justify-center text-center'>
            <QuizRender />
          </Box>
        </div>
    </div>
  )
}

export default MainPage