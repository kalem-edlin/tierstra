import { CropperProps } from 'prop-types';
import React, { useState } from 'react';
import Cropper from "react-easy-crop";

const PanZoomCropper = (props: CropperProps) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    return (
       <Cropper
            image={props.imageLink}
            aspect={props.cropAreaAspect}
            crop={crop}
            cropSize={{
                width: props.cropAreaLength, 
                height: props.cropAreaLength/props.cropAreaAspect
            }}
            zoom={zoom}
            minZoom={0.5}
            maxZoom={5}
            restrictPosition={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropAreaChange={(_, croppedAreaPixels) => {
                props.setCrop(croppedAreaPixels)
            }}
        />
    )
}

export default PanZoomCropper