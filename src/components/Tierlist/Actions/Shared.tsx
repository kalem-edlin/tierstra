import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

export interface ActionsProps {
    tileLength: number;
    display: boolean;
}

export const BORDER_RADIUS_CONSTANT = 30

interface HoverSectionProps {
    height: number;
    color: string;
    center: boolean;
}

export const HoverSection = styled(Box)<HoverSectionProps>`
    width: 100%;
    height: ${(props)=>(props.height)}px;
    background-color: ${(props)=>(props.color)};
    color: white;
    display: flex;
    justify-content: center;
    ${(props) => (props.center && `align-items: center;`)}
    border-radius: 0px 0px ${BORDER_RADIUS_CONSTANT}px ${BORDER_RADIUS_CONSTANT}px;
    z-index: -1;
    position: absolute;
    overflow: hidden;
    transform: translate(0, -${(props) => (props.height-BORDER_RADIUS_CONSTANT)}px);
    &:hover {
        transform: translate(0, 0);
    }
    transition: transform .5s ease-out;
    transition-delay: .3s;
`