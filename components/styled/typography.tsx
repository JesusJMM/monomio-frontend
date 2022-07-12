import { styled } from "../../stitches.config"

export const Text = styled('p', {
  fontFamily: `'Inter', sans-serif`,
  color: '$gray12',
  fontSize: '16px',
  variants: {
    variant: {
      anchor: {
        '&:hover': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    },
    position: {
      center: {
        textAlign: 'center'
      }
    },
    color: {
      red: {
        color: '$red9',
      },
      gray: {
        color: '$gray11'
      }
    },
    size: {
      xs: {
        fontSize: '10px',
      },
      sm: {
        fontSize: '12px',
      },
      md: {
        fontSize: '14px',
      },
      lg: {
        fontSize: '16px',
      },
      xl: {
        fontSize: '18px',
      },
      '2xl': {
        fontSize: '24px',
      },
      '3xl': {
        fontSize: '28px',
      },
    },
    font: {
      text: {
        fontFamily: "'Roboto', sans-serif",
      },
    }
  }
})

export const HelpMsg = styled(Text, {
  fontFamily: `sans-serif`,
  fontSize: '12px',
  marginTop: '4px',
  color:"$gray11",
})

export const Title = styled(Text, {
  fontSize: '6vw',
  fontWeight: 'bold',
  variants: {
    order: {
      1: {
        fontSize: 32,
        '@bp1': {
          fontSize: 44,
        },
      },
      2: {
        fontSize: 28,
        '@bp1': {
          fontSize: 38,
        },
      },
      3: {
        fontSize: 24,
        '@bp1': {
          fontSize: 30,
        },
      }
    }
  },
  defaultVariants: {
    order: '1'
  },
})
