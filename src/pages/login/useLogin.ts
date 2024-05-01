import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'
import { commonSchema } from 'src/schema/commonSchema'

interface UseLoginProps {
  rememberMe: boolean
}

interface InitialValues {
  email: string
  password: string
}

const loginSchema = commonSchema.concat(
  Yup.object().shape({
    password: Yup.string().required('Password is required!').min(5, 'Password must be at least 5 characters')
  })
)

const useLogin = ({ rememberMe }: UseLoginProps) => {
  const auth = useAuth()
  const { setError } = useForm()
  const initialValues: InitialValues = {
    email: '',
    password: ''
  }

  const handleLogin = (values: InitialValues) => {
    const { email, password } = values

    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return {
    defaultValues: initialValues,
    schema: loginSchema,
    handleLogin
  }
}
export default useLogin
