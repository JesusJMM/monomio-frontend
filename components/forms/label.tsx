import {styled } from '../../stitches.config'

export const Label = styled('label', {
  fontFamily: `'Inter', sans-serif`,
  fontSize: '14px',
  color: '$gray12',
  variants: {
    required: {
      true: {
        '&:after': {
          content: `' *'`,
          color: '$red9',
        },
      },
    },
  },
})
