import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid, Paper } from '@mui/material'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { loadTierlist } from '../data/Import'
import { handleRowChange, handleTileChange } from '../data/DragPersist'
import styled from '@emotion/styled';
import Dropper from './Dropper'

const tileLengthConstant = 100

const TierCanvas = React.forwardRef((props, screenshotRef) => {
    const [data, setData] = useState(loadTierlist())
    const [tileLength, setTileLength] = useState(tileLengthConstant)
    const [dragging, setDragging] = useState(null)

    // When a payload is sent from parent component, apply it to data if it is not null
    useEffect(() => {
        console.log("payload incomming")
        if ( props.payload !== null ) setData(props.payload)
    }, [props.payload])
    
    // On data change, will update session storage and the SSOT for exports and tilelength data for screenshot bounds calculations
    useEffect(() => {
        sessionStorage.setItem('tierlistData', JSON.stringify(data))
        props.setDataForExports({
            ...props.dataForExports,
            data: data,
            tileLength: tileLength
        })
    }, [data])

    useEffect(() => {
        if ( dragging ) {
            console.log("now dragging tile", dragging)
        } else {
            console.log("No longer dragging")
        }
    }, [dragging])
    

    // Will persist the data changes IF there is a destination for any type of drag
    const handleDragEnd = (result) => {
        setDragging(null)
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

    const handleDragStart= (result) => {
        setDragging(result)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
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
                                    return <Row key={row.id} row={row} tiles={tiles} index={index} tileLength={tileLength} dragging={dragging}/>
                                })}
                                {provided.placeholder}
                            </div>
                        </Box>
                    )}
                </Droppable>
                <Palette listId={'palette'}  tiles={data.rows['palette'].tileIds.map(tileId => data.tiles[tileId])} tileLength={tileLength} dragging={dragging}/>
                <Dropper tileLength={props.tileLength} dragging={dragging}/>
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
                    sx={{ border: '1px solid lightgrey', backgroundColor: "#ffffff", display: 'flex', flexDirection: 'row', width: 1, height: 1, borderRadius: '15px' }}
                >
                    <Box 
                        //drag handle props provided to make this box (small part of the row) the drag grab location
                        {...provided.dragHandleProps} 
                        sx={{ border: '1px solid grey', borderRadius: '15px 0px 0px 15px', backgroundColor: '#ffffff' , minWidth: props.tileLength, height: props.tileLength }}
                    >
                        <TextBox variant="h5"> {props.row.title} </TextBox>
                    </Box>
                    <RowTileListContainer>
                        <TileList key={props.row.id} listId={props.row.id} tiles={props.tiles} tileLength={props.tileLength} dragging={props.dragging} />
                    </RowTileListContainer>
                </Box>
            )}
        </Draggable>
    )
}

function Palette(props) {
    return (
        <Paper elevation={3} sx={{ mt: 6, border: '1px solid lightgrey', backgroundColor: '#ffffff', width: 1, height: 1, overflow: 'auto'}} >
            <TileList 
                key={props.listId} 
                listId={props.listId} 
                tiles={props.tiles} 
                tileLength={props.tileLength} 
                dragging={props.dragging}
            />
        </Paper>
    )
}

function TileList(props) {
    const [snapshotState, setSnapshotState] = useState()
    const [contentWidth, setContentWidth] = useState(props.tileLength * props.tiles.length)
    const [contentWidthExtended, setContentWidthExtended] = useState(false)
    
    // The useEffect functions will extend the scrollable container once to accomodate for one more tile if dragged over, will keep container tight once dragging complete
    useEffect(() => {
        if ( snapshotState && !contentWidthExtended ) {
            if ( snapshotState.isDraggingOver ) {
                setContentWidth(props.tileLength * props.tiles.length + props.tileLength)
                setContentWidthExtended(true)
            } 
        }
    }, [snapshotState])

    useEffect(() => {
        resetWidth()
    }, [props.dragging, props.tiles])

    const resetWidth = () => {
        setContentWidthExtended(false)
        setContentWidth(props.tileLength * props.tiles.length)
    }


    return (
        <Droppable droppableId={props.listId} direction="horizontal" type={"tile"}>
            {(provided, snapshot) => {
                // There is an (non-breaking) error produced by this where the TileList component attemps to rerender after setState before the droppable has finished rendering, will need to place the droppable outside of th TileList state environment
                setSnapshotState(snapshot)
                return <Box 
                    ref={provided.innerRef} 
                    {...provided.droppableProps} 
                    sx={{ 
                        height: props.tileLength, 
                        minWidth: 1,
                        width: contentWidth,
                        backgroundColor: snapshot.isDraggingOver ? "#E0FFFF" : "#ffffff",
                        transition: '1s all ease'
                    }}
                    
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative', overflowX: 'hidden', width: contentWidth, overflowY: 'hidden' }} >
                        {props.tiles.map((tile, index) => (
                            <Tile key={tile.id} tile={tile} index={index} tileLength={props.tileLength} />
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
                    sx={{ width: props.tileLength, height: props.tileLength }}
                >
                   <img src={require('../assets'+props.tile.content)} width={props.tileLength+"px"} height={props.tileLength+"px"} alt={props.tile.alt} />
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
    border-radius: 0px 15px 15px 0px;
    width: 100%;
    height: 100%;
`;
