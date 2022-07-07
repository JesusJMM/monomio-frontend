import { Box, Title, Button, HelpMsg } from '../../components/styled'
import { TextInput } from '../../components/forms'
import { styled } from '../../stitches.config'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuthContext } from '../../context/auth'

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

export default function SignupPage() {
  const { login } = useAuthContext()
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      onSubmit={async (values) => {
        if (login) {
          const err = await login(values)
          if (err) {
            setErrorMsg(err)
            return
          }
        }
        router.push('/')
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string()
            .required("Required"),
          password: Yup.string()
            .required("Required"),
        })
      }
    >
      {({ handleSubmit }) => (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title position='center' order={'2'}>
              Login
            </Title>
            {errorMsg && (
              <HelpMsg color="red" position="center">
                {errorMsg}
              </HelpMsg>
            )}
            <TextInput
              type="text"
              label="Name"
              name="name"
              placeholder='Your Name'
              required
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

