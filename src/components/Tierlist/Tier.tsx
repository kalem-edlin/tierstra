import styled from '@emotion/styled'
import { Paper, Typography } from '@mui/material'
import { TierProps } from 'prop-types'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import List from './List'


const RowListContainer = styled.div`
    flex-grow: 1;
    width: 0px;
`

const TierHandle = styled.div<any>`
    border: 1px solid grey;
    border-radius: 5px 0px 0px 5px;
    min-width: ${(props)=>(props.tileLength)}px;
    min-height: 100%;
    background-color: #ffffff;
    &:hover { 
        background-color: #E0FFFF; 
        transition: 1s all ease;
    }
`

const RowContainer = styled.div`
    display: flex;
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
`

const Tier = (props: TierProps) => {
    const tierId = props.tier.id
    const tiles = props.tier.tileIds.map(
        (tileId: string) => props.data.tiles[tileId]
    )

    return (
        <Draggable
            draggableId={tierId}
            index={props.index} >
            {(provided) => (
                <RowContainer 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}>
                    <TierHandle 
                        tileLength={props.tileLength}
                        // drag handle props provided to make this box (small part of the row) the drag grab location
                        {...provided.dragHandleProps}>
                        <Paper sx={{ 
                            justifyContent: 'center', 
                            bgcolor: 'transparent',
                            color: 'black',
                            alignItems: 'center', 
                            display:'flex', 
                            width: 1, 
                            height: 1
                        }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.tier.title}
                            </Typography>
                        </Paper>
                    </TierHandle>
                    <RowListContainer>
                        <List
                            key={tierId}
                            {...props}
                            listId={tierId}
                            tiles={tiles} />
                    </RowListContainer>
                </RowContainer>
            )}
        </Draggable>
    )
}

export default Tier
