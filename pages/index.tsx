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
                始めましょう
              </Typography>
              <Box className="m-3">
                <Typography>
                  今回のチュートリアルではコードを書く事を目標にするのではなく『どのようにコードを書くかを考える事』を重視した物です。
                  
                  まずはプログラムを書くために必要な基礎の説明から始めていきましょう。
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
