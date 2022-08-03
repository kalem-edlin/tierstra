import { Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PaletteProps } from 'prop-types'
import React, { useState } from 'react'
import DragActions from './actions/DragActions'
import PaletteActions from './actions/PaletteActions'
import List from './List'
import AddTileModal from './modals/AddTile'

const StyledPaper = styled(Paper)`
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
    margin-top: 60px;
`

const PALETTE_ID = 'palette'

const Palette = (props: PaletteProps) => {
    const [displayAddModal, setDisplayAddModal] = useState(false)

    const tiles = props.data.tiers[PALETTE_ID].tileIds.map(
        (tileId: String) => props.data.tiles[tileId]
    )
    
    return (
        <React.Fragment>
            <StyledPaper elevation={10}>
                <List 
                    key={PALETTE_ID} 
                    {...props}
                    listId={PALETTE_ID}
                    tiles={tiles}
                    // pass SHOULD display tile add button at end if config value true
                    />
            </StyledPaper>

            {/* The following have conditional displays */}
            <DragActions 
                {...props} />
            {(props.dragging === null || props.dragging === 'tier') &&
                <PaletteActions 
                    {...props}
                    onAddClick={()=>{setDisplayAddModal(true)}}/>
            }
            <AddTileModal                 
                {...props}
                open={displayAddModal}
                onClose={()=>{setDisplayAddModal(false)}}
            />
        </React.Fragment>
    )
}

export default Palette
