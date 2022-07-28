import React from 'react'
import { Typography, Paper } from '@mui/material'


interface TierProps {
    children: React.ReactNode;
}

const Tier = (props: TierProps) => {
    return (
        <Paper sx={{ 
            justifyContent: 'center', 
            bgcolor: 'transparent',
            color: 'black',
            alignItems: 'center', 
            display:'flex', 
            width: 1, 
            height: 1
        }}>
            <Typography gutterBottom variant="h5" component="div">
                {props.children}
            </Typography>
        </Paper>
    )
}

export default Tier