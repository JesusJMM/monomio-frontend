import { styled } from '../../stitches.config'
import { Label } from './label'
import { Input } from './input'
import { useField } from 'formik'
import { HelpMsg } from '../styled'

const Container = styled('div', {
  marginBlock: '1em',
})

type TextInputProps = React.ComponentProps<typeof Input> & {
  label?: string
  required?: boolean
  error?: string | undefined
  description?: string | undefined
}

export const TextInput: React.FC<TextInputProps & { name: string }> = ({
  description,
  error,
  required,
  label,
  ...props
}) => {
  const [field, meta] = useField(props)
  return (
    <Container>
      {label && <Label required={required}>{label}</Label>}
      {description && <HelpMsg>{description}</HelpMsg>}
      <Input {...props} {...field} state={error || (meta.error && meta.touched) ? 'error' : 'ok'} />
      {error ?
        (<HelpMsg color="red">{error}</HelpMsg>) :
        meta.touched && meta.error ?
          (<HelpMsg color="red">{meta.error}</HelpMsg>)
          : ''}
    </Container>
  )
}
