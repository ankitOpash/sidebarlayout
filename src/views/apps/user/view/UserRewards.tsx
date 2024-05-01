import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

const data: DataType[] = [
  {
    stats: '23',
    title: 'Celestial Stars',
    color: 'warning',
    icon: 'pepicons-pencil:stars'
  }
]

const renderStats = () => {
  return data.map((sale: DataType, index: number) => (
    <Grid item xs={6} md={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' color={sale.color} sx={{ mr: 4, width: 42, height: 42 }}>
          <Icon icon={sale.icon} fontSize='1.5rem' />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5'>{sale.stats}</Typography>
          <Typography variant='body2'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const UserRewards = () => {
  return (
    <Card>
      <CardHeader title='Rewards' />
      <CardContent>
        <Divider sx={{ mt: '-15px', mb: 3 }} />
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserRewards
