import { Box, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { TierProps } from 'prop-types'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import List from './List'

// ISSUE007
const RowListContainer = styled(Box)`
    flex-grow: 1;
    width: 0px;
`

const TierHandle = styled(Paper)<{tileLength: number}>`
    min-width: ${(props)=>(props.tileLength)}px;
    border: 1px solid grey;
    border-radius: 5px 0px 0px 5px;
    background-color: white;
    color: black;
    &:hover { 
        background-color: #E0FFFF; 
        transition: 1s all ease;
    }
`

const RowContainer = styled(Box)`
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 5px;
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
                        className="centered"
                        tileLength={props.tileLength}
                        {...provided.dragHandleProps} >
                        <Typography gutterBottom variant="h5">
                            {props.tier.title}
                        </Typography>
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
