import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root:before': {
    display: 'none'
  }
})

const useActivityConfig = {
  avatar: '',
  userName: 'Mohan',
  useCreationTime: new Date(),
  profileUpdatedTime: new Date(),
  testStartTime: new Date(),
  testNumber: '2',
  testCompleteTime: new Date(),
  testStage: 'Secondary',
  reward: '100 points',
  rewardUtilized: '10 points',
  rewardUtilizationTime: new Date(),
  teamCreationTime: new Date(),
  teamName: 'Delhi Devils',
  matchUpInitiationTime: new Date(),
  addedMembers: ['Ram', 'Sohan', 'Ali'],
  membersAdditionData: new Date(),
  matchUpTeam: 'Mumbai Indians'
}

const UserActivityTimeLine = () => {
  return (
    <Card>
      <CardHeader title='  Activity Timeline' />
      <CardContent>
        <Divider sx={{ mt: '-15px', mb: 3 }} />
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User initiated a matchup with {useActivityConfig?.matchUpTeam}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.matchUpInitiationTime.toDateString()}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  Users added to team {useActivityConfig?.teamName}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.membersAdditionData.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>{useActivityConfig?.addedMembers.join(', ')} added to team</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User created Team {useActivityConfig?.teamName}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.teamCreationTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>Creation of {useActivityConfig?.teamName}</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User utilized {useActivityConfig?.rewardUtilized}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.rewardUtilizationTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>Achieved {useActivityConfig?.reward} points in rewards.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User won {useActivityConfig?.reward}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.testCompleteTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>Achieved {useActivityConfig?.reward} points in rewards.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User completed stage {useActivityConfig?.testStage.toLowerCase()}
                </Typography>
              </Box>
              <Typography variant='body2'>
                {useActivityConfig?.userName} reached the {useActivityConfig?.testStage} stage of the test
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User completed Test {useActivityConfig?.testNumber}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.testCompleteTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>
                {useActivityConfig?.userName} successfully concluded a challenging test.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User started test {useActivityConfig?.testNumber}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.testStartTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'> {useActivityConfig?.userName} initiated test.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User updated personal information
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.profileUpdatedTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 3 }}>
                {useActivityConfig?.userName} profile underwent recent changes.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar alt='Avatar' src='/images/avatars/3.png' sx={{ width: 38, height: 38, mr: 3 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {useActivityConfig?.userName}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Typography variant='h6' sx={{ mr: 2 }}>
                  User created
                </Typography>

                <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                  {useActivityConfig?.useCreationTime.toDateString()}
                </Typography>
              </Box>
              <Typography variant='body2'>
                {useActivityConfig?.userName} established a unique digital identity.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default UserActivityTimeLine
