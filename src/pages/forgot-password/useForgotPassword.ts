import { commonSchema } from 'src/schema/commonSchema'

interface Props {
  email: string
}
const useForgotPassword = () => {
  const initialValues: Props = {
    email: ''
  }

  const handleForgotPassword = (values: Props) => {
    const { email } = values
    console.log('forgot password:-', email)
  }

  return {
    defaultValues: initialValues,
    schema: commonSchema,
    handleForgotPassword
  }
}
export default useForgotPassword
