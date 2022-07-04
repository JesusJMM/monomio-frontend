import { Box, Title, Button } from '../../components/styled'
import { TextInput } from '../../components/forms'
import { styled } from '../../stitches.config'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { User } from '../../components/feed/articleEntry'

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
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      onSubmit={async (values) => {
        const res = await fetch("http://localhost:8080/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(values),
          mode: "cors",
          headers: {
            'Content-Type': "application/json",
          },
        })
        let json: {
          token: string,
          user: User,
        } = await res.json()
        window.localStorage.removeItem("authToken")
        window.localStorage.setItem("authToken", json.token)
      }}
      validationSchema={
      Yup.object().shape({
        name: Yup.string()
          .min(3, "Too short")
          .max(50, "Too Long!")
          .required("Required"),
        password: Yup.string()
          .min(8, "Too short")
          .required("Required"),
      })
      }
    >
      {({ handleSubmit }) => (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title position='center' order={'2'}>
              Signup
            </Title>
            <TextInput
              type="text"
              label="Name"
              name="name"
              placeholder='Your Name'
              required
              description='Must be unique'
            />
            <TextInput
              name="password"
              label="Password"
              required
              placeholder='Secret'
            />
            <Box css={{ display: 'flex', justifyContent: 'right' }}>
              <Button type="submit" color='dark'>Submit</Button>
            </Box>
          </Form>
        </Container>
      )}
    </Formik>
  )
}
