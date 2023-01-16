import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import CalculatorButtonInput from '../CalculatorButtonInput';
import {texts} from './Texts'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface ControlContentProps{
  setS1Value: (str:string) => void,
  functionChange: () => void,
  viewExMessage:boolean
}
const ControlContent:React.FC<ControlContentProps> = ({setS1Value,functionChange,viewExMessage}) => {
  const [value,setValue] = useState("9")
  const {title,page} = texts
  return(
    <Swiper
      className='h-[25em] hidden-scrollbar'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide key={"page1"}>
        <Typography variant="h6">{title[0]}</Typography>
        {page[0].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className="w-20 mt-5 mx-auto">
          <Box 
            className="bg-blue-100 font-bold w-full h-14 rounded border-2 border-blue-200 drop-shadow"
          >
            <CalculatorButtonInput defaultValue='9' onBlur={setS1Value} pattern/>
          </Box>
        </Box>
        {viewExMessage&&
        <Box className='mt-10'>
        {page[0].lower.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        }
      </SwiperSlide>
      <SwiperSlide key={"page2"}>
        {page[1].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className="w-60 mt-5 mx-auto">
          <Typography>□ + □ = 2 </Typography>
          <Typography className="text-gray-300 text-xs truncate" variant={'body2'}>□ が同じ箱(変数)だとすると...</Typography>
        </Box>
        <Box className='mt-6'>
        {page[1].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className="w-20 mt-3 mx-auto">
          <Box 
            className="bg-blue-100 font-bold w-full h-14 rounded border-2 border-blue-200 drop-shadow"
          >
            <CalculatorButtonInput defaultValue='0' onBlur={setS1Value} />
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page3"}>
        {page[2].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className="w-70 mt-3 mx-auto">
          <Typography>『2』×『あ』 </Typography>
          <Typography className="text-red-300 text-xs truncate" variant={'body2'}>計算時にエラーが発生します</Typography>
        </Box>
        <Box className='mt-5'>
        {page[2].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page4"}>
        {page[3].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className="w-70 mt-3 mx-auto">
          <Typography>
            <span className="text-blue-500">const</span> 
            <span className="text-blue-300"> buttonLabel </span>
            <span> = </span>
            <span className="text-orange-300">"9"</span>
          </Typography>
          <Typography className="text-gray-300 text-xs truncate" variant={'body2'}>分かりやすい名前を付けます</Typography>
        </Box>
        <Box className='mt-10'>
        {page[3].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page5"}>
        <Typography variant="h6">{title[1]}</Typography>
        {page[4].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Typography>
          <span >『x』</span> 
          <span className="text-red-400"> × </span>
          <span> 『y』</span>
          <span className="text-red-400"> = </span>
          <span> 『??』 </span>
        </Typography>
        <Box className='mt-6'>
          {page[4].lower.map((str,index) => (
              <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>  
      </SwiperSlide>
      <SwiperSlide key={"page6"}>
        {page[5].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Typography>
          <span >『x』</span> 
          <span className="text-red-400"> × </span>
          <span> 『y』</span>
          <span className="text-red-400"> = </span>
          <span> 『??』 </span>
        </Typography>
        <Box className='mt-6'>
          {page[5].lower.map((str,index) => (
              <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>  
      </SwiperSlide>
      <SwiperSlide key={"page7"}>
        {page[6].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box>
          <Button variant={"outlined"} onClick={functionChange}>処理関数の変更</Button>
        </Box>
        <Box className='mt-6'>
          {page[6].lower.map((str,index) => (
              <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>  
      </SwiperSlide>
      <SwiperSlide key={"page8"}>
        {page[7].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className='mt-6'>
          {page[7].lower.map((str,index) => (
              <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>  
      </SwiperSlide>
      <SwiperSlide key={"page9"}>
        {page[8].upper.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        <Box className='mt-6'>
          {page[8].lower.map((str,index) => (
              <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>  
      </SwiperSlide>
      
    </Swiper>
  )
}

export default ControlContent