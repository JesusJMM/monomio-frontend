import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { globalCss } from '../stitches.config'
import { AuthProvider } from '../context/auth'
import { ThemeProvider } from '../context/theme'

const globalStyles = globalCss({
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
