import { GetServerSidePropsContext } from 'next';
import '../styles/globals.css'
import * as React from 'react'
import type { AppProps } from 'next/app'
import { globalCss } from '../stitches.config'
import { getCookie, setCookie } from 'cookies-next';
import { AuthProvider } from '../context/auth'
import { ThemeProvider, themeType } from '../context/theme'

const globalStyles = globalCss({
})

function App(props: AppProps & { colorScheme : themeType}) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = React.useState<themeType>(props.colorScheme)
  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme == 'dark' ? 'light': 'dark'
    setColorScheme(nextColorScheme)
    setCookie('monomio-color-theme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }
  globalStyles()
  return (
    <ThemeProvider 
      toggleColorScheme={toggleColorScheme}
      theme={colorScheme}
    >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

App.getInitialProps = ({ ctx }: {ctx : GetServerSidePropsContext }) => ({
  colorScheme: getCookie('monomio-color-theme', ctx) || 'light'
})

export default App
