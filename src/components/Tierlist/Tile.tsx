import { TileProps } from 'prop-types'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Content from './Content'


const getOnDeleteStyle = (style: any, snapshot: any) => {
    if ( !snapshot.isDropAnimating || snapshot.draggingOver !== "tile-delete") {
        return style
    }
    return {
        ...style,
        opacity: 0,
        transform: 'scale(0)',
        transition: 'all 1.5s',
    }
}

export const Tile = (props: TileProps) => {

    return (
        <Draggable
            draggableId={props.tile.id}
            index={props.index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                    style={getOnDeleteStyle(provided.draggableProps.style, snapshot)}>
                        <Content 
                            content={props.tile.content}
                            tileLength={props.tileLength}
                            crop={props.tile.crop}
                        />
                </div>
            )}
        </Draggable>
    )
}