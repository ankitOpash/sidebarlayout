// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

//rect hook form

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useResetPassword from './useResetPassword'
import Image from 'next/image'

interface State {
  newPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showConfirmNewPassword: boolean
}

// ** Styled Components
const ResetPasswordIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 650,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: `${theme.palette.primary.main} !important`
}))

const ResetPasswordV2 = () => {
  // ** States
  const [values, setValues] = useState<State>({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })

  // ** Hooks
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // Handle New Password

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm New Password

  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword
    })
  }
  const { defaultValues, schema, handleResetPassword } = useResetPassword()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <ResetPasswordIllustration
            alt='reset-password-illustration'
            src={`/images/pages/auth-v2-reset-password-illustration-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Image src='/images/bezt-logo.svg' alt='bezt' width={80} height={60} />
            <Box sx={{ my: 6 }}>
              <Typography variant='h3' sx={{ mb: 1.5 }}>
                Reset Password 🔒
              </Typography>
              <Typography sx={{ display: 'flex' }}>
                for{' '}
                <Typography component='span' sx={{ ml: 1, fontWeight: 500 }}>
                  john.doe@email.com
                </Typography>
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={handleSubmit(handleResetPassword)}>
              <Controller
                name='newPassword'
                control={control}
                rules={{ required: 'New Password is required' }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    autoFocus
                    label='New Password'
                    value={value}
                    placeholder='············'
                    sx={{ display: 'flex', mb: 4 }}
                    id='auth-reset-password-v2-new-password'
                    onChange={onChange}
                    onBlur={onBlur}
                    type={values.showNewPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowNewPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon fontSize='1.25rem' icon={values.showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(errors.newPassword)}
                    helperText={errors.newPassword?.message}
                  />
                )}
              />

              <Controller
                name='confirmNewPassword'
                control={control}
                rules={{
                  required: 'Confirm Password is required',
                  validate: value => value === values.newPassword || 'Passwords do not match'
                }}
                render={({ field: { value, onChange, onBlur } }) => (
                  <CustomTextField
                    fullWidth
                    label='Confirm Password'
                    placeholder='············'
                    sx={{ display: 'flex', mb: 4 }}
                    value={value}
                    id='auth-reset-password-v2-confirm-password'
                    type={values.showConfirmNewPassword ? 'text' : 'password'}
                    onChange={onChange}
                    onBlur={onBlur}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                            onClick={handleClickShowConfirmNewPassword}
                          >
                            <Icon
                              fontSize='1.25rem'
                              icon={values.showConfirmNewPassword ? 'tabler:eye' : 'tabler:eye-off'}
                            />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    error={Boolean(errors.confirmNewPassword)}
                    helperText={errors.confirmNewPassword?.message}
                  />
                )}
              />
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                Set New Password
              </Button>
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': { mr: 1 }
                }}
              >
                <Typography component={LinkStyled} href='/pages/auth/login-v2'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
                </Typography>
              </Typography>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

ResetPasswordV2.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ResetPasswordV2
