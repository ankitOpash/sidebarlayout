import * as Yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

const resetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Password is Required !')
    .matches(passwordRules, { message: 'Please create a stronger password !' }),
  confirmNewPassword: Yup.string()
    .required('Confirm-Password is Required !')
    .oneOf([Yup.ref('newPassword') || null], 'Passwords must match')
})

interface initialValues {
  newPassword: string
  confirmNewPassword: string
}
const useResetPassword = () => {
  const initialValues: initialValues = {
    newPassword: '',
    confirmNewPassword: ''
  }

  const handleResetPassword = (values: initialValues) => {
    console.log('i am reset password:-', values)
  }

  return {
    defaultValues: initialValues,
    schema: resetPasswordSchema,
    handleResetPassword
  }
}

export default useResetPassword
