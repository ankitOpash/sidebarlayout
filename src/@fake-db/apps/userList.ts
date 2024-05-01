// ** Mock
import mock from 'src/@fake-db/mock'

// ** Types
import { UsersType, ProjectListDataType } from 'src/types/apps/userTypes'

const data: { users: UsersType[] } = {
  users: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      email: 'gslixby0@abc.net.au',
      role: 'editor',
      status: 'inactive',
      gender: 'Female',
      avatar: '/images/avatars/3.png',
      dob: '25 Jan 2024',
      address: '101 vikaspuri delhi',
      company: 'Yotz PVT LTD',
      contact: '(479) 232-9151',
      avatarColor: 'primary',
      city: 'Delhi',
      district: 'Delhi',
      state: 'Delhi',
      pincode: '30009'
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      email: 'hredmore1@imgur.com',
      role: 'author',
      status: 'pending',
      avatar: '/images/avatars/3.png',
      gender: 'Male',
      dob: '15 Feb 1990',
      address: '42 Maple Street',
      company: 'Skinder PVT LTD',
      contact: '(472) 607-9137',
      avatarColor: 'primary',
      city: 'Tirana',
      district: 'Tirana',
      state: 'Tirana',
      pincode: '1001'
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      email: 'msicely2@who.int',
      role: 'maintainer',
      status: 'active',
      avatar: '/images/avatars/1.png',
      gender: 'Female',
      dob: '20 Nov 1985',
      address: '789 Main Street',
      company: 'Oozz PVT LTD',
      contact: '(321) 264-4599',
      avatarColor: 'primary',
      city: 'Moscow',
      district: 'Central',
      state: 'Central',
      pincode: '101000'
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      email: 'crisby3@wordpress.com',
      role: 'maintainer',
      status: 'inactive',
      avatar: '/images/avatars/3.png',
      gender: 'Male',
      dob: '10 Mar 1988',
      address: '123 Oak Street',
      company: 'Oozz PVT LTD',
      contact: '(923) 690-6806',
      avatarColor: 'primary',
      city: 'Shanghai',
      district: 'Pudong',
      state: 'Shanghai',
      pincode: '200000'
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      email: 'mhurran4@yahoo.co.jp',
      role: 'subscriber',
      status: 'pending',
      avatar: '/images/avatars/1.png',
      gender: 'Female',
      dob: '28 Apr 1995',
      address: '456 Pine Street',
      company: 'Aimbo PVT LTD',
      contact: '(669) 914-1078',
      avatarColor: 'warning',
      city: 'Islamabad',
      district: 'Islamabad',
      state: 'Islamabad',
      pincode: '44000'
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      email: 'shalstead5@shinystat.com',
      role: 'author',
      status: 'active',
      avatar: '',
      avatarColor: 'error',
      gender: 'Male',
      dob: '15 Sep 1992',
      address: '789 Maple Avenue',
      company: 'Jaxbean PVT LTD',
      contact: '(958) 973-3093',
      city: 'Beijing',
      district: 'Chaoyang',
      state: 'Beijing',
      pincode: '100000'
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      email: 'bgallemore6@boston.com',
      role: 'subscriber',
      status: 'pending',
      avatar: '',
      avatarColor: 'warning',
      gender: 'Female',
      dob: '12 Jul 1980',
      address: '567 Elm Street',
      company: 'Jazzy PVT LTD',
      contact: '(825) 977-8152',
      city: 'Toronto',
      district: 'Ontario',
      state: 'Ontario',
      pincode: 'M5J 2N8'
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      email: 'kliger7@vinaora.com',
      role: 'author',
      status: 'pending',
      avatar: '/images/avatars/4.png',
      gender: 'Female',
      dob: '5 Feb 1987',
      address: '876 Cedar Street',
      company: 'Pixoboo PVT LTD',
      contact: '(187) 440-0934',
      avatarColor: 'primary',
      city: 'Paris',
      district: 'Ile-de-France',
      state: 'Ile-de-France',
      pincode: '75001'
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      email: 'fscotfurth8@dailymotion.com',
      role: 'subscriber',
      status: 'pending',
      avatar: '/images/avatars/2.png',
      gender: 'Male',
      dob: '18 Oct 1991',
      address: '234 Birch Street',
      company: 'Tekfly PVT LTD',
      contact: '(978) 146-5443',
      city: 'Beijing',
      district: 'Dongcheng',
      state: 'Beijing',
      pincode: '100000'
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      email: 'jbellany9@kickstarter.com',
      role: 'maintainer',
      status: 'inactive',
      avatar: '/images/avatars/5.png',
      gender: 'Female',
      dob: '30 May 1983',
      address: '345 Pine Avenue',
      company: 'Gigashots PVT LTD',
      contact: '(589) 284-6732',
      avatarColor: 'error',
      city: 'Kingston',
      district: 'St. Andrew',
      state: 'St. Andrew',
      pincode: 'KGN 001'
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      email: 'jwharltona@oakley.com',
      role: 'subscriber',
      status: 'inactive',
      avatar: '/images/avatars/4.png',
      gender: 'Male',
      dob: '22 Aug 1986',
      address: '678 Maple Avenue',
      company: 'Eare PVT LTD',
      contact: '(176) 532-6824',
      city: 'New York',
      district: 'New York',
      state: 'New York',
      pincode: '10001'
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      email: 'shallamb@hugedomains.com',
      role: 'subscriber',
      status: 'pending',
      avatar: '/images/avatars/5.png',
      gender: 'Male',
      dob: '14 Apr 1998',
      address: '987 Oak Street',
      company: 'Yakitri PVT LTD',
      contact: '(234) 464-0600',
      city: 'Lima',
      district: 'Lima',
      state: 'Lima',
      pincode: 'LIM01'
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      email: 'ypottiec@privacy.gov.au',
      role: 'subscriber',
      status: 'inactive',
      avatar: '/images/avatars/7.png',
      gender: 'Female',
      dob: '8 Jul 1990',
      address: '876 Birch Avenue',
      company: 'Leenti PVT LTD',
      contact: '(907) 284-5083',
      city: 'Manila',
      district: 'Metro Manila',
      state: 'Metro Manila',
      pincode: '1000'
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      email: 'mkraused@stanford.edu',
      role: 'author',
      status: 'active',
      avatar: '/images/avatars/6.png',
      gender: 'Male',
      dob: '3 Dec 1982',
      address: '456 Pine Avenue',
      company: 'Digitube PVT LTD',
      contact: '(167) 135-7392',
      city: 'Kinshasa',
      district: 'Kinshasa',
      state: 'Kinshasa',
      pincode: '2345'
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      email: 'zmcclevertye@soundcloud.com',
      role: 'maintainer',
      status: 'active',
      avatar: '/images/avatars/2.png',
      gender: 'Female',
      dob: '16 Jun 1989',
      address: '234 Oak Street',
      company: 'Kaymbo PVT LTD',
      contact: '(317) 409-6565',
      city: 'Paris',
      district: 'Ile-de-France',
      state: 'Ile-de-France',
      pincode: '75002'
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      email: 'bemblinf@wired.com',
      role: 'author',
      status: 'active',
      avatar: '/images/avatars/6.png',
      gender: 'Male',
      dob: '19 Sep 1994',
      address: '789 Maple Avenue',
      company: 'Yambee PVT LTD',
      contact: '(590) 606-1056',
      city: 'Barcelona',
      district: 'Catalonia',
      state: 'Catalonia',
      pincode: '08001'
    }
  ]
}

const projectListData: ProjectListDataType[] = [
  {
    id: 1,
    hours: '18:42',
    progressValue: 78,
    totalTask: '122/240',
    progressColor: 'success',
    projectType: 'React Project',
    projectTitle: 'BGC eCommerce App',
    img: '/images/icons/project-icons/react.png'
  },
  {
    id: 2,
    hours: '20:42',
    progressValue: 18,
    totalTask: '9/56',
    progressColor: 'error',
    projectType: 'Figma Project',
    projectTitle: 'Falcon Logo Design',
    img: '/images/icons/project-icons/figma.png'
  },
  {
    id: 3,
    hours: '120:87',
    progressValue: 62,
    totalTask: '290/320',
    progressColor: 'primary',
    projectType: 'VueJs Project',
    projectTitle: 'Dashboard Design',
    img: '/images/icons/project-icons/vue.png'
  },
  {
    id: 4,
    hours: '89:19',
    progressValue: 8,
    totalTask: '7/63',
    progressColor: 'error',
    projectType: 'Xamarin Project',
    projectTitle: 'Foodista Mobile App',
    img: '/images/icons/project-icons/xamarin.png'
  },
  {
    id: 5,
    hours: '230:10',
    progressValue: 49,
    totalTask: '120/186',
    progressColor: 'warning',
    projectType: 'Python Project',
    projectTitle: 'Dojo React Project',
    img: '/images/icons/project-icons/python.png'
  },
  {
    id: 6,
    hours: '342:41',
    progressValue: 92,
    totalTask: '99/109',
    progressColor: 'success',
    projectType: 'Sketch Project',
    projectTitle: 'Blockchain Website',
    img: '/images/icons/project-icons/sketch.png'
  },
  {
    id: 7,
    hours: '12:45',
    progressValue: 88,
    totalTask: '98/110',
    progressColor: 'success',
    projectType: 'HTML Project',
    projectTitle: 'Hoffman Website',
    img: '/images/icons/project-icons/html5.png'
  }
]

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data

  const lastId = Math.max(...data.users.map(u => u.id), 0)

  user.id = lastId + 1

  data.users.unshift({ ...user, avatar: '', avatarColor: 'primary', status: 'active' })

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/users/list').reply(config => {
  const { q = '', role = null, status = null } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) && user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/users/project-list').reply(config => {
  const { q = '' } = config.params ?? ''

  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
