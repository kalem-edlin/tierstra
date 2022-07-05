import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled';
import Tier from './Tier'
import List from './List'
import '../../tierlist.css';

const RowListContainer = styled.div`
    flex-grow: 1;
    width: 0px;
`;

const TierHandle = styled.div`
    border: 1px solid grey;
    border-radius: 5px 0px 0px 5px;
    background-color: ${(props)=>(props.isDragging ? '#E0FFFF' : '#ffffff')};
    min-width: ${(props)=>(props.tileLength)}px;
    min-height: 100%;
    &:hover { background-color: #E0FFFF; transition: 1s all ease;},
`

const RowContainer = styled.div`
    display: flex;
    border: 1px solid lightgrey;
    background-color: #ffffff;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
`

const Row = (props) => {
    return (
        <Draggable draggableId={props.row.id} index={props.index} type={"row"}>
            {(provided, snapshot) => (
                <RowContainer 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}
                >
                    <TierHandle 
                        tileLength={props.tileLength}
                        isDragging={snapshot.isDragging}
                        // drag handle props provided to make this box (small part of the row) the drag grab location
                        {...provided.dragHandleProps} 
                        
                    >
                        <Tier variant="h5"> {props.row.title} </Tier>
                    </TierHandle>
                    <RowListContainer>
                        <List key={props.row.id} listId={props.row.id} tiles={props.tiles} tileLength={props.tileLength} dragging={props.dragging} />
                    </RowListContainer>
                </RowContainer>
            )}
        </Draggable>
    )
}

export default Row