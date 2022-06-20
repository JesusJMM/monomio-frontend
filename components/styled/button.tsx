import {styled } from '../../stitches.config'

export const Button = styled('button', {
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: 'bold',
  border: '1px solid transparent',
  backgroundColor: '$gray5',
  fontFamily: `'Inter', sans-serif`,
  cursor: 'pointer',
  '&:hover':{
    backgroundColor: '$gray6',
    transform: 'translateY(-1px)'
  },
  '&:active, &:focus': {
    outline: 'none',
  },
  variants: {
    color: {
      dark: {
        backgroundColor: '$gray12',
        color: 'white',
        '&:hover':{
          backgroundColor: '$gray11',
          color: 'white',
        }
      }
    }
  }
})
