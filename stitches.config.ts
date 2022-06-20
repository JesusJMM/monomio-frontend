import { createStitches } from '@stitches/react'
import { gray } from '@radix-ui/colors'

export const {
  styled,
  getCssText,
  keyframes,
  theme,
  config,
  reset,
  prefix,
  css,
  globalCss,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      ...gray,
    },
    shadows: {
      ...gray,
    },
  },
  media: {
    bp1: '(min-width: 500px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
})
