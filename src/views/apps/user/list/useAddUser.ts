import * as Yup from 'yup'

import { commonSchema } from 'src/schema/commonSchema'

interface InitialValues {
  fullName: string
  email: string
  role: string
}

const addUserSchema = commonSchema.concat(
  Yup.object().shape({
    fullName: Yup.string()
      .required('Name is required!')
      .min(3, 'Name must be at least 3 characters')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
    role: Yup.string()
      .required('Role is required!')
      .oneOf(
        ['admin', 'user manager', 'content manager'],
        'Invalid role. Must be admin, user manager, or content manager'
      )
  })
)

const useAddUser = () => {
  const initialValues: InitialValues = {
    fullName: '',
    email: '',
    role: 'admin'
  }

  const handleAddUser = (values: InitialValues) => {
    console.log(values)
  }

  return {
    defaultValues: initialValues,
    schema: addUserSchema,
    handleAddUser
  }
}
export default useAddUser
