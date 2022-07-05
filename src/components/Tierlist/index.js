import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { loadTierlist } from '../../data/Import'
import { handleRowChange, handleTileChange } from '../../data/DragPersist'
import Palette from './Palette'
import styled from '@emotion/styled';
import Row from './Row'
import '../../tierlist.css';

const Wrapper = styled.div``;
const tileLengthConstant = 100


const TierCanvas = React.forwardRef((props, screenshotRef) => {
    const [data, setData] = useState(loadTierlist())
    const [tileLength] = useState(tileLengthConstant)
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
    }, [data, props, tileLength])

    // Console log when dragging for debugging
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
                        <Wrapper
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
                        </Wrapper>
                    )}
                </Droppable>
                <Palette listId={'palette'}  tiles={data.rows['palette'].tileIds.map(tileId => data.tiles[tileId])} tileLength={tileLength} dragging={dragging}/>
            </Grid>
        </DragDropContext>
    )
})

export default TierCanvas
