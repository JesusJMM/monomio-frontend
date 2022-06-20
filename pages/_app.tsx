import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { globalCss } from '../stitches.config'

const globalStyles = globalCss({
  'body': {
    backgroundColor: '$gray1'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
