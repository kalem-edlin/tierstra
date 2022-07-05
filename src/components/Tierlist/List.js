import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from '@emotion/styled';
import { useResizeDetector } from 'react-resize-detector'
import Tile from './Tile'
import '../../tierlist.css'


const DropZone = styled.div`
    min-width: ${(props) => props.minWidth}px;
    height:  100%;
    display: flex;
`

const ScrollBuffer = styled.div`
    height: ${(props) => props.tileLength}px;
`

const ScrollContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    transition: 1s all ease;
`


const Wrapper = styled.div`
    background-color: ${(props) => props.isDraggingOver ? "#E0FFFF" : "#ffffff"};
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    border: 1px solid transparent;
    transition: 1s all ease;
`

const ListContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: ${(props) => props.tileLength}px;
`

const List = (props) => {
    const { width, ref } = useResizeDetector();

    return (
        <ListContainer tileLength={props.tileLength}>
            <Droppable droppableId={props.listId} direction="horizontal" type="tile">
                {(provided, snapshot) => (
                    <Wrapper 
                        isDraggingOver={snapshot.isDraggingOver} 
                        {...provided.droppableProps}
                        ref={ref}
                    >
                        <ScrollContainer className={'scroll-container'}>
                            <ScrollBuffer tileLength={props.tileLength}>
                                <DropZone ref={provided.innerRef} minWidth={width}>
                                    {props.tiles.map((tile, index) => (
                                        <Tile 
                                            key={tile.id} 
                                            tile={tile} 
                                            index={index} 
                                            tileLength={props.tileLength} 
                                        />
                                    ))}
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