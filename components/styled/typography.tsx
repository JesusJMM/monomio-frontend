import { styled } from "../../stitches.config"

export const Title = styled('p', {
  fontSize: '6vw',
  fontWeight: 'bold',
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
