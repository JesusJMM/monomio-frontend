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
  '&:active': {
    transform: 'translateY(0)',
  },
  '&:focus-visible': {
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
    loading: {
      true: {
        backgroundColor: '$gray4',
        color: '$gray4',
        cursor: 'auto',
        '&:hover': {
          backgroundColor: '$gray4',
          transform: 'translateY(0px)',
        },
      }
    }
  },
})

const IconButtonContainer = styled('button', {
  height: '28px',
  width: '28px',
  minHeight: '28px',
  minWidth: '28px',
  border:'none',
  padding: 0,
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '0px solid $blue7',
  transition: 'outline .1s ease',
  '&:hover': {
    backgroundColor: '$gray4',
    transform: 'translateY(-1px)',
  },
  '&:focus-visible': {
    outline: '3px solid $blue8',
  },
  backgroundColor: 'transparent'
})

type IconButtonPropsType = {
  icon: React.ReactNode
}

export const IconButton: React.FC<IconButtonPropsType & React.ComponentProps<typeof IconButtonContainer>> = ({icon, ...props}) => {
  return (
    <IconButtonContainer {...props}>
      {icon}
    </IconButtonContainer>
  )
}

