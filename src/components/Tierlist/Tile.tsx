import React, { useState, useEffect} from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

type TileProps = {
    key: any,
    tile: any,
    index: any,
    tileLength: any,
}

const getOnDeleteStyle = (style: any, snapshot: any) => {
    if ( !snapshot.isDropAnimating || snapshot.draggingOver !== "tile-delete") {
        return style
    }

    return {
        ...style,
        opacity: 0,
        transform: `scale(0)`,
        transition: `all 1.5s`,
    }
}

export const Tile = (props: TileProps) => {
    const cropData: any = {
        x: props.tile.x,
        y: props.tile.y,
        width: props.tile.width,
        height: props.tile.height,
    }

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
                        <ImageDisplay 
                            content={props.tile.content}
                            tileLength={props.tileLength}
                            cropData={cropData}
                        />
                </div>
            )}
        </Draggable>
    )
}

const Wrapper = styled(Box)<any>`
    overflow: hidden;
    height: 100%;
    width: ${(props) => (props.tileLength)}px;
`

type ImageDisplayProps = {
    content: any,
    tileLength: any,
    cropData: any,
}

export const ImageDisplay = (props: ImageDisplayProps) => {
    const [scale, setScale] = useState(1)

    useEffect(() => {
        if (props.cropData) {
            setScale(props.tileLength/props.cropData.height)
        }
    }, [props.cropData])

    return (
        <Wrapper tileLength={props.tileLength}>
            <div style={{
                transform: `
                    translate(
                        ${-props.cropData.x*scale}px, 
                        ${-props.cropData.y*scale}px
                    ) 
                    scale(${scale})
                `,
                transformOrigin: '0 0'
            }}>
                <img src={props.content} />
            </div>
        </Wrapper>
    )
}
