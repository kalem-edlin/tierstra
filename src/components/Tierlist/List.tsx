import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ListProps } from 'prop-types';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useResizeDetector } from 'react-resize-detector';
import { Tile } from './Tile';

const DropZone = styled(Box)<{minWidth: number}>`
    min-width: ${props => props.minWidth}px;
    height:  100%;
    display: flex;
`

const ScrollBuffer = styled(Box)<{tileLength: number}>`
    height: ${props => props.tileLength}px;
`

// ISSUE006
const ScrollContainer = styled(Box)`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
`

const Wrapper = styled(Box)<{isDraggingOver: boolean}>`
    background-color: ${props => props.isDraggingOver ? "#E0FFFF" : "white"};
    display: flex;
    flex-direction: row;
    height: 100%;
    transition: 1s all ease;
`

const ListContainer = styled(Box)<{tileLength: number}>`
    height: ${props => props.tileLength}px;
    width: 100%;
`

// The scroll container layering is intricate here but is required for good functionality
const List = (props: ListProps) => {
    const { width, ref } = useResizeDetector();

    return (
        <ListContainer {...props}>
            <Droppable droppableId={props.listId} direction="horizontal" type="tile">
                {(provided, snapshot) => (
                    <Wrapper 
                        isDraggingOver={snapshot.isDraggingOver} 
                        {...provided.droppableProps}
                        ref={ref}>
                        <ScrollContainer className="scroll-container">
                            <ScrollBuffer {...props}>
                                <DropZone ref={provided.innerRef} minWidth={width ?? 0}>
                                    {props.tiles.map((tile, index) => {
                                        return <Tile 
                                            key={tile.id}
                                            {...props} 
                                            tile={tile} 
                                            index={index} 
                                        />
                                    })}
                                    {provided.placeholder}
                                </DropZone>
                            </ScrollBuffer>
                        </ScrollContainer>
                    </Wrapper>
                )}
            </Droppable>
        </ListContainer>
    )
}

export default List
