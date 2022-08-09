import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

export const BORDER_RADIUS_CONSTANT = 30

interface HoverSectionProps {
    height: number;
    color: string;
    center: boolean;
}

// A Section that will drop into position with its contents from behind the above element
export const HoverSection = styled(Box)<HoverSectionProps>`
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    z-index: -1; 
    position: absolute;
    overflow: hidden;
    transition: transform .5s ease-out;
    transition-delay: .3s;
    height: ${props => props.height}px;
    background-color: ${props => props.color};
    ${props => props.center && `align-items: center;`}
    border-radius: 0px 0px ${BORDER_RADIUS_CONSTANT}px ${BORDER_RADIUS_CONSTANT}px;
    transform: translate(0, -${props => props.height-BORDER_RADIUS_CONSTANT}px);
    &:hover {
        transform: translate(0, 0);
    }
`