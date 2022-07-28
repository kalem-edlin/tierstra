import React, { ReactElement } from 'react'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import { 
    ActionsProps, 
    HoverSection, 
    BORDER_RADIUS_CONSTANT
} from './Shared'

interface PaletteActionsProps extends ActionsProps {
    onAddClick: () => void;
    onShuffleClick: () => void;
    onResetClick: () => void;
}

interface ActionButtonProps {
    height: number;
    icon: ReactElement;
    onClick: () => void;
    children: any;
}

const ActionButtonWrapper = styled(Button)<ActionButtonProps>`
    width: ${1/3};
    height: ${(props) => (props.height-BORDER_RADIUS_CONSTANT)}px; 
    color: white; 
    background-color: gray;
    border: 1px solid gray;
    &:hover {
        background-color: gray;
    }
`

const ActionButton = (props: ActionButtonProps) => {
    return (
        <ActionButtonWrapper 
            variant="contained" 
            fullWidth
            startIcon={props.icon}
            {...props}>
            {props.children}
        </ActionButtonWrapper>
    )
}

const PaletteActions = (props: PaletteActionsProps) => {
    const wrapperHeight = props.tileLength - BORDER_RADIUS_CONSTANT

    return (
        <React.Fragment>
            <HoverSection height={wrapperHeight} color="gray" center={false}>
                <ActionButton 
                    height={wrapperHeight}
                    icon={<AddIcon/>}
                    onClick={props.onAddClick}>
                    Add Tile
                </ActionButton>
                <ActionButton 
                    height={wrapperHeight}
                    icon={<ShuffleIcon/>}
                    onClick={props.onShuffleClick}>
                    Shuffle Tiles
                </ActionButton>
                <ActionButton 
                    height={wrapperHeight}
                    icon={<ReplayIcon/>}
                    onClick={props.onResetClick}>
                    Reset List
                </ActionButton>
            </HoverSection>
        </React.Fragment>
    )
}

export default PaletteActions



