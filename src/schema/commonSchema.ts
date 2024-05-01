import * as Yup from 'yup'

export const commonSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required!')
})
