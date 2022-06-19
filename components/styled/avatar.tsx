import { styled } from "../../stitches.config"

export const Avatar = styled('img', {
  borderRadius: '100vw',
  variants: {
    size: {
      sm: {
        with: 24,
        height: 24,
      },
      md: {
        with: 32,
        height: 32,
      },
      lg: {
        with: 48,
        height: 48,
      },
    }
  },
  defaultVariants: {
    size: 'sm',
  }
})
