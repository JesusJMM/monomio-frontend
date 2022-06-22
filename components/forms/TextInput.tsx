import { styled } from '../../stitches.config'
import { Label } from './label'
import { Input } from './input'

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

const Container = styled('div', {
  marginBlock: '1em',
})

type TextInputProps = React.ComponentProps<typeof Input> & {
  label?: string
  required?: boolean
  error?: string | undefined
  description?: string | undefined
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
      <Input {...props} state={error ? 'error': 'ok'} />
      { error ? (<HelpMsg error>{error}</HelpMsg>) : '' }
    </Container>
  )
}
