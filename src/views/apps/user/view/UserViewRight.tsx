// ** React Imports
import { SyntheticEvent, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import MuiTab, { TabProps } from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Demo Components Imports
import UserSummary from './UserSummary'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import UserFacets from './UserFacets'
import UserSettings from './UserSettings'
import UserTeams from './UserTeams'

interface Props {
  tab: string
  invoiceData: InvoiceType[]
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(1.5)
  }
}))

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const UserViewRight = ({ tab, invoiceData }: Props) => {
  // ** State
  const [activeTab, setActiveTab] = useState<string>(tab)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // ** Hooks
  const router = useRouter()

  const handleChange = (event: SyntheticEvent, value: string) => {
    setIsLoading(true)
    setActiveTab(value)
    router
      .push({
        pathname: `/apps/user/view/${value.toLowerCase()}`
      })
      .then(() => setIsLoading(false))
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  useEffect(() => {
    if (invoiceData) {
      setIsLoading(false)
    }
  }, [invoiceData])

  return (
    <TabContext value={activeTab}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='summary' label='Summary' icon={<Icon fontSize='1.125rem' icon='solar:chart-linear' />} />
        <Tab value='facets' label='FACETS' icon={<Icon fontSize='1.125rem' icon='lets-icons:dimond-alt-light' />} />
        <Tab value='teams' label='Teams' icon={<Icon fontSize='1.125rem' icon='fluent:people-team-16-regular' />} />
        <Tab value='settings' label='Settings' icon={<Icon fontSize='1.125rem' icon='ep:setting' />} />
      </TabList>
      <Box sx={{ mt: 4 }}>
        {isLoading ? (
          <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress sx={{ mb: 4 }} />
            <Typography>Loading...</Typography>
          </Box>
        ) : (
          <>
            <TabPanel sx={{ p: 0 }} value='summary'>
              <UserSummary />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='facets'>
              <UserFacets />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='teams'>
              <UserTeams />
            </TabPanel>
            <TabPanel sx={{ p: 0 }} value='settings'>
              <UserSettings />
            </TabPanel>
          </>
        )}
      </Box>
    </TabContext>
  )
}

export default UserViewRight
