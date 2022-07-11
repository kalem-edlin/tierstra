import React from 'react'
import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd'
import '../../tierlist.css';

const Wrapper = styled.div`
    width: ${(props: any) => props.tileLength}px;
    height: ${(props: any) => props.tileLength}px;
`

type TileProps = {
    key: any,
    tile: any,
    index: any,
    tileLength: any,
}

const Tile = (props: TileProps) => {
    return (
        <Draggable
            draggableId={props.tile.id}
            index={props.index}
            // type={"tile"}
        >
            {provided => (
                <Wrapper
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}>
                    <img 
                        src={require('../../assets'+props.tile.content)} 
                        width={props.tileLength-5+"px"} 
                        height={props.tileLength-5+"px"} 
                        alt={props.tile.alt} 
                    />
                </Wrapper>
            )}
        </Draggable>
    )
}

export default Tile
