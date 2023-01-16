import React, {useState} from 'react'
import Typography  from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const dataArray = ["大凶","凶","吉","中吉","大吉"]

const DivinationViewer:React.FC = () => {
    //大きく表示するくじの文字を保持する関数
  const [divinationString,setDivinationString] = useState("")
  const [color,setColor] = useState("red")
  
    //ボタンを押した時に動かす関数
  const handleButtonClick = () => {
    setDivinationString("吉")
  }
  // cssを出力する関数
  const genStyle = (color:string) => {
    if(color==='red'){
      return 'text-6xl m-6 text-red-300'
    // }else{
    //   return 'text-6xl m-6 text-blue-300'
    }
  }

  return(
    <Box className='flex flex-col'>
      <Box>
        <Typography>今日のあなたの運勢は...</Typography>
        <Typography className={genStyle(color)}>{divinationString}</Typography>
      </Box>
      <Box className='flex justify-center text-center m-3'>
        <Button className='bg-blue-400' variant={'contained'} onClick={handleButtonClick}>
          おみくじを引く
        </Button>
      </Box>
    </Box>
  )
}
export default DivinationViewer



const DivinationViewerAnswer:React.FC = () => {
  //大きく表示するくじの文字を保持する関数
const [divinationString,setDivinationString] = useState("吉")
const [color,setColor] = useState("red")

  //ボタンを押した時に動かす関数
const handleButtonClick = () => {
    //（）内の引数をくじの表示文字としてセットする
  const newIndex = getRandomNum(dataArray.length)
  if(newIndex < 2){
    setColor("blue")
  }else{
    setColor("red")
  }
  setDivinationString(dataArray[newIndex])
}
  //『ランダムな乱数(0~1の範囲)を生成する関数　x 最大値』で得られる数字を整数化したものを返す 関数
const getRandomNum = (maxNum:number) => {
  return Math.floor( Math.random() * maxNum )
}
// 色を変える関数
const genStyle = (color:string) => {
  if(color==='red'){
    return 'text-6xl m-6 text-red-300'
  }else{
    return 'text-6xl m-6 text-blue-300'
  }
}

return(
  <Box className='flex flex-col'>
    <Box>
      <Typography>今日のあなたの運勢は...</Typography>
      <Typography className={genStyle(color)}>{divinationString}</Typography>
    </Box>
    <Box className='flex justify-center text-center m-3'>
      <Button className='bg-blue-400' variant={'contained'} onClick={handleButtonClick}>
        おみくじを引く
      </Button>
    </Box>
  </Box>
)
}