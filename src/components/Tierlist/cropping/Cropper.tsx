import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CropperProps } from 'prop-types';
import React, { useState } from 'react';
import Cropper from "react-easy-crop";

const CROP_AREA_ASPECT = 1 / 1 // changing this would mean:
// > providing an array of aspect options in cropper
// > scaling width and keeping height constant (TILE HEIGHT CONSTANT)
// > EG width = heightConstant * aspect ratio

const Wrapper = styled(Box)`
    height: ${600/CROP_AREA_ASPECT}px;
    top: 0px; 
    left: 0px; 
    position: relative; 
    background-color: white; 
    color: white; 
    width: 600px; 
`

const ZoomCropper = (props: CropperProps) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    return (
        <div>
            <Wrapper> 
                <Cropper
                    image={props.imageLink}
                    aspect={CROP_AREA_ASPECT}
                    crop={crop}
                    cropSize={{width: 600, height: 600/CROP_AREA_ASPECT}}
                    zoom={zoom}
                    minZoom={0.5}
                    maxZoom={5}
                    restrictPosition={false}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropAreaChange={(crop, croppedAreaPixels) => { // ISSUE001
                        props.setCrop(croppedAreaPixels)
                    }}
                    // Perhaps I can just do a ? conditional rendering of this cropper component and the other. Maybe they will share the same props!
                />
            </Wrapper>
        </div>
    )
}

export default ZoomCropper