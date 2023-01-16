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

const initialButtonValues = [9,8,7,6,5,4,3,2,1,0]
const MainPage:NextPage = () => {
  const [editable,setEditable] = useState(false)
  const [resource,setResource] = useState<Array<any>>(initialButtonValues)
  const [isFunctionChange,setIsFunctionChange] = useState(false)

  const handleResourceChangeStep1 = (value:string) => {
    let newResource = [...resource]
    let newNumber = Number(value)||value
    newResource.splice(0,1,newNumber)
    setResource(newResource)
  }
  return(
    <div>
      <Head>
        <title>{"Element"}</title>
        <meta name="description" content="スタートページ"/>
      </Head>
        <Bar/>
        <div className="flex flex-col justify-center alingn-center w-auto h-auto m-auto bg-white">
          <Box>
            <Typography variant="h6" className="mt-4 h-10 font-bold text-center text-gray-500 mr-10">
              Tutorial
            </Typography>
            <Button
              className="absolute top-24 right-24"
              variant="outlined"
              onClick={() => setEditable(!editable)}
              disabled={editable}
            >
              {editable?'編集中':'編集'}
            </Button>
          </Box>
          <Box className="flex justify-center text-center">
            <div className="m-4">
              <CalculatorAnyType dataSet={resource} isFunctionChange={isFunctionChange}/>
            </div>
            {editable&&
            <div className="m-4 ">
              <WindowWrapper>
                <ControlContent setS1Value={handleResourceChangeStep1} viewExMessage={resource[0]!==9} functionChange={() => setIsFunctionChange(!isFunctionChange)}/>
              </WindowWrapper>
            </div>
            }
          </Box>
        </div>
    </div>
  )
}

export default MainPage