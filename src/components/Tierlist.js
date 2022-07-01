import React, { useState } from 'react'
import { Typography, Box, Container, useTheme } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import initialData from '../data/InitialData'

export default function Tierlist() {
    const [data, setData] = useState(initialData);
    const theme = useTheme();

    const onDragEnd = result => {
        //apply changes to data arrays/persist draggable components
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Droppable droppableId="tierlist" direction="vertical" type={"row"}> 
                    {provided => (
                        <Box
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                        >
                            {data.rowOrder.map((rowId, index) => {
                                const row = data.rows[rowId];
                                const tiles = row.tileIds.map(tileId => data.tiles[tileId]);
                                return <Row key={row.id} row={row} tiles={tiles} index={index}/>;
                            })}
                        </Box>
                    )}
                </Droppable>
            </Container>
        </DragDropContext>
    )
}


function Row(props) {
    return (
        <Draggable draggableId={"row"+props.row.id} index={props.index} type={"row"}>
            {provided => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    sx={{ mb: 2, border: '1px solid lightgrey', borderRadius: '2px', display: 'flex', flexDirection: 'row', width: 1, height: 100 }}
                >
                    <Box 
                        {...provided.dragHandleProps} 
                        sx={{ border: '1px solid black', borderRadius: '2px', width: 0.15, height: 1 }}
                    >
                        <TextBox variant="h5"> {props.row.title} </TextBox>
                    </Box>
                    <TileList key={props.row.id} row={props.row} tiles={props.tiles}/>
                </Box>
            )}
        </Draggable>
    )
}

function TileList(props) {
    return (
        <Droppable droppableId={"tile"+props.row.id} direction="horizontal" type={"tile"}>
            {provided => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.droppableProps} 
                    sx={{ border: '1px solid green', borderRadius: '2px', display: 'flex', flexDirection: 'row', width: 1, height: 1}}
                >
                    {props.tiles.map((tile, index) => (
                        <Tile key={tile.id} tile={tile} index={index} />
                    ))}
                    {provided.placeholder}
                </Box>
            )}
        </Droppable>
    )
}

function Tile(props) {
    return (
        <Draggable draggableId={props.tile.id} index={props.index} type={"tile"}>
            {provided => (
                <Box
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    sx={{ width: 1, height: 1, border: '1px solid lightgrey' }}
                >
                    <TextBox variant="p"> {props.tile.content} </TextBox>
                </Box>
            )}
        </Draggable>
    )
}

function TextBox(props) {
    return (
        <Box sx={{ bgColor: 'primary.main', justifyContent: 'center', alignItems: 'center', display:'flex', width: 1, height: 1 }}>
            <Typography gutterBottom variant={props.variant} component="div">
                {props.children}
            </Typography>
        </Box>
    )
}

