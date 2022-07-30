import { Paper } from '@mui/material'
import { PaletteProps } from 'prop-types'
import React, { useState } from 'react'
import DragActions from './Actions/DragActions'
import PaletteActions from './Actions/PaletteActions'
import List from './List'
import AddTileModal from './Modals/AddTile'



const Palette = (props: PaletteProps) => {
    const [displayAddModal, setDisplayAddModal] = useState(false)
    const paletteId = "palette"

    const tiles = props.data.tiers[paletteId].tileIds.map(
        (tileId: String) => props.data.tiles[tileId]
    )
    
    return (
        <React.Fragment>
            <Paper 
                elevation={10}
                sx={{ 
                    borderRadius: '5px',
                    bgColor: 'white',
                    overflow: 'hidden',
                    mt: 6,
                }}>
                <List 
                    key={paletteId} 
                    {...props}
                    listId={paletteId}
                    tiles={tiles}/>
            </Paper>

            {/* The following have conditional displays */}
            <DragActions 
                {...props} />
            {(props.dragging === null || props.dragging === 'tier') &&
                <PaletteActions 
                    {...props}
                    onAddClick={()=>{setDisplayAddModal(true)}}/>
            }
            <AddTileModal 
                //should this AddTileModal be implemented here? Or further towards truth source (canvas?)
                {...props}
                open={displayAddModal}
                onClose={()=>{setDisplayAddModal(false)}}
            />
        </React.Fragment>
           
    )
}

export default Palette
