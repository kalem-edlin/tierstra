import React, { useState } from 'react'
import { Paper } from '@mui/material'
import List from './List'
import AddTileModal from './Modals/AddTile'
import DragActions from './Actions/DragActions'
import PaletteActions from './Actions/PaletteActions'


const Palette = (props) => {
    const [displayAddModal, setDisplayAddModal] = useState(false)
    
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
                    key={props.listId} 
                    listId={props.listId} 
                    tiles={props.tiles} 
                    tileLength={props.tileLength} 
                    dragging={props.dragging}/>
            </Paper>

            {/* The following have conditional displays */}
            <DragActions 
                tileLength={props.tileLength}
                dragging={props.dragging} />
            {props.dragging === null &&
                <PaletteActions 
                    onAddClick={()=>{setDisplayAddModal(true)}}
                    onShuffleClick={props.shuffleTiles}
                    onResetClick={props.resetTiles}
                    tileLength={props.tileLength} />
            }
            <AddTileModal 
                //should this AddTileModal be implemented here? Or further towards truth source (canvas?)
                open={displayAddModal}
                close={()=>{setDisplayAddModal(false)}}
                addTile={props.addTile}
            />
        </React.Fragment>
           
    )
}

export default Palette
