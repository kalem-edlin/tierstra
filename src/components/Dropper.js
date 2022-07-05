import React from 'react'
import { Box } from '@mui/material'
import { Droppable } from 'react-beautiful-dnd'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const tileActions = ['delete', 'edit']

export default function Dropper(props) {
    return (
        <Box sx={{ 
            mt: 3,
            opacity: props.dragging === null ? 0 : 0.8,
            transition: '1s all ease',
            width: 1,
            float: 'right',
            flexDirection: 'row-reverse',
            display:'flex',
        }} >
            { tileActions.map( action => {
                return (
                    <Droppable 
                        key={action} 
                        droppableId={action} 
                        direction="vertical" 
                        type={"tile"} 
                        isCombineEnabled={true} 
                    >
                        {(provided, snapshot) => {
                            return <Box 
                                ref={provided.innerRef} 
                                {...provided.droppableProps} 
                                sx={{
                                    width: '100px',
                                    height: '50px',
                                    border: '1px solid lightgrey',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display:'flex',
                                    borderRadius: '10px',
                                    backgroundColor: snapshot.isDraggingOver ? "#E0FFFF" : "transparent"
                                }}
                            >
                                {provided.placeholder}
                                {/* {action === "delete" && <DeleteIcon />}
                                {action === "edit" && <EditIcon />} */}
                            </Box>
                        }}
                    </Droppable>
                )
            })}
        </Box>
    )
}