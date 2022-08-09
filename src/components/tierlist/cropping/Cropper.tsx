import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { BaseCropProps } from 'prop-types';
import React, { useState } from 'react';
import { useAppConfig } from "../../../config";
import PanZoomCropper from "./options/PanZoom";
import SelectCropper from "./options/Select";

const CROP_AREA_ASPECT = 1 / 1 // changing this would mean:
// > providing an array of aspect options in cropper
// > scaling width and keeping height constant (TILE HEIGHT CONSTANT)
// > EG width = heightConstant * aspect ratio

const CROP_AREA_LENGTH = 600

const Wrapper = styled(Box)<{height: number}>`
    height: ${props => Boolean(props.height) ? props.height : CROP_AREA_LENGTH/CROP_AREA_ASPECT}px;
    top: 0px; 
    left: 0px; 
    position: relative; 
    background-color: gray; 
    color: white; 
    width: 600px; 
`

const Cropper = (props: BaseCropProps) => {
    const appConfig = useAppConfig()
    const [height, setHeight] = useState(CROP_AREA_LENGTH)
    const constants = {
        cropAreaLength: CROP_AREA_LENGTH,
        cropAreaAspect: CROP_AREA_ASPECT
    }

    const renderSwitch = (param: string) => {
        switch(param) {
            case "select":
                return <SelectCropper {...props} setHeight={setHeight} {...constants} />
            default:
                return <PanZoomCropper {...props} {...constants} />
        }
    }

    return (
        <Wrapper className="centered" height={height}> 
            {renderSwitch(appConfig.get('cropperType') as string)}
        </Wrapper>
    )
}

export default Cropper