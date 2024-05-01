import { Card, CardContent, CardHeader } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  title: string
  imgSrc: string
  progress: number
  subtitle: string
  progressColor: ThemeColor
  time: string
  questions: number
  avgTime: string
}

const facetsConfig: DataType[] = [
  {
    progress: 54,
    title: 'Laravel',
    subtitle: 'eCommerce',
    progressColor: 'error',
    imgSrc: '/images/logos/laravel.png',
    time: '2 Hr',
    questions: 20,
    avgTime: '1.2 hrs'
  },
  {
    progress: 85,
    title: 'Figma',
    subtitle: 'App UI Kit',
    progressColor: 'primary',
    imgSrc: '/images/logos/figma.png',
    time: '2 Hr',
    questions: 20,
    avgTime: '1.2 hrs'
  },
  {
    progress: 40,
    title: 'React',
    subtitle: 'Dashboard',
    progressColor: 'info',
    imgSrc: '/images/logos/react.png',
    time: '1 Hr',
    questions: 10,
    avgTime: '1.2 hrs'
  },
  {
    progress: 17,
    title: 'Bootstrap',
    subtitle: 'Website',
    progressColor: 'primary',
    imgSrc: '/images/logos/bootstrap.png',
    time: '1 Hr',
    questions: 5,
    avgTime: '1.2 hrs'
  }
]

const UserFacets = () => {
  return (
    <Card>
      <CardHeader title='Skill Insights' />

      <CardContent>
        <Divider sx={{ mt: '-15px', mb: 1 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'text.disabled',
            fontSize: '14px',
            alignItems: 'center'
          }}
        >
          <Box sx={{ marginLeft: '30px' }}>Skill</Box>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}>
            <Box>Accuracy</Box>
            <Box sx={{ marginLeft: '50px' }}>Time Spent</Box>
            <Box
              sx={{
                wordBreak: 'break-word',
                width: '100px',
                wordWrap: 'break-word',
                overflow: 'hidden',
                textAlign: 'center'
              }}
            >
              Average Time Spent
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 1, mb: 2 }} />

        {facetsConfig.map((item: DataType, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== facetsConfig.length - 1 ? 4.5 : undefined
              }}
            >
              <img alt={item.title} src={item.imgSrc} width={32} />
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
                    {item.questions} Questions
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LinearProgress
                      value={item.progress}
                      variant='determinate'
                      color={item.progressColor}
                      sx={{ mr: 4, height: 8, width: 80 }}
                    />
                    <Typography sx={{ color: 'text.disabled' }}>{`${item.progress}%`}</Typography>
                  </Box>
                  <Typography sx={{ color: 'text.disabled' }}>{`${item.time}`}</Typography>
                  <Typography
                    sx={{ color: 'text.disabled', marginLeft: '20px', marginRight: '20px' }}
                  >{`${item.avgTime}`}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default UserFacets
