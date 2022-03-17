
import type { AppProps } from 'next/app'
import { ChakraProvider} from '@chakra-ui/react'
import theme from "../src/theme/index"
import {useState} from "react"
import { UserContext } from '../src/context/UserContext'
import Layout from '../src/components/Layout/Layout'



function MyApp({ Component, pageProps }: AppProps) {

  //set up state for the UserContext
  const [authenticated,setAuthenticated] = useState(false)

  return (
    <UserContext.Provider value={{authenticated,setAuthenticated}}>
      <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </UserContext.Provider>
  )
}

export default MyApp
