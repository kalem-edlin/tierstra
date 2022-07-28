import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Row from './Row'
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Wrapper = styled(Paper)`
    background-color: transparent;
`

const Tierlist = React.forwardRef((props, screenshotRef) => {

    return (
        <Droppable
            droppableId="tierlist"
            direction="vertical"
            type="tier">
            {provided => (
                <Wrapper
                    elevation={6}
                    ref={provided.innerRef} 
                    {...provided.droppableProps}>
                    <div ref={screenshotRef /* move SS Ref up to action wrapper*/}>
                        {props.data.tierRowOrder && props.data.tierRowOrder.map((rowId, index) => {
                            const row = props.data.rows[rowId]
                            const tiles = row.tileIds.map(tileId => props.data.tiles[tileId])
                            return <Row
                                key={row.id}
                                rowId={row.id}
                                title={row.title}
                                tiles={tiles}
                                index={index}
                                tileLength={props.tileLength}
                                dragging={props.dragging}/>
                        })}
                        {provided.placeholder}
                    </div>
                </Wrapper>
            )}
        </Droppable>
    )
})

export default Tierlist

