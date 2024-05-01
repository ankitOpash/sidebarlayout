import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  icon?: string
  stats: string
  title: string
  color?: ThemeColor
}

const data: DataType[] = [
  {
    stats: '5+ Hrs',
    title: 'Daily',
    color: 'success',
    icon: 'material-symbols:calendar-month-outline'
  },
  {
    stats: '35+ Hrs',
    title: 'Weekly'
  },
  {
    stats: '20+ Days ',
    title: 'Monthly'
  },
  {
    stats: '240+ Days',
    title: 'Annually'
  }
]

const renderStats = () => {
  return data.map((item: DataType, index: number) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        {item?.icon && (
          <CustomAvatar skin='light' color={item.color} sx={{ mr: 4, width: 42, height: 42 }}>
            <Icon icon={item.icon} fontSize='1.5rem' />
          </CustomAvatar>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{item.stats}</Typography>
          <Typography variant='body2'>{item.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const UserPerformance = () => {
  return (
    <Card>
      <CardHeader title='Performance' />
      <CardContent>
        <Divider sx={{ mt: '-15px', mb: 3 }} />
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserPerformance
