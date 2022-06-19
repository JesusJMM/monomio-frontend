import { styled } from "../../stitches.config"

export const Title = styled('p', {
  fontSize: '6vw',
  fontWeight: 'bold',
  fontFamily: `'Inter'`,
  color: '$gray12',
  '@bp1': {
    fontSize: '1.8em',
  },
  variants: {
    variant: {
      anchor: {
        '&:hover': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
      },
    }
  }
})
