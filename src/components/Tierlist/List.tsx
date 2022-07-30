import styled from '@emotion/styled';
import { ListProps } from 'prop-types';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useResizeDetector } from 'react-resize-detector';
import { Tile } from './Tile';

const DropZone = styled.div<any>`
    min-width: ${(props) => props.minWidth}px;
    height:  100%;
    display: flex;
`

const ScrollBuffer = styled.div<any>`
    height: ${(props) => props.tileLength}px;
`

const ScrollContainer = styled.div<any>`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    transition: 1s all ease;
`

const Wrapper = styled.div<any>`
    background-color: ${(props) => props.isDraggingOver ? "#E0FFFF" : "#ffffff"};
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border: 1px solid transparent;
    transition: 1s all ease;
`

const ListContainer = styled.div<any>`
    background-color: #ffffff;
    width: 100%;
    height: ${(props) => props.tileLength}px;
`

const List = (props: ListProps) => {
    const { width, ref } = useResizeDetector();

    return (
        <ListContainer tileLength={props.tileLength}>
            <Droppable droppableId={props.listId} direction="horizontal" type="tile">
                {(provided, snapshot) => (
                    <Wrapper 
                        isDraggingOver={snapshot.isDraggingOver} 
                        {...provided.droppableProps}
                        ref={ref}>
                        <ScrollContainer className={'scroll-container'}>
                            <ScrollBuffer tileLength={props.tileLength}>
                                <DropZone ref={provided.innerRef} minWidth={width}>
                                    {props.tiles.map((tile, index) => {
                                        console.log(props.listId, "id", tile.id)
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
