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

export const Box = styled('div', {})
export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
})

