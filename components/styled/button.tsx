import { styled } from '../../stitches.config'

export const Button = styled('button', {
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: 'bold',
  border: '1px solid transparent',
  backgroundColor: '$gray5',
  fontFamily: `'Inter', sans-serif`,
  cursor: 'pointer',
  outline: '0px solid $blue7',
  transition: 'outline .1s ease',
  outlineOffset: 0,
  '&:hover': {
    backgroundColor: '$gray6',
    transform: 'translateY(-1px)',
  },
  '&:active, &:focus': {
    outline: '3px solid $blue8',
  },
  variants: {
    color: {
      dark: {
        backgroundColor: '$gray12',
        color: 'white',
        '&:hover': {
          backgroundColor: '$gray11',
          color: 'white',
        },
      },
      blue: {
        backgroundColor: '$blue9',
        color: 'white',
      },
    },
    size: {
      md: {
        fontSize: '14px',
      },
    },
  },
})
