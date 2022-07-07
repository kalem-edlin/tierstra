import React from 'react'
import { Paper } from '@mui/material'
import List from './List'
import '../../tierlist.css';

const Palette = (props) => {
    return (
        <Paper 
            elevation={3} 
            sx={{ 
                mt: 5,
                borderRadius: '5px',
                overflow: 'hidden'
            }}>
            <List 
                key={props.listId} 
                listId={props.listId} 
                tiles={props.tiles} 
                tileLength={props.tileLength} 
                dragging={props.dragging}/>
        </Paper>
    )
}

export default Palette
