import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Tierlist, TileToAdd } from 'data-types'
import { TierlistCanvasProps } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DragDropContext, DragStart, DropResult } from 'react-beautiful-dnd'
import { useAppConfig } from '../../config'
import { loadTierlist } from '../../utils/Import'
import Mutate from '../../utils/Mutate'
import Palette from './Palette'
import TierlistFrame from './Tierlist'



const StyledGrid = styled(Grid)`
    min-width: 300px;
    margin: 5%; 
    position: relative;
`

const TierlistCanvas = React.forwardRef((props: TierlistCanvasProps, screenshotRef) => {
    const appConfig = useAppConfig()
    const tileLength = appConfig.get('tileLength') as number
    const [data, setData] = useState<Tierlist>(loadTierlist())
    const [dragging, setDragging] = useState<string | null>(null)
    const { setExports } = props
    const baseTierlistProps = {
        data: data,
        dragging: dragging,
        tileLength: tileLength
    }

    // When a payload is sent from parent component, apply it to data if it is not null
    useEffect(() => {
        if ( props.payload !== null ) setData(props.payload)
    }, [props.payload])
    
    // On data change, will update session storage and the SSOT for exports and tilelength data for screenshot bounds calculations
    useEffect(() => {
        sessionStorage.setItem('tierlistData', JSON.stringify(data))
        setExports(data, tileLength)
    }, [data, setExports])

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
        // ISSUE014
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
