import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Typography, Box, Container, useTheme } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { loadTierlist } from '../data/Import'
import { handleRowChange, handleTileChange } from '../data/DragPersist'

const Tierlist = React.forwardRef((props, screenshotRef) => {
    const [data, setData] = useState(loadTierlist())
    
    // On data change, will update session storage and the SSOT for exports
    useEffect(() => {
        sessionStorage.setItem('tierlistData', JSON.stringify(data))
        props.setDataForExports(data)
    }, [data])

    const handleDrag = (result) => {
        const { destination, source, type, draggableId} = result
        if ( !destination ) { return }
        const sameDestination = destination.droppableId === source.droppableId 
        if ( sameDestination && destination.index === source.index) { return }
        if ( type === "row" ) {
            setData(handleRowChange(data, source, destination, draggableId))
        } else {
            setData(handleTileChange(data, source, destination, draggableId, sameDestination))
        }
    }

    return (
        <DragDropContext onDragEnd={handleDrag}>
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Droppable droppableId="tierlist" direction="vertical" type={"row"}> 
                    {provided => (
                        <Box
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                        >
                            <div ref={screenshotRef}>
                                {data.tierRowOrder && data.tierRowOrder.map((rowId, index) => {
                                    const row = data.rows[rowId];
                                    const tiles = row.tileIds.map(tileId => data.tiles[tileId]);
                                    return <Row key={row.id} row={row} tiles={tiles} index={index}/>;
                                })}
                                {provided.placeholder}
                            </div>
                        </Box>
                    )}
                </Droppable>
                <Palette listId={'palette'}  tiles={data.rows['palette'].tileIds.map(tileId => data.tiles[tileId])}/>
            </Container>
        </DragDropContext>
    )
})

export default Tierlist

function Row(props) {
    return (
        <Draggable draggableId={props.row.id} index={props.index} type={"row"}>
            {provided => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    sx={{ border: '1px solid lightgrey', borderRadius: '0px 20px 20px 0px', display: 'flex', flexDirection: 'row', width: 1, height: 100 }}
                >
                    <Box 
                        //drag handle props provided to make this box (small part of row) the drag grab location
                        {...provided.dragHandleProps} 
                        sx={{ border: '1px solid black', borderRadius: '2px', width: 0.15, height: 1 }}
                    >
                        <TextBox variant="h5"> {props.row.title} </TextBox>
                    </Box>
                    <TileList key={props.row.id} listId={props.row.id} tiles={props.tiles}/>
                </Box>
            )}
        </Draggable>
    )
}

function Palette(props) {
    return (
        <Box 
            sx={{ mt: 2, /*border: '1px solid lightgrey',*/ borderRadius: '2px', display: 'flex', flexDirection: 'row', width: 1, height: 100 }}
        >
            <TileList key={props.listId} listId={props.listId} tiles={props.tiles}/>
        </Box>
    )
}

function TileList(props) {
    return (
        <Droppable droppableId={props.listId} direction="horizontal" type={"tile"}>
            {provided => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.droppableProps} 
                    sx={{ borderRadius: '2px', display: 'flex', flexDirection: 'row', width: 1, height: 1}}
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
                    sx={{ width: 0.15, height: 1, border: '1px solid lightgrey' }}
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

