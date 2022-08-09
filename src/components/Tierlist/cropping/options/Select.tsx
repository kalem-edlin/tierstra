import { CropperProps } from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactCrop, { centerCrop, Crop, makeAspectCrop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


interface SelectCropperProps extends CropperProps {
    setHeight: (crop: number) => void
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
  width: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: 'px',
        width: width*0.8,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

const SelectCropper = (props: SelectCropperProps) => {
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale, setScale] = useState<number>(1)
    const [imageWidth, setImageWidth] = useState<number>(0)

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        const image = new Image()
        image.src = props.imageLink
        const imageAspect = image.height / image.width
        const { width, height } = imageAspect > 1 
            ?   {width: props.cropAreaLength/imageAspect, height: props.cropAreaLength}
            :   {width: props.cropAreaLength, height: props.cropAreaLength*imageAspect}
        setImageWidth(width)
        props.setHeight(height)
        setScale(image.height/height)
        setCrop(centerAspectCrop(width, height, props.cropAreaAspect, width))
    }

    useEffect(() => {
        completedCrop &&
        props.setCrop({
            x: completedCrop.x*scale,
            y: completedCrop.y*scale,
            width: completedCrop.width*scale,
            height: completedCrop.height*scale
        })
    }, [completedCrop, props, scale])

  return (
    <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
        aspect={props.cropAreaAspect}
    >
        <img
            alt="Gotta see it to crop it lol"
            src={props.imageLink}
            onLoad={onImageLoad}
            width={imageWidth}
        />
    </ReactCrop>
  )
}

export default SelectCropper
