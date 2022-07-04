import * as React from 'react'
import { styled } from '../../stitches.config'

const Container = styled('div', {
  
})
const Icon = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '36px',
  height:'36px',
})

const StyledInput = styled('input', {
  padding: '1px 12px',
  borderRadius: '8px',
  border: '1px solid $gray8',
  fontSize: '14px',
  minHeight: 36,
  width: '100%',
  // lineHeight: '32px',
  boxSizing: 'border-box',
  fontFamily: `'Inter', sans-serif`,
  marginTop: '8px',
  variants: {
    state: {
      ok: {
        '&:active, &:focus': {
          outline: 'none',
          border: '1px solid $blue8',
        },
      },
      error: {
        '&:active, &:focus': {
          outline: 'none',
        },
        border: '1px solid $red9',
        color: '$red9',
      },
    },
    withIcon: {
      true: {
        paddingLeft: '36px',
      }
    }
  },
  defaultVariants: {
    state: 'ok',
  },
})

export const Input : React.FC<React.ComponentProps<typeof StyledInput> & { icon?: React.ReactNode}> = ({ icon, ...props}) => {
  return (
    <Container>
      {icon && <Icon>{icon}</Icon> }
      <StyledInput {...props} withIcon={icon != undefined}/>
    </Container>
  )
}

// export const PasswordInput: React.FC<TextInputProps> = ({
//   description,
//   error,
//   required,
//   label,
//   ...props
// }) => {
//   const [inputType, setInputType] = React.useState<'password' | 'text'>('password')
//   return (
//     <Container>
//       {label && <Label required={required}>{label}</Label>}
//       {description && <HelpMsg>{description}</HelpMsg>}
//       <InputContainer>
//         <StyledInput {...props} type={inputType} state={error ? 'error': 'ok'} />
//       </InputContainer>
//       { error ? (<HelpMsg error>{error}</HelpMsg>) : '' }
//     </Container>
//   )
// }
