import { styled } from '../../stitches.config'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
})
const Form = styled('form', {
  border: '1px solid $gray7',
  padding: '1em',
  width: '300px',
  borderRadius: '8px',
})

export default function LoginPage() {
  return (
  <Container>
    <Form>
      <Title position='center' order={'2'}>Login</Title>
    </Form>
  </Container>
  )
}
