import { styled } from '../../stitches.config'

export const Container = styled('div', {
  maxWidth: '600px',
  margin: 'auto',
  variants: {
    padding: {
      none: {
        padding: 0,
      },
      sm: {
        padding: 8,
      },
      md: {
        padding: '1em',
      },
      lg: {
        padding: '2em',
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
  variants: {
    position: {
      center: { justifyContent: 'center', },
      end: { justifyContent: 'end', },
      start: { justifyContent: 'start', },
      space: { justifyContent: 'space-between', }
    },
    align: {
      center: { alignItems: 'center',},
      end: { alignItems: 'end', },
      start: { alignItems: 'start', },
    }
  },
})

