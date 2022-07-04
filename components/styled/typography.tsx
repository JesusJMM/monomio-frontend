import { styled } from "../../stitches.config"

export const Text = styled('p', {
  fontFamily: `'Inter', sans-serif`,
  color: '$gray12',
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
    },
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
