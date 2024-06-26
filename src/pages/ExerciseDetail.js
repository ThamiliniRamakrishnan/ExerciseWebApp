import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeVideoOptions } from '../utils/fetchData'
import { Detail, ExerciseVideos, SimilarExercises } from '../components'

const ExerciseDetail = () => {
  const[exerciseDetail,setExerciseDetail]=useState({})
  const[exerciseVideos, setExerciseVideos]=useState([])
  const[targetMuscleExercisesData, setTargetMuscleExercisesData]=useState([])
  const[equipmentExercisesData, setEquipmentExercisesData]=useState([])

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeVideoOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercisesData(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercisesData(equipmentExercisesData);
    }
    fetchExercisesData();
  },[id])

  console.log('ed' , exerciseDetail)

  return (
    <Box>
      <Detail 
        exerciseDetail={exerciseDetail}
      />
      <ExerciseVideos 
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises 
        targetMuscleExercisesData={targetMuscleExercisesData}
        equipmentExercisesData={equipmentExercisesData}
      />
    </Box>
  )
}

export default ExerciseDetail