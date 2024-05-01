import Grid from '@mui/material/Grid'
import UserActivityTimeLine from './UserActivityTimeLine'
import UserPerformance from './UserPerformance'
import UserRewards from './UserRewards'
import UserStatistics from './UserStatics'

const UserSummary = () => {
  return (
    <Grid container spacing={1} sx={{ gap: '10px' }}>
      <Grid item xs={12}>
        <UserStatistics />
      </Grid>
      <Grid item xs={12}>
        <UserRewards />
      </Grid>
      <Grid item xs={12}>
        <UserPerformance />
      </Grid>
      <Grid item xs={12}>
        <UserActivityTimeLine />
      </Grid>
    </Grid>
  )
}

export default UserSummary
