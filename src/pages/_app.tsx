import { AppProps } from 'next/app'

import React from 'react'
import '../globalCss/global.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../components/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyle = document.querySelector('#jss-server-side')
    if (jssStyle) {
      jssStyle.parentElement?.removeChild(jssStyle)
    }
  }, [])

  return (
    <>
      <Head>
        <title>casaub0n page</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}