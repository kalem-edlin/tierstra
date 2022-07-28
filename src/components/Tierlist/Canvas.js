import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { DragDropContext } from 'react-beautiful-dnd'
import { loadTierlist } from '../../helpers/Import'
import Mutate from '../../helpers/Mutate'
import Tierlist from './Tierlist'
import Palette from './Palette'

const tileLengthConstant = 250

const TierCanvas = React.forwardRef((props, screenshotRef) => {
    const [data, setData] = useState(loadTierlist())
    const [tileLength] = useState(tileLengthConstant)
    const [dragging, setDragging] = useState(null)

    // When a payload is sent from parent component, apply it to data if it is not null
    useEffect(() => {
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
    }, [data, tileLength])

    // Will persist the data changes IF there is a destination for any type of drag
    const handleDragEnd = (result) => {
        setDragging(null)
        const { destination, source, type, draggableId} = result
        if ( !destination ) { 
            return 
        }
        if ( destination.droppableId === "tile-delete" ) {
            setData(Mutate.deleteTile(data, source))
            return 
        }
        const sameDestination = destination.droppableId === source.droppableId
        if ( sameDestination && destination.index === source.index) { 
            return 
        }
        if ( type === "tier" ) {
            setData(Mutate.handleRowChange(data, source, destination, draggableId))
        } else {
            setData(Mutate.handleTileChange(data, source, destination, draggableId, sameDestination))
        }
        
    }

    const handleDragStart = (result) => {
        setDragging(result)
    }

    const handleAddTile = (tile) => {
        setData(Mutate.addTile(data, tile))
    }

    const handleShufflePalette = () => {
        setData(Mutate.shufflePalette(data))
    }

    const handleResetToPalette = () => {
        setData(Mutate.resetToPalette(data))
    }

    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}>
            <Grid
                minWidth={300}
                sx={{ m: 8, position: 'relative' }}
                alignItems={'center'}
                justifyContent={'center'} >
                
                <Tierlist ref={screenshotRef} data={data} tileLength={tileLength} dragging={dragging}/>
                    
                <Palette
                    listId={'palette'}
                    tiles={data.rows['palette'].tileIds.map(tileId => data.tiles[tileId])}
                    tileLength={tileLength}
                    dragging={dragging}
                    addTile={handleAddTile}
                    shuffleTiles={handleShufflePalette}
                    resetTiles={handleResetToPalette}
                    />
            </Grid>
            
        </DragDropContext>
    )
})

export default TierCanvas
