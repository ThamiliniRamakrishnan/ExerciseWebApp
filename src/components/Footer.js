import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { LogoFooter } from './imports'

const Footer = () => {
  return (
    <Box
      mt='80px'
      bgcolor='#fff3f4'
    >
      <Stack
        gap='40px'
        alignItems='center'
        px='40px'
        pt='24px'
      >
        <img 
          src={LogoFooter}
          alt='logo'
          width='200px'
          height='40px'
        />
        <Typography
          variant='h5'
          pb='40px'
          mt='20px'
        >
          Made with ❤️ by Thamilini Ramakrishnan
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer