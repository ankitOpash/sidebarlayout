// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UsersType = {
  id: number
  fullName: string
  email: string
  role: string
  status: string
  gender: string
  avatar: string

  dob: string
  address: string
  company: string

  contact: string

  avatarColor?: ThemeColor
  city: string
  district: string
  state: string
  pincode: string
}

export type ProjectListDataType = {
  id: number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  progressColor: ThemeColor
}
