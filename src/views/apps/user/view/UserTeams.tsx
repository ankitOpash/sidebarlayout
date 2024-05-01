import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'
import Papa from 'papaparse'
import Icon from 'src/@core/components/icon'

export type teamDataType = {
  id: number
  createdOn: string
  teamName: string
  teamMembers: { name: string; joinedOn: string; img: string; profileLink: string }[]
  teamDescription: string
  lastMessage: string
}

export type activityDataType = {
  id: number
  createdOn: string
  scoreboard: string
  initiatedBy: string
}

declare global {
  interface Navigator {
    msSaveBlob?: (blob: Blob, defaultName?: string) => boolean
  }
}

const chatSummaryConfig = [
  { name: 'Aisha Peenwal', noOfMessages: '194', talkTime: 61 },
  { name: 'Aromal Jose Baby', noOfMessages: '215', talkTime: 39 }
]

const teamData: teamDataType[] = [
  {
    id: 1,
    createdOn: '20/10/23',
    teamDescription: 'Nam ullamcorper ligula id consectetur auctor. ',
    teamName: 'Mumbai',
    teamMembers: [
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      },
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      },
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      }
    ],
    lastMessage: '18:42'
  },
  {
    id: 2,
    createdOn: '20/10/23',
    teamDescription: 'Nam ullamcorper ligula id consectetur auctor. ',
    teamName: 'Goa Gang',
    teamMembers: [
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      },
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      },
      {
        name: 'Test',
        joinedOn: '20/10/23',
        img: '/images/avatars/3.png',
        profileLink: '#'
      }
    ],
    lastMessage: '18:42'
  }
]

const activityData: activityDataType[] = [
  {
    id: 1,
    createdOn: '20/10/23',
    scoreboard: '230',
    initiatedBy: 'Mohan'
  },
  {
    id: 2,
    createdOn: '20/10/23',
    scoreboard: '210',
    initiatedBy: 'Sohan'
  }
]

type TeamCellType = {
  row: teamDataType
}

type ActivityCellType = {
  row: activityDataType
}

const Img = styled('img')(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  marginRight: theme.spacing(2.5)
}))

const teamColumns: GridColDef[] = [
  {
    flex: 0.35,
    minWidth: 100,
    field: 'teamMembers',
    headerName: 'Team Members',
    renderCell: ({ row }: TeamCellType) => {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          {row.teamMembers.map(({ img, joinedOn, name, profileLink }, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href={profileLink}>
                <Img src={img} alt={`project-${row.teamMembers}`} />
              </Link>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>{name}</Typography>
                <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                  {`Joined on ${joinedOn}`}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'teamName',
    headerName: 'Team Name',
    renderCell: ({ row }: TeamCellType) => <Typography sx={{ color: 'text.secondary' }}>{row.teamName}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 170,
    headerName: 'Team Description',
    field: 'teamDescription',
    renderCell: ({ row }: TeamCellType) => (
      <Box
        sx={{
          width: '170px',
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}
      >
        <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{`${row.teamDescription}%`}</Typography>
      </Box>
    )
  },
  {
    flex: 0.2,
    minWidth: 110,
    field: 'createdOn',
    headerName: 'Created on',
    renderCell: ({ row }: TeamCellType) => (
      <Typography sx={{ color: 'text.secondary' }}>{`${row.createdOn}`}</Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 110,
    field: 'lastMessage',
    headerName: 'Last message on',
    renderCell: ({ row }: TeamCellType) => (
      <Typography sx={{ color: 'text.secondary' }}>{`${row.lastMessage} h`}</Typography>
    )
  }
]

const activityColumns: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 100,
    field: 'createdOn',
    headerName: 'Created on',
    renderCell: ({ row }: ActivityCellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdOn}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 100,
    headerName: 'Initiated by',
    field: 'initiatedBy',
    renderCell: ({ row }: ActivityCellType) => (
      <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>{`${row.initiatedBy}`}</Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 110,
    field: 'scoreboard',
    headerName: 'Scoreboard',
    renderCell: ({ row }: ActivityCellType) => (
      <Typography sx={{ color: 'text.secondary' }}>{`${row.scoreboard}`}</Typography>
    )
  }
]

const exportToCSV = (data: any[], filename: string) => {
  const csv = Papa.unparse(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

  if (navigator.msSaveBlob) {
    // For IE
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')

    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

const UserTeams = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Team Details' />
          <CardContent>
            <DataGrid autoHeight rowHeight={140} rows={teamData} columns={teamColumns} disableRowSelectionOnClick />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title='Total Matchups' />
          <CardContent>
            <DataGrid
              autoHeight
              rowHeight={50}
              rows={activityData}
              columns={activityColumns}
              disableRowSelectionOnClick
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Chat summary'
            action={
              <Button
                variant='contained'
                onClick={() => exportToCSV(chatSummaryConfig, 'chat_data.csv')}
                sx={{ '& svg': { mr: 1 } }}
              >
                <Icon icon='material-symbols-light:download-sharp' fontSize='20px' />
                Export Chat
              </Button>
            }
          />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Box sx={{ alignSelf: 'end', display: 'flex', gap: '25px', fontSize: '12px', color: 'text.disabled' }}>
                <Box>WPM</Box>
                <Box>TALK TIME</Box>
              </Box>

              {chatSummaryConfig.map(({ name, noOfMessages, talkTime }, idx) => (
                <Box
                  key={idx}
                  sx={{
                    padding: '0 20px',
                    borderRadius: '50px',
                    background: '#F4F5F4',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>{name}</Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', height: '40px', gap: '40px' }}>
                    <Box>{noOfMessages}</Box>
                    <Box sx={{ position: 'relative', marginTop: '3px' }}>
                      <CircularProgress
                        variant='determinate'
                        sx={{
                          color: 'lightgray'
                        }}
                        size={25}
                        thickness={4}
                        value={100}
                      />
                      <CircularProgress
                        variant='determinate'
                        disableShrink
                        sx={{
                          color: theme => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                          position: 'absolute',
                          left: 0,
                          [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round'
                          }
                        }}
                        size={25}
                        thickness={4}
                        value={talkTime}
                      />
                      <Box sx={{ position: 'absolute', left: 4, top: 6, fontSize: '9px' }}>{talkTime}%</Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserTeams
