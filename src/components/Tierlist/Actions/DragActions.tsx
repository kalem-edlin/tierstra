import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { Droppable } from 'react-beautiful-dnd'
import { 
    ActionsProps, 
    HoverSection, 
    BORDER_RADIUS_CONSTANT
} from './Shared'

interface DragActionsProps extends ActionsProps  {
    dragging: any;
}


const DeleteStyledIcon = styled(DeleteIcon)<any>`
    color: white;
    width: 30%;
    height: 30%;
`

// Component will leave a disabled droppable area to and 
// will not be disabled until mouse hovers the dropsection
const DragActions = (props: DragActionsProps) => {
    const [dropDisabled, setDropDisabled] = useState(true)

    useEffect(() => {
        console.log(dropDisabled)
    }, [dropDisabled])
    
    useEffect(() => {
        console.log(props.dragging)
    }, [props.dragging])
    
    

    return (
        <React.Fragment>
            {props.dragging !== null && props.dragging.type === 'tile' &&
                <HoverSection 
                    height={props.tileLength+BORDER_RADIUS_CONSTANT}
                    color='#BE7B7B'
                    center={true}
                    onMouseEnter={() => setDropDisabled(false)}
                    onMouseLeave={() => setDropDisabled(true)}
                    >
                    <DeleteStyledIcon />
                </HoverSection>
            }
            <Droppable
                droppableId="tile-delete"
                direction="horizontal"
                type="tile"
                isDropDisabled={dropDisabled}
            >
                {(provided) => (
                    <div 
                        style={{
                            height: props.tileLength+BORDER_RADIUS_CONSTANT,
                            backgroundColor: 'transparent',
                            zIndex: -2,
                            position: 'absolute',
                            width: '100%'
                        }}
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        >
                            {provided.placeholder}
                    </div>
                    
                )}
            </Droppable>
        </React.Fragment>
    )
}

export default DragActions