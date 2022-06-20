import { styled } from '../../stitches.config'

export const Container = styled('div', {
  maxWidth: '600px',
  margin: 'auto',
  variants: {
    padding: {
      none: {
        paddingInline: 0,
      },
      sm: {
        paddingInline: 8,
      },
      md: {
        paddingInline: '1em',
      },
      lg: {
        paddingInline: '2em',
      },
    },
  },
})
