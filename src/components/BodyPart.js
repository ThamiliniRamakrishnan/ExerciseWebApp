import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    
  return (
    <Stack
        type='button'
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            // borderTop:'4px solid #FF2625',
            // borderTop: bodyPart === item ? '4px solid #FF2625' : ' ',
            background: '#fff', 
            borderRadius: '20px',
            // borderBottomLeftRadius: '20px', 
            width: '270px', 
            height: '282px', 
            cursor: 'pointer', 
            gap: '47px' 
        }}
        onClick={() => {
            setBodyPart(item);
            console.log('setBodyPart:', setBodyPart);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'}); 
        }}
    >
        <img 
            src={Icon} 
            alt='Dumbbell' 
            style={{
                width:'40px',
                height:'40px'
            }}
        />
        <Typography 
            fontSize='24px' 
            fontWeight='bold' 
            fontFamily='Alegreya' 
            color='#3A1212' 
            textTransform='capitalize'
        >
            {item}
        </Typography>
    </Stack>    
  )
}

export default BodyPart