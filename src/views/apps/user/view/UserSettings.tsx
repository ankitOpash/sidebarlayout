import TimelineDot from '@mui/lab/TimelineDot'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { ThemeColor } from 'src/@core/layouts/types'

type SessionDataType = {
  icon: string
  color: string
  device: string
  browser: string
  location: string
  recentActivity: string
}

type NotificationDataType = {
  title: string
  description: string
  time: Date
  type: ThemeColor
  imgSrc?: string
  icon?: string
}

const sessionData: SessionDataType[] = [
  {
    color: 'info.main',
    location: 'Switzerland',
    device: 'HP Specter 360',
    icon: 'tabler:brand-windows',
    browser: 'Chrome on Windows',
    recentActivity: '10, July 2022 20:07'
  },
  {
    color: 'error.main',
    device: 'iPhone 12x',
    location: 'Australia',
    browser: 'Chrome on iPhone',
    icon: 'tabler:device-mobile',
    recentActivity: '13, July 2022 10:10'
  },
  {
    location: 'Dubai',
    color: 'success.main',
    device: 'OnePlus 9 Pro',
    icon: 'tabler:brand-android',
    browser: 'Chrome on Android',
    recentActivity: '4, July 2022 15:15'
  }
]

const notificationConfig: NotificationDataType[] = [
  {
    title: 'Nana Owusu',
    description: 'changed his password',
    imgSrc: '/images/avatars/1.png',
    time: new Date(),
    type: 'success'
  },
  {
    title: 'Jack Ryan',
    description: 'login failed three times',
    imgSrc: '/images/avatars/2.png',
    time: new Date(),
    type: 'error'
  },
  {
    title: 'Email Notifications',
    description: 'has reached to level 1000 this month',
    time: new Date(),
    type: 'success',
    icon: 'ic:outline-email'
  }
]

const UserSettings = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Notifications' />
          <Divider sx={{ m: '0 !important' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {notificationConfig.map((item: NotificationDataType, index: number) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 24px',
                    ...(notificationConfig.length - 1 !== index && { borderBottom: '1px #DDDDE0 solid' })
                  }}
                >
                  <TimelineDot color={item.type} sx={{ marginRight: '10px', marginTop: '14px' }} />
                  {item?.imgSrc && (
                    <img style={{ borderRadius: '100px' }} alt={item.title} src={item.imgSrc} width={32} />
                  )}
                  {item?.icon && (
                    <CustomAvatar skin='light' color={item.type} sx={{ width: 32, height: 32 }}>
                      <Icon icon={item.icon} fontSize='1.5rem' />
                    </CustomAvatar>
                  )}

                  <Box
                    sx={{
                      ml: 4,
                      rowGap: 1,
                      columnGap: 4,
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Typography variant='h6'>{item.title}</Typography>
                      <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                        {item.description}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography
                        sx={{ color: 'text.disabled', marginLeft: '20px', marginRight: '20px' }}
                      >{`${item.time.toDateString()}`}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Sessions created' />
          <Divider sx={{ m: '0 !important' }} />
          <TableContainer>
            <Table sx={{ minWidth: 500 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Recent Activity</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sessionData.map((item: SessionDataType, index: number) => (
                  <TableRow hover key={index} sx={{ '&:last-of-type td': { border: 0 } }}>
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { mr: 2, fontSize: '1.125rem', color: item.color }
                        }}
                      >
                        <Icon icon={item.icon} />
                        <Typography noWrap sx={{ color: 'text.secondary' }}>
                          {item.browser}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.device}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.location}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography noWrap sx={{ color: 'text.secondary' }}>
                        {item.recentActivity}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserSettings
