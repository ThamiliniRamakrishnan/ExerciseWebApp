import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercisesData, equipmentExercisesData }) => {
  return (
    <Box
      sx={{
        mt:{ lg:'100px', xs: '0'}
      }}
    >
      <Typography
        variant='h3'
        mb={5}
      >
        Exercises that target the same musle group
      </Typography>
      <Stack
        direction='row'
        sx={{
          p:'2',
          position:'relative'
        }}
      >
        {targetMuscleExercisesData.length ?
         <HorizontalScrollBar data={targetMuscleExercisesData}/>
         : <Loader />}
      </Stack>

      <Typography
        variant='h3'
        mb={5}
      >
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction='row'
        sx={{
          p:'2',
          position:'relative'
        }}
      >
        {equipmentExercisesData.length ?
         <HorizontalScrollBar data={equipmentExercisesData}/>
         : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises