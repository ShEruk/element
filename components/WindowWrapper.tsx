import React, { useState, ReactNode} from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

interface WrapperProps{
  children:ReactNode
}
const WindowWrapper:React.FC<WrapperProps> = ({children}) => {
  return(
    <div className="bg-white w-[35em] h-[25em] rounded border border-gray-400 drop-shadow-md">
      <div className="m-2 justify-center text-gray-500 ">
        {children}
      </div>
    </div>
  )
}

export default WindowWrapper