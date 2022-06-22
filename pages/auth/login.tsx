import { Box, Title, Button } from '../../components/styled'
import { TextInput, PasswordInput } from '../../components/forms'
import { styled } from '../../stitches.config'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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

interface formValues {
  name: string
  password: string
}


export default function LoginPage() {
  const formik = useFormik<formValues>({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, 'Must have 4 character at least')
        .max(30, 'Must be less than 30 characters')
        .required('Required'),
      password: Yup.string()
        .required('Required'),
      }),
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <Container>
      <Form>
        <Title position='center' order={'2'}>
          Login
        </Title>
        <TextInput 
          type="text"
          label="Name"
          placeholder='Your Name' 
          required
          {...formik.getFieldProps('name')} 
          error={ formik.touched.name ? formik.errors.name: '' }
        />
        <PasswordInput 
          label="Password"
          required
          placeholder='Secret'
          {...formik.getFieldProps('email')} 
          error={ formik.touched.password ? formik.errors.password : '' }
        />
        <Box css={{ display: 'flex', justifyContent: 'right'}}>
          <Button type="submit" color='dark'>Submit</Button>
        </Box>
      </Form>
    </Container>
  )
}
