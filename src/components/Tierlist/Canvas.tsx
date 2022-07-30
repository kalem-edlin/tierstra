import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Tierlist, TileToAdd } from 'data-types'
import { TierlistCanvasProps } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DragDropContext, DragStart, DropResult } from 'react-beautiful-dnd'
import { loadTierlist } from '../../helpers/Import'
import Mutate from '../../helpers/Mutate'
import Palette from './Palette'
import TierlistFrame from './Tierlist'

const TILE_LENGTH_CONSTANT = 150

const StyledGrid = styled(Grid)`
    min-width: 300px;
    margin: 5%; 
    position: relative;
`

const TierlistCanvas = React.forwardRef((props: TierlistCanvasProps, screenshotRef) => {
    const [data, setData] = useState<Tierlist>(loadTierlist())
    const [tileLength] = useState<number>(TILE_LENGTH_CONSTANT)
    const [dragging, setDragging] = useState<string | null>(null)
    const { updateExports } = props
    const baseTierlistProps = {
        data: data,
        tileLength: tileLength,
        dragging: dragging,
    }

    // When a payload is sent from parent component, apply it to data if it is not null
    useEffect(() => {
        if ( props.payload !== null ) setData(props.payload)
    }, [props.payload])
    
    // On data change, will update session storage and the SSOT for exports and tilelength data for screenshot bounds calculations
    useEffect(() => {
        sessionStorage.setItem('tierlistData', JSON.stringify(data))
        updateExports(data, tileLength)
    }, [data, tileLength, updateExports])

    // Will persist the data changes IF there is a destination for any type of drag
    const handleDragEnd = (result: DropResult) => {
        setDragging(null)
        const newData = Mutate.handleDragEnd(data, result)
        if ( newData !== null ) {
            setData(newData)
        }
    }

    const handleDragStart = (result: DragStart) => {
        setDragging(result.type)
    }

    const handleAddTile = (tile: TileToAdd) => {
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
            <StyledGrid>
                <TierlistFrame 
                    ref={screenshotRef}
                    {...baseTierlistProps} />
                <Palette
                    {...baseTierlistProps}
                    addTile={handleAddTile}
                    shuffleTiles={handleShufflePalette}
                    resetTiles={handleResetToPalette} />
            </StyledGrid>
        </DragDropContext>
    )
})

export default TierlistCanvas
