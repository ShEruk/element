import type { NextPage } from 'next'
import Router from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  const handleButtonClick = () => {
    Router.push('/main')
  }
  return (
    <>
      <Head>
        <title>{"Element"}</title>
        <meta name="description" content="スタートページ"/>
      </Head>
        <div className="flex justify-center alingn-center w-auto h-screen m-auto bg-gray-200">
          <Paper className="container-lg flex flex-col w-2/3 h-2/3 m-auto bg-white ">
            <Box className="w-2/3 m-auto text-center bg-gray-100">
              <Typography variant={"h5"}>
                はじめに
              </Typography>
              <Box className="m-3">
                <Typography>
                  プログラミング
                  プログラミングとは、「コンピュータにさせたい仕事を順番に書き出す作業」のこと。
                  コンピューターが理解できる言語で命令を出さなければいけません。
                  
                  プログラム
                  プログラムとは、「コンピュータにやってほしいことを理解できる言葉にしたもの」。
                  
                  プログラミング言語
                  「コンピュータが理解できる言葉＝プログラミング言語」であり、コンピュータに命令できる言語
                </Typography>
              </Box>
            </Box>
            <Button className="bg-blue-500 hover:bg-blue-600 w-40 h-14 mt-2 mb-2 m-auto" variant={"contained"} onClick={handleButtonClick}>
              {"Get Ready"}
            </Button>
          </Paper>
        </div>
    </>
  )
}

export default Home
