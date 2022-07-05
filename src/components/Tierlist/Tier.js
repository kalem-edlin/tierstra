import React from 'react'
import { Typography, Box } from '@mui/material'
import '../../tierlist.css';

const Tier = (props) => {
    return (
        <Box sx={{ 
            bgColor: 'primary.main', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display:'flex', 
            width: 1, 
            height: 1 
        }}>
            <Typography gutterBottom variant={props.variant} component="div">
                {props.children}
            </Typography>
        </Box>
    )
}

export default Tier