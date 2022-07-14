import { Box, Title, Button, HelpMsg } from '../../components/styled'
import { TextInput } from '../../components/forms'
import { styled } from '../../stitches.config'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuthContext } from '../../context/auth'
import { Shell } from '../../components/layout'

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
  const [errMsg, setErrMsg] = useState("")
  const { signup } = useAuthContext()
  const router = useRouter()
  return (
    <Shell>
    <Formik
      initialValues={{
        name: '',
        password: '',
        img: '',
      }}
      onSubmit={async (values) => {
        if(signup){
          const err =  await signup(values)
          if(err){
            setErrMsg(err)
            return
          }
        }
        setErrMsg("")
        router.push('/')
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
            {errMsg && (
              <HelpMsg color="red" position="center">
                {errMsg}
              </HelpMsg>
            )}
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
            <TextInput
              name="img"
              label="Image"
              placeholder='https://avatars.githubusercontent.com/u/66509065?v=1'
            />
            <Box css={{ display: 'flex', justifyContent: 'right' }}>
              <Button type="submit" color='dark'>Submit</Button>
            </Box>
          </Form>
        </Container>
      )}
    </Formik>
    </Shell>
  )
}
