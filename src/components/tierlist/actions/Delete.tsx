import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DeleteActionProps } from 'prop-types';
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { BORDER_RADIUS_CONSTANT, HoverSection } from './Shared';

const DeleteStyledIcon = styled(DeleteIcon)`
    color: white;
    width: 30%;
    height: 30%;
`

const DropZone = styled(Box)<{tileLength: number}>`
    height: ${props => props.tileLength+BORDER_RADIUS_CONSTANT}px;
    z-index: -2;
    position: absolute;
    width: 100%;
`

// Component will leave a disabled droppable area to and will not be disabled until mouse hovers the dropsection
const DeleteAction = (props: DeleteActionProps) => {
    const [dropDisabled, setDropDisabled] = useState(true)

    return (
        <React.Fragment>
            {props.dragging !== null && props.dragging === 'tile' &&
                <HoverSection 
                    height={props.tileLength+BORDER_RADIUS_CONSTANT}
                    color="#BE7B7B"
                    center={true}
                    onMouseEnter={() => setDropDisabled(false)}
                    onMouseLeave={() => setDropDisabled(true)}
                >
                    <DeleteStyledIcon />
                </HoverSection>
            }
            <Droppable
                droppableId="tile-delete" // ISSUE004
                direction="horizontal"
                type="tile"
                isDropDisabled={dropDisabled}
            >
                {(provided) => (
                    <DropZone 
                        {...props}
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                    >
                            {provided.placeholder}
                    </DropZone>
                    
                )}
            </Droppable>
        </React.Fragment>
    )
}

export default DeleteAction