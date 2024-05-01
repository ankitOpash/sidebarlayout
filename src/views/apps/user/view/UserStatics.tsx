import { Card, CardContent, CardHeader } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const userStatsConfig = [
  { title: 'League', icon: 'bi:trophy', value: 'Champion', id: 1 },
  { title: 'Stage Level', icon: 'mdi:medal-outline', value: 'Pro', id: 2 },
  { title: 'Total Score', icon: 'healthicons:high-level-outline', value: '64', id: 3 },
  { title: 'Total Number of Questions', icon: 'ri:numbers-line', value: '32', id: 4 },
  { title: 'Total Time Spent', icon: 'icon-park-outline:time', value: '40 hr', id: 5 }
]

const UserStatistics = () => {
  return (
    <Card>
      <CardHeader title='Statistics' />
      <CardContent>
        <Divider sx={{ mt: '-15px', mb: 3 }} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          {userStatsConfig.map(({ icon, id, title, value }) => (
            <Box key={id} sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' variant='rounded' sx={{ mr: 2.5, width: 50, height: 50 }}>
                <Icon fontSize='1.75rem' icon={icon} />
              </CustomAvatar>
              <div>
                <Typography variant='body2'>{title}</Typography>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>{value}</Typography>
              </div>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default UserStatistics
