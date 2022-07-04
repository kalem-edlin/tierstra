import React, { useState, useEffect, createRef, useLayoutEffect } from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { loadTierlist } from '../data/Import'
import { handleRowChange, handleTileChange } from '../data/DragPersist'
import styled from '@emotion/styled';

const TierCanvas = React.forwardRef((props, screenshotRef) => {
    const [data, setData] = useState(loadTierlist())
    const [tileSize, setTileSize] = useState(100)
    const [didEndDrag, setDidEndDrag] = useState({})

    // When a payload is sent from parent component, apply it to data if it is not null
    useEffect(() => {
        console.log("payload incomming")
        if ( props.payload !== null ) setData(props.payload)
    }, [props.payload])
    
    // On data change, will update session storage and the SSOT for exports and tilesize data for screenshot bounds calculations
    useEffect(() => {
        sessionStorage.setItem('tierlistData', JSON.stringify(data))
        props.setDataForExports({
            ...props.dataForExports,
            data: data,
            tileSize: tileSize
        })
    }, [data])

    // Will persist the data changes IF there is a destination for any type of drag
    const handleDrag = (result) => {
        setDidEndDrag({})
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
            <Grid minWidth={300} sx={{ m: 8 }} alignItems={'center'} justifyContent={'center'} >
                <Droppable droppableId="tierlist" direction="vertical" type={"row"}> 
                    {provided => (
                        <Box
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                        >
                            <div ref={screenshotRef}>
                                {data.tierRowOrder && data.tierRowOrder.map((rowId, index) => {
                                    const row = data.rows[rowId]
                                    const tiles = row.tileIds.map(tileId => data.tiles[tileId])
                                    return <Row key={row.id} row={row} tiles={tiles} index={index} tileSize={tileSize} didEndDrag={didEndDrag}/>
                                })}
                                {provided.placeholder}
                            </div>
                        </Box>
                    )}
                </Droppable>
                <Palette listId={'palette'}  tiles={data.rows['palette'].tileIds.map(tileId => data.tiles[tileId])} tileSize={tileSize} didEndDrag={didEndDrag}/>
            </Grid>
        </DragDropContext>
    )
})

export default TierCanvas

function Row(props) {
    return (
        <Draggable draggableId={props.row.id} index={props.index} type={"row"}>
            {provided => (
                <Box 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    sx={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'row', width: 1, height: 1, borderRadius: '15px' }}
                >
                    <Box 
                        //drag handle props provided to make this box (small part of the row) the drag grab location
                        {...provided.dragHandleProps} 
                        sx={{ border: '1px solid grey', borderRadius: '15px 0px 0px 15px', backgroundColor: '#ffffff' , minWidth: props.tileSize, height: props.tileSize }}
                    >
                        <TextBox variant="h5"> {props.row.title} </TextBox>
                    </Box>
                    <RowTileListContainer>
                        <TileList key={props.row.id} listId={props.row.id} tiles={props.tiles} tileSize={props.tileSize} didEndDrag={props.didEndDrag} />
                    </RowTileListContainer>
                </Box>
            )}
        </Draggable>
    )
}

function Palette(props) {
    return (
        <Paper elevation={3} sx={{ mt: 6, border: '1px solid lightgrey', backgroundColor: '#ffffff', borderRadius: '15px', width: 1, height: 1, overflow: 'auto'}} >
            <TileList 
                key={props.listId} 
                listId={props.listId} 
                tiles={props.tiles} 
                tileSize={props.tileSize} 
                didEndDrag={props.didEndDrag}
            />
        </Paper>
    )
}

function TileList(props) {
    const [snapshotState, setSnapshotState] = useState()
    const [contentWidth, setContentWidth] = useState(props.tileSize * props.tiles.length)
    const [contentWidthExtended, setContentWidthExtended] = useState(false)
    
    // The useEffect functions will extend the scrollable container once to accomodate for one more tile if dragged over, will keep container tight once dragging complete
    useEffect(() => {
        if ( snapshotState && !contentWidthExtended ) {
            if ( snapshotState.isDraggingOver ) {
                setContentWidth(props.tileSize * props.tiles.length + props.tileSize)
                setContentWidthExtended(true)
            } 
        }
    }, [snapshotState])

    useEffect(() => {
        resetWidth()
    }, [props.didEndDrag, props.tiles])

    const resetWidth = () => {
        setContentWidthExtended(false)
        setContentWidth(props.tileSize * props.tiles.length)
    }


    return (
            <Droppable droppableId={props.listId} direction="horizontal" type={"tile"}>
                {(provided, snapshot) => {
                    // There is an (non-breaking) error produced by this where the TileList component attemps to rerender after setState before the droppable has finished rendering, will need to place the droppable outside of th TileList state environment
                    setSnapshotState(snapshot)
                    return <Box 
                        direction="row"
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        sx={{ 
                            borderRadius: '2px', 
                            height: props.tileSize, 
                            minWidth: 1,
                            width: contentWidth,
                            backgroundColor: snapshot.isDraggingOver ? "#E0FFFF" : "#ffffff", // on drag container highlight
                        }}
                        
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', overflowX: 'hidden', width: contentWidth, overflowY: 'hidden' }} >
                            {props.tiles.map((tile, index) => (
                                <Tile key={tile.id} tile={tile} index={index} tileSize={props.tileSize} />
                            ))}
                            {provided.placeholder}
                        </Box>
                    </Box>
                }}
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
                    sx={{ width: props.tileSize, height: props.tileSize, border: '1px solid lightgrey' }}
                >
                   <img src={require('../assets'+props.tile.content)} width={props.tileSize+"px"} height={props.tileSize+"px"} alt={props.tile.alt} />
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

// Makes a flex component keep its size and creates a scrollable div container for a row
const RowTileListContainer = styled.div`
    flex-grow: 1;
    overflow: auto;
    border-radius: 0px 20px 20px 0px;
    width: 100%;
    height: 100%;
`;
