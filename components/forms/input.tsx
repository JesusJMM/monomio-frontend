import * as React from 'react'
import { styled } from '../../stitches.config'

const Container = styled('div', {
  marginBlock: '1em',
})

const InputContainer = styled('div', {
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
  },
  defaultVariants: {
    state: 'ok',
  },
})

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

const HelpMsg = styled('p', {
  fontSize: '12px',
  color: '$gray11',
  marginTop: '4px',
  variants: {
    error: {
      true: {
        color: '$red9',
      },
    },
  },
})

type TextInputProps = React.ComponentProps<typeof StyledInput> & {
  label?: string
  required?: boolean
  error?: string | undefined
  description?: string | undefined
  name: string
}

export const TextInput: React.FC<TextInputProps> = ({
  description,
  error,
  required,
  label,
  ...props
}) => {
  return (
    <Container>
      {label && <Label required={required}>{label}</Label>}
      {description && <HelpMsg>{description}</HelpMsg>}
      <InputContainer>
        <StyledInput {...props} state={error ? 'error': 'ok'} />
      </InputContainer>
      { error ? (<HelpMsg error>{error}</HelpMsg>) : '' }
    </Container>
  )
}

export const PasswordInput: React.FC<TextInputProps> = ({
  description,
  error,
  required,
  label,
  ...props
}) => {
  const [inputType, setInputType] = React.useState<'password' | 'text'>('password')
  return (
    <Container>
      {label && <Label required={required}>{label}</Label>}
      {description && <HelpMsg>{description}</HelpMsg>}
      <InputContainer>
        <StyledInput {...props} type={inputType} state={error ? 'error': 'ok'} />
      </InputContainer>
      { error ? (<HelpMsg error>{error}</HelpMsg>) : '' }
    </Container>
  )
}
