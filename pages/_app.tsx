import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { globalCss } from '../stitches.config'
import { AuthProvider } from '../context/auth'

const globalStyles = globalCss({
  'body': {
    backgroundColor: '$gray1'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
