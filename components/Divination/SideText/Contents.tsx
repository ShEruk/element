import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import {texts} from './Texts'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Contents:React.FC = () => {
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
        <Box>
        {page[0].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className='mt-10'>
          {page[0].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page2"}>
        <Box>
        {page[1].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className="w-200 mt-5 mx-auto">
          <Typography>
            <span className="text-blue-500">const</span> 
            <span className="text-blue-300"> array </span>
            <span> = </span>
            <span className="text-blue-300">[ </span>
            <span className="text-orange-300">'あ', 'い', 'う', 'え'</span>
            <span className="text-blue-300"> ]</span>
          </Typography>
          <Typography>
            <span className="text-blue-300"> array. </span>
            <span className="text-yellow-400"> push( 'お' ) </span>
            <span className="text-gray-300"> {'<--配列の最後尾に『お』を追加する'}</span>
          </Typography>
          <Typography>
            <span className="text-blue-300"> array. </span>
            <span className="text-yellow-400"> splice( 2, 1,'く' ) </span>
            <span className="text-gray-300"> {'<--『う』を『く』に変更する'}</span>
          </Typography>
        </Box>
        <Box className='mt-10'>
          {page[1].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page3"}>
        <Box>
        {page[2].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className="w-200 mt-5 mx-auto">
          <Typography>
            <span className="text-blue-500">const</span> 
            <span className="text-blue-300"> sampleArray </span>
            <span> = </span>
            <span className="text-blue-300">[ </span>
            <span className="text-orange-300">'a', 'b', 'c', 'd'</span>
            <span className="text-blue-300"> ]</span>
          </Typography>
          <Typography>
            <span className="text-blue-300"> sampleArray</span>
            <span className="text-yellow-400">[0] </span>
            <span >  は  </span>
            <span className="text-orange-400"> 『'a'』 </span>
            <span className="text-gray-300"> {"<-- インデックスは0から数えます"}</span>
          </Typography>
        </Box>
        <Box className='mt-10'>
          {page[2].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page4"}>
        <Typography variant="h6">{title[1]}</Typography>
        <Box>
        {page[3].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className='mt-10'>
          {page[3].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page5"}>
        <Box>
        {page[4].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className="w-200 mt-5 mx-auto">
          <Typography>
            <span className="text-red-300">if</span> 
            <span className="text-blue-300"> ( </span>
            <span> a === 1 </span>
            <span className="text-blue-300"> ) </span>
            <span className="text-blue-300">{'{'}</span>
            
          </Typography>
          <Typography>
            <span className='text-gray-300'>-処理を記述-</span>
          </Typography>
          <Typography>
            <span className="text-blue-300">{'}　　　　'}</span>
          </Typography>
        </Box>
        <Box className='mt-10'>
          {page[4].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
      <SwiperSlide key={"page6"}>
        <Box>
        {page[5].upper.map((str,index) => (
          <Typography key={`${index}-text-s1`} className="text-left my-2 mx-6" variant="body1">{str}</Typography>
        ))}
        </Box>
        <Box className='mt-10'>
          {page[5].lower.map((str,index) => (
            <Typography key={`${index}-text-s1`} className="text-left my-3 mx-6" variant="body1">{str}</Typography>
          ))}
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default Contents